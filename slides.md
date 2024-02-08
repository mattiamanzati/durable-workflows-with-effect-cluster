---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: Mattia Manzati
drawings:
  persist: false
transition: slide-left
title: Durable Workflows with Effect Cluster
mdc: true
download: true
canvasWidth: 850
---


---
layout: fact
---

# THANK YOU ORGANIZERS!


---
layout: image-left
image: /image-me.jpg
---

# Ego Slide
<br/>

- Push buttons
- Type things
- Break stuff
- Wear sweatshirt as cape
- This picture is not stack safe

---

aa
<!--
We've all had to deal with something like this at least once in your lifetime.
Sure, the domain of your problem may change a little, but we all had to at least once.

We first attempt to save our order into the DB.
Then we tell the warehouse to reserve the stock for the products in the order.
Once we've done that, we process the payment through our payment gateway.
And finally, we try and send a confirmation email to the user. 

There is a lot going on in here.

The real problem here is that we have a complex workflow that may branch in different ways we need to manage.
And there may be some failures along the way.

Sure the happy path is pretty clear, but what happens if something fails?
Sure effect is of great help with this, and as long correctly define each building block, the effect datatype let the possible errors pass through so we can handle them.

How to handle them?

Ok, let's say we start very simple, and we just bounce back the error to the user into some fancy UI.

What happens if the workflows succefully registers the order, reserves the stock, process the payment and than we fail to send the confirmation email to the user? The user will indeed see a fancy error page saying "Oops, we failed to send you an email!", but what will happen to the just received order? Will it be processed anyway? Will it be clear to the purchasing user that he does not need to do anything because the order has been received anyway?

Maybe most of the errors will take care of themselves just with time right? So why not just try again?

Sure, effect is great because inside its computation primitive retries are already a built in concept, so maybe what we can do upon an error is simply attempt to perform again the entire workflow right?
We can simply toss in a retry policy over the entire workflow and that's it.

But it has its problems. Back to our example, let's say that on the first run we succefully saved the order into the DB, we reserved the stock and than the payment failed. And that's very common when using payment gateway, it may not respond, it may time out, etc...

What do we expect to happen when we retry again the whole workflow?

Will it be written again into the database and came up with the same order twice? Will the warehouse reserve twice the amount of the products we need?

We cannot just retry everything and call it a day.

And we can now see that indeed we have that branching logic in case something goes wrong.
In any business process when we have an error we need to handle it in some meaningful way, providing just the error or retrying is not enough.


And all business process end up looking exactly the one I described before, even more complicated than that, and no matter how you write your code, using different methods or a single long procedural code, they all have to perform everything and work inside the request, because it's all in process. There are various steps and all need to be handled if this fails, I need to ensure to do that, and all of that has to work and be executed.


The basic idea is that maybe I want to break this entire business process that is running inside a single process top to bottom into many different systems, each one dealing with its own failures.

Ultimately we just want to split each one of those into its own system that will deal itself with its failures. Going from everything running into a single process, into maybe multiple ones.



Defining an Activity:

The first thing we want to do is to define an Activity.
What is an activity? An activity is a effect that gets executed inside a workflow.
It can do whatever you want, you can perform things on a database, you can make http calls, whatever you want.
An activity is identified with a string that needs to be unique inside the execution of your workflow. 
In order to know how to persist the execution result, an activity takes in both the schema of the failure and the success type it can results into. Only string defects are supported at the moment.
Finally you have to provide the effect to be run as body of the activity.
That effect will be retried by default, so it needs to be idempotent.

Activities can be interrupted either if we request to kill the entire workflow, or just to perform a graceful restart of the WorkflowEngine.
In case of a graceful restart of the workflow engine, you can detect that by using WorkflowContext.isGracefulShutdown

We can see that an activity is just a regular Effect, that requires in its env a WorkflowContext.

Defining Workflow:

A workflow is a coordinator of multiple activities that has guaranteed durable execution, and have some contrains.
In order to allow workflows to be executed for days across potential server restarts, they need to be coded in a way the only perform deterministic work.
What does it means to be deterministic? 
It basically means that whatever the state of the system you are into, the output should be always the same and predictable.
Accessing time, reading from the filesystem or a database, and making an http call is not deterministic by default, as they completely depend on the state of the system or the execution.

Does that mean that you cannot perform non-deterministic work? No, that just needs to be wrapped inside an activity.

The determinism is what allows workflows to be durable. 
Upon server restarts, your workflow code will be executed again, and since all of the activities inside of the workflow are deterministic, we can guarantee that by replaying the execution we'll reach the same state we were in before the server stopped. 

This is the general representation of how we define a workflow.

We use a TaggedRequest class to represent the request of starting the workflow

Running a workflow:

Ok, now we created a workflow. How do we run it?
We need to spawn up a WorkflowEngine.
The WorkflowEngine is the working unit that is responsible of keep track of all the workflows being executed, and provides to each workflow the durable storage it needs to persist its state changes.

The workflow engine is also the entry point were you can invoke the start of any workflow you want.
You can either start a new execution of a workflow without caring for the result, or start it and wait for the result to came back.

Idempotency:

We said before that determinism is very important, and it's the determinism that allows workflows to be written such as some kind of failures or timeouts does not exists.

Code with side effects, must be run inside an activity, and that is because when replaying the workflow, the engine will use the rusult of previous run of the activities instead of running them again. 

But unfortunately the Workflowengine does not have any inside about what our activity is doing.
Once the workflow engine starts the activity, it becames a black box for it until the result comes back.

That means if that your activity starts the execution, and for some reason the server crashes while performing the activity, upon restart, the activity will be started again by the workflow as it were never started before.

Back to our example, what happens is that if the activity is trying to charge the credit card calling an external http API, but meanwhile the server goes down, upon restart we will charge again the credit card, right?

While workflows are required to be deterministic, activities are instead required to be idempotent.

What does idempotent mean?

Idempotent means that multiple invocation of an effect should result in state changes only upon the first invocation, subsequent one should not change the state of the system.

Let's say that we have a database with a orders table, and the primary key is an autoincrement.

Is performing an insert idempotent? No, because calling multiple times the query will result in multiple duplicated record in the same database.

Is performing a delete by primary key idempotent? Yes but no, yes because trying to delete an already deleted record will not result into any system change, but I need to say no because some other user may have inserted another record again in the database while we performed the delete the second time.

A common practice to avoid that is using unique keys for each request, in order to detect duplicated requests.

Fixing workflows:

We said before that usually workflows have activities that are eventually retried until they either succeed or timeout with a failure.

But what happens if an activity is failing due to a bug in our code? Are we doomed to fail it forever?

Thanks to the activity definition being idempotent, we can do an update of the activity definition without any worries.

We can stop the workflow engine, update the activity definition, and then spin up the workflow engine again.

So for activities is really easy.

What about fixing workflow code instead?

That is a little more trickier, but not so much.

Versioning workflows:

As we said before, workflow definition code must be deterministic.





Yield inside a workflow.
Consider an AttemptFailedEvent that yields execution.
Consider adding an Activity Heartbeat.
Consider adding a durable Sleep
Add retryWhileError((error) => boolean)

-->


import{c as b,p as sn}from"./constant-b644328d-6af51708.js";import{c9 as en,ca as C,cb as j,cc as rn,cd as g,bd as cn,ce as H,cf as Z,cg as un,ch as o,ci as an,cj as ln,ck as on}from"./index-e3f4b627.js";function tn(c){return c.innerRadius}function fn(c){return c.outerRadius}function gn(c){return c.startAngle}function yn(c){return c.endAngle}function dn(c){return c&&c.padAngle}function mn(c,x,D,q,h,v,k,r){var s=D-c,n=q-x,d=k-h,i=r-v,u=i*s-d*n;if(!(u*u<g))return u=(d*(x-v)-i*(c-h))/u,[c+u*s,x+u*n]}function N(c,x,D,q,h,v,k){var r=c-D,s=x-q,n=(k?v:-v)/H(r*r+s*s),d=n*s,i=-n*r,u=c+d,t=x+i,f=D+d,E=q+i,l=(u+f)/2,I=(t+E)/2,m=f-u,y=E-t,A=m*m+y*y,O=h-v,P=u*E-f*t,S=(y<0?-1:1)*H(on(0,O*O*A-P*P)),$=(P*y-m*S)/A,p=(-P*m-y*S)/A,R=(P*y+m*S)/A,T=(-P*m+y*S)/A,e=$-l,a=p-I,z=R-l,B=T-I;return e*e+a*a>z*z+B*B&&($=R,p=T),{cx:$,cy:p,x01:-d,y01:-i,x11:$*(h/O-1),y11:p*(h/O-1)}}function hn(){var c=tn,x=fn,D=b(0),q=null,h=gn,v=yn,k=dn,r=null;function s(){var n,d,i=+c.apply(this,arguments),u=+x.apply(this,arguments),t=h.apply(this,arguments)-rn,f=v.apply(this,arguments)-rn,E=un(f-t),l=f>t;if(r||(r=n=sn()),u<i&&(d=u,u=i,i=d),!(u>g))r.moveTo(0,0);else if(E>cn-g)r.moveTo(u*C(t),u*j(t)),r.arc(0,0,u,t,f,!l),i>g&&(r.moveTo(i*C(f),i*j(f)),r.arc(0,0,i,f,t,l));else{var I=t,m=f,y=t,A=f,O=E,P=E,S=k.apply(this,arguments)/2,$=S>g&&(q?+q.apply(this,arguments):H(i*i+u*u)),p=Z(un(u-i)/2,+D.apply(this,arguments)),R=p,T=p,e,a;if($>g){var z=an($/i*j(S)),B=an($/u*j(S));(O-=z*2)>g?(z*=l?1:-1,y+=z,A-=z):(O=0,y=A=(t+f)/2),(P-=B*2)>g?(B*=l?1:-1,I+=B,m-=B):(P=0,I=m=(t+f)/2)}var F=u*C(I),G=u*j(I),J=i*C(A),K=i*j(A);if(p>g){var L=u*C(m),M=u*j(m),Q=i*C(y),U=i*j(y),w;if(E<en&&(w=mn(F,G,Q,U,L,M,J,K))){var V=F-w[0],W=G-w[1],X=L-w[0],Y=M-w[1],_=1/j(ln((V*X+W*Y)/(H(V*V+W*W)*H(X*X+Y*Y)))/2),nn=H(w[0]*w[0]+w[1]*w[1]);R=Z(p,(i-nn)/(_-1)),T=Z(p,(u-nn)/(_+1))}}P>g?T>g?(e=N(Q,U,F,G,u,T,l),a=N(L,M,J,K,u,T,l),r.moveTo(e.cx+e.x01,e.cy+e.y01),T<p?r.arc(e.cx,e.cy,T,o(e.y01,e.x01),o(a.y01,a.x01),!l):(r.arc(e.cx,e.cy,T,o(e.y01,e.x01),o(e.y11,e.x11),!l),r.arc(0,0,u,o(e.cy+e.y11,e.cx+e.x11),o(a.cy+a.y11,a.cx+a.x11),!l),r.arc(a.cx,a.cy,T,o(a.y11,a.x11),o(a.y01,a.x01),!l))):(r.moveTo(F,G),r.arc(0,0,u,I,m,!l)):r.moveTo(F,G),!(i>g)||!(O>g)?r.lineTo(J,K):R>g?(e=N(J,K,L,M,i,-R,l),a=N(F,G,Q,U,i,-R,l),r.lineTo(e.cx+e.x01,e.cy+e.y01),R<p?r.arc(e.cx,e.cy,R,o(e.y01,e.x01),o(a.y01,a.x01),!l):(r.arc(e.cx,e.cy,R,o(e.y01,e.x01),o(e.y11,e.x11),!l),r.arc(0,0,i,o(e.cy+e.y11,e.cx+e.x11),o(a.cy+a.y11,a.cx+a.x11),l),r.arc(a.cx,a.cy,R,o(a.y11,a.x11),o(a.y01,a.x01),!l))):r.arc(0,0,i,A,y,l)}if(r.closePath(),n)return r=null,n+""||null}return s.centroid=function(){var n=(+c.apply(this,arguments)+ +x.apply(this,arguments))/2,d=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-en/2;return[C(d)*n,j(d)*n]},s.innerRadius=function(n){return arguments.length?(c=typeof n=="function"?n:b(+n),s):c},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:b(+n),s):x},s.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:b(+n),s):D},s.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:b(+n),s):q},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:b(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:b(+n),s):v},s.padAngle=function(n){return arguments.length?(k=typeof n=="function"?n:b(+n),s):k},s.context=function(n){return arguments.length?(r=n??null,s):r},s}export{hn as d};

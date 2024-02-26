import{_ as F,a as H,b as P,c as R,d as T,e as A,f as j,g as G,h as I,i as J}from"./arrow-up-right-COQwTSHv.js";import{d as $,v as D,aA as Q,aB as Y,o as p,e as v,aC as W,n as M,g as n,_ as B,q as X,O as Z,s,aD as c,aE as i,f as a,l as e,$ as l,aF as d,m as f,aG as x,h as nn,aH as k,aI as en,F as tn,aJ as on,aK as sn,aL as an,aM as ln,aN as m,aO as g,aP as h,aQ as rn}from"./index-Be9o6lQk.js";const cn=$({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(y){const _=y,b=D(null),r=_.initial??{x:0,y:0},w=_.storageKey?Q(_.storageKey,r):D(r),{style:u}=Y(b,{initialValue:w});return(t,C)=>(p(),v("div",{ref_key:"el",ref:b,class:"fixed",style:M(n(u))},[W(t.$slots,"default")],4))}}),un=B(cn,[["__file","/Users/mattiamanzati/Desktop/durable-workflows-with-effect-cluster/node_modules/.pnpm/@slidev+client@0.47.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.4/node_modules/@slidev/client/internals/Draggable.vue"]]),dn=a("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[a("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),_n=["onClick"],pn=$({__name:"DrawingControls",setup(y){function _(){h.undo()}function b(){h.redo()}function r(u){d.value=u,c.value=!0}function w(u){k.color=u,c.value=!0}return(u,t)=>{const C=rn,S=F,z=H,L=P,O=R,U=T,V=A,E=j,K=G,N=I,q=J;return p(),X(un,{class:s(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200",n(c)?"":n(i)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),dark:"border border-gray-400 border-opacity-10","storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:Z(()=>[a("button",{class:s(["slidev-icon-btn",{shallow:n(d)!=="stylus"}]),onClick:t[0]||(t[0]=o=>r("stylus"))},[e(l,{text:"Draw with stylus"}),e(C)],2),a("button",{class:s(["slidev-icon-btn",{shallow:n(d)!=="line"}]),onClick:t[1]||(t[1]=o=>r("line"))},[e(l,{text:"Draw a line"}),dn],2),a("button",{class:s(["slidev-icon-btn",{shallow:n(d)!=="arrow"}]),onClick:t[2]||(t[2]=o=>r("arrow"))},[e(l,{text:"Draw an arrow"}),e(S)],2),a("button",{class:s(["slidev-icon-btn",{shallow:n(d)!=="ellipse"}]),onClick:t[3]||(t[3]=o=>r("ellipse"))},[e(l,{text:"Draw an ellipse"}),e(z)],2),a("button",{class:s(["slidev-icon-btn",{shallow:n(d)!=="rectangle"}]),onClick:t[4]||(t[4]=o=>r("rectangle"))},[e(l,{text:"Draw a rectangle"}),e(L)],2),f(" TODO: not sure why it's not working! "),f(` <button class="slidev-icon-btn" :class="{ shallow: drawingMode != 'eraseLine' }" @click="setDrawingMode('eraseLine')">
      <HiddenText text="Erase" />
      <carbon:erase />
    </button> `),e(x),(p(!0),v(tn,null,nn(n(en),o=>(p(),v("button",{key:o,class:s(["slidev-icon-btn",n(k).color===o?"active":"shallow"]),onClick:bn=>w(o)},[e(l,{text:"Set brush color"}),a("div",{class:s(["w-6 h-6 transition-all transform border border-gray-400/50",n(k).color!==o?"rounded-1/2 scale-85":"rounded-md"]),style:M(n(c)?{background:o}:{borderColor:o})},null,6)],10,_n))),128)),e(x),a("button",{class:s(["slidev-icon-btn",{disabled:!n(on)}]),onClick:t[5]||(t[5]=o=>_())},[e(l,{text:"Undo"}),e(O)],2),a("button",{class:s(["slidev-icon-btn",{disabled:!n(sn)}]),onClick:t[6]||(t[6]=o=>b())},[e(l,{text:"Redo"}),e(U)],2),a("button",{class:s(["slidev-icon-btn",{disabled:!n(an)}]),onClick:t[7]||(t[7]=o=>n(ln)())},[e(l,{text:"Delete"}),e(V)],2),e(x),a("button",{class:s(["slidev-icon-btn",{shallow:!n(i)}]),onClick:t[8]||(t[8]=o=>i.value=!n(i))},[e(l,{text:n(i)?"Unpin drawing":"Pin drawing"},null,8,["text"]),m(e(E,{class:"transform -rotate-45"},null,512),[[g,n(i)]]),m(e(K,null,null,512),[[g,!n(i)]])],2),n(c)?(p(),v("button",{key:0,class:s(["slidev-icon-btn",{shallow:!n(c)}]),onClick:t[9]||(t[9]=o=>c.value=!n(c))},[e(l,{text:n(i)?"Drawing pinned":"Drawing unpinned"},null,8,["text"]),m(e(N,null,null,512),[[g,n(i)]]),m(e(q,null,null,512),[[g,!n(i)]])],2)):f("v-if",!0)]),_:1},8,["class"])}}}),vn=B(pn,[["__file","/Users/mattiamanzati/Desktop/durable-workflows-with-effect-cluster/node_modules/.pnpm/@slidev+client@0.47.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.4/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{vn as default};

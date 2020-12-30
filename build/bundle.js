var app=function(){"use strict";function n(){}function t(n){return n()}function e(){return Object.create(null)}function a(n){n.forEach(t)}function r(n){return"function"==typeof n}function o(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function s(n,t){n.appendChild(t)}function i(n,t,e){n.insertBefore(t,e||null)}function l(n){n.parentNode.removeChild(n)}function c(n){return document.createElement(n)}function u(n){return document.createTextNode(n)}function d(){return u(" ")}function f(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}let p;function m(n){p=n}const h=[],g=[],$=[],b=[],v=Promise.resolve();let y=!1;function x(n){$.push(n)}let w=!1;const _=new Set;function k(){if(!w){w=!0;do{for(let n=0;n<h.length;n+=1){const t=h[n];m(t),S(t.$$)}for(m(null),h.length=0;g.length;)g.pop()();for(let n=0;n<$.length;n+=1){const t=$[n];_.has(t)||(_.add(t),t())}$.length=0}while(h.length);for(;b.length;)b.pop()();y=!1,w=!1,_.clear()}}function S(n){if(null!==n.fragment){n.update(),a(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(x)}}const T=new Set;function A(n,t){n&&n.i&&(T.delete(n),n.i(t))}function C(n,t,e,a){if(n&&n.o){if(T.has(n))return;T.add(n),undefined.c.push((()=>{T.delete(n),a&&(e&&n.d(1),a())})),n.o(t)}}function E(n){n&&n.c()}function D(n,e,o){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=n.$$;s&&s.m(e,o),x((()=>{const e=i.map(t).filter(r);l?l.push(...e):a(e),n.$$.on_mount=[]})),c.forEach(x)}function H(n,t){const e=n.$$;null!==e.fragment&&(a(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function L(n,t){-1===n.$$.dirty[0]&&(h.push(n),y||(y=!0,v.then(k)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function M(t,r,o,s,i,c,u=[-1]){const d=p;m(t);const f=r.props||{},h=t.$$={fragment:null,ctx:null,props:c,update:n,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:u,skip_bound:!1};let g=!1;if(h.ctx=o?o(t,f,((n,e,...a)=>{const r=a.length?a[0]:e;return h.ctx&&i(h.ctx[n],h.ctx[n]=r)&&(!h.skip_bound&&h.bound[n]&&h.bound[n](r),g&&L(t,n)),e})):[],h.update(),g=!0,a(h.before_update),h.fragment=!!s&&s(h.ctx),r.target){if(r.hydrate){const n=function(n){return Array.from(n.childNodes)}(r.target);h.fragment&&h.fragment.l(n),n.forEach(l)}else h.fragment&&h.fragment.c();r.intro&&A(t.$$.fragment),D(t,r.target,r.anchor),k()}m(d)}class j{$destroy(){H(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function N(t){let e,a,r,o,p,m,h,g,$;return{c(){e=c("header"),a=c("nav"),r=c("div"),o=c("a"),p=u(t[0]),m=d(),h=c("button"),h.innerHTML='<span class="navbar-toggler-icon"></span>',g=d(),$=c("div"),$.innerHTML='<ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li> \n        <li class="nav-item"><a class="nav-link" href="#">Link</a></li> \n        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a> \n          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"><li><a class="dropdown-item" href="#">Action</a></li> \n            <li><a class="dropdown-item" href="#">Another action</a></li> \n            <li><hr class="dropdown-divider"/></li> \n            <li><a class="dropdown-item" href="#">Something else here</a></li></ul></li> \n        <li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li></ul> \n      <form class="d-flex"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> \n        <button class="btn btn-outline-success" type="submit">Search</button></form>',f(o,"class","navbar-brand"),f(o,"href","/"),f(h,"class","navbar-toggler"),f(h,"type","button"),f(h,"data-bs-toggle","collapse"),f(h,"data-bs-target","#navbarSupportedContent"),f(h,"aria-controls","navbarSupportedContent"),f(h,"aria-expanded","false"),f(h,"aria-label","Toggle navigation"),f($,"class","collapse navbar-collapse"),f($,"id","navbarSupportedContent"),f(r,"class","container-fluid"),f(a,"class","navbar navbar-expand-lg navbar-light bg-light")},m(n,t){i(n,e,t),s(e,a),s(a,r),s(r,o),s(o,p),s(r,m),s(r,h),s(r,g),s(r,$)},p(n,[t]){1&t&&function(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}(p,n[0])},i:n,o:n,d(n){n&&l(e)}}}function O(n,t,e){let{name:a}=t;return n.$$set=n=>{"name"in n&&e(0,a=n.name)},[a]}class P extends j{constructor(n){super(),M(this,n,O,N,o,{name:0})}}function q(t){let e;return{c(){e=c("main"),e.textContent="This is main content"},m(n,t){i(n,e,t)},p:n,i:n,o:n,d(n){n&&l(e)}}}class B extends j{constructor(n){super(),M(this,n,null,q,o,{})}}function z(t){let e;return{c(){e=c("footer"),e.innerHTML='<div class="container-fluid">This is sample footer</div>'},m(n,t){i(n,e,t)},p:n,i:n,o:n,d(n){n&&l(e)}}}class F extends j{constructor(n){super(),M(this,n,null,z,o,{})}}function G(n){let t,e,a,r,o,s;return t=new P({props:{name:n[0]}}),a=new B({}),o=new F({}),{c(){E(t.$$.fragment),e=d(),E(a.$$.fragment),r=d(),E(o.$$.fragment)},m(n,l){D(t,n,l),i(n,e,l),D(a,n,l),i(n,r,l),D(o,n,l),s=!0},p(n,[e]){const a={};1&e&&(a.name=n[0]),t.$set(a)},i(n){s||(A(t.$$.fragment,n),A(a.$$.fragment,n),A(o.$$.fragment,n),s=!0)},o(n){C(t.$$.fragment,n),C(a.$$.fragment,n),C(o.$$.fragment,n),s=!1},d(n){H(t,n),n&&l(e),H(a,n),n&&l(r),H(o,n)}}}function I(n,t,e){let{name:a}=t;return n.$$set=n=>{"name"in n&&e(0,a=n.name)},[a]}return new class extends j{constructor(n){super(),M(this,n,I,G,o,{name:0})}}({target:document.body,props:{name:"Easy Prep"}})}();
//# sourceMappingURL=bundle.js.map

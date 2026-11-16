"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([["291"],{993(e,n,r){r.d(n,{A:()=>c});var t=r(942),o=r.n(t),a=r(278),i=r.n(a)()(o());i.push([e.id,`body {
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
  margin: 0;
  background: #f4f6f8;
  color: #132e53;
}

.nh-shell__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #132e53;
  color: white;
}

.nh-shell__header h1 {
  font-size: 20px;
  margin: 0;
}

.nh-login-bar {
  display: flex;
  gap: 8px;
  align-items: center;
}

.nh-login-bar input {
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
}

.nh-login-bar button {
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  background: #039fb8;
  color: white;
  cursor: pointer;
}

.nh-shell__main {
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
}

.nh-tabs__list {
  display: flex;
  gap: 4px;
  border-bottom: 2px solid #dde3ea;
  margin-bottom: 16px;
}

.nh-tabs__tab {
  padding: 10px 18px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 600;
  color: #6b7a8f;
}

.nh-tabs__tab--active {
  color: #132e53;
  border-bottom: 2px solid #039fb8;
  margin-bottom: -2px;
}

.nh-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  overflow: hidden;
}

.nh-card--selected {
  box-shadow: 0 0 0 2px #039fb8, 0 4px 10px rgba(3, 159, 184, 0.3);
}

.nh-card__header--selected {
  background: #039fb8;
  color: white;
}

.nh-card__header {
  padding: 12px 16px;
  font-weight: 700;
  background: #eef2f6;
}

.nh-card__body {
  padding: 16px;
}

.nh-card__footer {
  padding: 8px 16px;
  background: #f8f9fb;
  font-size: 12px;
  color: #6b7a8f;
}

.nh-mfe-loading,
.nh-mfe-error {
  padding: 24px;
  text-align: center;
  color: #6b7a8f;
}

.nh-mfe-error {
  color: #b3261e;
}
`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,wDAAwD;EACxD,SAAS;EACT,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,wCAAwC;EACxC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gEAAgE;AAClE;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB",sourcesContent:["body {\n  font-family: -apple-system, Segoe UI, Roboto, sans-serif;\n  margin: 0;\n  background: #f4f6f8;\n  color: #132e53;\n}\n\n.nh-shell__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background: #132e53;\n  color: white;\n}\n\n.nh-shell__header h1 {\n  font-size: 20px;\n  margin: 0;\n}\n\n.nh-login-bar {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.nh-login-bar input {\n  padding: 6px 10px;\n  border-radius: 4px;\n  border: none;\n}\n\n.nh-login-bar button {\n  padding: 6px 12px;\n  border-radius: 4px;\n  border: none;\n  background: #039fb8;\n  color: white;\n  cursor: pointer;\n}\n\n.nh-shell__main {\n  max-width: 960px;\n  margin: 24px auto;\n  padding: 0 16px;\n}\n\n.nh-tabs__list {\n  display: flex;\n  gap: 4px;\n  border-bottom: 2px solid #dde3ea;\n  margin-bottom: 16px;\n}\n\n.nh-tabs__tab {\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-weight: 600;\n  color: #6b7a8f;\n}\n\n.nh-tabs__tab--active {\n  color: #132e53;\n  border-bottom: 2px solid #039fb8;\n  margin-bottom: -2px;\n}\n\n.nh-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n\n.nh-card--selected {\n  box-shadow: 0 0 0 2px #039fb8, 0 4px 10px rgba(3, 159, 184, 0.3);\n}\n\n.nh-card__header--selected {\n  background: #039fb8;\n  color: white;\n}\n\n.nh-card__header {\n  padding: 12px 16px;\n  font-weight: 700;\n  background: #eef2f6;\n}\n\n.nh-card__body {\n  padding: 16px;\n}\n\n.nh-card__footer {\n  padding: 8px 16px;\n  background: #f8f9fb;\n  font-size: 12px;\n  color: #6b7a8f;\n}\n\n.nh-mfe-loading,\n.nh-mfe-error {\n  padding: 24px;\n  text-align: center;\n  color: #6b7a8f;\n}\n\n.nh-mfe-error {\n  color: #b3261e;\n}\n"],sourceRoot:""}]);let c=i},278(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r}).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},942(e){e.exports=function(e){var n=e[1],r=e[3];if(!r)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r))));return[n].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t)," */")]).join("\n")}return[n].join("\n")}},470(e,n,r){var t=r(543);n.createRoot=t.createRoot,t.hydrateRoot},192(e,n,r){var t=r(195),o=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,l={},s=null,u=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:u,props:l,_owner:i.current}}n.jsx=l,n.jsxs=l},540(e,n,r){e.exports=r(192)},292(e){var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},a=[],i=0;i<e.length;i++){var c=e[i],l=t.base?c[0]+t.base:c[0],s=o[l]||0,u="".concat(l," ").concat(s);o[l]=s+1;var d=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var p=function(e,n){var r=n.domAPI(n);return r.update(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap||n.supports!==e.supports||n.layer!==e.layer)&&r.update(e=n):r.remove()}}(f,t);t.byIndex=i,n.splice(i,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var l=t(e,o),s=0;s<a.length;s++){var u=r(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=l}}},383(e){var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},88(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},884(e,n,r){e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},893(e){e.exports=function(e){if("u"<typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){var t,o,a;t="",r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {")),(o=void 0!==r.layer)&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}"),(a=r.sourceMap)&&"u">typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)},remove:function(){var e;null===(e=n).parentNode||e.parentNode.removeChild(e)}}}},997(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},678(e,n,r){var t=r(540),o=r(195),a=r.n(o),i=r(470);function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var l=(0,o.createContext)(null);function s(e){var n,r=e.children,a=function(e){if(Array.isArray(e))return e}(n=(0,o.useState)(null))||function(e){var n,r,t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),2!==o.length);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(i)throw r}}return o}}(n)||function(e){if(e){if("string"==typeof e)return c(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,2)}}(n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=a[0],s=a[1],u=(0,o.useCallback)(function(e){return s({name:e,role:"employee"})},[]),d=(0,o.useCallback)(function(){return s(null)},[]),f=(0,o.useMemo)(function(){return{user:i,login:u,logout:d}},[i,u,d]);return(0,t.jsx)(l.Provider,{value:f,children:r})}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var d=(0,o.createContext)(null);function f(e){var n,r=e.defaultId,a=e.children,i=o.Children.toArray(a).filter(o.isValidElement).map(function(e){return e.props.id}),c=function(e){if(Array.isArray(e))return e}(n=(0,o.useState)(null!=r?r:i[0]))||function(e){var n,r,t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),2!==o.length);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(i)throw r}}return o}}(n)||function(e){if(e){if("string"==typeof e)return u(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,2)}}(n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=c[0],s=c[1];return(0,t.jsx)(d.Provider,{value:{activeId:l,setActiveId:s},children:(0,t.jsxs)("div",{className:"nh-tabs",children:[(0,t.jsx)("div",{className:"nh-tabs__list",role:"tablist",children:o.Children.map(a,function(e){return(0,t.jsx)(p,{id:e.props.id,label:e.props.label})})}),(0,t.jsx)("div",{className:"nh-tabs__panel",children:o.Children.toArray(a).find(function(e){return e.props.id===l})})]})})}function p(e){var n=e.id,r=e.label,a=(0,o.useContext)(d),i=a.activeId,c=a.setActiveId,l=i===n;return(0,t.jsx)("button",{role:"tab","aria-selected":l,className:"nh-tabs__tab ".concat(l?"nh-tabs__tab--active":""),onClick:function(){return c(n)},children:r})}f.Panel=function(e){var n=e.children;return(0,t.jsx)("div",{className:"nh-tabs__content",children:n})};var A=(0,o.createContext)({tone:"default"});function h(e){var n,r,o=e.tone,a=void 0===o?"default":o,i=e.children,c=function(e,n){if(null==e)return{};var r,t,o,a={};if("u">typeof Reflect&&Reflect.ownKeys){for(o=0,r=Reflect.ownKeys(Object(e));o<r.length;o++)t=r[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t]);return a}if(a=function(e,n){if(null==e)return{};var r,t,o={},a=Object.getOwnPropertyNames(e);for(t=0;t<a.length;t++)r=a[t],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r]);return o}(e,n),Object.getOwnPropertySymbols)for(o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t=r[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t]);return a}(e,["tone","children"]);return(0,t.jsx)(A.Provider,{value:{tone:a},children:(0,t.jsx)("div",(n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}({className:"nh-card nh-card--".concat(a)},c),r=r={children:i},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):(function(e){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}),n))})}function b(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(g=function(){return!!e})()}h.Header=function(e){var n=e.children,r=(0,o.useContext)(A).tone;return(0,t.jsx)("div",{className:"nh-card__header nh-card__header--".concat(r),children:n})},h.Body=function(e){var n=e.children;return(0,t.jsx)("div",{className:"nh-card__body",children:n})},h.Footer=function(e){var n=e.children;return(0,t.jsx)("div",{className:"nh-card__footer",children:n})};var v=function(e){var n,r;if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");function o(e){var n,r,t;if(!(this instanceof o))throw TypeError("Cannot call a class as a function");return r=o,t=[e],r=m(r),(n=function(e,n){var r;if(n&&("object"==((r=n)&&"u">typeof Symbol&&r.constructor===Symbol?"symbol":typeof r)||"function"==typeof n))return n;if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this,g()?Reflect.construct(r,t||[],m(this).constructor):r.apply(this,t))).state={hasError:!1},n}return o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&y(o,e),r=[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}],n=[{key:"componentDidCatch",value:function(e,n){console.error("[".concat(this.props.label||"micro-frontend","] failed to render"),e,n)}},{key:"render",value:function(){return this.state.hasError?this.props.fallback||(0,t.jsxs)("div",{className:"nh-mfe-error",children:['No se pudo cargar "',this.props.label||"este m\xf3dulo",'".']}):this.props.children}}],b(o.prototype,n),r&&b(o,r),o}(a().Component);function x(e,n){var r,i=(r=a().lazy(e),function(e){return(0,t.jsx)(v,{label:n,children:(0,t.jsx)(r,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}({},e))})});return function(e){return(0,t.jsx)(o.Suspense,{fallback:(0,t.jsxs)("div",{className:"nh-mfe-loading",children:["Cargando ",n,"…"]}),children:(0,t.jsx)(i,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}({},e))})}}var E=r(292),C=r.n(E),j=r(893),B=r.n(j),_=r(383),O=r.n(_),w=r(884),k=r.n(w),S=r(88),P=r.n(S),I=r(997),N=r.n(I),R=r(993),T={};function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}T.styleTagTransform=N(),T.setAttributes=k(),T.insert=O().bind(null,"head"),T.domAPI=B(),T.insertStyleElement=P(),C()(R.A,T),R.A&&R.A.locals&&R.A.locals;var Y=x(function(){return r.e("801").then(r.t.bind(r,304,23))},"Noticias y Anuncios"),M=x(function(){return r.e("516").then(r.t.bind(r,767,23))},"Recursos Humanos"),U=x(function(){return r.e("139").then(r.t.bind(r,910,23))},"Reportes");function L(){var e,n=function(){var e=(0,o.useContext)(l);if(!e)throw Error("useAuth must be used within AuthProvider");return e}(),r=n.user,a=n.login,i=n.logout,c=function(e){if(Array.isArray(e))return e}(e=(0,o.useState)(""))||function(e){var n,r,t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),2!==o.length);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(i)throw r}}return o}}(e)||function(e){if(e){if("string"==typeof e)return D(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,2)}}(e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=c[0],u=c[1];return r?(0,t.jsxs)("div",{className:"nh-login-bar",children:[(0,t.jsxs)("span",{children:["Conectado como ",(0,t.jsx)("strong",{children:r.name})]}),(0,t.jsx)("button",{onClick:i,children:"Salir"})]}):(0,t.jsxs)("form",{className:"nh-login-bar",onSubmit:function(e){e.preventDefault(),s.trim()&&a(s.trim())},children:[(0,t.jsx)("input",{placeholder:"Tu nombre",value:s,onChange:function(e){return u(e.target.value)}}),(0,t.jsx)("button",{type:"submit",children:"Entrar"})]})}(0,i.createRoot)(document.getElementById("root")).render((0,t.jsx)(function(){return(0,t.jsx)(s,{children:(0,t.jsxs)("div",{className:"nh-shell",children:[(0,t.jsxs)("header",{className:"nh-shell__header",children:[(0,t.jsx)("h1",{children:"Portal Corporativo"}),(0,t.jsx)(L,{})]}),(0,t.jsx)("main",{className:"nh-shell__main",children:(0,t.jsxs)(f,{defaultId:"news",children:[(0,t.jsx)(f.Panel,{id:"news",label:"Noticias y Anuncios",children:(0,t.jsx)(Y,{})}),(0,t.jsx)(f.Panel,{id:"hr",label:"Recursos Humanos",children:(0,t.jsx)(M,{})}),(0,t.jsx)(f.Panel,{id:"reports",label:"Reportes",children:(0,t.jsx)(U,{})})]})})]})})},{}))}}]);
//# sourceMappingURL=291.js.map
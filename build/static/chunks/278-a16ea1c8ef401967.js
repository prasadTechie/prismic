"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{172:function(e,t,n){n.d(t,{p:function(){return c}});var r=n(5893),i=n(7294),s=n(2194);let a=e=>{let t=e.replace(/(?:-|_)(\w)/g,(e,t)=>t?t.toUpperCase():"");return t[0].toUpperCase()+t.slice(1)},o=s.N?()=>null:({slice:e})=>{let t="slice_type"in e?e.slice_type:e.type;return i.useEffect(()=>{console.warn(`[SliceZone] Could not find a component for Slice type "${t}"`,e)},[e,t]),(0,r.jsxs)("section",{"data-slice-zone-todo-component":"","data-slice-type":t,children:["Could not find a component for Slice type “",t,"”"]})},c=({slices:e=[],components:t={},resolver:n,defaultComponent:s=o,context:c={}})=>{let l=i.useMemo(()=>e.map((i,o)=>{let l="slice_type"in i?i.slice_type:i.type,u=t[l]||s;if(n){let e=n({slice:i,sliceName:a(l),i:o});e&&(u=e)}let d="id"in i&&i.id?i.id:`${o}-${JSON.stringify(i)}`;return(0,r.jsx)(u,{slice:i,index:o,slices:e,context:c},d)}),[t,c,s,e,n]);return(0,r.jsx)(r.Fragment,{children:l})}},4917:function(e,t,n){/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var r,i=n(855);function s(e){if(!Object.prototype.hasOwnProperty.call(a.message,e))throw Error("invalid status code: "+e);return a.message[e]}function a(e){if("number"==typeof e)return s(e);if("string"!=typeof e)throw TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?function(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(a.code,t))throw Error('invalid status message: "'+e+'"');return a.code[t]}(e):s(t)}e.exports=a,a.message=i,a.code=(r={},Object.keys(i).forEach(function(e){var t=i[e],n=Number(e);r[t.toLowerCase()]=n}),r),a.codes=Object.keys(i).map(function(e){return Number(e)}),a.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},a.empty={204:!0,205:!0,304:!0},a.retry={502:!0,503:!0,504:!0}},7681:function(e,t,n){n.d(t,{i:function(){return eH}});var r,i,s,a,o,c,l,u,d,h,f,p,_,g,v,y,m,S,w=n(7294),b=n(4917);let I=0,T=(e,t,n="")=>({requestID:`${n}${I++}`,type:e,data:t}),M=(e,t,n=200)=>{var r,i;if(n>=400)throw TypeError(`Invalid success status code, expected status to be within \`[100;400[\`, got \`${n}\``);return{requestID:e,status:n,msg:null!=(i=null==(r=b.message[n])?void 0:r.replace(/\.$/,"").toLowerCase())?i:"",data:t}},q=(e,t,n=400)=>{var r,i;if(n<400)throw TypeError(`Invalid error status code, expected status to be within \`[500;600[\`, got \`${n}\``);return{requestID:e,status:n,msg:null!=(i=null==(r=b.message[n])?void 0:r.replace(/\.$/,"").toLowerCase())?i:"",error:t}},D=e=>{if("object"!=typeof e||null===e)throw TypeError(`Invalid message received, expected message to be of type \`object\`, got \`${typeof e}\``);if(Object.keys(e).every(e=>["requestID","type","data","status","msg","error"].includes(e))){if("string"!=typeof e.requestID)throw TypeError(`Invalid message received, expected \`message.requestID\` to be of type \`string\`, got \`${typeof e.id}\``)}else throw TypeError(`Invalid message received: ${JSON.stringify(e)}`);return e},R=e=>"type"in e,x=e=>!("type"in e),A=e=>x(e)&&!("error"in e);class P extends Error{constructor(e){super(e.msg),this.response=e}}class E extends Error{constructor(e){super("Too many concurrent requests"),this.request=e}}class L extends Error{constructor(e){super(`Request \`${e.requestID}\` timed out`),this.request=e}}class O extends Error{}class k extends Error{constructor(){super("Port is not set")}}let j={debug:!1,maximumRequestConcurrency:20,defaultTimeout:5e3,requestIDPrefix:"channel-"};class N{constructor(e,t){this._port=null,this._pendingRequests=new Map,this.requestHandlers=e,this.options={...j,...t}}get port(){if(!this._port)throw new k;return this._port}set port(e){this._port&&(this._port.onmessage=null),this._port=e,this._port&&(this._port.onmessage=this.onMessage.bind(this))}createRequestMessage(e,t){return T(e,t,this.options.requestIDPrefix)}async onMessage(e){this.options.debug&&console.debug(e.data);try{let t=D(e.data);if(R(t)){if(this.requestHandlers[t.type])try{let e=await this.requestHandlers[t.type](t,{success:M.bind(this,t.requestID),error:q.bind(this,t.requestID)});this.postResponse(e)}catch(e){this.postResponse(q(t.requestID,e,500))}else this.postResponse(q(t.requestID,void 0,501))}else this._pendingRequests.has(t.requestID)?(this._pendingRequests.get(t.requestID)(t),this._pendingRequests.delete(t.requestID)):console.error(`Unknown request ID received in response: ${JSON.stringify(t)}`)}catch(e){if(e instanceof TypeError)console.warn(e.message);else throw e}}postRequest(e,t=e=>this.port.postMessage(e),n={}){if(this.options.debug&&console.debug(e),this._pendingRequests.size>=this.options.maximumRequestConcurrency)throw new E(e);return new Promise((r,i)=>{let s=setTimeout(()=>{this._pendingRequests.has(e.requestID)&&this._pendingRequests.delete(e.requestID),i(new L(e))},n.timeout||this.options.defaultTimeout);this._pendingRequests.set(e.requestID,e=>{clearTimeout(s),A(e)?r(e):i(new P(e))}),t(e)})}postResponse(e,t=e=>this.port.postMessage(e)){return this.options.debug&&console.debug(e),t(e),e}}var C=((r=C||{}).Connect="connect",r),F=((i=F||{}).Ready="ready",i);let Z={readyTimeout:2e4,requestIDPrefix:"receiver-"};class $ extends N{constructor(e,t){super(e,{...Z,...t}),this._ready=!1,window.addEventListener("message",e=>{this._onPublicMessage(e)})}async ready(){if(window.parent===window)throw Error("Receiver is currently not embedded as an iframe");this._ready=!1;let e=this.createRequestMessage(F.Ready,void 0),t=await this.postRequest(e,e=>{window.parent.postMessage(e,"*")},{timeout:this.options.readyTimeout});return this._ready=!0,t}_onPublicMessage(e){try{let t=D(e.data);if(R(t)){if(this.options.debug&&console.debug(e.data),t.type===C.Connect){this.port=e.ports[0];let{data:n}=t;this.options={...this.options,...n,debug:this.options.debug,requestIDPrefix:this.options.requestIDPrefix,readyTimeout:this.options.readyTimeout};let r=M(t.requestID,void 0);this.postResponse(r)}else this.postResponse(q(t.requestID,void 0),t=>{e.source.postMessage(t,e.origin)})}else this._ready||this.onMessage(e)}catch(e){if(e instanceof TypeError);else throw e}}postFormattedRequest(e,t,n={}){if(!this._ready)throw new O("Receiver is not ready, use `ChannelReceiver.ready()` first");return this.postRequest(this.createRequestMessage(e,t),void 0,n)}}var U=((s=U||{}).SetActiveSlice="setActiveSlice",s),z=((a=z||{}).Ping="ping",a.GetLibraries="getLibraries",a.SetSliceZone="setSliceZone",a.SetSliceZoneFromSliceIDs="setSliceZoneFromSliceIDs",a.ScrollToSlice="scrollToSlice",a);z.Ping,z.GetLibraries,z.SetSliceZone,z.SetSliceZoneFromSliceIDs,z.ScrollToSlice;let B={requestIDPrefix:"api-",activeSliceAPI:!1};class H extends ${constructor(e,t){var n,r;let i=(null==t?void 0:t.debug)||/[\?&]debug=true/i.test(decodeURIComponent(window.location.search));super({[z.Ping]:(e,t)=>t.success("pong"),...e},{...B,...t,debug:i}),this[S]=async e=>await this.postFormattedRequest(U.SetActiveSlice,e),i&&(window.prismic||(window.prismic={}),(n=window.prismic).sliceSimulator||(n.sliceSimulator={}),(r=window.prismic.sliceSimulator).api||(r.api=[]),window.prismic.sliceSimulator.api.push(this))}}S=U.SetActiveSlice,Object.prototype.hasOwnProperty;var G=function(e){return{_tag:"Right",right:e}},K=function(e){return"Left"===e._tag},J=(o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),V=function(){return(V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},Y=function(e,t,n){if(n||2==arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},X=function(e){return{_tag:"Left",left:e}},Q=function(e,t,n){return X([{value:e,context:t,message:n}])},W=function(){function e(e,t,n,r){this.name=e,this.is=t,this.validate=n,this.encode=r,this.decode=this.decode.bind(this)}return e.prototype.pipe=function(t,n){var r=this;return void 0===n&&(n="pipe(".concat(this.name,", ").concat(t.name,")")),new e(n,t.is,function(e,n){var i=r.validate(e,n);return K(i)?i:t.validate(i.right,n)},this.encode===ee&&t.encode===ee?ee:function(e){return r.encode(t.encode(e))})},e.prototype.asDecoder=function(){return this},e.prototype.asEncoder=function(){return this},e.prototype.decode=function(e){return this.validate(e,[{key:"",type:this,actual:e}])},e}(),ee=function(e){return e};function et(e,t,n,r){for(var i=e.length,s=Array(i+1),a=0;a<i;a++)s[a]=e[a];return s[i]={key:t,type:n,actual:r},s}function en(e,t){for(var n=t.length,r=0;r<n;r++)e.push(t[r])}var er=Object.prototype.hasOwnProperty;function ei(e){for(var t=0;t<e.length;t++)if(e[t].encode!==ee)return!1;return!0}function es(e){return"{ ".concat(Object.keys(e).map(function(t){return"".concat(t,": ").concat(e[t].name)}).join(", ")," }")}function ea(e,t){for(var n=!0,r=!0,i=!eh.is(e),s=0;s<t.length;s++){var a=t[s];a!==e&&(n=!1),eh.is(a)&&(r=!1)}if(n)return e;if(r)return t[t.length-1];for(var o={},c=0;c<t.length;c++){var a=t[c];for(var l in a)(!er.call(o,l)||i||a[l]!==e[l])&&(o[l]=a[l])}return o}function eo(e){return"AnyType"===e._tag}new(function(e){function t(){var t=e.call(this,"null",function(e){return null===e},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="NullType",t}return J(t,e),t}(W));var ec=new(function(e){function t(){var t=e.call(this,"undefined",function(e){return void 0===e},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="UndefinedType",t}return J(t,e),t}(W));new(function(e){function t(){var t=e.call(this,"void",ec.is,ec.validate,ee)||this;return t._tag="VoidType",t}return J(t,e),t}(W)),new(function(e){function t(){var t=e.call(this,"unknown",function(e){return!0},G,ee)||this;return t._tag="UnknownType",t}return J(t,e),t}(W));var el=new(function(e){function t(){var t=e.call(this,"string",function(e){return"string"==typeof e},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="StringType",t}return J(t,e),t}(W)),eu=new(function(e){function t(){var t=e.call(this,"number",function(e){return"number"==typeof e},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="NumberType",t}return J(t,e),t}(W));new(function(e){function t(){var t=e.call(this,"bigint",function(e){return"bigint"==typeof e},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="BigIntType",t}return J(t,e),t}(W)),new(function(e){function t(){var t=e.call(this,"boolean",function(e){return"boolean"==typeof e},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="BooleanType",t}return J(t,e),t}(W));var ed=new(function(e){function t(){var t=e.call(this,"UnknownArray",Array.isArray,function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="AnyArrayType",t}return J(t,e),t}(W)),eh=new(function(e){function t(){var t=e.call(this,"UnknownRecord",function(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="AnyDictionaryType",t}return J(t,e),t}(W));J(function(e,t,n,r,i){var s=c.call(this,e,t,n,r)||this;return s.value=i,s._tag="LiteralType",s},c=W),J(function(e,t,n,r,i){var s=l.call(this,e,t,n,r)||this;return s.keys=i,s._tag="KeyofType",s},l=W);var ef=function(e){function t(t,n,r,i,s,a){var o=e.call(this,t,n,r,i)||this;return o.type=s,o.predicate=a,o._tag="RefinementType",o}return J(t,e),t}(W);eT(eu,function(e){return Number.isInteger(e)},"Int"),Object.defineProperty(function(e){function t(t,n,r,i,s){var a=e.call(this,t,n,r,i)||this;return a.runDefinition=s,a._tag="RecursiveType",a}return J(t,e),t}(W).prototype,"type",{get:function(){return this.runDefinition()},enumerable:!0,configurable:!0});var ep=function(e){function t(t,n,r,i,s){var a=e.call(this,t,n,r,i)||this;return a.type=s,a._tag="ArrayType",a}return J(t,e),t}(W),e_=function(e){function t(t,n,r,i,s){var a=e.call(this,t,n,r,i)||this;return a.props=s,a._tag="InterfaceType",a}return J(t,e),t}(W);function eg(e,t){void 0===t&&(t=es(e));var n=Object.keys(e),r=n.map(function(t){return e[t]}),i=n.length;return new e_(t,function(e){if(eh.is(e)){for(var t=0;t<i;t++){var s=n[t],a=e[s];if(void 0===a&&!er.call(e,s)||!r[t].is(a))return!1}return!0}return!1},function(e,t){var s=eh.validate(e,t);if(K(s))return s;for(var a=s.right,o=a,c=[],l=0;l<i;l++){var u=n[l],d=o[u],h=r[l],f=h.validate(d,et(t,u,h,d));if(K(f))en(c,f.left);else{var p=f.right;p===d&&(void 0!==p||er.call(o,u))||(o===a&&(o=V({},a)),o[u]=p)}}return c.length>0?X(c):G(o)},ei(r)?ee:function(e){for(var t=V({},e),s=0;s<i;s++){var a=n[s],o=r[s].encode;o!==ee&&(t[a]=o(e[a]))}return t},e)}var ev=function(e){function t(t,n,r,i,s){var a=e.call(this,t,n,r,i)||this;return a.props=s,a._tag="PartialType",a}return J(t,e),t}(W);function ey(e,t){if(void 0===t){var n;n=es(e),t="Partial<".concat(n,">")}var r=Object.keys(e),i=r.map(function(t){return e[t]}),s=r.length;return new ev(t,function(t){if(eh.is(t)){for(var n=0;n<s;n++){var i=r[n],a=t[i];if(void 0!==a&&!e[i].is(a))return!1}return!0}return!1},function(t,n){var i=eh.validate(t,n);if(K(i))return i;for(var a=i.right,o=a,c=[],l=0;l<s;l++){var u=r[l],d=o[u],h=e[u],f=h.validate(d,et(n,u,h,d));if(K(f))void 0!==d&&en(c,f.left);else{var p=f.right;p!==d&&(o===a&&(o=V({},a)),o[u]=p)}}return c.length>0?X(c):G(o)},ei(i)?ee:function(e){for(var t=V({},e),n=0;n<s;n++){var a=r[n],o=e[a];void 0!==o&&(t[a]=i[n].encode(o))}return t},e)}var em=function(e){function t(t,n,r,i,s,a){var o=e.call(this,t,n,r,i)||this;return o.domain=s,o.codomain=a,o._tag="DictionaryType",o}return J(t,e),t}(W);function eS(e,t,n){var r,i,s,a,o,c=function e(t){var n;if("LiteralType"===t._tag){var r=t.value;if(el.is(r))return(n={})[r]=null,n}else{if("KeyofType"===t._tag)return t.keys;if("UnionType"===t._tag){var i=t.types.map(function(t){return e(t)});return i.some(ec.is)?void 0:Object.assign.apply(Object,Y([{}],i,!1))}}}(e);return c?(r=Object.keys(c),void 0===(i=n)&&(i="{ [K in ".concat(e.name,"]: ").concat(t.name," }")),s=r.length,new em(i,function(e){return eh.is(e)&&r.every(function(n){return t.is(e[n])})},function(e,n){var i=eh.validate(e,n);if(K(i))return i;for(var a=i.right,o={},c=[],l=!1,u=0;u<s;u++){var d=r[u],h=a[d],f=t.validate(h,et(n,d,t,h));if(K(f))en(c,f.left);else{var p=f.right;l=l||p!==h,o[d]=p}}return c.length>0?X(c):G(l||Object.keys(a).length!==s?o:a)},t.encode===ee?ee:function(e){for(var n={},i=0;i<s;i++){var a=r[i];n[a]=t.encode(e[a])}return n},e,t)):(a=e,void 0===(o=n)&&(o="{ [K in ".concat(a.name,"]: ").concat(t.name," }")),new em(o,function(e){return eh.is(e)?Object.keys(e).every(function(n){return a.is(n)&&t.is(e[n])}):eo(t)&&Array.isArray(e)},function(e,n){if(eh.is(e)){for(var r={},i=[],s=Object.keys(e),o=s.length,c=!1,l=0;l<o;l++){var u=s[l],d=e[u],h=a.validate(u,et(n,u,a,u));if(K(h))en(i,h.left);else{var f=h.right;c=c||f!==u,u=f;var p=t.validate(d,et(n,u,t,d));if(K(p))en(i,p.left);else{var _=p.right;c=c||_!==d,r[u]=_}}}return i.length>0?X(i):G(c?r:e)}return eo(t)&&Array.isArray(e)?G(e):Q(e,n)},a.encode===ee&&t.encode===ee?ee:function(e){for(var n={},r=Object.keys(e),i=r.length,s=0;s<i;s++){var o=r[s];n[String(a.encode(o))]=t.encode(e[o])}return n},a,t))}var ew=function(e){function t(t,n,r,i,s){var a=e.call(this,t,n,r,i)||this;return a.types=s,a._tag="UnionType",a}return J(t,e),t}(W),eb=function(e){function t(t,n,r,i,s){var a=e.call(this,t,n,r,i)||this;return a.types=s,a._tag="IntersectionType",a}return J(t,e),t}(W);function eI(e,t){void 0===t&&(t="(".concat(e.map(function(e){return e.name}).join(" & "),")"));var n=e.length;return new eb(t,function(t){return e.every(function(e){return e.is(t)})},0===e.length?G:function(t,r){for(var i=[],s=[],a=0;a<n;a++){var o=e[a],c=o.validate(t,et(r,String(a),o,t));K(c)?en(s,c.left):i.push(c.right)}return s.length>0?X(s):G(ea(t,i))},0===e.length?ee:function(t){return ea(t,e.map(function(e){return e.encode(t)}))},e)}function eT(e,t,n){return void 0===n&&(n="(".concat(e.name," | ").concat(t.displayName||t.name||"<function".concat(t.length,">"),")")),new ef(n,function(n){return e.is(n)&&t(n)},function(n,r){var i=e.validate(n,r);if(K(i))return i;var s=i.right;return t(s)?G(s):Q(s,r)},e.encode,e,t)}J(function(e,t,n,r,i){var s=u.call(this,e,t,n,r)||this;return s.types=i,s._tag="TupleType",s},u=W),J(function(e,t,n,r,i){var s=d.call(this,e,t,n,r)||this;return s.type=i,s._tag="ReadonlyType",s},d=W),J(function(e,t,n,r,i){var s=h.call(this,e,t,n,r)||this;return s.type=i,s._tag="ReadonlyArrayType",s},h=W),J(function(e,t,n,r,i){var s=f.call(this,e,t,n,r)||this;return s.type=i,s._tag="ExactType",s},f=W),new(function(e){function t(){var t=e.call(this,"Function",function(e){return"function"==typeof e},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="FunctionType",t}return J(t,e),t}(W)),new(function(e){function t(){var t=e.call(this,"never",function(e){return!1},function(e,t){return Q(e,t)},function(){throw Error("cannot encode never")})||this;return t._tag="NeverType",t}return J(t,e),t}(W)),new(function(e){function t(){var t=e.call(this,"any",function(e){return!0},G,ee)||this;return t._tag="AnyType",t}return J(t,e),t}(W)),eT(eu,Number.isInteger,"Integer"),J(function(e,t,n,r,i,s){var a=p.call(this,e,t,n,r,i)||this;return a.tag=s,a},p=ew),new(function(e){function t(){var t=e.call(this,"object",function(e){return null!==e&&"object"==typeof e},function(e,n){return t.is(e)?G(e):Q(e,n)},ee)||this;return t._tag="ObjectType",t}return J(t,e),t}(W)),J(function(e,t,n,r,i){var s=_.call(this,e,t,n,r)||this;return s.props=i,s._tag="StrictType",s},_=W);var eM=n(3454);let eq=eS(el,eI([ey({name:el}),eg({components:eS(el,eI([eg({id:el,model:eI([eg({id:el,variations:(g=eI([eg({id:el}),ey({name:el})]),void 0===v&&(v="Array<".concat(g.name,">")),new ep(v,function(e){return ed.is(e)&&e.every(g.is)},function(e,t){var n=ed.validate(e,t);if(K(n))return n;for(var r=n.right,i=r.length,s=r,a=[],o=0;o<i;o++){var c=r[o],l=g.validate(c,et(t,String(o),g,c));if(K(l))en(a,l.left);else{var u=l.right;u!==c&&(s===r&&(s=r.slice()),s[o]=u)}}return a.length>0?X(a):G(s)},g.encode===ee?ee:function(e){return e.map(g.encode)},g))}),ey({name:el})]),mocks:eS(el,eg({variation:el}))}),ey({name:el})]))})]));var eD=((y=eD||{}).ManagedState="managedState",y.Slices="slices",y.ActiveSlice="activeSlice",y.Message="message",y),eR=((m=eR||{}).Pending="pending",m.Loaded="loaded",m.Error="error",m);let ex=()=>({state:{},zIndex:100,background:"#ffffff"}),eA=()=>({data:null,status:eR.Pending,error:null}),eP=()=>[],eE=()=>"",eL="slice-simulator",eO="slice-simulator--root",ek=e=>{let t=document.querySelector(`.${eL} [data-slice-zone]`);if(t)return t.children.length!==e&&console.warn(`Flagged SliceZone has an unexpected number of children, found ${t.children.length} but expected ${e}. This might lead to unexpected behaviors. Are you sure you tagged the right element?`),t;if(!(t=document.querySelector(`.${eL} .${eO}`)))return null;for(let n=0;n<5;n++){if(t.children.length===e)return t;if(t.children.length)t=t.children[0];else break}return null},ej=(e,t)=>{let n=document.elementsFromPoint(t.x,t.y).reverse(),r=n.indexOf(e);if(-1===r)return null;let i=n[r+1];return i||null},eN=(e,t)=>`<a href="${e}" style="text-decoration: underline;">${t||e}<a>`,eC=`<div style="word-spacing: initial; white-space: pre; line-height: initial; font-family: monospace; color: #ffffff; mix-blend-mode: difference; padding: 1rem; font-size: 1rem;">${`   _____ ___          _____ _                 __      __            
  / ___// (_)_______ / ___/(_)___ ___  __  __/ /___ _/ /_____  _____
  \\__ \\/ / / ___/ _ \\\\__ \\/ / __ \`__ \\/ / / / / __ \`/ __/ __ \\/ ___/
 ___/ / / / /__/  __/__/ / / / / / / / /_/ / / /_/ / /_/ /_/ / /    
/____/_/_/\\___/\\___/____/_/_/ /_/ /_/\\__,_/_/\\__,_/\\__/\\____/_/     
                  / /_  __  __   / __ \\_____(_)________ ___  (_)____
                 / __ \\/ / / /  / /_/ / ___/ / ___/ __ \`__ \\/ / ___/
                / /_/ / /_/ /  / ____/ /  / (__  ) / / / / / / /__  
               /_.___/\\__, /  /_/   /_/  /_/____/_/ /_/ /_/_/\\___/  
                     /____/

You're seeing this page because you're accessing Slice Simulator
directly, e.g:

  - ${eN("http://localhost:3000/slice-simulator")}



Slice Simulator is not meant to be accessed this way, to preview your
slices, head over to Slice Machine UI:

  - ${eN("http://localhost:9999")}



If you believe this is an error, please reach out to us:

  - ${eN("https://github.com/prismicio/slice-machine/issues/new/choose")}





                                                - The Prismic team`}</div>`;class eF{constructor(){this._listeners={}}on(e,t,n=null){var r;this._listeners[e]=[...null!=(r=this._listeners[e])?r:[],[t,n]]}off(e,t){var n;this._listeners[e]=(null!=(n=this._listeners[e])?n:[]).filter(([e,n])=>"function"==typeof t?e!==t:n!==t)}emit(e,t){var n;(null!=(n=this._listeners[e])?n:[]).forEach(e=>e[0](t))}}let eZ=(e,t=16)=>{let n=0,r=null;return function(...i){let s=Date.now(),a=s-n;a>=t?(e.apply(this,i),n=s):(r&&clearTimeout(r),r=setTimeout(()=>{e.apply(this,i),n=Date.now()},t-a))}};void 0===eM&&(globalThis.process={env:{}});class e$ extends eF{constructor(e=eA(),t=eP()){super(),this._setActiveSlice=()=>{if(0===this.slices.length){this.activeSlice=null;return}let e=ek(this.slices.length);if(!e){this.activeSlice=null;return}let t=ej(e,this._mouse);if(!t){this.activeSlice=null;return}let n=Array.prototype.indexOf.call(e.children,t);this.activeSlice={rect:t.getBoundingClientRect(),sliceID:this.slices[n].slice_type,variationID:this.slices[n].variation,index:n}},this.setActiveSlice=eZ(this._setActiveSlice,16),this._setSliceZoneFromSliceIDsLastCall=null,this._managedState=e,this._slices=t,this._activeSlice=null,this._message="",this._mouse={x:0,y:0}}set managedState(e){this._managedState=e,this.emit(eD.ManagedState,e)}get managedState(){return this._managedState}set slices(e){this._slices=e,this.message="",this.emit(eD.Slices,e)}get slices(){return this._slices}set activeSlice(e){this._activeSlice=e,this.emit(eD.ActiveSlice,e)}get activeSlice(){return this._activeSlice}set message(e){this._message=e,this.emit(eD.Message,e)}get message(){return this._message}async init(e){this._managedState=await this.load(e),await this.forceSliceChunksDownload(),this.setDefaultSliceZone(),this.emit(eD.ManagedState,this._managedState),window.addEventListener("mousemove",e=>{this._mouse={x:e.clientX,y:e.clientY}})}async load(e){try{let t=await ("function"==typeof e?e():e),n=eq.decode(t);if("Left"===n._tag)throw console.error(n.left),Error("State does not validate expected format, see console logs for detailed report");return{data:n.right,status:eR.Loaded,error:null}}catch(e){return console.error(e),{data:null,status:eR.Error,error:e}}}async reload(e){this.managedState=await this.load(e),this.recoverSliceZone()}_throwIfNotLoaded(e){var t;if(this.managedState.status===eR.Error)throw null!=(t=this.managedState.error)?t:Error("Unknown state error, see console logs for detailed report");if(this.managedState.status===eR.Pending||!this.managedState.data)throw Error(`\`StateManager.${e}()\` can only be called when the state is loaded, use \`StateManager.load()\` first`)}getLibraries(){return this._throwIfNotLoaded("getLibraries"),Object.entries(this.managedState.data).map(([e,t])=>{let n=t.components;return{path:e,slices:Object.values(n).map(e=>({id:e.id,name:e.name||e.id,variations:e.model.variations.map(e=>({id:e.id,name:e.name||e.id}))}))}})}getMocks(){return this._throwIfNotLoaded("getMocks"),Object.values(this.managedState.data).reduce((e,t)=>{let n=t.components;return Object.values(n).forEach(t=>{e[t.id]=Object.values(t.mocks).reduce((e,t)=>(e[t.variation]=t,e),{})}),e},{})}async forceSliceChunksDownload(){this.setSliceZoneFromSliceIDs(this.getLibraries().map(e=>e.slices.map(e=>({sliceID:e.id,variationID:e.variations[0].id}))).flat()),await new Promise(e=>setTimeout(e,0)),this.slices=[]}setDefaultSliceZone(){if(this._throwIfNotLoaded("setDefaultSliceZone"),"undefined"!=typeof window){let e=new URL(window.location.href);e.searchParams.has("sid")&&e.searchParams.has("vid")&&this.setSliceZoneFromSliceIDs([{sliceID:e.searchParams.get("sid"),variationID:e.searchParams.get("vid")}])}}recoverSliceZone(){this._setSliceZoneFromSliceIDsLastCall&&this.setSliceZoneFromSliceIDs(this._setSliceZoneFromSliceIDsLastCall)}setSliceZone(e){this._setSliceZoneFromSliceIDsLastCall=null,this.slices=e}setSliceZoneFromSliceIDs(e){this._setSliceZoneFromSliceIDsLastCall=e;let t=this.getMocks();this.slices=e.map(e=>{let n=e.sliceID,r=e.variationID;if(n in t&&r in t[n])return t[n][r]}).filter(Boolean)}}let eU=e=>{e.preventDefault(),e.stopPropagation()},ez=e=>{e.path&&e.path.slice(0,5).some(e=>e instanceof HTMLAnchorElement)&&(e.preventDefault(),e.stopPropagation())},eB=new class{constructor(e=eA(),t=eP()){this.stateManager=new e$(e,t),this._api=null,this._initialized=!1}async init(e){if(this._initialized){await this.stateManager.reload(e);return}this._initialized=!0,await this.stateManager.init(e);try{await this._initAPI()}catch(e){e instanceof Error&&"Receiver is currently not embedded as an iframe"===e.message&&!this.stateManager.slices.length&&(this.stateManager.message=eC),console.error(e);return}this._initListeners()}async _initAPI(){this._api=new H({[z.GetLibraries]:(e,t)=>t.success(this.stateManager.getLibraries()),[z.SetSliceZone]:(e,t)=>(this.stateManager.setSliceZone(e.data),t.success()),[z.SetSliceZoneFromSliceIDs]:(e,t)=>(this.stateManager.setSliceZoneFromSliceIDs(e.data),t.success()),[z.ScrollToSlice]:(e,t)=>{var n;if(e.data.sliceIndex<0)return t.error("`sliceIndex` must be > 0",400);if(e.data.sliceIndex>=this.stateManager.slices.length)return t.error(`\`sliceIndex\` must be < ${this.stateManager.slices.length} (\`<SliceZone />\` current length)`,400);let r=ek(this.stateManager.slices.length);if(!r)return t.error("Failed to find `<SliceZone />`",500);this.stateManager.activeSlice=null;let i=r.children[e.data.sliceIndex];return i?(i.scrollIntoView({behavior:e.data.behavior,block:e.data.block,inline:e.data.inline}),(null==(n=this._api)?void 0:n.options.activeSliceAPI)&&setTimeout(this.stateManager.setActiveSlice,750),t.success()):t.error("Failed fo find slice at index $`{req.data.sliceIndex}` in `<SliceZone />`",500)}}),await this._api.ready()}_initListeners(){window.addEventListener("mousemove",()=>{var e;(null==(e=this._api)?void 0:e.options.activeSliceAPI)&&this.stateManager.setActiveSlice()}),window.addEventListener("resize",()=>{var e;(null==(e=this._api)?void 0:e.options.activeSliceAPI)&&this.stateManager.setActiveSlice()}),window.addEventListener("mousewheel",()=>{var e;(null==(e=this._api)?void 0:e.options.activeSliceAPI)&&setTimeout(this.stateManager.setActiveSlice,200)}),this.stateManager.on(eD.Slices,()=>{var e;(null==(e=this._api)?void 0:e.options.activeSliceAPI)&&this.stateManager.setActiveSlice()}),this.stateManager.on(eD.ActiveSlice,async e=>{if(this._api)try{await this._api.setActiveSlice(e)}catch(e){if(e instanceof P&&400===e.response.status)console.error(e.response);else throw e}})}},eH=e=>{let t=ex(),[n,r]=w.useState(eA()),[i,s]=w.useState(eP()),[a,o]=w.useState(eE());w.useEffect(()=>(eB.stateManager.on(eD.ManagedState,e=>{r(e)},"simulator-managed-state"),eB.stateManager.on(eD.Slices,e=>{s(e)},"simulator-slices"),eB.stateManager.on(eD.Message,e=>{o(e)},"simulator-message"),eB.init(e.state||t.state),()=>{eB.stateManager.off(eD.ManagedState,"simulator-managed-state"),eB.stateManager.off(eD.Slices,"simulator-slices"),eB.stateManager.off(eD.Message,"simulator-message")}),[]);let c=w.useRef(!1);return w.useEffect(()=>{c.current?eB.stateManager.reload(e.state):c.current=!0},[e.state]),w.createElement("div",{className:[eL,e.className].filter(Boolean).join(" "),style:{zIndex:void 0===e.zIndex?t.zIndex:e.zIndex,position:"fixed",top:0,left:0,width:"100%",height:"100vh",overflow:"auto",background:void 0===e.background?t.background:e.background}},a?w.createElement("article",{dangerouslySetInnerHTML:{__html:a}}):i.length?w.createElement("div",{id:"root",className:eO,style:n.status!==eR.Loaded?{display:"none"}:void 0,onClickCapture:ez,onSubmitCapture:eU},e.sliceZone({slices:i})):null)}},855:function(e){e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}}]);
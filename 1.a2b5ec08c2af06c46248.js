(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Do2H:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var r=s("hEgY"),n=s("tk/3"),o=s("z6cu"),a=s("AytR");class i{constructor(){this.LocalStorage=new r.a,this.UrlServiceV1=a.a.apiUrlV1}ObterHeaderJson(){return{headers:new n.d({"Content-Type":"application/json"})}}ObterAuthHeaderJson(){return{headers:new n.d({"Content-Type":"application/json",Authorization:`Bearer ${this.LocalStorage.obterTokenUsuario()}`})}}extractData(e){return e.data||{}}serviceError(e){let t=[];return e instanceof n.c&&"Unknown Error"===e.statusText&&(t.push("Ocorreu um erro desconhecido"),e.error.errors=t),console.error(e),Object(o.a)(e)}}},"cES+":function(e,t,s){"use strict";s.d(t,"a",function(){return n});var r=s("3Pt+");class n{constructor(e){this.validationMessages=e}processarMensagens(e){let t={};for(let s in e.controls)if(e.controls.hasOwnProperty(s)){let n=e.controls[s];if(n instanceof r.FormGroup){let e=this.processarMensagens(n);Object.assign(t,e)}else this.validationMessages[s]&&(t[s]="",(n.dirty||n.touched)&&n.errors&&Object.keys(n.errors).map(e=>{this.validationMessages[s][e]&&(t[s]+=this.validationMessages[s][e]+"<br />")}))}return t}}},"tk/3":function(e,t,s){"use strict";s.d(t,"a",function(){return x}),s.d(t,"b",function(){return q}),s.d(t,"c",function(){return k}),s.d(t,"d",function(){return u});var r=s("fXoL"),n=s("LRne"),o=s("HDdC"),a=s("bOdf"),i=s("pLZG"),l=s("lJxs"),h=s("ofXK");class c{}class d{}class u{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const s=e.slice(0,t),r=s.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(s,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const r=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(r,s),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof u?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new u;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof u?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===n.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class p{encodeKey(e){return f(e)}encodeValue(e){return f(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function f(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class y{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new p,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const s=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(e=>{const r=e.indexOf("="),[n,o]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],a=s.get(n)||[];a.push(o),s.set(n,a)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t];this.map.set(t,Array.isArray(s)?s:[s])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(s=>{const r=e[s];Array.isArray(r)?r.forEach(e=>{t.push({param:s,value:e,op:"a"})}):t.push({param:s,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new y({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(e.value),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const s=t.indexOf(e.value);-1!==s&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}function m(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function b(e){return"undefined"!=typeof Blob&&e instanceof Blob}function g(e){return"undefined"!=typeof FormData&&e instanceof FormData}class w{constructor(e,t,s,r){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,n=r):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.params&&(this.params=n.params)),this.headers||(this.headers=new u),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+e}}else this.params=new y,this.urlWithParams=t}serializeBody(){return null===this.body?null:m(this.body)||b(this.body)||g(this.body)||"string"==typeof this.body?this.body:this.body instanceof y?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||g(this.body)?null:b(this.body)?this.body.type||null:m(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof y?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,r=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let i=e.headers||this.headers,l=e.params||this.params;return void 0!==e.setHeaders&&(i=Object.keys(e.setHeaders).reduce((t,s)=>t.set(s,e.setHeaders[s]),i)),e.setParams&&(l=Object.keys(e.setParams).reduce((t,s)=>t.set(s,e.setParams[s]),l)),new w(t,s,n,{params:l,headers:i,reportProgress:a,responseType:r,withCredentials:o})}}var v=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({});class T{constructor(e,t=200,s="OK"){this.headers=e.headers||new u,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class E extends T{constructor(e={}){super(e),this.type=v.ResponseHeader}clone(e={}){return new E({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class j extends T{constructor(e={}){super(e),this.type=v.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new j({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class k extends T{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function O(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let x=(()=>{class e{constructor(e){this.handler=e}request(e,t,s={}){let r;if(e instanceof w)r=e;else{let n,o;n=s.headers instanceof u?s.headers:new u(s.headers),s.params&&(o=s.params instanceof y?s.params:new y({fromObject:s.params})),r=new w(e,t,void 0!==s.body?s.body:null,{headers:n,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const o=Object(n.a)(r).pipe(Object(a.a)(e=>this.handler.handle(e)));if(e instanceof w||"events"===s.observe)return o;const h=o.pipe(Object(i.a)(e=>e instanceof j));switch(s.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return h.pipe(Object(l.a)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return h.pipe(Object(l.a)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return h.pipe(Object(l.a)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return h.pipe(Object(l.a)(e=>e.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new y).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,s={}){return this.request("PATCH",e,O(s,t))}post(e,t,s={}){return this.request("POST",e,O(s,t))}put(e,t,s={}){return this.request("PUT",e,O(s,t))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](c))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class C{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const N=new r.InjectionToken("HTTP_INTERCEPTORS");let P=(()=>{class e{intercept(e,t){return t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const R=/^\)\]\}',?\n/;class S{}let A=(()=>{class e{constructor(){}build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),L=(()=>{class e{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new o.a(t=>{const s=this.xhrFactory.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((e,t)=>s.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&s.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();s.responseType="json"!==t?t:"text"}const r=e.serializeBody();let n=null;const o=()=>{if(null!==n)return n;const t=1223===s.status?204:s.status,r=s.statusText||"OK",o=new u(s.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(s)||e.url;return n=new E({headers:o,status:t,statusText:r,url:a}),n},a=()=>{let{headers:r,status:n,statusText:a,url:i}=o(),l=null;204!==n&&(l=void 0===s.response?s.responseText:s.response),0===n&&(n=l?200:0);let h=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof l){const e=l;l=l.replace(R,"");try{l=""!==l?JSON.parse(l):null}catch(c){l=e,h&&(h=!1,l={error:c,text:l})}}h?(t.next(new j({body:l,headers:r,status:n,statusText:a,url:i||void 0})),t.complete()):t.error(new k({error:l,headers:r,status:n,statusText:a,url:i||void 0}))},i=e=>{const{url:r}=o(),n=new k({error:e,status:s.status||0,statusText:s.statusText||"Unknown Error",url:r||void 0});t.error(n)};let l=!1;const h=r=>{l||(t.next(o()),l=!0);let n={type:v.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(n.total=r.total),"text"===e.responseType&&s.responseText&&(n.partialText=s.responseText),t.next(n)},c=e=>{let s={type:v.UploadProgress,loaded:e.loaded};e.lengthComputable&&(s.total=e.total),t.next(s)};return s.addEventListener("load",a),s.addEventListener("error",i),s.addEventListener("timeout",i),s.addEventListener("abort",i),e.reportProgress&&(s.addEventListener("progress",h),null!==r&&s.upload&&s.upload.addEventListener("progress",c)),s.send(r),t.next({type:v.Sent}),()=>{s.removeEventListener("error",i),s.removeEventListener("abort",i),s.removeEventListener("load",a),s.removeEventListener("timeout",i),e.reportProgress&&(s.removeEventListener("progress",h),null!==r&&s.upload&&s.upload.removeEventListener("progress",c)),s.readyState!==s.DONE&&s.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](S))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const z=new r.InjectionToken("XSRF_COOKIE_NAME"),I=new r.InjectionToken("XSRF_HEADER_NAME");class U{}let H=(()=>{class e{constructor(e,t,s){this.doc=e,this.platform=t,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(h.B)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](h.c),r["\u0275\u0275inject"](r.PLATFORM_ID),r["\u0275\u0275inject"](z))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),F=(()=>{class e{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const s=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||s.startsWith("http://")||s.startsWith("https://"))return t.handle(e);const r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](U),r["\u0275\u0275inject"](I))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),M=(()=>{class e{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(N,[]);this.chain=e.reduceRight((e,t)=>new C(e,t),this.backend)}return this.chain.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](d),r["\u0275\u0275inject"](r.Injector))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),D=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:F,useClass:P}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:z,useValue:t.cookieName}:[],t.headerName?{provide:I,useValue:t.headerName}:[]]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({providers:[F,{provide:N,useExisting:F,multi:!0},{provide:U,useClass:H},{provide:z,useValue:"XSRF-TOKEN"},{provide:I,useValue:"X-XSRF-TOKEN"}]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({providers:[x,{provide:c,useClass:M},L,{provide:d,useExisting:L},A,{provide:S,useExisting:A}],imports:[[D.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e})()}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cda2596"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,i,o){try{var c=t[i](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,s,"next",t)}function s(t){n(o,a,i,c,s,"throw",t)}c(void 0)}))}}},"2b26":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"post"}},[r("v-app",{style:{background:t.$vuetify.theme.themes.light.background}},[r("div",{staticClass:"my-5"}),r("v-container",[r("v-row",{staticStyle:{width:"800px"},attrs:{justify:"center","align-content":"center"}},[r("v-col",[r("v-btn",{attrs:{color:"blue",to:"/edit/"+this.$route.params.selectId}},[t._v("編集する")])],1),r("v-col",[r("v-btn",{attrs:{color:"blue"},on:{click:function(e){return t.onDelete()}}},[t._v("削除する")])],1)],1),r("v-row",{attrs:{justify:"center","align-content":"center"}},[r("v-col",[r("div",{staticClass:"white--text text-h4 my-3"},[t._v("プロフィール")]),r("div",{staticClass:"white--text text-h5 my-3"},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")]),t._v(" ユーザーネーム ")],1),r("div",{staticClass:"white--text text-h5 my-3"},[t._v("・"+t._s(t.userName))]),r("div",{staticClass:"white--text text-h5 my-3"},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-controller-classic")]),t._v(" 主にプレイしているゲーム ")],1),r("div",{staticClass:"white--text text-h5 my-3"},[t._v("・"+t._s(t.gameName))]),r("div",{staticClass:"white--text text-h5 my-3"},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-note")]),t._v(" プロフィール ")],1),r("div",{staticClass:"white--text text-h5"},[t._v("・"+t._s(t.profile))])]),r("v-col",[r("div",{staticClass:"white--text text-h4"},[t._v("一日のスケジュール")]),r("div",{staticClass:"my-3"}),r("v-row",{staticStyle:{width:"880px"}},[r("v-col",[0!==this.scheduleList.length?r("div",t._l(t.scheduleList,(function(e,n){return r("div",{key:n},[r("div",{staticClass:"white--text text-h5"},[t._v(" ・"+t._s(e.start_time)+"～"+t._s(e.end_time)+":"+t._s(e.menu)+" ")]),r("div",{staticClass:"my-3"})])})),0):t._e()])],1)],1),r("v-col",[r("PieChart",{attrs:{chartData:t.chartItems,options:t.chartOptions}})],1)],1)],1),r("div",{staticClass:"my-5"}),r("v-container",[r("v-row",{attrs:{justify:"center","align-content":"center"}},[r("v-col",[r("div",{staticClass:"white--text text-h4"},[t._v("食事で気を付けること")]),r("div",{staticClass:"my-3"}),r("div",{staticClass:"white--text text-h5"},[t._v(t._s(t.mealCarefulContent))])]),r("v-col",[r("div",{staticClass:"white--text text-h4"},[t._v("ゲームで気を付けること")]),r("div",{staticClass:"my-3"}),r("div",{staticClass:"white--text text-h5"},[t._v(t._s(t.gameCarefulContent))])])],1),r("div",{staticClass:"my-15"})],1)],1)],1)},a=[],i=r("1da1"),o=(r("96cf"),r("d3b7"),r("748a")),c=(r("1e11"),r("bc3a")),s=r.n(c),l={name:"Post",components:{PieChart:o["a"]},data:function(){return{isChartExist:!1,userName:"",gameName:"",profile:"",editPath:"",maxTime:1440,beforeTime:0,correntId:1,dataList:[],actionContent:null,mealCarefulContent:null,gameCarefulContent:null,actionDataList:[],scheduleList:[],startTimeObject:{HH:"00",mm:"00"},endTimeObject:{HH:"00",mm:"00"},chartItems:{datasets:[{label:"一日の生活",data:[],backgroundColor:"#847636"}]},chartOptions:{maintainAspectRatio:!1}}},mounted:function(){var t=this;s.a.get("https://3d.intern.jigd.info/api/articles/".concat(this.$route.params.selectId)).then((function(e){t.articleObject=e.data.data,console.log(t.articleObject),t.userName=t.articleObject.userName,t.gameName=t.articleObject.gameName,t.profile=t.articleObject.profile,t.mealCarefulContent=t.articleObject.meal_description,t.gameCarefulContent=t.articleObject.notice,t.dataList=t.chartItems.datasets[0].data,console.log(t.dataList),t.dataList.push(60*parseInt(t.articleObject.schedule[0].start_time)),t.maxTime-=60*parseInt(t.articleObject.schedule[0].start_time),t.beforeTime=parseInt(t.articleObject.schedule[0].start_time);for(var r=0;r<t.articleObject.schedule.length;r++)t.scheduleList.push({start_time:t.articleObject.schedule[r].start_time,end_time:t.articleObject.schedule[r].end_time,menu:t.articleObject.schedule[r].menu}),t.beforeTime!=parseInt(t.articleObject.schedule[r].start_time)&&t.dataList.push(60*(parseInt(t.articleObject.schedule[r].start_time)-t.beforeTime)),t.beforeTime=parseInt(t.articleObject.schedule[r].end_time),t.dataList.push(60*(parseInt(t.articleObject.schedule[r].end_time)-parseInt(t.articleObject.schedule[r].start_time))),t.maxTime-=60*(parseInt(t.articleObject.schedule[r].end_time)-parseInt(t.articleObject.schedule[r].start_time)),console.log("dataList: ".concat(t.dataList));t.dataList.push(t.maxTime),t.fillData(t.dataList)})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))},methods:{fillData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.chartItems=t?{datasets:[{label:"一日の生活",backgroundColor:"#847636",data:t}]}:{datasets:[{label:"一日の生活",backgroundColor:"#847636",data:[1440]}]}},onDelete:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.delete("https://3d.intern.jigd.info/api/articles/".concat(t.$route.params.selectId));case 3:t.$router.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},u=l,h=(r("e31d"),r("2877")),f=r("6544"),d=r.n(f),v=r("7496"),m=r("8336"),p=r("62ad"),y=r("a523"),g=r("132d"),w=r("0fd9"),b=Object(h["a"])(u,n,a,!1,null,null,null);e["default"]=b.exports;d()(b,{VApp:v["a"],VBtn:m["a"],VCol:p["a"],VContainer:y["a"],VIcon:g["a"],VRow:w["a"]})},"78ac":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),o=new k(n||[]);return i._invoke=C(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",m={};function p(){}function y(){}function g(){}var w={};s(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==r&&n.call(x,i)&&(w=x);var _=g.prototype=p.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(a,i,o,c){var s=u(t[a],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,c)}))}c(s.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function C(t,e,r){var n=h;return function(a,i){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw i;return N()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var c=O(o,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=g,s(_,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(j.prototype),s(j.prototype,o,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new j(l(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(_),s(_,c,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;I(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},e31d:function(t,e,r){"use strict";r("78ac")}}]);
//# sourceMappingURL=chunk-0cda2596.d0c533c5.js.map
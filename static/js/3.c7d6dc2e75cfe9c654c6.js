webpackJsonp([3],{"+E39":function(e,t,n){e.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(e,t,n){var i=n("lOnJ");e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},"77Pl":function(e,t,n){var i=n("EqjI");e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},"7KvD":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"9OBS":function(e,t,n){"use strict";function i(e){n("l3Ck")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Zrlr"),o=n.n(r),a=n("wxAW"),c=n.n(a),h=function(){function e(t,n,i){o()(this,e),this.canvas=t,this.ctx=t.getContext("2d"),this.width=t.width,this.height=t.height,this.frameImg=n,this.screenArea={w:i.w,h:i.h,x:i.x,y:i.y},this.init()}return c()(e,[{key:"init",value:function(){this.clear(),this.drawFrame()}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"clearScreenArea",value:function(){this.ctx.clearRect(this.screenArea.x,this.screenArea.y,this.screenArea.w,this.screenArea.h)}},{key:"drawFrame",value:function(){this.ctx.drawImage(this.frameImg,0,0,this.width,this.height)}},{key:"drawImage",value:function(e){var t=this.screenArea.w/e.width,n=this.screenArea.h/e.height,i=Math.min(t,n),r=this.screenArea.x+(this.screenArea.w-e.width*i)/2,o=this.screenArea.y+(this.screenArea.h-e.height*i)/2;this.clearScreenArea(),this.ctx.drawImage(e,0,0,e.width,e.height,r,o,e.width*i,e.height*i)}},{key:"toDataURL",value:function(e){if(e=e||"#000"){var t=this.ctx.globalCompositeOperation;this.ctx.globalCompositeOperation="destination-over",this.ctx.fillStyle=e,this.ctx.fillRect(this.screenArea.x,this.screenArea.y,this.screenArea.w,this.screenArea.h),this.ctx.globalCompositeOperation=t}return this.canvas.toDataURL("image/png")}}]),e}(),s={name:"mockup-tool",data:function(){return{board:null,ghostImg:null,ghostFrameImg:null,resultImgName:null,resultImgUrl:null,devices:[{name:"iOS",frameImgUrl:n("Ov3P"),canvasSize:{w:325,h:650},screenArea:{x:20,y:75,w:285,h:502}},{name:"Android",frameImgUrl:n("h6pK"),canvasSize:{w:325,h:640},screenArea:{x:20,y:58,w:287,h:520}}],deviceIndex:0}},mounted:function(){var e=this.devices[this.deviceIndex];this.initBoard(e)},computed:{canvasSize:function(){return this.devices[this.deviceIndex].canvasSize}},watch:{deviceIndex:function(e,t){var n=this,i=this.devices[e];this.initBoard(i,function(){n.ghostImg&&(n.board.drawImage(n.ghostImg),n.resultImgUrl=n.board.toDataURL())})}},methods:{initBoard:function(e,t){var n=this,i=document.getElementById("mockup-board");this.ghostFrameImg=this.ghostFrameImg?this.ghostFrameImg:new Image,this.ghostFrameImg.onload=function(){n.board=new h(i,n.ghostFrameImg,e.screenArea),t&&t()},this.ghostFrameImg.src=e.frameImgUrl},handleFile:function(e){var t=this,n=e.target.files[0];this.resultImgName="mock-"+n.name,this.ghostImg=this.ghostImg?this.ghostImg:new Image,this.ghostImg.onload=function(){t.board.drawImage(t.ghostImg),t.resultImgUrl=t.board.toDataURL(),URL.revokeObjectURL(t.ghostImg.src)},this.ghostImg.src=URL.createObjectURL(n)}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("h1",[e._v("Mock Tool")]),e._v(" "),n("div",{staticClass:"mockup-wrapper"},[n("div",{staticClass:"mockup-inner"},[n("canvas",{attrs:{id:"mockup-board",width:e.canvasSize.w,height:e.canvasSize.h}})]),e._v(" "),n("div",[e._v("\n      选择设备：\n      "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.deviceIndex,expression:"deviceIndex"}],attrs:{name:"",id:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.deviceIndex=t.target.multiple?n:n[0]}}},e._l(e.devices,function(t,i){return n("option",{domProps:{value:i}},[e._v(e._s(t.name))])})),e._v("\n\n      选择图片：\n      "),n("input",{attrs:{type:"file",accept:"image/*"},on:{change:e.handleFile}})]),e._v(" "),e.resultImgUrl?n("a",{staticClass:"btn-download",attrs:{href:e.resultImgUrl,download:e.devices[e.deviceIndex].name+"-"+e.resultImgName}},[e._v("下载")]):e._e()])])},f=[],l={render:u,staticRenderFns:f},d=l,C=n("VU/8"),p=i,g=C(s,d,!1,p,"data-v-f09f1ca4",null);t.default=g.exports},"9bBU":function(e,t,n){n("mClu");var i=n("FeBl").Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},C4MV:function(e,t,n){e.exports={default:n("9bBU"),__esModule:!0}},EqjI:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},FeBl:function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},MmMw:function(e,t,n){var i=n("EqjI");e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},ON07:function(e,t,n){var i=n("EqjI"),r=n("7KvD").document,o=i(r)&&i(r.createElement);e.exports=function(e){return o?r.createElement(e):{}}},Ov3P:function(e,t){e.exports="data:image/png;base64,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"},S82l:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},SfB7:function(e,t,n){e.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TDxe:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.page[data-v-f09f1ca4] {\n  min-width: 740px;\n  text-align: center;\n}\n.mockup-wrapper[data-v-f09f1ca4] {\n  position: relative;\n}\n/*.mockup-inner {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n}*/\n#mockup-board[data-v-f09f1ca4] {\n  width: 325px;\n  height: 650px;\n}\n.btn-download[data-v-f09f1ca4] {\n  display: inline-block;\n  margin: 20px;\n  padding: 5px 20px;\n  border: 1px solid blue;\n  color: blue;\n  text-decoration: none;\n}\n","",{version:3,sources:["/Users/alex/Code/toolbox/src/pages/mockup-tool.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;;;;;GAKG;AACH;EACE,aAAa;EACb,cAAc;CACf;AACD;EACE,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,sBAAsB;CACvB",file:"mockup-tool.vue",sourcesContent:["\n.page[data-v-f09f1ca4] {\n  min-width: 740px;\n  text-align: center;\n}\n.mockup-wrapper[data-v-f09f1ca4] {\n  position: relative;\n}\n/*.mockup-inner {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n}*/\n#mockup-board[data-v-f09f1ca4] {\n  width: 325px;\n  height: 650px;\n}\n.btn-download[data-v-f09f1ca4] {\n  display: inline-block;\n  margin: 20px;\n  padding: 5px 20px;\n  border: 1px solid blue;\n  color: blue;\n  text-decoration: none;\n}\n"],sourceRoot:""}])},X8DO:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},Zrlr:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},evD5:function(e,t,n){var i=n("77Pl"),r=n("SfB7"),o=n("MmMw"),a=Object.defineProperty;t.f=n("+E39")?Object.defineProperty:function(e,t,n){if(i(e),t=o(t,!0),i(n),r)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},h6pK:function(e,t,n){e.exports=n.p+"static/img/mockup-android.a1e72d9.png"},hJx8:function(e,t,n){var i=n("evD5"),r=n("X8DO");e.exports=n("+E39")?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},kM2E:function(e,t,n){var i=n("7KvD"),r=n("FeBl"),o=n("+ZMJ"),a=n("hJx8"),c=function(e,t,n){var h,s,u,f=e&c.F,l=e&c.G,d=e&c.S,C=e&c.P,p=e&c.B,g=e&c.W,E=l?r:r[t]||(r[t]={}),m=E.prototype,I=l?i:d?i[t]:(i[t]||{}).prototype;l&&(n=t);for(h in n)(s=!f&&I&&void 0!==I[h])&&h in E||(u=s?I[h]:n[h],E[h]=l&&"function"!=typeof I[h]?n[h]:p&&s?o(u,i):g&&I[h]==u?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(u):C&&"function"==typeof u?o(Function.call,u):u,C&&((E.virtual||(E.virtual={}))[h]=u,e&c.R&&m&&!m[h]&&a(m,h,u)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},l3Ck:function(e,t,n){var i=n("TDxe");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("012809b6",i,!0)},lOnJ:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},mClu:function(e,t,n){var i=n("kM2E");i(i.S+i.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},wxAW:function(e,t,n){"use strict";t.__esModule=!0;var i=n("C4MV"),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()}});
//# sourceMappingURL=3.c7d6dc2e75cfe9c654c6.js.map
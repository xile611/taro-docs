"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[26015],{79874:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),i=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},k=function(t){var e=i(t.components);return l.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),s=i(n),p=r,v=s["".concat(c,".").concat(p)]||s[p]||d[p]||a;return n?l.createElement(v,u(u({ref:e},k),{},{components:n})):l.createElement(v,u({ref:e},k))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=s;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var i=2;i<a;i++)u[i]=n[i];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58021:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return k}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},o=void 0,c={unversionedId:"apis/canvas/canvasToTempFilePath",id:"version-2.x/apis/canvas/canvasToTempFilePath",title:"Taro.canvasToTempFilePath(option, component)",description:"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 draw() \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002",source:"@site/versioned_docs/version-2.x/apis/canvas/canvasToTempFilePath.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasToTempFilePath",permalink:"/taro-docs/en/docs/2.x/apis/canvas/canvasToTempFilePath",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/canvas/canvasToTempFilePath.md",tags:[],version:"2.x",frontMatter:{title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},sidebar:"version-2.x/API",previous:{title:"createCanvasContext",permalink:"/taro-docs/en/docs/2.x/apis/canvas/createCanvasContext"},next:{title:"canvasPutImageData",permalink:"/taro-docs/en/docs/2.x/apis/canvas/canvasPutImageData"}},i={},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"fileType",id:"filetype",level:3},{value:"CanvasProps",id:"canvasprops",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:k};function s(t){var{components:e}=t,n=a(t,["components"]);return(0,l.kt)("wrapper",r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"draw()")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Bug & Tip\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"tip"),": \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"draw")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option, component?: Record<string, any>) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"canvas"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CanvasProps")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",(0,l.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas"),' \u7ec4\u4ef6\u5b9e\u4f8b \uff08canvas type="2d" \u65f6\u4f7f\u7528\u8be5\u5c5e\u6027\uff09\u3002')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"canvasId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",(0,l.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \u7ec4\u4ef6\u7684 canvas-id")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"quality"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u56fe\u7247\u7684\u8d28\u91cf\uff0c\u76ee\u524d\u4ec5\u5bf9 jpg \u6709\u6548\u3002\u53d6\u503c\u8303\u56f4\u4e3a (0, 1]\uff0c\u4e0d\u5728\u8303\u56f4\u5185\u65f6\u5f53\u4f5c 1.0 \u5904\u7406\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"destHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u9ad8\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"destWidth"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fileType"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"jpg" | "png"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"png"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u76ee\u6807\u6587\u4ef6\u7684\u7c7b\u578b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"height"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u9ad8\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"width"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"x"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u6a2a\u5750\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"y"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u7eb5\u5750\u6807")))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"tempFilePath"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u751f\u6210\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h3",r({},{id:"filetype"}),"fileType"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"jpg"),(0,l.kt)("td",null,"jpg \u56fe\u7247")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"png"),(0,l.kt)("td",null,"png \u56fe\u7247")))),(0,l.kt)("h3",r({},{id:"canvasprops"}),"CanvasProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6307\u5b9a canvas \u7c7b\u578b\uff0c\u652f\u6301 2d \u548c webgl")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"canvasId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"canvas \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u82e5\u6307\u5b9a\u4e86 type \u5219\u65e0\u9700\u518d\u6307\u5b9a\u8be5\u5c5e\u6027")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disableScroll"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5f53\u5728 canvas \u4e2d\u79fb\u52a8\u65f6\u4e14\u6709\u7ed1\u5b9a\u624b\u52bf\u4e8b\u4ef6\u65f6\uff0c\u7981\u6b62\u5c4f\u5e55\u6eda\u52a8\u4ee5\u53ca\u4e0b\u62c9\u5237\u65b0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTouchStart"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTouchMove"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTouchEnd"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTouchCancel"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onLongTap"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u624b\u6307\u957f\u6309 500ms \u4e4b\u540e\u89e6\u53d1\uff0c\u89e6\u53d1\u4e86\u957f\u6309\u4e8b\u4ef6\u540e\u8fdb\u884c\u79fb\u52a8\u4e0d\u4f1a\u89e6\u53d1\u5c4f\u5e55\u7684\u6eda\u52a8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<onErrorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = ","{errMsg: 'something wrong'}"," ")))),(0,l.kt)("h4",r({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string"))))),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.canvasToTempFilePath({\n  x: 100,\n  y: 200,\n  width: 50,\n  height: 50,\n  destWidth: 100,\n  destHeight: 100,\n  canvasId: 'myCanvas',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.canvasToTempFilePath"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);
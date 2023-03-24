"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41143],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),k=d(n),p=l,g=k["".concat(i,".").concat(p)]||k[p]||s[p]||a;return n?r.createElement(g,o(o({ref:e},c),{},{components:n})):r.createElement(g,o({ref:e},c))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},21382:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const o={title:"Taro.getBackgroundAudioPlayerState(option)",sidebar_label:"getBackgroundAudioPlayerState"},u=void 0,i={unversionedId:"apis/media/background-audio/getBackgroundAudioPlayerState",id:"version-2.x/apis/media/background-audio/getBackgroundAudioPlayerState",title:"Taro.getBackgroundAudioPlayerState(option)",description:"\u83b7\u53d6\u540e\u53f0\u97f3\u4e50\u64ad\u653e\u72b6\u6001\u3002",source:"@site/versioned_docs/version-2.x/apis/media/background-audio/getBackgroundAudioPlayerState.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/getBackgroundAudioPlayerState",permalink:"/taro-docs/docs/2.x/apis/media/background-audio/getBackgroundAudioPlayerState",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/media/background-audio/getBackgroundAudioPlayerState.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getBackgroundAudioPlayerState(option)",sidebar_label:"getBackgroundAudioPlayerState"},sidebar:"version-2.x/API",previous:{title:"onBackgroundAudioPause",permalink:"/taro-docs/docs/2.x/apis/media/background-audio/onBackgroundAudioPause"},next:{title:"getBackgroundAudioManager",permalink:"/taro-docs/docs/2.x/apis/media/background-audio/getBackgroundAudioManager"}},d={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"status",id:"status",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:c};function k(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)("wrapper",l({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6\u540e\u53f0\u97f3\u4e50\u64ad\u653e\u72b6\u6001\u3002\n",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a1.2.0 \u7248\u672c\u5f00\u59cb\uff0c\u672c\u63a5\u53e3\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 ",(0,r.kt)("a",l({parentName:"strong"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"}),"Taro.getBackgroundAudioManager")," \u63a5\u53e3")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",l({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",l({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"currentPosition"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u9009\u5b9a\u97f3\u9891\u7684\u64ad\u653e\u4f4d\u7f6e\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"dataUrl"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u6b4c\u66f2\u6570\u636e\u94fe\u63a5\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"downloadPercent"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u97f3\u9891\u7684\u4e0b\u8f7d\u8fdb\u5ea6\u767e\u5206\u6bd4\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u9009\u5b9a\u97f3\u9891\u7684\u957f\u5ea6\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"status"),(0,r.kt)("td",null,(0,r.kt)("code",null,"0 | 1 | 2")),(0,r.kt)("td",null,"\u64ad\u653e\u72b6\u6001")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,r.kt)("h3",l({},{id:"status"}),"status"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"\u6682\u505c\u4e2d")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"\u64ad\u653e\u4e2d")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"\u6ca1\u6709\u97f3\u4e50\u64ad\u653e")))),(0,r.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.getBackgroundAudioPlayerState({\n  success: function (res) {\n    var status = res.status\n    var dataUrl = res.dataUrl\n    var currentPosition = res.currentPosition\n    var duration = res.duration\n    var downloadPercent = res.downloadPercent\n  }\n})\n")),(0,r.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.getBackgroundAudioPlayerState"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);
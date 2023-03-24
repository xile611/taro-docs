"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[87512],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(v,c(c({ref:t},p),{},{components:n})):a.createElement(v,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"Taro.createCanvasContext(canvasId, component)",sidebar_label:"createCanvasContext"},s=void 0,i={unversionedId:"apis/canvas/createCanvasContext",id:"version-3.x/apis/canvas/createCanvasContext",title:"Taro.createCanvasContext(canvasId, component)",description:"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 CanvasContext \u5bf9\u8c61",source:"@site/versioned_docs/version-3.x/apis/canvas/createCanvasContext.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/createCanvasContext",permalink:"/taro-docs/docs/apis/canvas/createCanvasContext",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/canvas/createCanvasContext.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createCanvasContext(canvasId, component)",sidebar_label:"createCanvasContext"},sidebar:"API",previous:{title:"createOffscreenCanvas",permalink:"/taro-docs/docs/apis/canvas/createOffscreenCanvas"},next:{title:"canvasToTempFilePath",permalink:"/taro-docs/docs/apis/canvas/canvasToTempFilePath"}},l={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:p};function m(e){var{components:t}=e,c=o(e,["components"]);return(0,a.kt)("wrapper",r({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/apis/canvas/CanvasContext"}),"CanvasContext")," \u5bf9\u8c61"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tip"),": \u9700\u8981\u6307\u5b9a canvasId\uff0c\u8be5\u7ed8\u56fe\u4e0a\u4e0b\u6587\u53ea\u4f5c\u7528\u4e8e\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<canvas/>"),"\uff1b\u53e6\u5916\uff0cWeb \u7aef\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"useReady")," \u56de\u8c03\u4e2d\u6267\u884c\u5b83\uff0c\u5426\u5219\u4f1a\u56e0\u4e3a\u5e95\u5c42 canvas \u6e32\u67d3\u51fa\u6765\u4e4b\u524d\u800c\u53bb\u83b7\u53d6 CanvasContext\uff0c\u5bfc\u81f4\u5176\u5e95\u5c42\u7684 context \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u4ece\u800c\u4e0d\u80fd\u6b63\u5e38\u7ed8\u56fe\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(canvasId: string, component?: TaroGeneral.IAnyObject) => CanvasContext\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"canvasId"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8981\u83b7\u53d6\u4e0a\u4e0b\u6587\u7684 ",(0,a.kt)("a",r({parentName:"td"},{href:"/docs/components/canvas"}),"canvas")," \u7ec4\u4ef6 canvas-id \u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"component"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u8868\u793a\u5728\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\u67e5\u627e\u62e5\u6709 canvas-id \u7684 ",(0,a.kt)("a",r({parentName:"td"},{href:"/docs/components/canvas"}),"canvas")," \uff0c\u5982\u679c\u7701\u7565\u5219\u4e0d\u5728\u4efb\u4f55\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5185\u67e5\u627e")))),(0,a.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"import { useReady } from '@tarojs/taro'\n\nuseReady(() => {\n  const context = Taro.createCanvasContext('canvas')\n  context.setStrokeStyle(\"#00ff00\")\n  context.setLineWidth(5)\n  context.rect(0, 0, 200, 200)\n  context.stroke()\n  context.setStrokeStyle(\"#ff0000\")\n  context.setLineWidth(2)\n  context.moveTo(160, 100)\n  context.arc(100, 100, 60, 0, 2 * Math.PI, true)\n  context.moveTo(140, 100)\n  context.arc(100, 100, 40, 0, Math.PI, false)\n  context.moveTo(85, 80)\n  context.arc(80, 80, 5, 0, 2 * Math.PI, true)\n  context.moveTo(125, 80)\n  context.arc(120, 80, 5, 0, 2 * Math.PI, true)\n  context.stroke()\n  context.draw()\n})\n")))}m.isMDXComponent=!0},80068:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);
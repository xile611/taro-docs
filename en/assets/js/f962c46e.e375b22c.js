"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58221],{79874:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return g}});var n=t(93106);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),g=a,m=u["".concat(l,".").concat(g)]||u[g]||s[g]||o;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48970:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});t(93106);var n=t(79874);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={title:"Taro.getRecorderManager()",sidebar_label:"getRecorderManager"},i=void 0,l={unversionedId:"apis/media/recorder/getRecorderManager",id:"version-2.x/apis/media/recorder/getRecorderManager",title:"Taro.getRecorderManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u5f55\u97f3\u7ba1\u7406\u5668 RecorderManager",source:"@site/versioned_docs/version-2.x/apis/media/recorder/getRecorderManager.md",sourceDirName:"apis/media/recorder",slug:"/apis/media/recorder/getRecorderManager",permalink:"/taro-docs/en/docs/2.x/apis/media/recorder/getRecorderManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/media/recorder/getRecorderManager.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getRecorderManager()",sidebar_label:"getRecorderManager"},sidebar:"version-2.x/API",previous:{title:"startRecord",permalink:"/taro-docs/en/docs/2.x/apis/media/recorder/startRecord"},next:{title:"RecorderManager",permalink:"/taro-docs/en/docs/2.x/apis/media/recorder/RecorderManager"}},d={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:p};function u(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u83b7\u53d6",(0,n.kt)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u5f55\u97f3\u7ba1\u7406\u5668 RecorderManager"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => RecorderManager\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const recorderManager = Taro.getRecorderManager()\nrecorderManager.onStart(() => {\n  console.log('recorder start')\n})\nrecorderManager.onPause(() => {\n  console.log('recorder pause')\n})\nrecorderManager.onStop((res) => {\n  console.log('recorder stop', res)\n  const { tempFilePath } = res\n})\nrecorderManager.onFrameRecorded((res) => {\n  const { frameBuffer } = res\n  console.log('frameBuffer.byteLength', frameBuffer.byteLength)\n})\nconst options = {\n  duration: 10000,\n  sampleRate: 44100,\n  numberOfChannels: 1,\n  encodeBitRate: 192000,\n  format: 'aac',\n  frameSize: 50\n}\nrecorderManager.start(options)\n")),(0,n.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getRecorderManager"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);
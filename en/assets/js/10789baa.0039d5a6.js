"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[91546],{79874:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(93106);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return t?n.createElement(g,c(c({ref:r},d),{},{components:t})):n.createElement(g,c({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92046:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});t(93106);var n=t(79874);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={title:"Taro.getRecorderManager()",sidebar_label:"getRecorderManager"},i=void 0,l={unversionedId:"apis/media/recorder/getRecorderManager",id:"apis/media/recorder/getRecorderManager",title:"Taro.getRecorderManager()",description:"Obtains the globally unique recording manager RecorderManager.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/recorder/getRecorderManager.md",sourceDirName:"apis/media/recorder",slug:"/apis/media/recorder/getRecorderManager",permalink:"/taro-docs/en/docs/next/apis/media/recorder/getRecorderManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/recorder/getRecorderManager.md",tags:[],version:"current",frontMatter:{title:"Taro.getRecorderManager()",sidebar_label:"getRecorderManager"},sidebar:"API",previous:{title:"startRecord",permalink:"/taro-docs/en/docs/next/apis/media/recorder/startRecord"},next:{title:"RecorderManager",permalink:"/taro-docs/en/docs/next/apis/media/recorder/RecorderManager"}},p={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],s={toc:d};function u(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Obtains the ",(0,n.kt)("strong",{parentName:"p"},"globally unique")," recording manager RecorderManager."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/wx.getRecorderManager.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => RecorderManager\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const recorderManager = Taro.getRecorderManager()\nrecorderManager.onStart(() => {\n  console.log('recorder start')\n})\nrecorderManager.onPause(() => {\n  console.log('recorder pause')\n})\nrecorderManager.onStop((res) => {\n  console.log('recorder stop', res)\n  const { tempFilePath } = res\n})\nrecorderManager.onFrameRecorded((res) => {\n  const { frameBuffer } = res\n  console.log('frameBuffer.byteLength', frameBuffer.byteLength)\n})\nconst options = {\n  duration: 10000,\n  sampleRate: 44100,\n  numberOfChannels: 1,\n  encodeBitRate: 192000,\n  format: 'aac',\n  frameSize: 50\n}\nrecorderManager.start(options)\n")),(0,n.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getRecorderManager"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85135],{79874:function(t,e,l){l.d(e,{Zo:function(){return i},kt:function(){return m}});var a=l(93106);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,a)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,a,n=function(t,e){if(null==t)return{};var l,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var c=a.createContext({}),k=function(t){var e=a.useContext(c),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},i=function(t){var e=k(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var l=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),p=k(l),m=n,s=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return l?a.createElement(s,o(o({ref:e},i),{},{components:l})):a.createElement(s,o({ref:e},i))}));function m(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=l.length,o=new Array(r);o[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:n,o[1]=u;for(var k=2;k<r;k++)o[k]=l[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}p.displayName="MDXCreateElement"},67583:function(t,e,l){l.r(e),l.d(e,{assets:function(){return k},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return i}});l(93106);var a=l(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}return t},n.apply(this,arguments)}function r(t,e){if(null==t)return{};var l,a,n=function(t,e){if(null==t)return{};var l,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}const o={title:"CameraContext",sidebar_label:"CameraContext"},u=void 0,c={unversionedId:"apis/media/camera/CameraContext",id:"version-3.x/apis/media/camera/CameraContext",title:"CameraContext",description:"The CameraContext instance can be obtained via wx.createCameraContext.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/camera/CameraContext.md",sourceDirName:"apis/media/camera",slug:"/apis/media/camera/CameraContext",permalink:"/taro-docs/en/docs/apis/media/camera/CameraContext",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/camera/CameraContext.md",tags:[],version:"3.x",frontMatter:{title:"CameraContext",sidebar_label:"CameraContext"},sidebar:"API",previous:{title:"createCameraContext",permalink:"/taro-docs/en/docs/apis/media/camera/createCameraContext"},next:{title:"CameraFrameListener",permalink:"/taro-docs/en/docs/apis/media/camera/CameraFrameListener"}},k={},i=[{value:"Methods",id:"methods",level:2},{value:"startRecord",id:"startrecord",level:3},{value:"API Support",id:"api-support",level:4},{value:"stopRecord",id:"stoprecord",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"takePhoto",id:"takephoto",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"onCameraFrame",id:"oncameraframe",level:3},{value:"Sample Code",id:"sample-code",level:4},{value:"API Support",id:"api-support-3",level:4},{value:"Parameters",id:"parameters",level:2},{value:"StartRecordOption",id:"startrecordoption",level:3},{value:"StartRecordTimeoutCallback",id:"startrecordtimeoutcallback",level:3},{value:"StartRecordTimeoutCallbackResult",id:"startrecordtimeoutcallbackresult",level:3},{value:"StopRecordOption",id:"stoprecordoption",level:3},{value:"StopRecordSuccessCallbackResult",id:"stoprecordsuccesscallbackresult",level:3},{value:"TakePhotoOption",id:"takephotooption",level:3},{value:"TakePhotoSuccessCallbackResult",id:"takephotosuccesscallbackresult",level:3},{value:"OnCameraFrameCallback",id:"oncameraframecallback",level:3},{value:"OnCameraFrameCallbackResult",id:"oncameraframecallbackresult",level:3},{value:"quality",id:"quality",level:3},{value:"API Support",id:"api-support-4",level:2}],d={toc:i};function p(t){var{components:e}=t,l=r(t,["components"]);return(0,a.kt)("wrapper",n({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CameraContext")," instance can be obtained via wx.createCameraContext."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CameraContext")," is bound to the unique camera component on the page to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"camera")," component."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.html"}),"Reference"))),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("h3",n({},{id:"startrecord"}),"startRecord"),(0,a.kt)("p",null,"Starts video recording."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.startRecord.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option: StartRecordOption) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"option"),(0,a.kt)("td",null,(0,a.kt)("code",null,"StartRecordOption"))))),(0,a.kt)("h4",n({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"CameraContext.startRecord"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,a.kt)("h3",n({},{id:"stoprecord"}),"stopRecord"),(0,a.kt)("p",null,"Stops video recording."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.stopRecord.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option?: StopRecordOption) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"option"),(0,a.kt)("td",null,(0,a.kt)("code",null,"StopRecordOption"))))),(0,a.kt)("h4",n({},{id:"api-support-1"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"CameraContext.stopRecord"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,a.kt)("h3",n({},{id:"takephoto"}),"takePhoto"),(0,a.kt)("p",null,"Takes a photo."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.takePhoto.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option: TakePhotoOption) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"option"),(0,a.kt)("td",null,(0,a.kt)("code",null,"TakePhotoOption"))))),(0,a.kt)("h4",n({},{id:"api-support-2"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"CameraContext.takePhoto"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,a.kt)("h3",n({},{id:"oncameraframe"}),"onCameraFrame"),(0,a.kt)("p",null,"Gets the Camera real-time frame data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: To use this API, you must specify frame-size in the ",(0,a.kt)("inlineCode",{parentName:"strong"},"camera")," component property.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.onCameraFrame.html"}),"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCameraFrameCallback) => CameraFrameListener\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"callback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"OnCameraFrameCallback")),(0,a.kt)("td",null,"Callback function")))),(0,a.kt)("h4",n({},{id:"sample-code"}),"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"const context = wx.createCameraContext()\nconst listener = context.onCameraFrame((frame) => {\n  console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)\n})\nlistener.start()\n")),(0,a.kt)("h4",n({},{id:"api-support-3"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"CameraContext.onCameraFrame"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("h3",n({},{id:"startrecordoption"}),"StartRecordOption"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"timeoutCallback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"StartRecordTimeoutCallback")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Video recording will end after 30 sec or the page is ",(0,a.kt)("code",null,"onHide"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",n({},{id:"startrecordtimeoutcallback"}),"StartRecordTimeoutCallback"),(0,a.kt)("p",null,"Video recording will end after 30 sec or the page is ",(0,a.kt)("inlineCode",{parentName:"p"},"onHide"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(result: StartRecordTimeoutCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"StartRecordTimeoutCallbackResult"))))),(0,a.kt)("h3",n({},{id:"startrecordtimeoutcallbackresult"}),"StartRecordTimeoutCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempThumbPath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The temporary path to cover images files")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempVideoPath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The temporary path to video files")))),(0,a.kt)("h3",n({},{id:"stoprecordoption"}),"StopRecordOption"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",n({},{id:"stoprecordsuccesscallbackresult"}),"StopRecordSuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempThumbPath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The temporary path to cover images files")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempVideoPath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The temporary path to video files")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Call result")))),(0,a.kt)("h3",n({},{id:"takephotooption"}),"TakePhotoOption"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"quality"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"high" | "normal" | "low"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Image quality")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",n({},{id:"takephotosuccesscallbackresult"}),"TakePhotoSuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempImagePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The temporary path to photo files (jpg for Android and png for iOS).")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Call result")))),(0,a.kt)("h3",n({},{id:"oncameraframecallback"}),"OnCameraFrameCallback"),(0,a.kt)("p",null,"Callback function"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(result: OnCameraFrameCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"OnCameraFrameCallbackResult"))))),(0,a.kt)("h3",n({},{id:"oncameraframecallbackresult"}),"OnCameraFrameCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"data"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ArrayBuffer")),(0,a.kt)("td",null,"The image pixel data, which is a one-dimensional array in which every four items express the RGBA color of one pixel.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The height of the image data rectangle")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"width"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The width of the image data rectangle")))),(0,a.kt)("h3",n({},{id:"quality"}),"quality"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"high"),(0,a.kt)("td",null,"High quality")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"normal"),(0,a.kt)("td",null,"Normal quality")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"low"),(0,a.kt)("td",null,"Low quality")))),(0,a.kt)("h2",n({},{id:"api-support-4"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"CameraContext.startRecord"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"CameraContext.stopRecord"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"CameraContext.takePhoto"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"CameraContext.onCameraFrame"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);
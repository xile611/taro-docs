"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17105],{79874:function(t,e,l){l.d(e,{Zo:function(){return p},kt:function(){return s}});var n=l(93106);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var o=n.createContext({}),k=function(t){var e=n.useContext(o),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},p=function(t){var e=k(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=k(l),s=a,m=d["".concat(o,".").concat(s)]||d[s]||c[s]||r;return l?n.createElement(m,i(i({ref:e},p),{},{components:l})):n.createElement(m,i({ref:e},p))}));function s(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,i=new Array(r);i[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var k=2;k<r;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},25318:function(t,e,l){l.r(e),l.d(e,{assets:function(){return k},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});l(93106);var n=l(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},a.apply(this,arguments)}function r(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}const i={title:"LivePlayerContext",sidebar_label:"LivePlayerContext"},u=void 0,o={unversionedId:"apis/media/live/LivePlayerContext",id:"apis/media/live/LivePlayerContext",title:"LivePlayerContext",description:"The LivePlayerContext instance can be obtained with Taro.createLivePlayerContext.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/live/LivePlayerContext.md",sourceDirName:"apis/media/live",slug:"/apis/media/live/LivePlayerContext",permalink:"/taro-docs/en/docs/next/apis/media/live/LivePlayerContext",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/live/LivePlayerContext.md",tags:[],version:"current",frontMatter:{title:"LivePlayerContext",sidebar_label:"LivePlayerContext"},sidebar:"API",previous:{title:"createLivePlayerContext",permalink:"/taro-docs/en/docs/next/apis/media/live/createLivePlayerContext"},next:{title:"LivePusherContext",permalink:"/taro-docs/en/docs/next/apis/media/live/LivePusherContext"}},k={},p=[{value:"Methods",id:"methods",level:2},{value:"exitFullScreen",id:"exitfullscreen",level:3},{value:"API Support",id:"api-support",level:4},{value:"mute",id:"mute",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"pause",id:"pause",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"play",id:"play",level:3},{value:"API Support",id:"api-support-3",level:4},{value:"requestFullScreen",id:"requestfullscreen",level:3},{value:"API Support",id:"api-support-4",level:4},{value:"resume",id:"resume",level:3},{value:"API Support",id:"api-support-5",level:4},{value:"snapshot",id:"snapshot",level:3},{value:"API Support",id:"api-support-6",level:4},{value:"stop",id:"stop",level:3},{value:"API Support",id:"api-support-7",level:4},{value:"Parameters",id:"parameters",level:2},{value:"ExitFullScreenOption",id:"exitfullscreenoption",level:3},{value:"MuteOption",id:"muteoption",level:3},{value:"PauseOption",id:"pauseoption",level:3},{value:"PlayOption",id:"playoption",level:3},{value:"RequestFullScreenOption",id:"requestfullscreenoption",level:3},{value:"ResumeOption",id:"resumeoption",level:3},{value:"SnapshotOption",id:"snapshotoption",level:3},{value:"SnapshotSuccessCallbackResult",id:"snapshotsuccesscallbackresult",level:3},{value:"StopOption",id:"stopoption",level:3},{value:"API Support",id:"api-support-8",level:2}],c={toc:p};function d(t){var{components:e}=t,l=r(t,["components"]);return(0,n.kt)("wrapper",a({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"LivePlayerContext")," instance can be obtained with ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro.createLivePlayerContext"),".\n",(0,n.kt)("inlineCode",{parentName:"p"},"LivePlayerContext")," is bound to an ",(0,n.kt)("inlineCode",{parentName:"p"},"live-player")," component with an id, to work with the ",(0,n.kt)("inlineCode",{parentName:"p"},"live-player")," component."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("h3",a({},{id:"exitfullscreen"}),"exitFullScreen"),(0,n.kt)("p",null,"Exits the full screen"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.exitFullScreen.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: ExitFullScreenOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ExitFullScreenOption"))))),(0,n.kt)("h4",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.exitFullScreen"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"mute"}),"mute"),(0,n.kt)("p",null,"Mute"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.mute.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: MuteOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"MuteOption"))))),(0,n.kt)("h4",a({},{id:"api-support-1"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.mute"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"pause"}),"pause"),(0,n.kt)("p",null,"Pause"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.pause.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: PauseOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"PauseOption"))))),(0,n.kt)("h4",a({},{id:"api-support-2"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.pause"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"play"}),"play"),(0,n.kt)("p",null,"Plays an audio file."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.play.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: PlayOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"PlayOption"))))),(0,n.kt)("h4",a({},{id:"api-support-3"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.play"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"requestfullscreen"}),"requestFullScreen"),(0,n.kt)("p",null,"Enters the full screen."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.requestFullScreen.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: RequestFullScreenOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"RequestFullScreenOption"))))),(0,n.kt)("h4",a({},{id:"api-support-4"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.requestFullScreen"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"resume"}),"resume"),(0,n.kt)("p",null,"Redoes the operation."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.resume.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: ResumeOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ResumeOption"))))),(0,n.kt)("h4",a({},{id:"api-support-5"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.resume"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"snapshot"}),"snapshot"),(0,n.kt)("p",null,"Screenshot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.snapshot.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: SnapshotOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"SnapshotOption"))))),(0,n.kt)("h4",a({},{id:"api-support-6"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.snapshot"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"stop"}),"stop"),(0,n.kt)("p",null,"Stop"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.stop.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: StopOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"StopOption"))))),(0,n.kt)("h4",a({},{id:"api-support-7"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.stop"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",a({},{id:"exitfullscreenoption"}),"ExitFullScreenOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"muteoption"}),"MuteOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"pauseoption"}),"PauseOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"playoption"}),"PlayOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"requestfullscreenoption"}),"RequestFullScreenOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"direction"),(0,n.kt)("td",null,(0,n.kt)("code",null,"0 | 90 | -90")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specifies the direction in the full screen")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"resumeoption"}),"ResumeOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"snapshotoption"}),"SnapshotOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"snapshotsuccesscallbackresult"}),"SnapshotSuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"height"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The height of an image")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempImagePath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Temporary path to images files")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"width"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The width of an image")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",a({},{id:"stopoption"}),"StopOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h2",a({},{id:"api-support-8"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.exitFullScreen"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.mute"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.pause"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.play"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.requestFullScreen"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.resume"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.snapshot"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"LivePlayerContext.stop"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);
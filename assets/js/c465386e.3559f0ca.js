"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[22334],{79874:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),c=d(a),N=r,g=c["".concat(p,".").concat(N)]||c[N]||k[N]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30260:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"Camera",sidebar_label:"Camera"},m=void 0,p={unversionedId:"components/media/camera",id:"components/media/camera",title:"Camera",description:"\u7cfb\u7edf\u76f8\u673a",source:"@site/docs/components/media/camera.md",sourceDirName:"components/media",slug:"/components/media/camera",permalink:"/taro-docs/docs/next/components/media/camera",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/media/camera.md",tags:[],version:"current",frontMatter:{title:"Camera",sidebar_label:"Camera"},sidebar:"components",previous:{title:"Audio",permalink:"/taro-docs/docs/next/components/media/audio"},next:{title:"ChannelLive",permalink:"/taro-docs/docs/next/components/media/channel-live"}},d={},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"CameraProps",id:"cameraprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"Mode",id:"mode",level:3},{value:"Resolution",id:"resolution",level:3},{value:"DevicePosition",id:"deviceposition",level:3},{value:"Flash",id:"flash",level:3},{value:"FrameSize",id:"framesize",level:3},{value:"onInitDoneEventDetail",id:"oninitdoneeventdetail",level:3},{value:"onScanCodeEventDetail",id:"onscancodeeventdetail",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:4}],k={toc:o};function c(t){var{components:e}=t,i=l(t,["components"]);return(0,n.kt)("wrapper",r({},k,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u7cfb\u7edf\u76f8\u673a"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(50154).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(88789).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:a(75629).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:a(47067).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:a(45225).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CameraProps>\n")),(0,n.kt)("h2",r({},{id:"cameraprops"}),"CameraProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mode"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof Mode")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"normal"')),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6a21\u5f0f\uff0c\u6709\u6548\u503c\u4e3anormal, scanCode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"resolution"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof Resolution")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"medium"')),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5206\u8fa8\u7387\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"devicePosition"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof DevicePosition")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"back"')),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6444\u50cf\u5934\u671d\u5411")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"flash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof Flash")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"auto"')),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u95ea\u5149\u706f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"frameSize"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof FrameSize")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"medium"')),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6307\u5b9a\u671f\u671b\u7684\u76f8\u673a\u5e27\u6570\u636e\u5c3a\u5bf8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"outputDimension"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"360P" or "540P" or "720P" or "1080P" or "max"'),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"720P"')),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u76f8\u673a\u62cd\u7167\uff0c\u5f55\u5236\u7684\u5206\u8fa8\u7387\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onStop"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6444\u50cf\u5934\u5728\u975e\u6b63\u5e38\u7ec8\u6b62\u65f6\u89e6\u53d1\uff0c",(0,n.kt)("br",null),"\u5982\u9000\u51fa\u540e\u53f0\u7b49\u60c5\u51b5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onError"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u7528\u6237\u4e0d\u5141\u8bb8\u4f7f\u7528\u6444\u50cf\u5934\u65f6\u89e6\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onInitDone"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onInitDoneEventDetail>")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u76f8\u673a\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onReady"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onInitDoneEventDetail>")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u76f8\u673a\u521d\u59cb\u5316\u6210\u529f\u65f6\u89e6\u53d1\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onScanCode"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onScanCodeEventDetail>")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u6210\u529f\u8bc6\u522b\u5230\u4e00\u7ef4\u7801\u65f6\u89e6\u53d1\uff0c",(0,n.kt)("br",null),'\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')))),(0,n.kt)("h3",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"Harmony"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.mode"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.resolution"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.devicePosition"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.flash"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.frameSize"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.outputDimension"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onStop"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onError"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onInitDone"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onReady"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onScanCode"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",r({},{id:"mode"}),"Mode"),(0,n.kt)("p",null,"mode \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"normal"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u76f8\u673a\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"scanCode"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u626b\u7801\u6a21\u5f0f")))),(0,n.kt)("h3",r({},{id:"resolution"}),"Resolution"),(0,n.kt)("p",null,"resolution \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"low"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4f4e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"medium"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4e2d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"high"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9ad8")))),(0,n.kt)("h3",r({},{id:"deviceposition"}),"DevicePosition"),(0,n.kt)("p",null,"device-position \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"front"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u524d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"back"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u540e\u7f6e")))),(0,n.kt)("h3",r({},{id:"flash"}),"Flash"),(0,n.kt)("p",null,"flash \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"auto"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u81ea\u52a8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"on"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6253\u5f00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"off"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5173\u95ed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"torch"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5e38\u4eae")))),(0,n.kt)("h3",r({},{id:"framesize"}),"FrameSize"),(0,n.kt)("p",null,"frame-size \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"small"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5c0f\u5c3a\u5bf8\u5e27\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"medium"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4e2d\u5c3a\u5bf8\u5e27\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"large"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5927\u5c3a\u5bf8\u5e27\u6570\u636e")))),(0,n.kt)("h3",r({},{id:"oninitdoneeventdetail"}),"onInitDoneEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"maxZoom"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6700\u5927\u53d8\u7126")))),(0,n.kt)("h3",r({},{id:"onscancodeeventdetail"}),"onScanCodeEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"charSet"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5b57\u7b26\u96c6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"rawData"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u539f\u59cb\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u7801\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8bc6\u522b\u7ed3\u679c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fullResult"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8bc6\u522b\u7ed3\u679c(\u5b8c\u6574)")))),(0,n.kt)("h4",r({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"Harmony"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"onScanCodeEventDetail.rawData"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"onScanCodeEventDetail.fullResult"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))))}c.isMDXComponent=!0},88789:function(t,e,a){e.Z=a.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},80068:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},45225:function(t,e,a){e.Z=a.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},47067:function(t,e,a){e.Z=a.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},96636:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},50154:function(t,e,a){e.Z=a.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},75629:function(t,e,a){e.Z=a.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},88421:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);
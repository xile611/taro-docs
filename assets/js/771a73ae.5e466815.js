"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23405],{79874:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return k}});var r=a(93106);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=m(a),k=n,u=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return a?r.createElement(u,i(i({ref:e},c),{},{components:a})):r.createElement(u,i({ref:e},c))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26646:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const i={title:"MediaRecorder",sidebar_label:"MediaRecorder"},o=void 0,p={unversionedId:"apis/media/media-recorder/MediaRecorder",id:"version-3.x/apis/media/media-recorder/MediaRecorder",title:"MediaRecorder",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-3.x/apis/media/media-recorder/MediaRecorder.md",sourceDirName:"apis/media/media-recorder",slug:"/apis/media/media-recorder/MediaRecorder",permalink:"/taro-docs/docs/apis/media/media-recorder/MediaRecorder",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/media-recorder/MediaRecorder.md",tags:[],version:"3.x",frontMatter:{title:"MediaRecorder",sidebar_label:"MediaRecorder"},sidebar:"API",previous:{title:"createMediaRecorder",permalink:"/taro-docs/docs/apis/media/media-recorder/createMediaRecorder"},next:{title:"createVideoDecoder",permalink:"/taro-docs/docs/apis/media/video-decoder/createVideoDecoder"}},m={},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"destroy",id:"destroy",level:3},{value:"off",id:"off",level:3},{value:"on",id:"on",level:3},{value:"pause",id:"pause",level:3},{value:"requestFrame",id:"requestframe",level:3},{value:"resume",id:"resume",level:3},{value:"start",id:"start",level:3},{value:"stop",id:"stop",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"on",id:"on-1",level:3},{value:"EventName",id:"eventname",level:4},{value:"Callback",id:"callback",level:4},{value:"requestFrame",id:"requestframe-1",level:3},{value:"Callback",id:"callback-1",level:4},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:c};function s(t){var{components:e}=t,i=l(t,["components"]);return(0,r.kt)("wrapper",n({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",n({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("h3",n({},{id:"destroy"}),"destroy"),(0,r.kt)("p",null,"\u9500\u6bc1\u5f55\u5236\u5668"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.destroy.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<void>\n")),(0,r.kt)("h3",n({},{id:"off"}),"off"),(0,r.kt)("p",null,"\u53d6\u6d88\u76d1\u542c\u5f55\u5236\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.off.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(eventName: keyof EventName, callback: Callback) => Promise<void>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"eventName"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"keyof EventName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"callback"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Callback")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",n({},{id:"on"}),"on"),(0,r.kt)("p",null,"\u6ce8\u518c\u76d1\u542c\u5f55\u5236\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.on.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(eventName: keyof EventName, callback: Callback) => Promise<void>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"eventName"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"keyof EventName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"callback"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Callback")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",n({},{id:"pause"}),"pause"),(0,r.kt)("p",null,"\u6682\u505c\u5f55\u5236"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.pause.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<void>\n")),(0,r.kt)("h3",n({},{id:"requestframe"}),"requestFrame"),(0,r.kt)("p",null,"\u8bf7\u6c42\u4e0b\u4e00\u5e27\u5f55\u5236\uff0c\u5728 callback \u91cc\u5b8c\u6210\u4e00\u5e27\u6e32\u67d3\u540e\u5f00\u59cb\u5f55\u5236\u5f53\u524d\u5e27"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.requestFrame.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => Promise<void>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"callback"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Callback"))))),(0,r.kt)("h3",n({},{id:"resume"}),"resume"),(0,r.kt)("p",null,"\u6062\u590d\u5f55\u5236"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.resume.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<void>\n")),(0,r.kt)("h3",n({},{id:"start"}),"start"),(0,r.kt)("p",null,"\u5f00\u59cb\u5f55\u5236"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.start.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<void>\n")),(0,r.kt)("h3",n({},{id:"stop"}),"stop"),(0,r.kt)("p",null,"\u7ed3\u675f\u5f55\u5236"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.stop.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<void>\n")),(0,r.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",n({},{id:"on-1"}),"on"),(0,r.kt)("h4",n({},{id:"eventname"}),"EventName"),(0,r.kt)("p",null,"eventName \u7684\u5408\u6cd5\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"start"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u5f55\u5236\u5f00\u59cb\u4e8b\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"stop"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u5f55\u5236\u7ed3\u675f\u4e8b\u4ef6\u3002\u8fd4\u56de {tempFilePath, duration, fileSize}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"pause"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u5f55\u5236\u6682\u505c\u4e8b\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"resume"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u5f55\u5236\u7ee7\u7eed\u4e8b\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"timeupdate"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u5f55\u5236\u65f6\u95f4\u66f4\u65b0\u4e8b\u4ef6\u3002")))),(0,r.kt)("h4",n({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(res: { tempFilePath: string; duration: number; fileSize: number; }) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"res"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{ tempFilePath: string; duration: number; fileSize: number; }"))))),(0,r.kt)("h3",n({},{id:"requestframe-1"}),"requestFrame"),(0,r.kt)("h4",n({},{id:"callback-1"}),"Callback"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,r.kt)("h2",n({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaRecorder.destroy"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaRecorder.off"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaRecorder.on"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaRecorder.pause"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaRecorder.requestFrame"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaRecorder.resume"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaRecorder.start"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"MediaRecorder.stop"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},80068:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);
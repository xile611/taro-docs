"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60506],{79874:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return d}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},k=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,i=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),s=c(n),d=l,f=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return n?r.createElement(f,a(a({ref:e},k),{},{components:n})):r.createElement(f,a({ref:e},k))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34142:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return k}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const a={title:"Taro.getNetworkType(option)",sidebar_label:"getNetworkType"},u=void 0,i={unversionedId:"apis/device/network/getNetworkType",id:"version-2.x/apis/device/network/getNetworkType",title:"Taro.getNetworkType(option)",description:"\u83b7\u53d6\u7f51\u7edc\u7c7b\u578b\u3002",source:"@site/versioned_docs/version-2.x/apis/device/network/getNetworkType.md",sourceDirName:"apis/device/network",slug:"/apis/device/network/getNetworkType",permalink:"/taro-docs/docs/2.x/apis/device/network/getNetworkType",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/network/getNetworkType.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getNetworkType(option)",sidebar_label:"getNetworkType"},sidebar:"version-2.x/API",previous:{title:"offNetworkStatusChange",permalink:"/taro-docs/docs/2.x/apis/device/network/offNetworkStatusChange"},next:{title:"setScreenBrightness",permalink:"/taro-docs/docs/2.x/apis/device/screen/setScreenBrightness"}},c={},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"networkType",id:"networktype",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:k};function s(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",l({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6\u7f51\u7edc\u7c7b\u578b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",l({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",l({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"networkType"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"wifi" | "2g" | "3g" | "4g" | "unknown" | "none"')),(0,r.kt)("td",null,"\u7f51\u7edc\u7c7b\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,r.kt)("h3",l({},{id:"networktype"}),"networkType"),(0,r.kt)("p",null,"\u7f51\u7edc\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"wifi"),(0,r.kt)("td",null,"wifi \u7f51\u7edc")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2g"),(0,r.kt)("td",null,"2g \u7f51\u7edc")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3g"),(0,r.kt)("td",null,"3g \u7f51\u7edc")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4g"),(0,r.kt)("td",null,"4g \u7f51\u7edc")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"unknown"),(0,r.kt)("td",null,"Android \u4e0b\u4e0d\u5e38\u89c1\u7684\u7f51\u7edc\u7c7b\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"none"),(0,r.kt)("td",null,"\u65e0\u7f51\u7edc")))),(0,r.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.getNetworkType({\n  success: function (res) {\n    // \u8fd4\u56de\u7f51\u7edc\u7c7b\u578b, \u6709\u6548\u503c\uff1a\n    // wifi/2g/3g/4g/unknown(Android\u4e0b\u4e0d\u5e38\u89c1\u7684\u7f51\u7edc\u7c7b\u578b)/none(\u65e0\u7f51\u7edc)\n    var networkType = res.networkType\n  }\n})\n")),(0,r.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.getNetworkType"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);
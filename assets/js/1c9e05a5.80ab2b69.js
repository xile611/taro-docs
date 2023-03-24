"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56754],{79874:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return v}});var n=r(93106);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(r),v=l,k=d["".concat(c,".").concat(v)]||d[v]||p[v]||o;return r?n.createElement(k,a(a({ref:e},u),{},{components:r})):n.createElement(k,a({ref:e},u))}));function v(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4378:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});r(93106);var n=r(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}const a={title:"Taro.startLocalServiceDiscovery(option)",sidebar_label:"startLocalServiceDiscovery"},i=void 0,c={unversionedId:"apis/network/mdns/startLocalServiceDiscovery",id:"version-2.x/apis/network/mdns/startLocalServiceDiscovery",title:"Taro.startLocalServiceDiscovery(option)",description:"\u5f00\u59cb\u641c\u7d22\u5c40\u57df\u7f51\u4e0b\u7684 mDNS \u670d\u52a1\u3002\u641c\u7d22\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7 wx.onLocalService* \u4e8b\u4ef6\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-2.x/apis/network/mdns/startLocalServiceDiscovery.md",sourceDirName:"apis/network/mdns",slug:"/apis/network/mdns/startLocalServiceDiscovery",permalink:"/taro-docs/docs/2.x/apis/network/mdns/startLocalServiceDiscovery",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/network/mdns/startLocalServiceDiscovery.md",tags:[],version:"2.x",frontMatter:{title:"Taro.startLocalServiceDiscovery(option)",sidebar_label:"startLocalServiceDiscovery"},sidebar:"version-2.x/API",previous:{title:"stopLocalServiceDiscovery",permalink:"/taro-docs/docs/2.x/apis/network/mdns/stopLocalServiceDiscovery"},next:{title:"onLocalServiceResolveFail",permalink:"/taro-docs/docs/2.x/apis/network/mdns/onLocalServiceResolveFail"}},s={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"FailCallbackResult",id:"failcallbackresult",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:u};function d(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",l({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5f00\u59cb\u641c\u7d22\u5c40\u57df\u7f51\u4e0b\u7684 mDNS \u670d\u52a1\u3002\u641c\u7d22\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7 wx.onLocalService* \u4e8b\u4ef6\u8fd4\u56de\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"wx.startLocalServiceDiscovery \u662f\u4e00\u4e2a\u6d88\u8017\u6027\u80fd\u7684\u884c\u4e3a\uff0c\u5f00\u59cb 30 \u79d2\u540e\u4f1a\u81ea\u52a8 stop \u5e76\u6267\u884c wx.onLocalServiceDiscoveryStop \u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u8c03\u7528 wx.startLocalServiceDiscovery \u540e\uff0c\u5728\u8fd9\u6b21\u641c\u7d22\u884c\u4e3a\u505c\u6b62\u540e\u624d\u80fd\u53d1\u8d77\u4e0b\u6b21 wx.startLocalServiceDiscovery\u3002\u505c\u6b62\u672c\u6b21\u641c\u7d22\u884c\u4e3a\u7684\u64cd\u4f5c\u5305\u62ec\u8c03\u7528 wx.stopLocalServiceDiscovery \u548c 30 \u79d2\u540e\u7cfb\u7edf\u81ea\u52a8 stop \u672c\u6b21\u641c\u7d22\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,n.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",l({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(result: FailCallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",l({},{id:"failcallbackresult"}),"FailCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u9519\u8bef\u4fe1\u606f",(0,n.kt)("br",null),(0,n.kt)("br",null),"\u53ef\u9009\u503c\uff1a",(0,n.kt)("br",null),"- 'invalid param': serviceType \u4e3a\u7a7a;",(0,n.kt)("br",null),"- 'scan task already exist': \u5728\u5f53\u524d startLocalServiceDiscovery \u53d1\u8d77\u7684\u641c\u7d22\u672a\u505c\u6b62\u7684\u60c5\u51b5\u4e0b\uff0c\u518d\u6b21\u8c03\u7528 startLocalServiceDiscovery;")))),(0,n.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.startLocalServiceDiscovery"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34037],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var l=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,k=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?l.createElement(k,o(o({ref:t},s),{},{components:n})):l.createElement(k,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Taro.getSavedFileInfo(option)",sidebar_label:"getSavedFileInfo"},i=void 0,u={unversionedId:"apis/files/getSavedFileInfo",id:"version-2.x/apis/files/getSavedFileInfo",title:"Taro.getSavedFileInfo(option)",description:"\u83b7\u53d6\u672c\u5730\u6587\u4ef6\u7684\u6587\u4ef6\u4fe1\u606f\u3002\u6b64\u63a5\u53e3\u53ea\u80fd\u7528\u4e8e\u83b7\u53d6\u5df2\u4fdd\u5b58\u5230\u672c\u5730\u7684\u6587\u4ef6\uff0c\u82e5\u9700\u8981\u83b7\u53d6\u4e34\u65f6\u6587\u4ef6\u4fe1\u606f\uff0c\u8bf7\u4f7f\u7528 Taro.getFileInfo \u63a5\u53e3\u3002",source:"@site/versioned_docs/version-2.x/apis/files/getSavedFileInfo.md",sourceDirName:"apis/files",slug:"/apis/files/getSavedFileInfo",permalink:"/taro-docs/docs/2.x/apis/files/getSavedFileInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/files/getSavedFileInfo.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getSavedFileInfo(option)",sidebar_label:"getSavedFileInfo"},sidebar:"version-2.x/API",previous:{title:"getSavedFileList",permalink:"/taro-docs/docs/2.x/apis/files/getSavedFileList"},next:{title:"getFileSystemManager",permalink:"/taro-docs/docs/2.x/apis/files/getFileSystemManager"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:s};function p(e){var{components:t}=e,n=a(e,["components"]);return(0,l.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u83b7\u53d6\u672c\u5730\u6587\u4ef6\u7684\u6587\u4ef6\u4fe1\u606f\u3002\u6b64\u63a5\u53e3\u53ea\u80fd\u7528\u4e8e\u83b7\u53d6\u5df2\u4fdd\u5b58\u5230\u672c\u5730\u7684\u6587\u4ef6\uff0c\u82e5\u9700\u8981\u83b7\u53d6\u4e34\u65f6\u6587\u4ef6\u4fe1\u606f\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html"}),"Taro.getFileInfo")," \u63a5\u53e3\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"filePath"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u6587\u4ef6\u8def\u5f84")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"createTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u6587\u4ef6\u4fdd\u5b58\u65f6\u7684\u65f6\u95f4\u6233\uff0c\u4ece1970/01/01 08:00:00 \u5230\u8be5\u65f6\u523b\u7684\u79d2\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"size"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.getSavedFileInfo({\n  filePath: 'wxfile://somefile', //\u4ec5\u505a\u793a\u4f8b\u7528\uff0c\u975e\u771f\u6b63\u7684\u6587\u4ef6\u8def\u5f84\n  success: function (res) {\n    console.log(res.size)\n    console.log(res.createTime)\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.getSavedFileInfo"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[725],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),m=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=m(n),c=a,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(k,i(i({ref:e},d),{},{components:n})):r.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50310:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Taro.requestOrderPayment(option)",sidebar_label:"requestOrderPayment"},p=void 0,o={unversionedId:"apis/payment/requestOrderPayment",id:"version-3.x/apis/payment/requestOrderPayment",title:"Taro.requestOrderPayment(option)",description:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7248\u4ea4\u6613\u7ec4\u4ef6\u8ba2\u5355\uff0c\u5e76\u53d1\u8d77\u652f\u4ed8\u3002 \u4ec5\u63a5\u5165\u4e86\u81ea\u5b9a\u4e49\u7248\u4ea4\u6613\u7ec4\u4ef6\u7684\u5c0f\u7a0b\u5e8f\u9700\u8981\u4f7f\u7528\uff0c\u666e\u901a\u5c0f\u7a0b\u5e8f\u53ef\u76f4\u63a5\u4f7f\u7528 Taro.requestPayment\u3002",source:"@site/versioned_docs/version-3.x/apis/payment/requestOrderPayment.md",sourceDirName:"apis/payment",slug:"/apis/payment/requestOrderPayment",permalink:"/taro-docs/en/docs/apis/payment/requestOrderPayment",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/payment/requestOrderPayment.md",tags:[],version:"3.x",frontMatter:{title:"Taro.requestOrderPayment(option)",sidebar_label:"requestOrderPayment"},sidebar:"API",previous:{title:"requestPayment",permalink:"/taro-docs/en/docs/apis/payment/requestPayment"},next:{title:"faceVerifyForPay",permalink:"/taro-docs/en/docs/apis/payment/faceVerifyForPay"}},m={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SignType",id:"signtype",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:d};function s(t){var{components:e}=t,i=l(t,["components"]);return(0,r.kt)("wrapper",a({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u521b\u5efa\u81ea\u5b9a\u4e49\u7248\u4ea4\u6613\u7ec4\u4ef6\u8ba2\u5355\uff0c\u5e76\u53d1\u8d77\u652f\u4ed8\u3002 \u4ec5\u63a5\u5165\u4e86",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ministore/minishopopencomponent2/Introduction2"}),"\u81ea\u5b9a\u4e49\u7248\u4ea4\u6613\u7ec4\u4ef6"),"\u7684\u5c0f\u7a0b\u5e8f\u9700\u8981\u4f7f\u7528\uff0c\u666e\u901a\u5c0f\u7a0b\u5e8f\u53ef\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.requestPayment"),"\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestOrderPayment.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"timeStamp"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u65f6\u95f4\u6233\uff0c\u4ece 1970 \u5e74 1 \u6708 1 \u65e5 00:00:00 \u81f3\u4eca\u7684\u79d2\u6570\uff0c\u5373\u5f53\u524d\u7684\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"nonceStr"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u957f\u5ea6\u4e3a32\u4e2a\u5b57\u7b26\u4ee5\u4e0b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"package"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7edf\u4e00\u4e0b\u5355\u63a5\u53e3\u8fd4\u56de\u7684 prepay_id \u53c2\u6570\u503c\uff0c\u63d0\u4ea4\u683c\u5f0f\u5982\uff1aprepay_id=***")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"orderInfo"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8ba2\u5355\u4fe1\u606f\uff0c\u4ec5\u5728\u9700\u8981\u6821\u9a8c\u7684\u573a\u666f\u4e0b\u9700\u8981\u4f20\u9012\uff0c\u5177\u4f53\u89c1",(0,r.kt)("a",a({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ministore/minishopopencomponent2/API/order/requestOrderPayment"}),"\u63a5\u53e3\u8bf4\u660e"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"extUserUin"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5916\u90e8 APP \u7528\u6237 ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"signType"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"keyof SignType")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7b7e\u540d\u7b97\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"paySign"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7b7e\u540d\uff0c\u5177\u4f53\u7b7e\u540d\u65b9\u6848\u53c2\u89c1 ",(0,r.kt)("a",a({parentName:"td"},{href:"https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3"}),"\u5c0f\u7a0b\u5e8f\u652f\u4ed8\u63a5\u53e3\u6587\u6863"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",a({},{id:"signtype"}),"SignType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"MD5"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4ec5\u5728\u5fae\u4fe1\u652f\u4ed8 v2 \u7248\u672c\u63a5\u53e3\u9002\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"HMAC-SHA256"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4ec5\u5728\u5fae\u4fe1\u652f\u4ed8 v2 \u7248\u672c\u63a5\u53e3\u9002\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"RSA"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4ec5\u5728\u5fae\u4fe1\u652f\u4ed8 v3 \u7248\u672c\u63a5\u53e3\u9002\u7528")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("p",null,"\u9664 orderInfo \u4ee5\u5916\uff0c\u5176\u4f59\u5b57\u6bb5\u4e0e ",(0,r.kt)("a",a({parentName:"p"},{href:"./requestPayment"}),"Taro.requestPayment")," \u4e00\u81f4"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.requestOrderPayment({\n  orderInfo: {},\n  timeStamp: '',\n  nonceStr: '',\n  package: '',\n  signType: 'MD5',\n  paySign: '',\n  success (res) { },\n  fail (res) { }\n})\n")))}s.isMDXComponent=!0},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);
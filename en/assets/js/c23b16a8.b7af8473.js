"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34573],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41890:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Taro.addInterceptor(callback)",sidebar_label:"addInterceptor"},c=void 0,i={unversionedId:"apis/network/request/addInterceptor",id:"version-2.x/apis/network/request/addInterceptor",title:"Taro.addInterceptor(callback)",description:"\u6700\u4f4e Taro \u7248\u672c: 1.2.16",source:"@site/versioned_docs/version-2.x/apis/network/request/addInterceptor.md",sourceDirName:"apis/network/request",slug:"/apis/network/request/addInterceptor",permalink:"/taro-docs/en/docs/2.x/apis/network/request/addInterceptor",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/network/request/addInterceptor.md",tags:[],version:"2.x",frontMatter:{title:"Taro.addInterceptor(callback)",sidebar_label:"addInterceptor"},sidebar:"version-2.x/API",previous:{title:"RequestTask",permalink:"/taro-docs/en/docs/2.x/apis/network/request/RequestTask"},next:{title:"downloadFile",permalink:"/taro-docs/en/docs/2.x/apis/network/download/downloadFile"}},p={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6700\u4f4e Taro \u7248\u672c: 1.2.16")),(0,n.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u62e6\u622a\u5668\u5728\u8bf7\u6c42\u53d1\u51fa\u524d\u6216\u53d1\u51fa\u540e\u505a\u4e00\u4e9b\u989d\u5916\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u5728\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro.request")," \u53d1\u8d77\u8bf7\u6c42\u4e4b\u524d\uff0c\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro.addInterceptor")," \u65b9\u6cd5\u4e3a\u8bf7\u6c42\u6dfb\u52a0\u62e6\u622a\u5668\uff0c\u62e6\u622a\u5668\u7684\u8c03\u7528\u987a\u5e8f\u9075\u5faa\u6d0b\u8471\u6a21\u578b\u3002\n\u62e6\u622a\u5668\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7 chain \u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u3002chain \u5bf9\u8c61\u4e2d\u542b\u6709 ",(0,n.kt)("strong",{parentName:"p"},"requestParmas")," \u5c5e\u6027\uff0c\u4ee3\u8868\u8bf7\u6c42\u53c2\u6570\u3002\u62e6\u622a\u5668\u5185\u6700\u540e\u9700\u8981\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"chain.proceed(requestParams)")," \u4ee5\u8c03\u7528\u4e0b\u4e00\u4e2a\u62e6\u622a\u5668\u6216\u53d1\u8d77\u8bf7\u6c42\u3002"),(0,n.kt)("p",null,"Taro \u63d0\u4f9b\u4e86\u4e24\u4e2a\u5185\u7f6e\u62e6\u622a\u5668 ",(0,n.kt)("inlineCode",{parentName:"p"},"logInterceptor")," \u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},"timeoutInterceptor"),"\uff0c\u5206\u522b\u7528\u4e8e\u6253\u5370\u8bf7\u6c42\u7684\u76f8\u5173\u4fe1\u606f\u548c\u5728\u8bf7\u6c42\u8d85\u65f6\u65f6\u629b\u51fa\u9519\u8bef\u3002"),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: Function) => void\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Function"))))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("h3",a({},{id:"\u793a\u4f8b-1"}),"\u793a\u4f8b 1"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const interceptor = function (chain) {\n  const requestParams = chain.requestParams\n  const { method, data, url } = requestParams\n\n  console.log(`http ${method || 'GET'} --\x3e ${url} data: `, data)\n\n  return chain.proceed(requestParams)\n    .then(res => {\n      console.log(`http <-- ${url} result:`, res)\n      return res\n    })\n  }\nTaro.addInterceptor(interceptor)\nTaro.request({ url })\n")),(0,n.kt)("h3",a({},{id:"\u793a\u4f8b-2"}),"\u793a\u4f8b 2"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.addInterceptor(Taro.interceptors.logInterceptor)\nTaro.addInterceptor(Taro.interceptors.timeoutInterceptor)\nTaro.request({ url })\n")),(0,n.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.addInterceptor"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);
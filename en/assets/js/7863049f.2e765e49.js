"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41376],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var i=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),f=r,k=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?i.createElement(k,a(a({ref:e},u),{},{components:n})):i.createElement(k,a({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54356:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});n(93106);var i=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const a={title:"Taro.setWifiList(option)",sidebar_label:"setWifiList"},o=void 0,s={unversionedId:"apis/device/wifi/setWifiList",id:"version-3.x/apis/device/wifi/setWifiList",title:"Taro.setWifiList(option)",description:"Sets the information on the AP in wifiList, which is called after the onGetWifiList callback. This API is specific to iOS.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/wifi/setWifiList.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/setWifiList",permalink:"/taro-docs/en/docs/apis/device/wifi/setWifiList",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/wifi/setWifiList.md",tags:[],version:"3.x",frontMatter:{title:"Taro.setWifiList(option)",sidebar_label:"setWifiList"},sidebar:"API",previous:{title:"startWifi",permalink:"/taro-docs/en/docs/apis/device/wifi/startWifi"},next:{title:"onWifiConnectedWithPartialInfo",permalink:"/taro-docs/en/docs/apis/device/wifi/onWifiConnectedWithPartialInfo"}},c={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"WifiData",id:"wifidata",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:u};function d(t){var{components:e}=t,n=l(t,["components"]);return(0,i.kt)("wrapper",r({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sets the information on the AP in ",(0,i.kt)("inlineCode",{parentName:"p"},"wifiList"),", which is called after the ",(0,i.kt)("inlineCode",{parentName:"p"},"onGetWifiList")," callback. ",(0,i.kt)("strong",{parentName:"p"},"This API is specific to iOS.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This API can only be called after the ",(0,i.kt)("inlineCode",{parentName:"li"},"onGetWifiList")," callback."),(0,i.kt)("li",{parentName:"ul"},"In this case, the app will be suspended and wait for the Mini Program to set the Wi-Fi network's information. Call the API as soon as possible. If no data is available, pass an empty array."),(0,i.kt)("li",{parentName:"ul"},"Multiple callbacks with a list of duplicate Wi-Fi devices may be received in a single process as the list of nearby Wi-Fi devices is refreshed.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/wifi/wx.setWifiList.html"}),"Reference"))),(0,i.kt)("h2",r({},{id:"type"}),"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<WifiError>\n")),(0,i.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,i.kt)("h3",r({},{id:"option"}),"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"wifiList"),(0,i.kt)("td",null,(0,i.kt)("code",null,"WifiData[]")),(0,i.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,i.kt)("td",null,"Provides a list of preset information of the Wi-Fi network")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"complete"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: any) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"fail"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: any) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a failed API call")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"success"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: Result) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a successful API call")))),(0,i.kt)("h3",r({},{id:"wifidata"}),"WifiData"),(0,i.kt)("p",null,"object.wifiList is composed as follows"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"BSSID"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The SSID of the Wi-Fi network")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"SSID"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The BSSID of the Wi-Fi network")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"password"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The password of the Wi-Fi device")))),(0,i.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.onGetWifiList(function (res) {\n  if (res.wifiList.length) {\n    Taro.setWifiList({\n      wifiList: [{\n        SSID: res.wifiList[0].SSID,\n        BSSID: res.wifiList[0].BSSID,\n        password: '123456'\n      }]\n    })\n  } else {\n    Taro.setWifiList({\n      wifiList: []\n    })\n  }\n})\nTaro.getWifiList()\n")),(0,i.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,i.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,i.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,i.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.setWifiList"),(0,i.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,i.kt)("td",r({parentName:"tr"},{align:"center"})),(0,i.kt)("td",r({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);
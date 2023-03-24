"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[2923],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(f,l(l({ref:e},u),{},{components:n})):r.createElement(f,l({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40380:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},i=void 0,c={unversionedId:"apis/device/ibeacon/IBeaconInfo",id:"apis/device/ibeacon/IBeaconInfo",title:"IBeaconInfo",description:"\u65b9\u6cd5",source:"@site/docs/apis/device/ibeacon/IBeaconInfo.md",sourceDirName:"apis/device/ibeacon",slug:"/apis/device/ibeacon/IBeaconInfo",permalink:"/taro-docs/docs/next/apis/device/ibeacon/IBeaconInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/ibeacon/IBeaconInfo.md",tags:[],version:"current",frontMatter:{title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},sidebar:"API",previous:{title:"getBeacons",permalink:"/taro-docs/docs/next/apis/device/ibeacon/getBeacons"},next:{title:"stopHCE",permalink:"/taro-docs/docs/next/apis/device/nfc/stopHCE"}},p={},u=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Proximity",id:"proximity",level:3}],d={toc:u};function m(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"uuid"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Beacon \u8bbe\u5907\u5e7f\u64ad\u7684 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"major"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Beacon \u8bbe\u5907\u7684\u4e3b ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"minor"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Beacon \u8bbe\u5907\u7684\u6b21 ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"proximity"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"keyof Proximity")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8868\u793a\u8bbe\u5907\u8ddd\u79bb\u7684\u679a\u4e3e\u503c\uff08\u4ec5iOS\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"accuracy"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Beacon \u8bbe\u5907\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d m\u3002iOS \u4e0a\uff0cproximity \u4e3a 0 \u65f6\uff0caccuracy \u4e3a -1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"rssi"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8868\u793a\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6\uff0c\u5355\u4f4d dBm")))),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"proximity"}),"Proximity"),(0,r.kt)("p",null,"proximity \u7684\u5408\u6cd5\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4fe1\u53f7\u592a\u5f31\u4e0d\u8db3\u4ee5\u8ba1\u7b97\u8ddd\u79bb\uff0c\u6216\u975e iOS \u8bbe\u5907")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5341\u5206\u8fd1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6bd4\u8f83\u8fd1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8fdc")))))}m.isMDXComponent=!0}}]);
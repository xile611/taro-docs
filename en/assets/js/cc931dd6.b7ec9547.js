"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[45950],{79874:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),i=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=i(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),f=i(r),m=o,y=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,c(c({ref:e},p),{},{components:r})):n.createElement(y,c({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:o,c[1]=u;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97605:function(t,e,r){r.r(e),r.d(e,{assets:function(){return i},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const c={slug:"2020-01-08-taro-2-0",title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",authors:"luckyadam",tags:["v2"]},u=void 0,l={permalink:"/taro-docs/en/blog/2020-01-08-taro-2-0",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2020-01-08-taro-2-0.md",source:"@site/blog/2020-01-08-taro-2-0.md",title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",description:"Taro 1.x \u7248\u672c\u81ea\u53bb\u5e74 9 \u6708\u4efd\u53d1\u5e03\u4ee5\u6765\uff0c\u5df2\u7ecf\u966a\u4f34\u5927\u5bb6\u5ea6\u8fc7\u4e86\u4e00\u5e74\u591a\u7684\u65f6\u95f4\uff0c\u5728\u6b64\u671f\u95f4 Taro \u4e00\u76f4\u4fdd\u6301\u9ad8\u901f\u6210\u957f\uff0c\u53d1\u5e03\u4e86\u591a\u4e2a\u5177\u6709\u91cd\u5927\u610f\u4e49\u7684\u7248\u672c\uff0c\u8ba9 Taro \u6210\u4e3a\u5982\u4eca\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\uff0c\u62e5\u6709\u4f17\u591a\u5fe0\u5b9e\u62e5\u8db8\u7684\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\u3002",date:"2020-01-08T00:00:00.000Z",formattedDate:"January 8, 2020",tags:[{label:"v2",permalink:"/taro-docs/en/blog/tags/v-2"}],readingTime:10.59,hasTruncateMarker:!0,authors:[{name:"\u9694\u58c1\u8001\u674e",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/luckyadam",imageURL:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",key:"luckyadam"}],frontMatter:{slug:"2020-01-08-taro-2-0",title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",authors:"luckyadam",tags:["v2"]},prevItem:{title:"Taro Next \u53d1\u5e03\u9884\u89c8\u7248\uff1a\u540c\u65f6\u652f\u6301 React / Vue / Nerv",permalink:"/taro-docs/en/blog/2020-02-13-taro-next-alpha"},nextItem:{title:"\u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5",permalink:"/taro-docs/en/blog/2020-01-02-gmtc"}},i={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Taro 1.x \u7248\u672c\u81ea\u53bb\u5e74 9 \u6708\u4efd\u53d1\u5e03\u4ee5\u6765\uff0c\u5df2\u7ecf\u966a\u4f34\u5927\u5bb6\u5ea6\u8fc7\u4e86\u4e00\u5e74\u591a\u7684\u65f6\u95f4\uff0c\u5728\u6b64\u671f\u95f4 Taro \u4e00\u76f4\u4fdd\u6301\u9ad8\u901f\u6210\u957f\uff0c\u53d1\u5e03\u4e86\u591a\u4e2a\u5177\u6709\u91cd\u5927\u610f\u4e49\u7684\u7248\u672c\uff0c\u8ba9 Taro \u6210\u4e3a\u5982\u4eca\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\uff0c\u62e5\u6709\u4f17\u591a\u5fe0\u5b9e\u62e5\u8db8\u7684\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/2.0/alls.jpg",alt:null}))))}f.isMDXComponent=!0}}]);
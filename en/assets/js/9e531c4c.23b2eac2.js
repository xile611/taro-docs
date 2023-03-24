"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[83825],{79874:function(t,e,l){l.d(e,{Zo:function(){return i},kt:function(){return s}});var n=l(93106);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var k=n.createContext({}),c=function(t){var e=n.useContext(k),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},i=function(t){var e=c(t.components);return n.createElement(k.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,k=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),p=c(l),s=a,m=p["".concat(k,".").concat(s)]||p[s]||d[s]||r;return l?n.createElement(m,o(o({ref:e},i),{},{components:l})):n.createElement(m,o({ref:e},i))}));function s(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,o=new Array(r);o[0]=p;var u={};for(var k in e)hasOwnProperty.call(e,k)&&(u[k]=e[k]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var c=2;c<r;c++)o[c]=l[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},8991:function(t,e,l){l.r(e),l.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return k},toc:function(){return i}});l(93106);var n=l(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},a.apply(this,arguments)}function r(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}const o={title:"MapContext",sidebar_label:"MapContext"},u=void 0,k={unversionedId:"apis/media/map/MapContext",id:"apis/media/map/MapContext",title:"MapContext",description:"MapContext instance, which can be obtained by Taro.createMapContext.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/map/MapContext.md",sourceDirName:"apis/media/map",slug:"/apis/media/map/MapContext",permalink:"/taro-docs/en/docs/next/apis/media/map/MapContext",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/map/MapContext.md",tags:[],version:"current",frontMatter:{title:"MapContext",sidebar_label:"MapContext"},sidebar:"API",previous:{title:"createMapContext",permalink:"/taro-docs/en/docs/next/apis/media/map/createMapContext"},next:{title:"saveImageToPhotosAlbum",permalink:"/taro-docs/en/docs/next/apis/media/image/saveImageToPhotosAlbum"}},c={},i=[{value:"Methods",id:"methods",level:2},{value:"getCenterLocation",id:"getcenterlocation",level:3},{value:"API Support",id:"api-support",level:4},{value:"getRegion",id:"getregion",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"getRotate",id:"getrotate",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"getScale",id:"getscale",level:3},{value:"API Support",id:"api-support-3",level:4},{value:"getSkew",id:"getskew",level:3},{value:"API Support",id:"api-support-4",level:4},{value:"includePoints",id:"includepoints",level:3},{value:"API Support",id:"api-support-5",level:4},{value:"moveToLocation",id:"movetolocation",level:3},{value:"API Support",id:"api-support-6",level:4},{value:"translateMarker",id:"translatemarker",level:3},{value:"API Support",id:"api-support-7",level:4},{value:"Parameters",id:"parameters",level:2},{value:"GetCenterLocationOption",id:"getcenterlocationoption",level:3},{value:"GetCenterLocationSuccessCallback",id:"getcenterlocationsuccesscallback",level:3},{value:"GetCenterLocationSuccessCallbackResult",id:"getcenterlocationsuccesscallbackresult",level:3},{value:"GetRegionOption",id:"getregionoption",level:3},{value:"GetRegionSuccessCallback",id:"getregionsuccesscallback",level:3},{value:"GetRegionSuccessCallbackResult",id:"getregionsuccesscallbackresult",level:3},{value:"GetRotateOption",id:"getrotateoption",level:3},{value:"GetRotateSuccessCallback",id:"getrotatesuccesscallback",level:3},{value:"GetRotateSuccessCallbackResult",id:"getrotatesuccesscallbackresult",level:3},{value:"GetScaleOption",id:"getscaleoption",level:3},{value:"GetScaleSuccessCallback",id:"getscalesuccesscallback",level:3},{value:"GetScaleSuccessCallbackResult",id:"getscalesuccesscallbackresult",level:3},{value:"GetSkewOption",id:"getskewoption",level:3},{value:"GetSkewSuccessCallback",id:"getskewsuccesscallback",level:3},{value:"GetSkewSuccessCallbackResult",id:"getskewsuccesscallbackresult",level:3},{value:"IncludePointsOption",id:"includepointsoption",level:3},{value:"MapPostion",id:"mappostion",level:3},{value:"MoveToLocationOption",id:"movetolocationoption",level:3},{value:"TranslateMarkerOption",id:"translatemarkeroption",level:3},{value:"DestinationOption",id:"destinationoption",level:3},{value:"API Support",id:"api-support-8",level:2}],d={toc:i};function p(t){var{components:e}=t,l=r(t,["components"]);return(0,n.kt)("wrapper",a({},d,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"MapContext")," instance, which can be obtained by Taro.createMapContext.\n",(0,n.kt)("inlineCode",{parentName:"p"},"MapContext")," is bound to a ","<","map/",">"," component by id, to operate the corresponding ","<","map/",">"," component."),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("h3",a({},{id:"getcenterlocation"}),"getCenterLocation"),(0,n.kt)("p",null,"Obtain the altitude and longitude of the current map center. The gcj02 coordinate system is returned, which can be used for ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.openLocation.html"}),"wx.openLocation()")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.getCenterLocation.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: GetCenterLocationOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetCenterLocationOption"))))),(0,n.kt)("h4",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getCenterLocation"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"getregion"}),"getRegion"),(0,n.kt)("p",null,"Acquire the scope of the field of view of the current map"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.getRegion.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: GetRegionOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetRegionOption"))))),(0,n.kt)("h4",a({},{id:"api-support-1"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getRegion"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"getrotate"}),"getRotate"),(0,n.kt)("p",null,"Acquire the rotation angle of the current map"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRotate.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: GetRotateOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetRotateOption"))))),(0,n.kt)("h4",a({},{id:"api-support-2"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getRotate"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"getscale"}),"getScale"),(0,n.kt)("p",null,"Obtains the zoom level of the current map"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.getScale.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: GetScaleOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetScaleOption"))))),(0,n.kt)("h4",a({},{id:"api-support-3"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getScale"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"getskew"}),"getSkew"),(0,n.kt)("p",null,"Acquire the tilt angle of the current map"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getSkew.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: GetSkewOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetSkewOption"))))),(0,n.kt)("h4",a({},{id:"api-support-4"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getSkew"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"includepoints"}),"includePoints"),(0,n.kt)("p",null,"Zooms in/out the view to show all latitudes and longitudes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.includePoints.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: IncludePointsOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"IncludePointsOption"))))),(0,n.kt)("h4",a({},{id:"api-support-5"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.includePoints"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"movetolocation"}),"moveToLocation"),(0,n.kt)("p",null,"Moves the map center to the current location. Use with the show-location of the map component."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.moveToLocation.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: MoveToLocationOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"MoveToLocationOption"))))),(0,n.kt)("h4",a({},{id:"api-support-6"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.moveToLocation"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"translatemarker"}),"translateMarker"),(0,n.kt)("p",null,"Translates marker with animation."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/map/MapContext.translateMarker.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: TranslateMarkerOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"TranslateMarkerOption"))))),(0,n.kt)("h4",a({},{id:"api-support-7"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.translateMarker"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",a({},{id:"getcenterlocationoption"}),"GetCenterLocationOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"getcenterlocationsuccesscallback"}),"GetCenterLocationSuccessCallback"),(0,n.kt)("p",null,"The callback function for a successful API call"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: GetCenterLocationSuccessCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetCenterLocationSuccessCallbackResult"))))),(0,n.kt)("h3",a({},{id:"getcenterlocationsuccesscallbackresult"}),"GetCenterLocationSuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"latitude"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Latitude")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"longitude"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Longitude")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",a({},{id:"getregionoption"}),"GetRegionOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"getregionsuccesscallback"}),"GetRegionSuccessCallback"),(0,n.kt)("p",null,"The callback function for a successful API call"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: GetRegionSuccessCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetRegionSuccessCallbackResult"))))),(0,n.kt)("h3",a({},{id:"getregionsuccesscallbackresult"}),"GetRegionSuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"northeast"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Altitude and longitude of the Northeast corner")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"southwest"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Altitude and longitude of the Southwest corner")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",a({},{id:"getrotateoption"}),"GetRotateOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"getrotatesuccesscallback"}),"GetRotateSuccessCallback"),(0,n.kt)("p",null,"The callback function for a successful API call"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: GetRotateSuccessCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetRotateSuccessCallbackResult"))))),(0,n.kt)("h3",a({},{id:"getrotatesuccesscallbackresult"}),"GetRotateSuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"rotate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The rotation angle")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",a({},{id:"getscaleoption"}),"GetScaleOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"getscalesuccesscallback"}),"GetScaleSuccessCallback"),(0,n.kt)("p",null,"The callback function for a successful API call"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: GetScaleSuccessCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetScaleSuccessCallbackResult"))))),(0,n.kt)("h3",a({},{id:"getscalesuccesscallbackresult"}),"GetScaleSuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"scale"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Scaling value")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",a({},{id:"getskewoption"}),"GetSkewOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"getskewsuccesscallback"}),"GetSkewSuccessCallback"),(0,n.kt)("p",null,"The callback function for a successful API call"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: GetSkewSuccessCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"GetSkewSuccessCallbackResult"))))),(0,n.kt)("h3",a({},{id:"getskewsuccesscallbackresult"}),"GetSkewSuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"skew"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Skewing value")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",a({},{id:"includepointsoption"}),"IncludePointsOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"points"),(0,n.kt)("td",null,(0,n.kt)("code",null,"MapPostion[]")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"List of coordinate points to be displayed in the visible area")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"padding"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number[]")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Distance between the edge of the rectangle formed by coordinate points and the edge of the map (in pixel). The format is [top, right, bottom, left]. Only the first item of the array can be identified on Android. The padding is consistent for top, bottom, left, and right. Padding parameters are currently not supported on developer tools.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"mappostion"}),"MapPostion"),(0,n.kt)("p",null,"List of coordinate points to be displayed in the visual area"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"latitude"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Latitude")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"longitude"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Longitude")))),(0,n.kt)("h3",a({},{id:"movetolocationoption"}),"MoveToLocationOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"latitude"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Latitude")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"longitude"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Longitude")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"translatemarkeroption"}),"TranslateMarkerOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"autoRotate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"Specifies whether to automatically rotate the marker when moving")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"destination"),(0,n.kt)("td",null,(0,n.kt)("code",null,"DestinationOption")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"Specifies the destination to which the marker will move")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"markerId"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"Specifies the marker")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"rotate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"The rotation angle of the marker")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"animationEnd"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(...args: any[]) => any")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when an animation ends")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"duration"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Animation duration, calculated separately for translation and rotation")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"destinationoption"}),"DestinationOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"latitude"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Latitude")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"longitude"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Longitude")))),(0,n.kt)("h2",a({},{id:"api-support-8"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getCenterLocation"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getRegion"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getRotate"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getScale"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.getSkew"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.includePoints"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.moveToLocation"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"MapContext.translateMarker"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);
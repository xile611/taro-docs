"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37732],{79874:function(t,e,l){l.d(e,{Zo:function(){return s},kt:function(){return p}});var n=l(93106);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var d=n.createContext({}),i=function(t){var e=n.useContext(d),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},s=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=i(l),p=r,h=c["".concat(d,".").concat(p)]||c[p]||k[p]||a;return l?n.createElement(h,u(u({ref:e},s),{},{components:l})):n.createElement(h,u({ref:e},s))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,u=new Array(a);u[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var i=2;i<a;i++)u[i]=l[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},11006:function(t,e,l){l.r(e),l.d(e,{assets:function(){return i},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return s}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}const u={title:"Taro.request(option)",sidebar_label:"request"},o=void 0,d={unversionedId:"apis/network/request/request",id:"apis/network/request/request",title:"Taro.request(option)",description:"Initiates an HTTPS request. Read related instructions before use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/network/request/request.md",sourceDirName:"apis/network/request",slug:"/apis/network/request/",permalink:"/taro-docs/en/docs/next/apis/network/request/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/network/request/request.md",tags:[],version:"current",frontMatter:{title:"Taro.request(option)",sidebar_label:"request"},sidebar:"API",previous:{title:"checkIsPictureInPictureActive",permalink:"/taro-docs/en/docs/next/apis/ui/window/checkIsPictureInPictureActive"},next:{title:"RequestTask",permalink:"/taro-docs/en/docs/next/apis/network/request/RequestTask"}},i={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"dataType",id:"datatype",level:3},{value:"method",id:"method",level:3},{value:"responseType",id:"responsetype",level:3},{value:"cors_mode",id:"cors_mode",level:3},{value:"credentials",id:"credentials",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"API Support",id:"api-support",level:2}],k={toc:s};function c(t){var{components:e}=t,l=a(t,["components"]);return(0,n.kt)("wrapper",r({},k,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Initiates an HTTPS request. Read ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/ability/network.html"}),"related instructions")," before use."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data Parameters")),(0,n.kt)("p",null,"The data ultimately sent to the server must be a String. If the passed data is not a String, it will be converted to the String type according to the following rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Data from the ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," method is converted to a query string (",(0,n.kt)("inlineCode",{parentName:"p"},"encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)..."),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Data from the ",(0,n.kt)("inlineCode",{parentName:"p"},"POST")," method with ",(0,n.kt)("inlineCode",{parentName:"p"},"header['content-type']")," being ",(0,n.kt)("inlineCode",{parentName:"p"},"application/json")," is serialized into the JSON format.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Data from the ",(0,n.kt)("inlineCode",{parentName:"p"},"POST")," method with ",(0,n.kt)("inlineCode",{parentName:"p"},"header['content-type']")," being ",(0,n.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," is converted to a query string (",(0,n.kt)("inlineCode",{parentName:"p"},"encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)..."),")"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/request/wx.request.html"}),"Reference"))),(0,n.kt)("h2",r({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"<T = any, U = any>(option: Option<U>) => RequestTask<T>\n")),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Default"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"url"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"Developer server API URL")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",null,(0,n.kt)("code",null,"U")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Request parameter")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"dataType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"json" | "other"')),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The returned data format")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"header"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Sets request Header. Referer is not available in Header.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("code",null,"content-type")," is ",(0,n.kt)("code",null,"application/json"),"by default.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"method"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT"')),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"HTTP request method")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"responseType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"text" | "arraybuffer"')),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The response data format")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"jsonp"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"false")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specify whether to use jsonp to fetch data on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"jsonpCache"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"false")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specifies whether data fetched using jsonp should be cached on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"mode"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"no-cors" | "cors" | "same-origin"')),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"same-origin")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specifies whether cross-domain requests are allowed on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"credentials"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"same-origin" | "include" | "omit"')),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"omit")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specify whether to carry cookies on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"cache"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"default" | "no-cache" | "reload" | "force-cache" | "only-if-cached"')),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"default")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specify the cache mode on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"timeout"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"2000")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specify the request timeout on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"retryTimes"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"2")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specify the number of request retries on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"backup"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string | string[]")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specify the backup requestion for requests on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"dataCheck"),(0,n.kt)("td",null,(0,n.kt)("code",null,"() => boolean")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specify the data validation function for the request response on the H5 side, and if the result is false, request backup requestion.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"useStore"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"false")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specify whether the request on the H5 side uses caching.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"storeCheckKey"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Set the key for the request cache checks on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"storeSign"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Set the request cache signature on the H5 side")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"storeCheck"),(0,n.kt)("td",null,(0,n.kt)("code",null,"() => boolean")),(0,n.kt)("td",{style:{textAlign:"center"}}),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Set the request checksum function on the H5 side, generally not required")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",null,(0,n.kt)("code",null,"T")),(0,n.kt)("td",null,"Data returned by the developer server")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"header"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"HTTP Response Header returned by the developer server")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"statusCode"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"HTTP status code returned by the developer server")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",r({},{id:"datatype"}),"dataType"),(0,n.kt)("p",null,"Valid values of object.dataType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Value"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"json"),(0,n.kt)("td",null,"The returned data is in the JSON format. Call JSON.parse on the returned data.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Others"),(0,n.kt)("td",null,"Do not call JSON.parse on the returned data.")))),(0,n.kt)("h3",r({},{id:"method"}),"method"),(0,n.kt)("p",null,"Valid values of object.method"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Value"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"OPTIONS"),(0,n.kt)("td",null,"HTTP request OPTIONS")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"GET"),(0,n.kt)("td",null,"HTTP request GET")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"HEAD"),(0,n.kt)("td",null,"HTTP request HEAD")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"POST"),(0,n.kt)("td",null,"HTTP request POST")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"PUT"),(0,n.kt)("td",null,"HTTP request PUT")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"DELETE"),(0,n.kt)("td",null,"HTTP request DELETE")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"TRACE"),(0,n.kt)("td",null,"HTTP request TRACE")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CONNECT"),(0,n.kt)("td",null,"HTTP request CONNECT")))),(0,n.kt)("h3",r({},{id:"responsetype"}),"responseType"),(0,n.kt)("p",null,"Valid values of object.responseType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Value"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"text"),(0,n.kt)("td",null,"The response data is in the text format.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"arraybuffer"),(0,n.kt)("td",null,"The response data is in the ArrayBuffer format.")))),(0,n.kt)("h3",r({},{id:"cors_mode"}),"cors_mode"),(0,n.kt)("p",null,"Valid values of CORS mode"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Value"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"no-cors"),(0,n.kt)("td",null,"Cross-domain requests will get an opaque response")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"cors"),(0,n.kt)("td",null,"Allow cross-domain requests")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"same-origin"),(0,n.kt)("td",null,"Requests are always made to the current source")))),(0,n.kt)("h3",r({},{id:"credentials"}),"credentials"),(0,n.kt)("p",null,"Valid values of credentials"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Value"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"include"),(0,n.kt)("td",null,"Always send authentication information such as cookies, HTTP Basic authentication, etc. local to the requested resource domain.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"same-origin"),(0,n.kt)("td",null,"Authentication information such as cookies, HTTP Basic authentication, etc. is only sent if the URL is the same source as the response script.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"omit"),(0,n.kt)("td",null,"No cookies are sent.")))),(0,n.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("h3",r({},{id:"example-1"}),"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.request({\n  url: 'test.php', // This value for demonstration purposes only is not a real API URL.\n  data: {\n    x: '',\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json' // Default value\n  },\n  success: function (res) {\n    console.log(res.data)\n  }\n})\n")),(0,n.kt)("h3",r({},{id:"example-2"}),"Example 2"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"const res = await Taro.request(params)\n")),(0,n.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"ByteDance Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"QQ Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.request"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);
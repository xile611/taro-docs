"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94282],{79874:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return p}});var l=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=l.createContext({}),i=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=i(t.components);return l.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),c=i(n),p=a,g=c["".concat(d,".").concat(p)]||c[p]||s[p]||r;return n?l.createElement(g,o(o({ref:e},k),{},{components:n})):l.createElement(g,o({ref:e},k))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=c;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var i=2;i<r;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41566:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return k}});n(93106);var l=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},a.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"BackgroundAudioManager",sidebar_label:"BackgroundAudioManager"},u=void 0,d={unversionedId:"apis/media/background-audio/BackgroundAudioManager",id:"version-3.x/apis/media/background-audio/BackgroundAudioManager",title:"BackgroundAudioManager",description:"The BackgroundAudioManager instance can be obtained through the API Taro.getBackgroundAudioManager.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/background-audio/BackgroundAudioManager.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/BackgroundAudioManager",permalink:"/taro-docs/en/docs/apis/media/background-audio/BackgroundAudioManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/background-audio/BackgroundAudioManager.md",tags:[],version:"3.x",frontMatter:{title:"BackgroundAudioManager",sidebar_label:"BackgroundAudioManager"},sidebar:"API",previous:{title:"getBackgroundAudioManager",permalink:"/taro-docs/en/docs/apis/media/background-audio/getBackgroundAudioManager"},next:{title:"createLivePusherContext",permalink:"/taro-docs/en/docs/apis/media/live/createLivePusherContext"}},i={},k=[{value:"Methods",id:"methods",level:2},{value:"play",id:"play",level:3},{value:"pause",id:"pause",level:3},{value:"stop",id:"stop",level:3},{value:"seek",id:"seek",level:3},{value:"onCanplay",id:"oncanplay",level:3},{value:"onPlay",id:"onplay",level:3},{value:"onPause",id:"onpause",level:3},{value:"onStop",id:"onstop",level:3},{value:"onEnded",id:"onended",level:3},{value:"onTimeUpdate",id:"ontimeupdate",level:3},{value:"onPrev",id:"onprev",level:3},{value:"onNext",id:"onnext",level:3},{value:"onError",id:"onerror",level:3},{value:"onWaiting",id:"onwaiting",level:3},{value:"Sample Code",id:"sample-code",level:2}],s={toc:k};function c(t){var{components:e}=t,n=r(t,["components"]);return(0,l.kt)("wrapper",a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The BackgroundAudioManager instance can be obtained through the API ",(0,l.kt)("a",a({parentName:"p"},{href:"/taro-docs/en/docs/apis/media/background-audio/getBackgroundAudioManager"}),"Taro.getBackgroundAudioManager"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/background-audio/BackgroundAudioManager.html"}),"Reference"))),(0,l.kt)("h2",a({},{id:"methods"}),"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Read only"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"buffered"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The position where the audio is buffered. Only the part between the position where the playback has got to and this position is buffered (read only).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"coverImgUrl"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The cover image URL used as the background image of the native audio player. It is also used in the card image and background shared via the native audio player.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"currentTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The position where the playback has got to (in sec). It is only returned when a valid src attribute exists (read only).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The length of the audio file (in sec), which is only returned when a valid src attribute exists (read only).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"epname"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The album name, which is also used in the card description shared via the native audio player.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"paused"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Whether the playback is paused or stopped (read only).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"protocol"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The protocol used for audio transfer. It is 'http' by default. You can set it to 'hls' for the live stream audio transferred over HLS protocol.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"singer"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The singer name, which is also used in the card description shared via the native audio player.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Indicates the audio data source (Cloud file ID is supported as of base library 2.2.3). It is an empty string by default. ",(0,l.kt)("strong",null,"When a new src attribute is configured, the audio file is played automatically.")," M4a, AAC, MP3, and WAV file formates are supported.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"startTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The position where the audio playback starts (in sec).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"title"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The title of an audio file in the native audio player (required). It is also used as the card title shared via the native audio player.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"webUrl"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The page URL, which is also used in the card description shared via the native audio player.")))),(0,l.kt)("h3",a({},{id:"play"}),"play"),(0,l.kt)("p",null,"Plays music."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h3",a({},{id:"pause"}),"pause"),(0,l.kt)("p",null,"Pauses music."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h3",a({},{id:"stop"}),"stop"),(0,l.kt)("p",null,"Stops music."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h3",a({},{id:"seek"}),"seek"),(0,l.kt)("p",null,"Jumps to the specific position."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(position: any) => void\n")),(0,l.kt)("h3",a({},{id:"oncanplay"}),"onCanplay"),(0,l.kt)("p",null,"Listens on the event that an audio file is ready for playback. A smooth playback is not guaranteed."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onplay"}),"onPlay"),(0,l.kt)("p",null,"Listens on the background audio playback event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onpause"}),"onPause"),(0,l.kt)("p",null,"Listens on the event of pausing the playback of a background audio file."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onstop"}),"onStop"),(0,l.kt)("p",null,"Listens on the event of stopping the playback of a background audio file."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onended"}),"onEnded"),(0,l.kt)("p",null,"Listens on the event of playing an background audio file to the end without interruption."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"ontimeupdate"}),"onTimeUpdate"),(0,l.kt)("p",null,"Listens on the event of updating the background audio playback progress. A callback is executed only if the Mini Program is running at the foreground."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onprev"}),"onPrev"),(0,l.kt)("p",null,"Listens on the event of tapping the previous song on the system's music player panel (for iOS only)."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onnext"}),"onNext"),(0,l.kt)("p",null,"Listens on the event of tapping the next song on the system's music player panel (for iOS only)."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onerror"}),"onError"),(0,l.kt)("p",null,"Listens on the background audio playback error event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onwaiting"}),"onWaiting"),(0,l.kt)("p",null,"Listens on the audio loading event. It is triggered when the playback of an audio file stops to load the file due to insufficient data."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = 'At this Very Moment'\nbackgroundAudioManager.epname = 'At this Very Moment'\nbackgroundAudioManager.singer = 'Xu Wei'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\n// Plays automatically after src is set\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'\n")))}c.isMDXComponent=!0}}]);
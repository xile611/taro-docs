"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15114],{79874:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(93106);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42935:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"React Native Development Process"},l=void 0,s={unversionedId:"react-native",id:"react-native",title:"React Native Development Process",description:"This article mainly explains the development process of Taro React Native side, please see Note before development.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/react-native.md",sourceDirName:".",slug:"/react-native",permalink:"/taro-docs/en/docs/next/react-native",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/react-native.md",tags:[],version:"current",frontMatter:{title:"React Native Development Process"},sidebar:"docs",previous:{title:"H5",permalink:"/taro-docs/en/docs/next/h5"},next:{title:"React Native Development Considerations",permalink:"/taro-docs/en/docs/next/react-native-remind"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-development",id:"pre-development",level:2},{value:"Development Modes",id:"development-modes",level:2},{value:"Taro&#39;s version compatibility with React Native",id:"taros-version-compatibility-with-react-native",level:2},{value:"Integration mode",id:"integration-mode",level:2},{value:"Common commands",id:"common-commands",level:3},{value:"Separate mode",id:"separate-mode",level:2},{value:"Configure output",id:"configure-output",level:3},{value:"JS Project Common Commands",id:"js-project-common-commands",level:3},{value:"Common commands for shell projects",id:"common-commands-for-shell-projects",level:3},{value:"Debugging with Taro Playground APP",id:"debugging-with-taro-playground-app",level:2},{value:"Development Debugging",id:"development-debugging",level:3},{value:"debugging release bundle",id:"debugging-release-bundle",level:3},{value:"Share the release bundle",id:"share-the-release-bundle",level:3},{value:"Packaging and releasing Android packages",id:"packaging-and-releasing-android-packages",level:2},{value:"Package and release to APP Store",id:"package-and-release-to-app-store",level:2},{value:"Advanced tutorials",id:"advanced-tutorials",level:2},{value:"Customizing native dependencies",id:"customizing-native-dependencies",level:3},{value:"Custom metro configuration",id:"custom-metro-configuration",level:3},{value:"FAQ",id:"faq",level:2},{value:"How can I tell if I&#39;m successful when I start metro server via yarn start or yarn dev:rn?",id:"how-can-i-tell-if-im-successful-when-i-start-metro-server-via-yarn-start-or-yarn-devrn",level:3},{value:"yarn ios runs with error: main.jsbundle: No such file or directory",id:"yarn-ios-runs-with-error-mainjsbundle-no-such-file-or-directory",level:3},{value:"Updated <code>app.config</code> file, but found that it was not updated successfully.",id:"updated-appconfig-file-but-found-that-it-was-not-updated-successfully",level:3},{value:"requireNativeComponent: &quot;RNCSafeAreaProvider&quot; was not found in the UIManager.",id:"requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager",level:3},{value:"yarn upgradePeerdeps did not execute successfully",id:"yarn-upgradepeerdeps-did-not-execute-successfully",level:3},{value:"install-peerdeps also does not execute successfully",id:"install-peerdeps-also-does-not-execute-successfully",level:3},{value:"Invariant Violation: Tried to register two views with the same name RNCWebView",id:"invariant-violation-tried-to-register-two-views-with-the-same-name-rncwebview",level:3},{value:"packager Not Available",id:"packager-not-available",level:3},{value:"Invariant Violation: &quot;taroDemo&quot; has not been registered.",id:"invariant-violation-tarodemo-has-not-been-registered",level:3},{value:"How to modify appName?",id:"how-to-modify-appname",level:3},{value:"Library not found for -IDoubleConversion",id:"library-not-found-for--idoubleconversion",level:3},{value:"Entry file index.js does not exist. If you use another file as your entry point, pass ENTRY_FILE=myindex.js",id:"entry-file-indexjs-does-not-exist-if-you-use-another-file-as-your-entry-point-pass-entry_filemyindexjs",level:3}],u={toc:d};function c(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This article mainly explains the development process of Taro React Native side, please see ",(0,n.kt)("a",r({parentName:"p"},{href:"/taro-docs/en/docs/next/react-native-remind"}),"Note before development"),"."),(0,n.kt)("p",{parentName:"blockquote"},"Taro3.x cross-platform\uff08h5\u3001weapp\u3001rn\uff09project development can refer to:",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/wuba/Taro-Mortgage-Calculator"}),"Taro cross-platform demo\uff08React Native + Weapp + h5\uff09")),(0,n.kt)("p",{parentName:"blockquote"},"For Taro React Native APP development debugging tool, please check ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/wuba/taro-playground"}),"Taro Playground")," project.")),(0,n.kt)("h2",r({},{id:"introduction"}),"Introduction"),(0,n.kt)("p",null,"Taro APP development is based on Facebook's open source project ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/facebook/react-native"}),"React Native"),". The Taro project developed with the ",(0,n.kt)("strong",{parentName:"p"},"React")," framework can be compiled into a bundle file for React Native after some adaptation, and then compiled into Android and iOS APPs with the tools for the corresponding platforms."),(0,n.kt)("p",null,"The overall design is as follows."),(0,n.kt)("p",null,(0,n.kt)("img",r({parentName:"p"},{src:"https://pic8.58cdn.com.cn/nowater/frs/n_v287a918607dea4ac7b28471aef4fc8b6f.pic",alt:"image"}))),(0,n.kt)("h2",r({},{id:"pre-development"}),"Pre-development"),(0,n.kt)("p",null,"To make your future development smoother, we strongly recommend that you learn about React Native development first. Learning materials can be found on the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://reactnative.cn/docs/getting-started"}),"React Native Chinese website")," or on the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://reactnative.dev/docs/getting-started"}),"React Native official website"),"."),(0,n.kt)("p",null,"After you finish learning the basics, it is recommended to get started and finish building the environment and make sure it can run well. For environment setup, please refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"https://reactnative.cn/docs/environment-setup"}),"React Native Chinese website")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"https://reactnative.dev/docs/environment-setup"}),"React Native official website"),"."),(0,n.kt)("h2",r({},{id:"development-modes"}),"Development Modes"),(0,n.kt)("p",null,"Taro provides two modes for developing React Native APP."),(0,n.kt)("ol",r({},{start:0}),(0,n.kt)("li",{parentName:"ol"},"Integration mode: JS, iOS, Android in the same repository, projects that are generated by ",(0,n.kt)("inlineCode",{parentName:"li"},"taro init")," and choose react-native template will use this mode. The structure of the project is basically the same as the one generated by ",(0,n.kt)("inlineCode",{parentName:"li"},"npx react-native init AwesomeProject"),". ",(0,n.kt)("strong",{parentName:"li"},"Starting developers are recommended to use this pattern"),"."),(0,n.kt)("li",{parentName:"ol"},"Separate mode: JS code in one repository, iOS and Android code in another (also called shell project). The shell project code can be forked ",(0,n.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro-native-shell"}),"Taro Native Shell Project"),".")),(0,n.kt)("h2",r({},{id:"taros-version-compatibility-with-react-native"}),"Taro's version compatibility with React Native"),(0,n.kt)("p",null,"We will be compatible with the latest version React Native mainly, and keep up with community developments."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"React Native Versions"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Compatibility"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Shell Project Branch"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"< 0.60.0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Not compatible, consider using Taro version 1.x/2.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.60.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<=3.4.2 compatible, but not fully tested, please provide issue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.63.2"}),"0.63.2"),", change react-native version to 0.60.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.61.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<=3.4.2 compatible, but not fully tested, please provide issue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.63.2"}),"0.63.2"),", change react-native version to 0.61.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.62.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<=3.4.2 compatible, but not fully tested, please provide issue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.63.2"}),"0.63.2"),", change react-native version to 0.62.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.63.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.2.0, but after version 3.2.13, you need to add the configuration manually, refer to ",(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro/pull/9540"}),"PR")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.63.2"}),"0.63.2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.64.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.2.0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.64.0"}),"0.64.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.65.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.3.10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.66.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.3.10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.66.0"}),"0.66.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.67.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.3.10, unimodules"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.67.0"}),"0.67.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.67.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.3.10, expo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.67.0-expo"}),"0.67.0-expo"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.68.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.5.0, but after version 3.5.6, you need to use expo-av@~11.2.3 react@17, refer to ",(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro/discussions/12133"}),"Discussion")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.68.0"}),"0.68.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.69.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.5.6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.69.0"}),"0.69.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0.70.x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">= 3.6.0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.70.0"}),"0.70.0"))))),(0,n.kt)("h2",r({},{id:"integration-mode"}),"Integration mode"),(0,n.kt)("p",null,"Initialize with the ",(0,n.kt)("inlineCode",{parentName:"p"},"taro init")," command, selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native")," template. ",(0,n.kt)("strong",{parentName:"p"},"After completion execute ",(0,n.kt)("inlineCode",{parentName:"strong"},"yarn upgradePeerdeps")," for dependency initialization"),"."),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4"}),"demo video"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you need to initialize a historical version of the React-Native project, you can find the branch for the corresponding version in the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-project-templates"}),"taro-project-templates")," repository."),(0,n.kt)("p",{parentName:"blockquote"},"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"taro init --template-source github:NervJS/taro-project-templates#v3.5-RN-0.68")," command, to initialize.")),(0,n.kt)("h3",r({},{id:"common-commands"}),"Common commands"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"# Update related dependencies. Executed after initialization is complete or after a Taro version update to synchronize peerDependencies.\n$ yarn upgradePeerdeps\n\n# Package js bundles and static resources. Executed after initialization to package the bundle used by default. platform Optional: ios, android\n$ yarn build:rn --platform ios\n\n# Start the bundle server\n$ yarn start\n\n# Start iOS\n$ yarn ios\n\n# Start Android\n$ yarn android\n")),(0,n.kt)("h2",r({},{id:"separate-mode"}),"Separate mode"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"taro init")," command to initialize and select the default template. fork shell project code ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-native-shell"}),"Taro Native Shell Project"),"."),(0,n.kt)("h3",r({},{id:"configure-output"}),"Configure output"),(0,n.kt)("p",null,"As the JS project products need to be exported to the shell project in split mode, merge them to complete the packaging.\nThis can be done by modifying the configuration ",(0,n.kt)("inlineCode",{parentName:"p"},". /config/index.js")," to specify the resource output directory, e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"{\n  rn: {\n    output: {\n      iosSourceMapUrl: '', // sourcemap file url\n      iosSourcemapOutput: '../taro-native-shell/ios/main.map', // sourcemap file output path\n      iosSourcemapSourcesRoot: '', // The root directory when converting sourcemap resource paths to relative paths\n      androidSourceMapUrl: '',\n      androidSourcemapOutput: '../taro-native-shell/android/app/src/main/assets/index.android.map',\n      androidSourcemapSourcesRoot: '',\n      ios: '../taro-native-shell/ios/main.jsbundle',\n      iosAssetsDest: '../taro-native-shell/ios',\n      android: '../taro-native-shell/android/app/src/main/assets/index.android.bundle',\n      androidAssetsDest: '../taro-native-shell/android/app/src/main/res'\n    },\n  }\n}\n")),(0,n.kt)("h3",r({},{id:"js-project-common-commands"}),"JS Project Common Commands"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"# Start the bundle server\n$ yarn dev:rn\n\n# Package js bundle and static resources. platform optional ios, android\n$ yarn build:rn --platform ios\n")),(0,n.kt)("h3",r({},{id:"common-commands-for-shell-projects"}),"Common commands for shell projects"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"# Update dependencies. run after Taro version update to synchronize peerDependencies.\n$ yarn upgradePeerdeps\n\n# Start iOS\n$ yarn ios\n\n# Start Android\n$ yarn android\n")),(0,n.kt)("h2",r({},{id:"debugging-with-taro-playground-app"}),"Debugging with Taro Playground APP"),(0,n.kt)("p",null,"To facilitate developers with no native development experience to experience Taro, we provide a highly integrated development environment ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/wuba/taro-playground"}),"Taro Playground"),". Developers only need to run the JS project normally to debug the APP."),(0,n.kt)("p",null,"Meanwhile, Taro Playground APP project provides reference code for learning."),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/09efc622c1f3fa25574d874314f4a421.mp4"}),"demo video"),"."),(0,n.kt)("h3",r({},{id:"development-debugging"}),"Development Debugging"),(0,n.kt)("p",null,"Run the following command to start the metro server and print the QR code."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"yarn dev:rn --qr\n")),(0,n.kt)("p",null,"Open the Taro Playground APP, scan the QR code or type ",(0,n.kt)("inlineCode",{parentName:"p"},"ip:port")," in the input box, and load the dev bundle for debugging."),(0,n.kt)("h3",r({},{id:"debugging-release-bundle"}),"debugging release bundle"),(0,n.kt)("p",null,"Run the following command to start the http server and print the QR code."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"yarn build:rn --qr --platform ios\n")),(0,n.kt)("p",null,"Open the Taro Playground APP, scan the QR code, and load the release bundle for debugging. Note that Android and ios need to be verified separately."),(0,n.kt)("h3",r({},{id:"share-the-release-bundle"}),"Share the release bundle"),(0,n.kt)("p",null,"Using Taro Playground APP + GitHub Action + jsdelivr, we can share our APP via QR code, see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/zhiqingchen/taro-react-native-release"}),"taro-react-native-release project"),"."),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/4c2ea6b807331f319c5fca2a673b454b.mp4"}),"demo video"),"."),(0,n.kt)("h2",r({},{id:"packaging-and-releasing-android-packages"}),"Packaging and releasing Android packages"),(0,n.kt)("p",null,"Learn ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.react-native.cn/docs/signed-apk-android"}),"how to package and release Android packages in React Native"),". Taro provides a template for React Native that integrates with GitHub Action. See ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/wuba/taro-playground/blob/main/.github/workflows/assemble_android_release.yml"}),"assemble_android_release"),"."),(0,n.kt)("p",null,"The main steps include the following."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn build:rn --platform android")),(0,n.kt)("li",{parentName:"ol"},"linux: ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo apt install -y ruby-bundler"),", mac: ",(0,n.kt)("inlineCode",{parentName:"li"},"gem install bundler")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"cd android && bundle update && bundle exec fastlane assemble"))),(0,n.kt)("p",null,"Without using CI tools."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn build:rn --platform android")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"cd android && ./gradlew assembleRelease")," Or use Android Studio")),(0,n.kt)("h2",r({},{id:"package-and-release-to-app-store"}),"Package and release to APP Store"),(0,n.kt)("p",null,"Learn ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.react-native.cn/docs/publishing-to-app-store"}),"how to package and release iOS packages in React Native"),". Taro provides a template for React Native that integrates with GitHub Action, so you can use GitHub for packaging, see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/wuba/taro-playground/blob/main/.github/workflows/assemble_ios_release.yml"}),"assemble_ios_release"),"."),(0,n.kt)("p",null,"The main steps include the following."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"import certificate"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn build:rn --platform ios")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"npx pod-install")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"export SKIP_BUNDLING=1")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"cd ios && bundle update && bundle exec fastlane build_release"))),(0,n.kt)("p",null,"Without using CI tools."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn build:rn --platform ios")),(0,n.kt)("li",{parentName:"ol"},"Packaging with Xcode")),(0,n.kt)("h2",r({},{id:"advanced-tutorials"}),"Advanced tutorials"),(0,n.kt)("h3",r({},{id:"customizing-native-dependencies"}),"Customizing native dependencies"),(0,n.kt)("p",null,"Taro does on-demand loading of interfaces, so that unneeded native dependencies can be left uninstalled to reduce the APP package size. If the APP does not involve audio and video, you can remove the expo-av dependency directly."),(0,n.kt)("h3",r({},{id:"custom-metro-configuration"}),"Custom metro configuration"),(0,n.kt)("p",null,"Taro uses the transformer and resolver in metro, which can be merged with user configuration."),(0,n.kt)("p",null,"Taro's default configuration is ",(0,n.kt)("inlineCode",{parentName:"p"},"const { defaultConfig } = require('@tarojs/rn-runner/dist/config')"),", you can refer to the source code for deeper customization."),(0,n.kt)("h2",r({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",r({},{id:"how-can-i-tell-if-im-successful-when-i-start-metro-server-via-yarn-start-or-yarn-devrn"}),"How can I tell if I'm successful when I start metro server via yarn start or yarn dev:rn?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After starting, you can see ",(0,n.kt)("inlineCode",{parentName:"li"},"React-Native Dev server is running on port: 8081")," in the terminal"),(0,n.kt)("li",{parentName:"ul"},"Type ",(0,n.kt)("a",r({parentName:"li"},{href:"http://127.0.0.1:8081/status"}),"http://127.0.0.1:8081/status")," in your browser and you will see packager-status:running"),(0,n.kt)("li",{parentName:"ul"},"Typing ",(0,n.kt)("a",r({parentName:"li"},{href:"http://127.0.0.1:8081/index.bundle?platform=ios&dev=true"}),"http://127.0.0.1:8081/index.bundle?platform=ios&dev=true")," in the browser will trigger the build, and you will see the following message in the terminal.")),(0,n.kt)("p",null,"BUNDLE  ./index \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 0.0% (0/173)"),(0,n.kt)("p",null,"If there are any errors during the process, you will be prompted in the terminal, and if there are no errors, you will see a green message:"),(0,n.kt)("p",null,"BUNDLE  ./index"),(0,n.kt)("p",null,"The above three steps are normal, which means that the metro server is started normally."),(0,n.kt)("h3",r({},{id:"yarn-ios-runs-with-error-mainjsbundle-no-such-file-or-directory"}),"yarn ios runs with error: main.jsbundle: No such file or directory"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"yarn build:rn --platform ios\n")),(0,n.kt)("h3",r({},{id:"updated-appconfig-file-but-found-that-it-was-not-updated-successfully"}),"Updated ",(0,n.kt)("inlineCode",{parentName:"h3"},"app.config")," file, but found that it was not updated successfully."),(0,n.kt)("p",null,"The metro cache is causing this, try ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn dev:rn --reset-cache")),(0,n.kt)("h3",r({},{id:"requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager"}),'requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager.'),(0,n.kt)("p",null,"Usually some dependencies are not installed, try ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn upgradePeerdeps")," or check if any dependencies are missing."),(0,n.kt)("h3",r({},{id:"yarn-upgradepeerdeps-did-not-execute-successfully"}),"yarn upgradePeerdeps did not execute successfully"),(0,n.kt)("p",null,"Manually execute ",(0,n.kt)("inlineCode",{parentName:"p"},"install-peerdeps @tarojs/taro-rn -o -Y && install-peerdeps @tarojs/components-rn -o -Y && install-peerdeps @tarojs/router-rn -o -Y && pod-install")),(0,n.kt)("h3",r({},{id:"install-peerdeps-also-does-not-execute-successfully"}),"install-peerdeps also does not execute successfully"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-rn/package.json"}),"@tarojs/taro-rn"),"\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-router-rn/package.json"}),"@tarojs/router-rn"),"\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-components-rn/package.json"}),"@tarojs/components-rn"),"  of peerDependencies and install them manually."),(0,n.kt)("p",null,"Or align with the ",(0,n.kt)("inlineCode",{parentName:"p"},"dependencies")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," file of ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-native-shell"}),"Taro Native Shell"),"."),(0,n.kt)("h3",r({},{id:"invariant-violation-tried-to-register-two-views-with-the-same-name-rncwebview"}),"Invariant Violation: Tried to register two views with the same name RNCWebView"),(0,n.kt)("p",null,"This kind of problem is usually caused by installing multiple versions of the native dependencies. Check why multiple versions are installed by first using ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn why xxx"),", which in the example is ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn why react-native-webview"),". Lock the required version via resolutions, we recommend using the version in ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-rn/package.json"}),"@tarojs/taro-rn"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-router-rn/package.json"}),"@tarojs/router-rn"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-components-rn/package.json"}),"@tarojs/components-rn"),"."),(0,n.kt)("h3",r({},{id:"packager-not-available"}),"packager Not Available"),(0,n.kt)("p",null,"If the packager is not available after scanning the code with Taro Playground, it is usually a network problem, check if your phone and computer are on the same LAN."),(0,n.kt)("h3",r({},{id:"invariant-violation-tarodemo-has-not-been-registered"}),'Invariant Violation: "taroDemo" has not been registered.'),(0,n.kt)("p",null,"Check if the ",(0,n.kt)("inlineCode",{parentName:"p"},"config/index.js")," file has changed the appName, the default is ",(0,n.kt)("inlineCode",{parentName:"p"},"taroDemo"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"{\n  rn: {\n    appName: 'taroDemo',\n  }\n}\n")),(0,n.kt)("h3",r({},{id:"how-to-modify-appname"}),"How to modify appName?"),(0,n.kt)("ol",r({},{start:0}),(0,n.kt)("li",{parentName:"ol"},"modify ",(0,n.kt)("inlineCode",{parentName:"li"},"rn.appName")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"config/index.js")),(0,n.kt)("li",{parentName:"ol"},"modify the return value of the ",(0,n.kt)("inlineCode",{parentName:"li"},"getMainComponentName")," method in ",(0,n.kt)("inlineCode",{parentName:"li"},"MainActivity.java")),(0,n.kt)("li",{parentName:"ol"},"modify ",(0,n.kt)("inlineCode",{parentName:"li"},"moduleName")," of ",(0,n.kt)("inlineCode",{parentName:"li"},'RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"taroDemo" initialProperties:nil];')," in  ",(0,n.kt)("inlineCode",{parentName:"li"},"AppDelegate.m")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn dev:rn --reset-cache"))),(0,n.kt)("h3",r({},{id:"library-not-found-for--idoubleconversion"}),"Library not found for -IDoubleConversion"),(0,n.kt)("p",null,"When compiling with XCode, the file to open is ",(0,n.kt)("inlineCode",{parentName:"p"},"ios/taroDemo.xcworkspace")),(0,n.kt)("h3",r({},{id:"entry-file-indexjs-does-not-exist-if-you-use-another-file-as-your-entry-point-pass-entry_filemyindexjs"}),"Entry file index.js does not exist. If you use another file as your entry point, pass ENTRY_FILE=myindex.js"),(0,n.kt)("p",null,"Taro React Native jdbundle files are packaged by Taro (yarn build:rn) and if you use React Native's own command to package them (react-native bundle), you will get the error above. So we need to skip the original packaging phase of React Native."),(0,n.kt)("p",null,"react-native/ios/taroDemo.xcodeproj/project.pbxproj"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-diff"}),'-           shellScript = "set -e\\n\\nexport NODE_BINARY=node\\n../node_modules/react-native/scripts/react-native-xcode.sh\\n";\n+           shellScript = "set -e\\n\\nexport NODE_BINARY=node\\nexport SKIP_BUNDLING=1\\n../node_modules/react-native/scripts/react-native-xcode.sh\\n";\n')),(0,n.kt)("p",null,"android/app/build.gradle"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-diff"}),'-apply from: "../../node_modules/react-native/react.gradle"\n+// apply from: "../../node_modules/react-native/react.gradle"\n')))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[14148],{79874:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return d}});var t=a(93106);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?t.createElement(k,l(l({ref:n},c),{},{components:a})):t.createElement(k,l({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6017:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});a(93106);var t=a(79874);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"\u8fc1\u79fb\u81f3 Taro 2.x"},i=void 0,p={unversionedId:"migrate-to-2",id:"version-2.x/migrate-to-2",title:"\u8fc1\u79fb\u81f3 Taro 2.x",description:"Taro 2.0 \u6574\u4f53\u4e0a\u4e0e 1.0 \u662f\u5b8c\u5168\u517c\u5bb9\u7684\uff0c\u8fc1\u79fb\u5e76\u4e0d\u56f0\u96be\uff0c\u672c\u6307\u5357\u5c06\u6307\u5bfc\u4f60\u5982\u4f55\u8fdb\u884c\u4ece Taro 1.x \u5230 Taro 2.x \u7684\u8fc1\u79fb\u5de5\u4f5c\u3002",source:"@site/versioned_docs/version-2.x/migrate-to-2.md",sourceDirName:".",slug:"/migrate-to-2",permalink:"/taro-docs/docs/2.x/migrate-to-2",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/migrate-to-2.md",tags:[],version:"2.x",frontMatter:{title:"\u8fc1\u79fb\u81f3 Taro 2.x"},sidebar:"version-2.x/docs",previous:{title:"\u6027\u80fd\u4f18\u5316\u5b9e\u8df5",permalink:"/taro-docs/docs/2.x/optimized-practice"},next:{title:"\u4f7f\u7528 Redux",permalink:"/taro-docs/docs/2.x/redux"}},s={},c=[{value:"\u66f4\u65b0 Taro CLI \u548c\u4f9d\u8d56\u7248\u672c",id:"\u66f4\u65b0-taro-cli-\u548c\u4f9d\u8d56\u7248\u672c",level:2},{value:"\u5168\u5c40 CLI \u5347\u7ea7",id:"\u5168\u5c40-cli-\u5347\u7ea7",level:3},{value:"\u5355\u72ec\u4e3a\u67d0\u4e00\u4e2a\u9879\u76ee\u5347\u7ea7",id:"\u5355\u72ec\u4e3a\u67d0\u4e00\u4e2a\u9879\u76ee\u5347\u7ea7",level:3},{value:"\u5b89\u88c5 <code>@tarojs/mini-runner</code> \u4f9d\u8d56",id:"\u5b89\u88c5-tarojsmini-runner-\u4f9d\u8d56",level:2},{value:"\u7f16\u8bd1\u914d\u7f6e\u8c03\u6574",id:"\u7f16\u8bd1\u914d\u7f6e\u8c03\u6574",level:2},{value:"\u5f02\u6b65\u7f16\u7a0b\u8c03\u6574",id:"\u5f02\u6b65\u7f16\u7a0b\u8c03\u6574",level:2},{value:"\u6ce8\u610f\uff1aTaro RN \u4f9d\u8d56\u5347\u7ea7\u5230 0.59.9",id:"\u6ce8\u610ftaro-rn-\u4f9d\u8d56\u5347\u7ea7\u5230-0599",level:4},{value:"\u5347\u7ea7\u5e38\u89c1\u95ee\u9898\u6574\u7406",id:"\u5347\u7ea7\u5e38\u89c1\u95ee\u9898\u6574\u7406",level:2},{value:"\u5c0f\u7a0b\u5e8f",id:"\u5c0f\u7a0b\u5e8f",level:3},{value:"\u4f7f\u7528 async/await \u65f6\u51fa\u73b0\u62a5\u9519 <code>Function(...) is not a function</code>",id:"\u4f7f\u7528-asyncawait-\u65f6\u51fa\u73b0\u62a5\u9519-function-is-not-a-function",level:4},{value:"\u62c6\u5206\u7684\u516c\u5171\u6587\u4ef6 <code>vendors.js</code> \u8fc7\u5927",id:"\u62c6\u5206\u7684\u516c\u5171\u6587\u4ef6-vendorsjs-\u8fc7\u5927",level:4},{value:"\u53d1\u89c9\u5347\u7ea7\u4e4b\u540e\u6587\u4ef6\u66f4\u5927",id:"\u53d1\u89c9\u5347\u7ea7\u4e4b\u540e\u6587\u4ef6\u66f4\u5927",level:4},{value:"\u67d0\u4e9b\u7ec4\u4ef6\u6837\u5f0f\u5931\u6548\u4e86",id:"\u67d0\u4e9b\u7ec4\u4ef6\u6837\u5f0f\u5931\u6548\u4e86",level:4},{value:"\u5728 JS \u4e2d\u5f15\u5165\u7684\u56fe\u7247\u7a81\u7136\u53d8\u6210 base64 \u683c\u5f0f",id:"\u5728-js-\u4e2d\u5f15\u5165\u7684\u56fe\u7247\u7a81\u7136\u53d8\u6210-base64-\u683c\u5f0f",level:4},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",level:2}],u={toc:c};function m(e){var{components:n}=e,a=o(e,["components"]);return(0,t.kt)("wrapper",r({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Taro 2.0 \u6574\u4f53\u4e0a\u4e0e 1.0 \u662f\u5b8c\u5168\u517c\u5bb9\u7684\uff0c\u8fc1\u79fb\u5e76\u4e0d\u56f0\u96be\uff0c\u672c\u6307\u5357\u5c06\u6307\u5bfc\u4f60\u5982\u4f55\u8fdb\u884c\u4ece Taro 1.x \u5230 Taro 2.x \u7684\u8fc1\u79fb\u5de5\u4f5c\u3002"),(0,t.kt)("h2",r({},{id:"\u66f4\u65b0-taro-cli-\u548c\u4f9d\u8d56\u7248\u672c"}),"\u66f4\u65b0 Taro CLI \u548c\u4f9d\u8d56\u7248\u672c"),(0,t.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5347\u7ea7\u5168\u5c40\u7684 Taro \u7248\u672c\u6216\u8005\u4ec5\u4e3a\u4f60\u7684\u67d0\u4e00\u4e2a\u9879\u76ee\u5347\u7ea7\u3002"),(0,t.kt)("h3",r({},{id:"\u5168\u5c40-cli-\u5347\u7ea7"}),"\u5168\u5c40 CLI \u5347\u7ea7"),(0,t.kt)("p",null,"\u5982\u679c\u4f60\u7684 Taro CLI \u4ee5\u5168\u5c40\u65b9\u5f0f\u5b89\u88c5\uff0c\u5e76\u4e14\u4f60\u5e0c\u671b\u5347\u7ea7\u5230 Taro 2.0 \u9700\u8981\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528 Taro \u81ea\u5df1\n\n$ taro update self 2.0.0(\u8bf7\u4fee\u6539\u4e3a Taro 2.x \u6700\u65b0\u7248\u672c)\n\n# \u5982\u679c\u4f60\u4f7f\u7528 NPM\n\n$ npm update -g @tarojs/cli@2.x\n\n# \u5982\u679c\u4f60\u4f7f\u7528 Yarn\n\n$ yarn global upgrade @tarojs/cli@2.x\n")),(0,t.kt)("p",null,"\u4e4b\u540e\u5728\u4f60\u7684\u9879\u76ee\u76ee\u5f55\u91cc\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5347\u7ea7\u4f9d\u8d56\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ taro update project 2.0.0(\u8bf7\u4fee\u6539\u4e3a Taro 2.x \u6700\u65b0\u7248\u672c)\n")),(0,t.kt)("h3",r({},{id:"\u5355\u72ec\u4e3a\u67d0\u4e00\u4e2a\u9879\u76ee\u5347\u7ea7"}),"\u5355\u72ec\u4e3a\u67d0\u4e00\u4e2a\u9879\u76ee\u5347\u7ea7"),(0,t.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u5168\u5c40\u7684 Taro \u7248\u672c\u8fd8\u662f 1.x \u7684\uff0c\u591a\u4e2a\u9879\u76ee\u95f4\u7684\u4f9d\u8d56\u4e0d\u51b2\u7a81\uff0c\u5176\u4f59\u9879\u76ee\u4f9d\u7136\u53ef\u4ee5\u7528\u65e7\u7248\u672c\u5f00\u53d1\u3002\n\u5982\u679c\u4f60\u7684\u9879\u76ee\u91cc\u6ca1\u6709\u5b89\u88c5 Taro CLI\uff0c\u4f60\u9700\u8981\u5148\u88c5\u4e00\u4e2a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u4f60\u4f7f\u7528 NPM\n\n$ npm install --save-dev @tarojs/cli@2.x\n\n# \u5982\u679c\u4f60\u4f7f\u7528 Yarn\n\n$ yarn add -D @tarojs/cli@2.x\n")),(0,t.kt)("p",null,"\u7136\u540e\u5728\u4f60\u7684\u9879\u76ee\u76ee\u5f55\u91cc\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5347\u7ea7\u4f9d\u8d56\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u4f60\u4f7f\u7528 NPM\n\n$ node ./node_modules/.bin/taro update project 2.0.0(\u8bf7\u4fee\u6539\u4e3a Taro 2.x \u6700\u65b0\u7248\u672c)\n\n# \u5982\u679c\u4f60\u4f7f\u7528 Yarn\n\n$ yarn taro update project 2.0.0(\u8bf7\u4fee\u6539\u4e3a Taro 2.x \u6700\u65b0\u7248\u672c)\n")),(0,t.kt)("h2",r({},{id:"\u5b89\u88c5-tarojsmini-runner-\u4f9d\u8d56"}),"\u5b89\u88c5 ",(0,t.kt)("inlineCode",{parentName:"h2"},"@tarojs/mini-runner")," \u4f9d\u8d56"),(0,t.kt)("p",null,"Taro 2.0 \u65b0\u589e\u4e86 ",(0,t.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner")," \u4f5c\u4e3a\u5c0f\u7a0b\u5e8f\u7684\u7f16\u8bd1\u4f9d\u8d56\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u5c06\u5b83\u5b89\u88c5\u5728\u4f60\u7684\u9879\u76ee\u91cc\uff0c\u8fd0\u884c\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u4f60\u4f7f\u7528 NPM\n\n$ npm install --save-dev @tarojs/mini-runner@2.x\n\n# \u5982\u679c\u4f60\u4f7f\u7528 Yarn\n\n$ yarn add -D @tarojs/mini-runner@2.x\n")),(0,t.kt)("h2",r({},{id:"\u7f16\u8bd1\u914d\u7f6e\u8c03\u6574"}),"\u7f16\u8bd1\u914d\u7f6e\u8c03\u6574"),(0,t.kt)("p",null,"Taro 2.0 \u5bf9 CLI \u7684\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u8fdb\u884c\u4e86\u91cd\u6784\uff0c\u4f7f\u7528 Webpack \u6765\u5b9e\u73b0\u7f16\u8bd1\u6784\u5efa\uff0c\u6240\u4ee5\u6211\u4eec\u5bf9\u90e8\u5206\u7f16\u8bd1\u914d\u7f6e\u505a\u4e86\u4f18\u5316\u8c03\u6574\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const config = {\n  projectName: 'taro-framework',\n  date: '2019-11-2',\n  designWidth: 750,\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2,\n  },\n  sourceRoot: 'src',\n  outputRoot: 'dist',\n  // babel\u3001csso\u3001uglify \u7b49\u914d\u7f6e\u4ece plugins \u914d\u7f6e\u4e2d\u79fb\u51fa\u6765\n  babel: {\n    sourceMap: true,\n    presets: [['env', { modules: false }]],\n    plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread'],\n  },\n  // \u5c0f\u7a0b\u5e8f\u914d\u7f6e\u4ece weapp \u6539\u4e3a mini\uff0c\u53ef\u4ee5\u5220\u6389\u5f88\u591a\u5c0f\u914d\u7f6e\n  mini: {\n    webpackChain(chain, webpack) {},\n    cssLoaderOption: {},\n    postcss: {\n      pxtransform: {\n        enable: true,\n        config: {},\n      },\n      url: {\n        enable: true,\n        config: {\n          limit: 10240, // \u8bbe\u5b9a\u8f6c\u6362\u5c3a\u5bf8\u4e0a\u9650\n        },\n      },\n    },\n  },\n  // \u53ef\u4ee5\u5220\u6389\u5f88\u591a\u5c0f\u914d\u7f6e\n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    webpackChain(chain, webpack) {},\n    postcss: {\n      autoprefixer: {\n        enable: true,\n        config: {\n          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],\n        },\n      },\n    },\n  },\n}\n\nmodule.exports = function (merge) {\n  if (process.env.NODE_ENV === 'development') {\n    return merge({}, config, require('./dev'))\n  }\n  return merge({}, config, require('./prod'))\n}\n")),(0,t.kt)("p",null,"\u5177\u4f53\u7f16\u8bd1\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,t.kt)("a",r({parentName:"p"},{href:"/taro-docs/docs/2.x/config-detail"}),"\u7f16\u8bd1\u914d\u7f6e\u6587\u6863"),"\u3002"),(0,t.kt)("h2",r({},{id:"\u5f02\u6b65\u7f16\u7a0b\u8c03\u6574"}),"\u5f02\u6b65\u7f16\u7a0b\u8c03\u6574"),(0,t.kt)("p",null,"Taro 2.0 \u4e2d\u5f00\u542f ",(0,t.kt)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u4e0d\u518d\u9700\u8981\u5b89\u88c5 ",(0,t.kt)("inlineCode",{parentName:"p"},"@tarojs/async-await"),"\uff0c\u800c\u662f\u76f4\u63a5\u901a\u8fc7 babel \u63d2\u4ef6\u6765\u83b7\u5f97\u652f\u6301\u3002"),(0,t.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u5728\u9879\u76ee\u4e2d\u5b89\u88c5\u5e76\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"@tarojs/async-await")," \u5305\uff0c\u9700\u5148\u5c06\u5b83\u5220\u9664\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u4f60\u4f7f\u7528 NPM\n\n$ npm uninstall @tarojs/async-await\n\n# \u5982\u679c\u4f60\u4f7f\u7528 Yarn\n\n$ yarn remove @tarojs/async-await\n")),(0,t.kt)("p",null,"\u5728\u4f60\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"App.jsx/tsx")," \u91cc\u5220\u9664 ",(0,t.kt)("inlineCode",{parentName:"p"},"import '@tarojs/async-await'"),"\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-diff"}),"import Taro, { Component } from '@tarojs/taro'\n- import '@tarojs/async-await'\nimport Index from './pages/index'\n\nimport './app.scss'\n\nclass App extends Component {\n")),(0,t.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u5b89\u88c5\u5305 ",(0,t.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime")," \u548c ",(0,t.kt)("inlineCode",{parentName:"p"},"babel-runtime"),"\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u4f60\u4f7f\u7528 NPM\n\n$ npm install --save-dev babel-plugin-transform-runtime\n$ npm install --save babel-runtime\n\n# \u5982\u679c\u4f60\u4f7f\u7528 Yarn\n\n$ yarn add -D babel-plugin-transform-runtime\n$ yarn add babel-runtime\n")),(0,t.kt)("p",null,"\u968f\u540e\u4fee\u6539\u9879\u76ee ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/2.x/config-detail#babel"}),"babel \u914d\u7f6e"),"\uff0c\u914d\u7f6e\u63d2\u4ef6 ",(0,t.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime"),"\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-js"}),"babel: {\n  sourceMap: true,\n  presets: [['env', { modules: false }]],\n  plugins: [\n    'transform-decorators-legacy',\n    'transform-class-properties',\n    'transform-object-rest-spread',\n    ['transform-runtime', {\n      \"helpers\": false,\n      \"polyfill\": false,\n      \"regenerator\": true,\n      \"moduleName\": 'babel-runtime'\n    }]\n  ]\n}\n")),(0,t.kt)("h4",r({},{id:"\u6ce8\u610ftaro-rn-\u4f9d\u8d56\u5347\u7ea7\u5230-0599"}),"\u6ce8\u610f\uff1aTaro RN \u4f9d\u8d56\u5347\u7ea7\u5230 0.59.9"),(0,t.kt)("p",null,"\u5728 2.0 \u4e2d\u6211\u4eec\u5c06 RN \u7aef React \u4f9d\u8d56\u5347\u7ea7\u5230 16.8.0\uff0cReact Native \u4f9d\u8d56\u5347\u7ea7\u5230 0.59.9\u3002\u4e3b\u8981\u539f\u56e0\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Google \u8981\u6c42\u6240\u6709 ",(0,t.kt)("a",r({parentName:"li"},{href:"https://play.google.com/"}),"Google Play")," \u5e94\u7528\u652f\u6301 64 \u4f4d so \u5e93\uff0c\u800c\u73b0\u6709 RN 0.55.4 \u4f9d\u65e0\u6cd5\u652f\u6301 64 \u4f4d\u5e93\uff0c\u4e3a\u914d\u5408 64 \u4f4d\u5347\u7ea7\uff0cTaro RN \u7aef\u7684 React Native \u4f9d\u8d56\u9700\u8981\u540c\u6b65\u5347\u7ea7"),(0,t.kt)("li",{parentName:"ul"},"React 16.8.0 \u662f\u7b2c\u4e00\u4e2a\u652f\u6301 Hook \u7684\u7248\u672c\uff0cReact Native \u4ece 0.59 \u7248\u672c\u5f00\u59cb\u652f\u6301 Hook\uff0c\u6b64\u524d\u793e\u533a\u4e00\u76f4\u5728\u547c\u5401\u5bf9 RN 0.55.4 \u8fdb\u884c\u5347\u7ea7\u4ee5\u76f4\u63a5\u652f\u6301 Hook \u7684\u5199\u6cd5")),(0,t.kt)("p",null,"\u672c\u6b21 RN \u7aef\u5c5e\u4e8e\u65e0\u7f1d\u5347\u7ea7\uff0c\u539f\u6709\u7684\u5199\u6cd5\u548c\u914d\u7f6e\u5747\u4e0d\u53d8\uff0c\u5982\u679c\u4f7f\u7528 ",(0,t.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-native-shell"}),"taro-native-shell")," \u7684\uff0c\u9009\u62e9 0.59.9 \u5206\u652f\u5373\u53ef\uff1b\u5728\u539f\u751f\u5e94\u7528\u96c6\u6210 RN \u7684\uff0c\u9700\u8981\u81ea\u884c\u5347\u7ea7 React Native \u4f9d\u8d56\u5230 0.59.9\u3002"),(0,t.kt)("h2",r({},{id:"\u5347\u7ea7\u5e38\u89c1\u95ee\u9898\u6574\u7406"}),"\u5347\u7ea7\u5e38\u89c1\u95ee\u9898\u6574\u7406"),(0,t.kt)("h3",r({},{id:"\u5c0f\u7a0b\u5e8f"}),"\u5c0f\u7a0b\u5e8f"),(0,t.kt)("h4",r({},{id:"\u4f7f\u7528-asyncawait-\u65f6\u51fa\u73b0\u62a5\u9519-function-is-not-a-function"}),"\u4f7f\u7528 async/await \u65f6\u51fa\u73b0\u62a5\u9519 ",(0,t.kt)("inlineCode",{parentName:"h4"},"Function(...) is not a function")),(0,t.kt)("p",null,"\u5728\u5347\u7ea7\u5230 2.x \u540e\u4f7f\u7528 async/await \u8bed\u6cd5\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u5982\u4e0b\u62a5\u9519"),(0,t.kt)("p",null,(0,t.kt)("img",r({parentName:"p"},{src:"https://user-images.githubusercontent.com/31717528/72597788-75cd3500-3949-11ea-953c-a34f618e20ec.png",alt:"error image"}))),(0,t.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner")," \u4f7f\u7528\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"postcss-loader")," \u4f9d\u8d56\u4e86\u65b0\u7248\u672c\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"regenerator-runtime")," \u5305\uff0c\u53ef\u80fd\u4f1a\u4e0e ",(0,t.kt)("inlineCode",{parentName:"p"},"babel-runtime")," \u4e2d\u4f9d\u8d56\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"regenerator-runtime")," \u7248\u672c\u51b2\u7a81\uff0c\u800c\u65b0\u7248\u672c\u7684\u5305\u65e0\u6cd5\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\uff0c\u6240\u4ee5\u5bfc\u81f4\u4e86\u5982\u4e0a\u9519\u8bef\uff0c\u89e3\u51b3\u529e\u6cd5\u662f\u5728\u672c\u5730\u81ea\u884c\u5b89\u88c5 ",(0,t.kt)("inlineCode",{parentName:"p"},"0.11.1")," \u7248\u672c\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"regenerator-runtime")," \u5305\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ npm i --save regenerator-runtime@0.11.1\n")),(0,t.kt)("h4",r({},{id:"\u62c6\u5206\u7684\u516c\u5171\u6587\u4ef6-vendorsjs-\u8fc7\u5927"}),"\u62c6\u5206\u7684\u516c\u5171\u6587\u4ef6 ",(0,t.kt)("inlineCode",{parentName:"h4"},"vendors.js")," \u8fc7\u5927"),(0,t.kt)("p",null,"\u5728 2.x \u4e2d\u9ed8\u8ba4\u4f1a\u62bd\u79bb 4 \u4e2a\u516c\u5171\u6587\u4ef6\uff0c\u5206\u522b\u4e3a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"runtime"),": webpack \u8fd0\u884c\u65f6\u5165\u53e3"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"vendors"),": node_modules \u4e2d\u6587\u4ef6\u62bd\u79bb"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"taro"),": node_modules \u4e2d Taro \u76f8\u5173\u4f9d\u8d56\u62bd\u79bb"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"common"),": \u9879\u76ee\u4e2d\u4e1a\u52a1\u4ee3\u7801\u516c\u5171\u6587\u4ef6\u62bd\u79bb")),(0,t.kt)("p",null,"\u7531\u4e8e ",(0,t.kt)("inlineCode",{parentName:"p"},"vendors")," \u9ed8\u8ba4\u662f\u9664 Taro \u76f8\u5173\u4f9d\u8d56\u4e4b\u5916\u7684\u6240\u6709\u5f15\u7528\u7684 node_modules \u6587\u4ef6\u7684\u62bd\u79bb\u516c\u5171\u6587\u4ef6\uff0c\u6240\u4ee5\u5982\u679c\u5f00\u53d1\u4eba\u5458\u81ea\u5df1\u5f15\u5165\u4e86\u8fc7\u591a\u7684 npm \u5305\u5c31\u4f1a\u5bfc\u81f4 ",(0,t.kt)("inlineCode",{parentName:"p"},"vendors.js")," \u8fc7\u5927\uff0c\u89e3\u51b3\u529e\u6cd5\u53ef\u4ee5\u662f\u5c3d\u91cf\u5c11\u7528 npm \u5305\uff0c\u5176\u4e8c\u662f\u53ef\u4ee5\u81ea\u5df1\u914d\u7f6e\u66f4\u7ec6\u7684\u62c6\u5206"),(0,t.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u5f15\u5165\u4e86 lodash\uff0c\u7531\u4e8e lodash \u672c\u8eab\u6bd4\u8f83\u5927\uff0c\u53ef\u4ee5\u518d\u81ea\u884c\u914d\u7f6e ",(0,t.kt)("a",r({parentName:"p"},{href:"./config-detail#miniwebpackchain"}),(0,t.kt)("inlineCode",{parentName:"a"},"mini.webpackChain"))," \u6765\u5c06 lodash \u5355\u72ec\u62c6\u5206\u51fa\u6765\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      chain.merge({\n        optimization: {\n          splitChunks: {\n            cacheGroups: {\n              lodash: {\n                name: 'lodash',\n                priority: 1000,\n                test(module) {\n                  return /node_modules[\\\\/]lodash/.test(module.context)\n                },\n              },\n            },\n          },\n        },\n      })\n    },\n  },\n}\n")),(0,t.kt)("p",null,"\u968f\u540e\u9700\u8981\u518d\u901a\u8fc7 ",(0,t.kt)("a",r({parentName:"p"},{href:"./config-detail#minicommonchunks"}),(0,t.kt)("inlineCode",{parentName:"a"},"mini.commonChunks"))," \u914d\u7f6e\u6765\u6dfb\u52a0 ",(0,t.kt)("inlineCode",{parentName:"p"},"lodash")," \u516c\u5171\u6587\u4ef6"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const config = {\n  mini: {\n    commonChunks(commonChunks) {\n      commonChunks.push('lodash')\n      return commonChunks\n    },\n  },\n}\n")),(0,t.kt)("p",null,"\u8fd9\u6837\u5c31\u80fd\u5c06 lodash \u76f8\u5173\u4f9d\u8d56\u5355\u72ec\u62bd\u79bb\u5230 ",(0,t.kt)("inlineCode",{parentName:"p"},"lodash.js")," \u4e2d\uff0c\u4ee5\u5b9e\u73b0\u5bf9 ",(0,t.kt)("inlineCode",{parentName:"p"},"vendors")," \u7684\u62c6\u5206"),(0,t.kt)("h4",r({},{id:"\u53d1\u89c9\u5347\u7ea7\u4e4b\u540e\u6587\u4ef6\u66f4\u5927"}),"\u53d1\u89c9\u5347\u7ea7\u4e4b\u540e\u6587\u4ef6\u66f4\u5927"),(0,t.kt)("p",null,"\u5982\u679c\u89c9\u5f97\u5347\u7ea7\u5230 2.x \u6587\u4ef6\u66f4\u5927\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,t.kt)("a",r({parentName:"p"},{href:"https://www.npmjs.com/package/webpack-bundle-analyzer"}),"webpack-bundle-analyzer")," \u63d2\u4ef6\u5bf9\u6253\u5305\u4f53\u79ef\u8fdb\u884c\u5206\u6790\u3002"),(0,t.kt)("p",null,"\u9996\u5148\u5b89\u88c5 ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack-bundle-analyzer")," \u4f9d\u8d56\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ npm install webpack-bundle-analyzer -D\n$ yarn add --dev webpack-bundle-analyzer\n")),(0,t.kt)("p",null,"\u968f\u540e\u5728 ",(0,t.kt)("a",r({parentName:"p"},{href:"./config-detail#minicommonchunks"}),(0,t.kt)("inlineCode",{parentName:"a"},"mini.webpackChain"))," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      chain.plugin('analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])\n    },\n  },\n}\n")),(0,t.kt)("p",null,"\u5728\u8fd0\u884c\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u80fd\u5728\u6d4f\u89c8\u5668\u91cc\u770b\u5230\u5982\u4e0b\u5206\u6790\u6548\u679c\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",r({parentName:"p"},{src:"https://storage.360buyimg.com/2.0/webpack-bundle-analyzer.jpg",alt:"webpack-bundle-analyzer"}))),(0,t.kt)("p",null,"\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u4e2d ",(0,t.kt)("inlineCode",{parentName:"p"},"Treemap sizes:")," \u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"Stat")," \u6309\u94ae\uff0c\u6765\u67e5\u770b\u6bcf\u4e00\u4e2a\u6587\u4ef6\u7684\u5177\u4f53\u4f9d\u8d56\u5173\u7cfb\u53ca\u4f9d\u8d56\u6587\u4ef6\u7684\u5927\u5c0f\u3002"),(0,t.kt)("h4",r({},{id:"\u67d0\u4e9b\u7ec4\u4ef6\u6837\u5f0f\u5931\u6548\u4e86"}),"\u67d0\u4e9b\u7ec4\u4ef6\u6837\u5f0f\u5931\u6548\u4e86"),(0,t.kt)("p",null,(0,t.kt)("del",{parentName:"p"},"\u5728\u5347\u7ea7\u5230 2.x \u540e\u53ef\u80fd\u4f1a\u9047\u5230\u67d0\u4e9b\u7ec4\u4ef6\u7684\u6837\u5f0f\u5931\u6548\u4e86\uff0c\u8fd9\u662f\u56e0\u4e3a 2.x \u4e2d\u9ed8\u8ba4\u5c06\u6240\u6709\u88ab\u8d85\u8fc7 1 \u4e2a\u6587\u4ef6\u5f15\u7528\u7684\u516c\u5171\u6837\u5f0f\u62bd\u79bb\u5230\u4e86 ",(0,t.kt)("inlineCode",{parentName:"del"},"common")," \u6587\u4ef6\u4e2d\uff0c\u8be5\u6587\u4ef6\u9ed8\u8ba4\u4f1a\u88ab ",(0,t.kt)("inlineCode",{parentName:"del"},"app")," \u5f15\u5165\uff0c\u800c\u7531\u4e8e\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u9ed8\u8ba4\u4e0d\u80fd\u63a5\u53d7\u516c\u5171\uff0c\u6240\u4ee5\u4f1a\u5bfc\u81f4\u6837\u5f0f\u5931\u6548\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e3a\u7ec4\u4ef6\u914d\u7f6e ",(0,t.kt)("a",r({parentName:"del"},{href:"/taro-docs/docs/2.x/component-style#%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F%E7%B1%BB"}),(0,t.kt)("inlineCode",{parentName:"a"},"addGlobalClass"))," \u6765\u89e3\u51b3\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u81ea\u5df1\u914d\u7f6e Webpack \u7981\u6b62\u62bd\u79bb\u516c\u5171\u6837\u5f0f\u3002")),(0,t.kt)("p",null,"\u81ea 2.1.1 \u5f00\u59cb\uff0c\u516c\u5171\u6837\u5f0f\u4e0d\u518d\u76f4\u63a5\u88ab ",(0,t.kt)("inlineCode",{parentName:"p"},"app")," \u5f15\u5165\uff0c\u800c\u662f\u4f1a\u81ea\u52a8\u8bc6\u522b\u5f15\u7528\u5230\u516c\u5171\u6837\u5f0f\u7684\u9875\u9762\u548c\u7ec4\u4ef6\uff0c\u76f4\u63a5\u5728\u4ed6\u4eec\u7684\u6837\u5f0f\u6587\u4ef6\u4e2d\u5f15\u5165\u516c\u5171\u6837\u5f0f\uff0c\u8fd9\u6837\u7684\u8bdd\u7ec4\u4ef6\u4e0d\u9700\u8981\u518d\u914d\u7f6e ",(0,t.kt)("a",r({parentName:"p"},{href:"/taro-docs/docs/2.x/component-style#%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F%E7%B1%BB"}),(0,t.kt)("inlineCode",{parentName:"a"},"addGlobalClass"))," \u4e86\u3002"),(0,t.kt)("h4",r({},{id:"\u5728-js-\u4e2d\u5f15\u5165\u7684\u56fe\u7247\u7a81\u7136\u53d8\u6210-base64-\u683c\u5f0f"}),"\u5728 JS \u4e2d\u5f15\u5165\u7684\u56fe\u7247\u7a81\u7136\u53d8\u6210 base64 \u683c\u5f0f"),(0,t.kt)("p",null,"\u5728\u5347\u7ea7\u5230 2.x \u540e\u53ef\u80fd\u4f1a\u9047\u5230\u5728 JS \u4e2d\u5f15\u5165\u7684\u56fe\u7247\u7a81\u7136\u53d8\u6210 base64 \u683c\u5f0f\u4e86\uff0c\u662f\u56e0\u4e3a 2.x \u5c0f\u7a0b\u5e8f\u6539\u7528 Webpack \u7f16\u8bd1\u540e\u56fe\u7247\u90fd\u4f1a\u7ecf\u8fc7 ",(0,t.kt)("inlineCode",{parentName:"p"},"url-loader")," \u8fdb\u884c\u5904\u7406\uff0c\u9ed8\u8ba4 10kb \u5927\u5c0f\u4ee5\u4e0b\u7684\u56fe\u7247\uff08\u5305\u542b\u4ee5\u4e0b\u683c\u5f0f\uff0cpng | jpg | jpeg | gif | bmp\uff09\u90fd\u4f1a\u88ab\u8f6c\u4e3a base64\uff0c\u5982\u679c\u4e0d\u60f3\u8fd9\u4e48\u505a\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,t.kt)("a",r({parentName:"p"},{href:"./config-detail#miniimageurlloaderoption"}),"mini.imageUrlLoaderOption")," \u6765\u89e3\u51b3"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const config = {\n  mini: {\n    imageUrlLoaderOption: {\n      limit: 10240, // \u5927\u5c0f\u9650\u5236\uff0c\u5355\u4f4d\u4e3a b\n    },\n  },\n}\n")),(0,t.kt)("h2",r({},{id:"\u76f8\u5173\u9605\u8bfb"}),"\u76f8\u5173\u9605\u8bfb"),(0,t.kt)("p",null,(0,t.kt)("a",r({parentName:"p"},{href:"/blog/2020-09-01-taro-versions"}),"Taro \u7248\u672c\u5347\u7ea7\u6743\u5a01\u6307\u5357")))}m.isMDXComponent=!0}}]);
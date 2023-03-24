"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[84507],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});n(93106);var a=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"The Debug guide"},l=void 0,s={unversionedId:"debug",id:"debug",title:"The Debug guide",description:"Like all frameworks, Taro there are likely to be a bug. When do you think of your code is no problem, the problem is the Taro, can according to the content of this chapter for debugging.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/debug.md",sourceDirName:".",slug:"/debug",permalink:"/taro-docs/en/docs/next/debug",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/debug.md",tags:[],version:"current",frontMatter:{title:"The Debug guide"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Using yarn installed CLI error",id:"using-yarn-installed-cli-error",level:3},{value:"Project rely on has been installed",id:"project-rely-on-has-been-installed",level:3},{value:"mini-app",id:"mini-app",level:2},{value:"There is no error, but shows results than expected",id:"there-is-no-error-but-shows-results-than-expected",level:3},{value:"Filtering is diff logic",id:"filtering-is-diff-logic",level:4},{value:"debug diff",id:"debug-diff",level:5},{value:"WeChat mini-apps, increase the array elements cannot be correctly update the array length",id:"wechat-mini-apps-increase-the-array-elements-cannot-be-correctly-update-the-array-length",level:5},{value:"Compile the template error",id:"compile-the-template-error",level:4},{value:"When running in a small developer tool error",id:"when-running-in-a-small-developer-tool-error",level:3},{value:"Lifecycle/routing/setState error",id:"lifecycleroutingsetstate-error",level:3},{value:"WeChat small application form components",id:"wechat-small-application-form-components",level:3},{value:"API problem",id:"api-problem",level:3},{value:"API calls the result is not in line with expectations",id:"api-calls-the-result-is-not-in-line-with-expectations",level:4},{value:"API calls an error",id:"api-calls-an-error",level:4},{value:"H5",id:"h5",level:2},{value:"Runtime DOM related errors",id:"runtime-dom-related-errors",level:3},{value:"component",id:"component",level:2},{value:"jsEnginScriptError",id:"jsenginscripterror",level:3},{value:"Other resources",id:"other-resources",level:2}],u={toc:c};function m(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Like all frameworks, Taro there are likely to be a bug. When do you think of your code is no problem, the problem is the Taro, can according to the content of this chapter for debugging."),(0,a.kt)("p",null,"When you debug in Taro, please make sure all process has been completed:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ESLint has open and no error;"),(0,a.kt)("li",{parentName:"ol"},"After a roughly time including ",(0,a.kt)("a",o({parentName:"li"},{href:"/taro-docs/en/docs/next/best-practice"}),"best practices")," document, and there is no corresponding document a description of the problem;"),(0,a.kt)("li",{parentName:"ol"},"Search related issue, the issue did not mention relevant solution;"),(0,a.kt)("li",{parentName:"ol"},"According to the project use Taro version upgrade to see ",(0,a.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/CHANGELOG.md"}),"changelog"),", no opinion in the changelog repair issues related to submit;")),(0,a.kt)("p",null,"A lot of times as long as you go again, all the above four process problems will be readily solved. As a crafty framework, Taro has very many modules, when problems occur Taro also need module debugging, and then we will give some sample has solved the bug, we debug the thinking of the bug:"),(0,a.kt)("h2",o({},{id:"installation"}),"Installation"),(0,a.kt)("h3",o({},{id:"using-yarn-installed-cli-error"}),"Using yarn installed CLI error"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/tj/commander.js/issues/786"}),"Due")," to the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/tj/commander.js"}),"commander.js"),", under the Mac using yarn CLI installation, carry out orders to the occasional error"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"taro-init(1) does not exist, try --help\n")),(0,a.kt)("p",null,"At that time, you can choose to use NPM or CNPM reinstall the CLI, or CLI ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/2034"}),"added to the environment variables to solve"),"\u3002"),(0,a.kt)("h3",o({},{id:"project-rely-on-has-been-installed"}),"Project rely on has been installed"),(0,a.kt)("p",null,"Because of Taro ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," package default depends on the ",(0,a.kt)("inlineCode",{parentName:"p"},"node-sass"),", but sometimes can't rely on has been installed, here, suggest use taobao directly ",(0,a.kt)("a",o({parentName:"p"},{href:"https://npm.taobao.org/"}),"cnpm")," for installation, or try ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/gucong3000/mirror-config-china"}),"this package")),(0,a.kt)("h2",o({},{id:"mini-app"}),"mini-app"),(0,a.kt)("h3",o({},{id:"there-is-no-error-but-shows-results-than-expected"}),"There is no error, but shows results than expected"),(0,a.kt)("h4",o({},{id:"filtering-is-diff-logic"}),"Filtering is diff logic"),(0,a.kt)("p",null,"This problem occurred in the page or component ",(0,a.kt)("strong",{parentName:"p"},"update"),"."),(0,a.kt)("p",null,"Before the call setData method of mini-apps, Taro could do the state and the data once ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/2.x/optimized-practice#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%95%B0%E6%8D%AE-diff"}),"diff"),"."),(0,a.kt)("p",null,"If a property value from the state and the data did not change, probably won't setData again this property, cause the page do not have the right to update or components."),(0,a.kt)("p",null,"This kind of problem appears more in small application form components, such as the following two issue: ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/1981"}),"#1981"),"\u3001",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/2257"}),"#2257"),". Because some form components is a mini-app controlled components, form update, corresponding to the value of the value of the data will not be updated, is leading the data value and initial value. SetState again if this attribute is the initial value, because the diff logic attribute values did not change, not setData this attribute, view results in no update. The correct approach is in the form components update events setData value for the current value, ensure data consistent with the display value form."),(0,a.kt)("h5",o({},{id:"debug-diff"}),"debug diff"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u627e\u5230 taro \u8fd0\u884c\u65f6\u5e93\uff0c\u5728 diff \u65b9\u6cd5\u524d\u540e\u6253\u65ad\u70b9\u6216 log\uff0c\u89c2\u5bdf ",(0,a.kt)("strong",{parentName:"p"},"state"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u5c0f\u7a0b\u5e8f data")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"diff \u540e\u5c06\u8981\u88ab setData \u7684\u6570\u636e"),"\uff0c\u8fd9\u79cd\u6392\u67e5\u6709\u52a9\u5b9a\u4f4d\u5f88\u591a",(0,a.kt)("strong",{parentName:"p"},"\u89c6\u56fe\u66f4\u65b0"),"\u95ee\u9898\u3002\nDevelopers can be found in the developer tools taro runtime library, or log in diff method before and after the break point, observe the ",(0,a.kt)("strong",{parentName:"p"},"state"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"mini-app data")," and ",(0,a.kt)("strong",{parentName:"p"},"will be setData data"),", after the diff view ",(0,a.kt)("strong",{parentName:"p"},"update the screening")," will help locate many."),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://user-images.githubusercontent.com/11807297/53787956-514bb280-3f5b-11e9-9faf-f73ccd005222.png",alt:"qq20190305-151951"}))),(0,a.kt)("h5",o({},{id:"wechat-mini-apps-increase-the-array-elements-cannot-be-correctly-update-the-array-length"}),"WeChat mini-apps, increase the array elements cannot be correctly update the array length"),(0,a.kt)("p",null,"Increase the array elements, after the diff will be updated according to the path. But because of bug WeChat applet itself, according to the path update array, array length will not update correctly. As shown in the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/882"}),"#882")),(0,a.kt)("p",null,"This problem only appear in WeChat applet, ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/community/develop/doc/000c8a7eeb45e8b018b72f01356800"}),"WeChat official statement is not fixed"),"\u3002"),(0,a.kt)("p",null,"The recommendation is open a new state values to synchronous length change."),(0,a.kt)("h4",o({},{id:"compile-the-template-error"}),"Compile the template error"),(0,a.kt)("p",null,"This time is likely to be compiled template appeared error. For example, ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/2258"}),"#2285")," , Lord wrote two nested loops, unable to correctly in the second loop access to the first loop statement ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'// Assume that the source code in the src/pages/index/index.js\nrooms.map((room, index) => (\n  <View key={room.id}>\n    <View>The room</View>\n    <View className="men">\n      {room.checkInMen.map(man => (\n        <View onClick={this.handleRemoveMan.bind(this, man.id, index)}>\n          {man.name}\n        </View>\n      ))}\n    </View>\n  </View>\n);\n')),(0,a.kt)("p",null,"And compiled ",(0,a.kt)("inlineCode",{parentName:"p"},".wxml")," will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'\x3c!-- The compiled code will generate at least three files, respectively: --\x3e\n\x3c!-- dist/pages/index/index.js\uff0cdist/pages/index/index.wxml\uff0cdist/pages/index/index.json --\x3e\n<view wx:for="{{loopArray0}}" wx:for-item="room" wx:for-index="index">\n  <view>The room</view>\n    <view class="men">\n      <view  data-e-tap-a-b="{{index}}" bindtap="handleRemoveMan" wx:for="{{room.$anonymousCallee__0}}" wx:for-item="man" data-e-tap-so="this" data-e-tap-a-a="{{man.$original.id}}">{{man.$original.name}}\n      </view>\n    </view>\n  </view>\n</view>\n')),(0,a.kt)("p",null,"Were observed before and after compiled file, we can find that: because of the second loop is not specified ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," variable names, Taro compile cycle also does not specify ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," variable names. But the problem is WeChat mini-app when do not specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"index"),", will implicitly injection, a ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," variable name as ",(0,a.kt)("inlineCode",{parentName:"p"},"index"),". So this code in the second loop access ",(0,a.kt)("inlineCode",{parentName:"p"},"index"),", is actually the current loop ",(0,a.kt)("inlineCode",{parentName:"p"},"index"),", rather than superior cycle ",(0,a.kt)("inlineCode",{parentName:"p"},"index"),"."),(0,a.kt)("p",null,"When we understand the problem, it is easy to solve problem, as long as in the second loop explicitly exposed loop of the second variable, the source code can be amended as:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'rooms.map((room, index) => (\n  <View key={room.id}>\n    <View>The room</View>\n    <View className="men">\n      {room.checkInMen.map((man, _) => (\n        <View onClick={this.handleRemoveMan.bind(this, man.id, index)}>\n          {man.name}\n        </View>\n      ))}\n    </View>\n  </View>\n);\n')),(0,a.kt)("h3",o({},{id:"when-running-in-a-small-developer-tool-error"}),"When running in a small developer tool error"),(0,a.kt)("p",null,"Sometimes we will meet at runtime errors like this:"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://i.loli.net/2019/02/27/5c765b5bc1915.png",alt:"debug.png"}))),(0,a.kt)("p",null,"Debugging this problem is also very simple, just click on the call stack a link to the top from the call stack, point in we can find that it's the code:"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://i.loli.net/2019/02/28/5c77517c622e3.png",alt:"debug2.png"}))),(0,a.kt)("p",null,"Then we can find this mistake because the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," the call ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign()")," find a variable a function, we can look at the source code:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// If you run times wrong file path is: dist/pages/test/test.js\n// You can determine the source in: src/pages/test/test.js\n// The compiled js file after Babel compiled already, but still can one-to-one function basically\n// besides `render()` function will correspond to the `_createData()` function, like `renderTest` function corresponding to `createTestData` function\nrender () {\n  let dom = null\n  if (this.props.visable) {\n      const url = 'https://...'\n      dom = <Image src={url} />\n  }\n  \n  return <Container>\n    {dom}\n  </Container>\n}\n")),(0,a.kt)("p",null,"By observing the compiled code, we can find the source code without any problems, but the Taro version in this problem didn't handle the if expression within the scope of variables, called ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign()")," function ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," variable does not exist in ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," function scope. In order to solve this problem, we can modify the source code, manual put ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," variables also ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," function scope:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"render () {\n  let dom = null\n  let url = ''\n  if (this.props.visable) {\n      url = 'https://...'\n      dom = <Image src={url} />\n  }\n  \n  return <Container>\n    {dom}\n  </Container>\n}\n")),(0,a.kt)("p",null,"Most runtime errors can be through a mini-app built-in Chrome DevTools to find the cause of the error, if the current call stack had not found the problem, can to debug step by step up the call stack. Chrome DevTools related documents please check: ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/tools/chrome-devtools/"}),"Chrome developer tools")),(0,a.kt)("h3",o({},{id:"lifecycleroutingsetstate-error"}),"Lifecycle/routing/setState error"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/1814"}),"#1814")," mentioned in the ",(0,a.kt)("inlineCode",{parentName:"p"},"this.$router.path"),"(the current page routing path) sometimes cannot be accessed. Through the survey found that is because of the function of the Taro access path in the mini-app ",(0,a.kt)("inlineCode",{parentName:"p"},"onLoad")," function, rather than every component can call to this function. And the solution to this problem is also very simple, if the current page is component can be directly through the ",(0,a.kt)("inlineCode",{parentName:"p"},"this.$scope.route")," access, more universal method by ",(0,a.kt)("inlineCode",{parentName:"p"},"getCurrentPages")," sample function to access to the current page, and then visit instance ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"__route__")," access routing path to the current page."),(0,a.kt)("p",null,"Through this example, we easily find out that the life cycle of Taro/routing and ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," on mini-app is packaged into the React of the API layer of syntactic sugar, we call this layer of packaging Taro runtime framework. Almost all the Taro provide apis and syntactic sugar were eventually is to provide API is implemented through a mini-app itself, that is to say, when occurrence problem of Taro runtime framework, basic can you use the API provided by the mini-app itself to achieve the same requirements, including but not limited to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"this.$scope.triggerEvent")," call by props transfer function;"),(0,a.kt)("li",{parentName:"ol"},"Through ",(0,a.kt)("inlineCode",{parentName:"li"},"this.$scope.selectComponent")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"wx.createSelectorQuery")," implementation ",(0,a.kt)("inlineCode",{parentName:"li"},"ref"),";"),(0,a.kt)("li",{parentName:"ol"},"Through ",(0,a.kt)("inlineCode",{parentName:"li"},"getCurrentPages")," related methods, such as access route;"),(0,a.kt)("li",{parentName:"ol"},"Modifying the compiled file ",(0,a.kt)("inlineCode",{parentName:"li"},"createComponent")," function creates the object")),(0,a.kt)("p",null,"Although a mini-app that use native methods can do a lot of the same thing, but problems arise when run Taro framework, we strongly recommend that developers to official Taro ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/new/choose"}),"submit issue"),", the friends can also have the ability to developers ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/pulls"}),"submit PR"),". On the one hand, using a Taro API implementation can help you with multiterminal differences, on the other hand to find even fix bugs can also help strengthen your understanding of Taro and small application layer."),(0,a.kt)("h3",o({},{id:"wechat-small-application-form-components"}),"WeChat small application form components"),(0,a.kt)("p",null,"WeChat small application form components not controlled components, when a user operation form view will ",(0,a.kt)("strong",{parentName:"p"},"immediately change"),", but the form of the value that the value is not changed."),(0,a.kt)("p",null,"If the form is ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"the onInput")," such value change in the callback setState value for the user to change the form before the value of the operation, Taro diff logic will judge setState value value and the current data. The value is consistent, then ",(0,a.kt)("strong",{parentName:"p"},"give up setData"),", cause we do not have the right to update the view."),(0,a.kt)("p",null,"Solution:"),(0,a.kt)("p",null,"Input component can pass in a callback return values to update the view needs to change. As shown in the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/2642"}),"#2642")),(0,a.kt)("p",null,"mini-app Input component documents screenshots:"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://user-images.githubusercontent.com/11807297/55405139-fcb44b00-558b-11e9-845f-afbc73863b48.png",alt:"inputdoc"}))),(0,a.kt)("p",null,"Other components need immediately ",(0,a.kt)("inlineCode",{parentName:"p"},"setState({ value: e.detail.value })")," To update immediately synchronized data. The value value, then setState really needed to form the value to change. As shown in the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/1981"}),"#1981"),"\u3001",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/2257"}),"#2257")),(0,a.kt)("h3",o({},{id:"api-problem"}),"API problem"),(0,a.kt)("h4",o({},{id:"api-calls-the-result-is-not-in-line-with-expectations"}),"API calls the result is not in line with expectations"),(0,a.kt)("p",null,"Taro mini-app on the API is just on the mini-app native API simply promise, didn't do anything additional operations. So developers when meeting this kind of situation can try a mini-app that directly using the API, as WeChat program directly using ",(0,a.kt)("inlineCode",{parentName:"p"},"wx.xxx"),". If you have the same error that is a mini-app issues. It could be the problem of Taro, can you give us the related issue."),(0,a.kt)("h4",o({},{id:"api-calls-an-error"}),"API calls an error"),(0,a.kt)("p",null,"Assume that developers at some API calls ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.xxx"),", appear similar to the following error:"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://user-images.githubusercontent.com/11807297/59170450-45324b00-8b71-11e9-8e25-1169b425040c.png",alt:"image"}))),(0,a.kt)("p",null,"Prove that Taro is not compatible with this API, such as a small application platform API of the latest update. When can you give us issue require to add, or modify the file ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/master/packages/taro/src/native-apis.js"}),"native-apis.js")," after, give us to raise PR."),(0,a.kt)("h2",o({},{id:"h5"}),"H5"),(0,a.kt)("h3",o({},{id:"runtime-dom-related-errors"}),"Runtime DOM related errors"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/1804"}),"#1804")," , as long as you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," components and has a variable control it explicitly, is bound to an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"export default class Index extends Component {\n  config = {\n    navigationBarTitleText: 'Home Page'\n  };\n\n  state = {\n    num: 1\n  };\n\n  componentDidMount() {\n    console.log('did');\n    setTimeout(() => {\n      this.setState({\n        num: 0\n      });\n    }, 2000);\n  }\n\n  render() {\n    const { num } = this.state;\n    return (\n      <View className=\"container\">\n        {num === 0 && <View>sold out</View>}\n        {num > 0 && (\n          <Block>\n            <View>on sale</View>\n            <View>buy now</View>\n          </Block>\n        )}\n        {/* {num > 0 && <View>on sale</View>} */}\n      </View>\n    );\n  }\n}\n")),(0,a.kt)("p",null,"This time we can locate the problem to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," component, we can see ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," component source code in ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/components"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"const Block = (props) =>  props.children\nexport default Block\n")),(0,a.kt)("p",null,"That is when the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"num > 0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," components ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," displays, and when ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," components ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," is an array, ",(0,a.kt)("inlineCode",{parentName:"p"},"View.container")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"[a View component, [an array]]"),", rendering such data structures need ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Fragment")," package to render. And Taro there is currently no support ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Fragment")," syntax, so written as an error. The solution to this problem is also very simple, only need to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," components, with an element live ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," can:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"const Block = (props) => <div>{props.children}</div>\n")),(0,a.kt)("p",null,"When you have a related problems, we have prepared a quick start sandbox tools, you can directly in this tool for editing, debugging, recurring problems:"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://codesandbox.io/s/50nzv622z4?fontsize=14"}),(0,a.kt)("img",o({parentName:"a"},{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit Taro sandbox"})))),(0,a.kt)("h2",o({},{id:"component"}),"component"),(0,a.kt)("h3",o({},{id:"jsenginscripterror"}),"jsEnginScriptError"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Component is not found in path "xxx/xxx/xxx"')," solution:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"check for compiler error")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"check the compiled files are correct")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"step 1 and step 2 if the check is no problem, restart the developer tools, or jump to step 4")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"provide specific compiler error message and compiled file information screenshot"))),(0,a.kt)("h2",o({},{id:"other-resources"}),"Other resources"),(0,a.kt)("p",null,"This paper lists some Taro has solve bug example, expounds the thinking of the debug in Taro, but in practice if you can understand more deeply the implementation principle of Taro, that whether the use of Taro or debug will have a big help. The following resources from all aspects introduces the implementation of Taro principle:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The nuggets small volumes: ",(0,a.kt)("a",o({parentName:"li"},{href:"https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d"}),"Taro multiterminal development principle and actual combat")),(0,a.kt)("li",{parentName:"ul"},"Blog: ",(0,a.kt)("a",o({parentName:"li"},{href:"https://aotu.io/notes/2018/06/25/the-birth-of-taro/"}),"Taro were born")),(0,a.kt)("li",{parentName:"ul"},"Public speaking: ",(0,a.kt)("a",o({parentName:"li"},{href:"https://share.weiyun.com/5nUKYfy"}),"multiterminal project using Taro fast development")),(0,a.kt)("li",{parentName:"ul"},"Public speaking: ",(0,a.kt)("a",o({parentName:"li"},{href:"https://share.weiyun.com/5lZXV1G"}),"on the basis of Taro multiterminal \u2f6c item practice"))))}m.isMDXComponent=!0}}]);
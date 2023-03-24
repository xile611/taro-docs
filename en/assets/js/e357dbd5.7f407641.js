"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64867],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6523:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});n(93106);var o=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={title:"Taro.Component"},i=void 0,p={unversionedId:"apis/about/tarocomponent",id:"apis/about/tarocomponent",title:"Taro.Component",description:"Taro.Component is an abstract base class, so the direct reference Taro.Component almost meaningless. Instead, you often inherit from it, and at least define a render() method.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/about/tarocomponent.md",sourceDirName:"apis/about",slug:"/apis/about/tarocomponent",permalink:"/taro-docs/en/docs/next/apis/about/tarocomponent",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/about/tarocomponent.md",tags:[],version:"current",frontMatter:{title:"Taro.Component"}},s={},d=[{value:"Component lifecycle",id:"component-lifecycle",level:2},{value:"Loading (Mounting)",id:"loading-mounting",level:4},{value:"Update (Updating)",id:"update-updating",level:4},{value:"Uninstall (Unmounting)",id:"uninstall-unmounting",level:4},{value:"Other apis",id:"other-apis",level:4},{value:"Class attribute",id:"class-attribute",level:4},{value:"Instance attributes",id:"instance-attributes",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"render()",id:"render",level:3},{value:"constructor()",id:"constructor",level:3},{value:"<code>static getDerivedStateFromProps()</code>",id:"static-getderivedstatefromprops",level:3},{value:"getSnapshotBeforeUpdate()",id:"getsnapshotbeforeupdate",level:3},{value:"componentWillMount()",id:"componentwillmount",level:3},{value:"componentDidMount()",id:"componentdidmount",level:3},{value:"componentWillReceiveProps()",id:"componentwillreceiveprops",level:3},{value:"shouldComponentUpdate()",id:"shouldcomponentupdate",level:3},{value:"componentWillUpdate()",id:"componentwillupdate",level:3},{value:"componentDidUpdate()",id:"componentdidupdate",level:3},{value:"componentWillUnmount()",id:"componentwillunmount",level:3},{value:"setState()",id:"setstate",level:3},{value:"Class attribute",id:"class-attribute-1",level:2},{value:"defaultProps",id:"defaultprops",level:3},{value:"Instance attributes",id:"instance-attributes-1",level:2},{value:"props",id:"props",level:3},{value:"state",id:"state",level:3}],u={toc:d};function c(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Taro.Component")," is an abstract base class, so the direct reference ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.Component")," almost meaningless. Instead, you often inherit from it, and at least define a ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method."),(0,o.kt)("p",null,"Usually you define a ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro")," component is equivalent to a pure ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"class Welcome extends Component {\n  render () {\n    return <h1>Hello, {this.props.name}</h1>\n  }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Taro and React different here is that no exposed a ",(0,o.kt)("inlineCode",{parentName:"p"},"createClass")," method, you can only use the ES6 class class to create the Taro components.")),(0,o.kt)("h2",a({},{id:"component-lifecycle"}),"Component lifecycle"),(0,o.kt)("p",null,'Each component has a few you can be rewritten to make the code in certain period operation of the link of the "life cycle method. Method with the prefix ',(0,o.kt)("inlineCode",{parentName:"p"},"will")," is called before a specific link, and contain the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"did")," method will be invoked after a particular link."),(0,o.kt)("h4",a({},{id:"loading-mounting"}),"Loading (Mounting)"),(0,o.kt)("p",null,"These methods will be in a component instance is created and inserted into the DOM is called:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"constructor()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillMount()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"render()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"componentDidMount()"))),(0,o.kt)("h4",a({},{id:"update-updating"}),"Update (Updating)"),(0,o.kt)("p",null,"Attributes, or change of state will trigger an update. When a component is to render, these methods will be called:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillReceiveProps()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillUpdate()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"render()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"componentDidUpdate()"))),(0,o.kt)("h4",a({},{id:"uninstall-unmounting"}),"Uninstall (Unmounting)"),(0,o.kt)("p",null,"When a component is removed from the DOM, this method is called:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillUnmount()"))),(0,o.kt)("h4",a({},{id:"other-apis"}),"Other apis"),(0,o.kt)("p",null,"Each component also provides other API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setState()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forceUpdate()"))),(0,o.kt)("h4",a({},{id:"class-attribute"}),"Class attribute"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultProps"))),(0,o.kt)("h4",a({},{id:"instance-attributes"}),"Instance attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"props")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config"),"(mini-app exclusive)")),(0,o.kt)("h2",a({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,o.kt)("h3",a({},{id:"render"}),"render()"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method is a must."),(0,o.kt)("p",null,"When is invoked, ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," method must return a Taro components (can be built-in component can also be custom components) or a ",(0,o.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy"}),"falsy")," value."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"render()")," function should be pure, means that it should not change the state of the components, its each invocation should return the same result, at the same time does not directly interact with the browser/mini-apps. If need to interact with the browser/mini-apps, put the task in ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," stage or other method of life cycle. Keep ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method pure components are more likely to think."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the React/Nerv ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," can return to a variety of data structure, but the Taro temporarily only supports two kinds. Because Taro must compile JSX into WeChat mini-app templates. When the return value is ",(0,o.kt)("inlineCode",{parentName:"p"},"falsy"),", actually will be compiled into mini-apps ",(0,o.kt)("inlineCode",{parentName:"p"},"wx:if")," label.")),(0,o.kt)("h3",a({},{id:"constructor"}),"constructor()"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"constructor(props)\n")),(0,o.kt)("p",null,"Taro component constructor will be invoked before assembly. As for a ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.Component")," definition subclass constructor, you should be called before any other expression ",(0,o.kt)("inlineCode",{parentName:"p"},"super(props)"),". Otherwise, enclosing props is not defined in the constructor, and may raise an exception."),(0,o.kt)("p",null,"The right location constructor is initialized state. If you don't initialize state and is not binding approach, Taro components that you don't need for you to define a constructor."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In Taro, even if you don't write constructor (), compiled into WeChat mini-app will automatically give you add, because the Taro runtime framework needs to be in the constructor (in) to do more.")),(0,o.kt)("p",null,'Can be initialized state based on the attribute. This effectively "separation" (forks) and according to the initial attribute set state.'),(0,o.kt)("h3",a({},{id:"static-getderivedstatefromprops"}),(0,o.kt)("inlineCode",{parentName:"h3"},"static getDerivedStateFromProps()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since v1.3.0 available")),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"static getDerivedStateFromProps(props, state)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getDerivedStateFromProps")," will call before invoking render method, and the initial mount and the subsequent updates will be invoked. It should return an object to update the state, if return null is not updated any content."),(0,o.kt)("p",null,"And ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getDerivedStateFromProps")," will in each ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," triggered before this method, and ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps")," will call when the parent component rendering."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),'export default class ButtonSelectable extends Component {\n  static propTypes = {\n    selected: PropTypes.bool,\n    onClick: PropTypes.func\n  };\n\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isSelected: props.selected\n    };\n  }\n\n  static getDerivedStateFromProps(props, state) {\n    if (props.selected !== state.isSelected) {\n      return {\n        isSelected: props.selected\n      };\n    }\n\n    return null;\n  }\n\n  handleClick = event => {\n    this.setState({\n      isSelected: !this.state.isSelected\n    });\n  };\n\n  render() {\n    return (\n      <Button\n        className={`B-selectable ${\n          this.state.isSelected ? "button-selectable-selected" : ""\n        }`}\n        onClick={this.handleClick}\n      >\n        {this.state.isSelected ? "Selected!" : "Not selected..."}\n      </Button>\n    );\n  }\n}\n\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note:\ngetDerivedStateFromProps() If there is ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillMount")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUpdate")," will not call.\nWhen you need more than in the old life cycle setState, we recommend you to use more getDerivedStateFromProps method, because it can reduce an update overhead.")),(0,o.kt)("h3",a({},{id:"getsnapshotbeforeupdate"}),"getSnapshotBeforeUpdate()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since v1.3.0 available")),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"getSnapshotBeforeUpdate(prevProps, prevState)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getSnapshotBeforeUpdate()")," in the latest rendering output (submitted to the DOM node) before the call. It makes the components can be changed before capture some information in the DOM (for example, the scroll position). The life cycle of any return value will be passed as a parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate()"),"\u3002"),(0,o.kt)("p",null,"Should return the value of the snapshot (or null)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note:\ngetSnapshotBeforeUpdate() If there is ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillMount")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUpdate")," will not call.\nWhen you need more than in the old life cycle setState, we recommend you to use ",(0,o.kt)("inlineCode",{parentName:"p"},"getSnapshotBeforeUpdate")," method, because it can reduce an update overhead.")),(0,o.kt)("h3",a({},{id:"componentwillmount"}),"componentWillMount()"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"componentWillMount()\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"componentWillMount()")," In front of the components in the loading is called immediately."),(0,o.kt)("p",null,"Avoid introducing any side effects in the method or subscription. For these usage scenarios, we recommend using the constructor () instead."),(0,o.kt)("p",null,"This is the only on the service side rendering the life cycle of the hook function."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"componentWillMount() In a mini-app is the corresponding life cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"onLoad"))),(0,o.kt)("h3",a({},{id:"componentdidmount"}),"componentDidMount()"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"componentDidMount()\n")),(0,o.kt)("p",null,"componentDidMount() is called immediately after loading. Initialize the DOM node should be here. If you need to load data from the far end, this is a right place to realize network request. In this method ",(0,o.kt)("inlineCode",{parentName:"p"},"setState ()")," will trigger a rendering."),(0,o.kt)("h3",a({},{id:"componentwillreceiveprops"}),"componentWillReceiveProps()"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"componentWillReceiveProps(nextProps)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps()")," before already loaded component receives a new attribute calls. If you need to update the status response properties change, you may need to contrast ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nextProps")," and used in the method ",(0,o.kt)("inlineCode",{parentName:"p"},"this.setState()")," processing state changes."),(0,o.kt)("p",null,"Note even if the property no change, Taro may also call the method, so if you want to have to deal with change, please ensure that a value of the current and after."),(0,o.kt)("p",null,"During loading, Taro won't call with initial attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps")," method. Call ",(0,o.kt)("inlineCode",{parentName:"p"},"this.setState")," usually don't trigger ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps"),"."),(0,o.kt)("h3",a({},{id:"shouldcomponentupdate"}),"shouldComponentUpdate()"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"shouldComponentUpdate(nextProps, nextState)\n")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," let Taro know whether or not the output of the component is not affected by the state or props of the current change. The default behavior is to render when every time the state changes, and in most cases, you should rely on the default behavior."),(0,o.kt)("p",null,"When receiving the new props or state, ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," is called before rendering. Returns true, by default for the initial (first) rendering or use ",(0,o.kt)("inlineCode",{parentName:"p"},"forceUpdate()"),", this method is called."),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," will not prevent child components in the state changes to rendering."),(0,o.kt)("h3",a({},{id:"componentwillupdate"}),"componentWillUpdate()"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"componentWillUpdate(nextProps, nextState)\n")),(0,o.kt)("p",null,"When receiving the new props or state, ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUpdate()")," before rendering is called immediately. In the update before using this method can be used as a ready to update a good opportunity. This method in the rendering for the first time will not be invoked."),(0,o.kt)("p",null,"Note that call is not allowed here ",(0,o.kt)("inlineCode",{parentName:"p"},"this.setState()")," . If you need to update the state in response to props change, please use ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps()")," ."),(0,o.kt)("p",null,"If you need to update the state to respond to the change of the props, can be used ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps()")," instead."),(0,o.kt)("h3",a({},{id:"componentdidupdate"}),"componentDidUpdate()"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"componentDidUpdate(prevProps, prevState)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate()"),"  In the update immediately after is invoked. This method in the rendering for the first time will not be invoked."),(0,o.kt)("h3",a({},{id:"componentwillunmount"}),"componentWillUnmount()"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"componentWillUnmount()\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount()")," In a component is unloaded (unmounted) and destruction is called immediately before (destroyed). In this method to perform any necessary cleanup, such as disable timer, cancel the network request, remove some events may lead to memory leaks, etc."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In a mini-app, a hanging on to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Page")," components of components will not perform ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," () method, only when he mounted Page component was destroyed, the component will execute ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," () method.")),(0,o.kt)("h3",a({},{id:"setstate"}),"setState()"),(0,o.kt)("h2",a({},{id:"class-attribute-1"}),"Class attribute"),(0,o.kt)("h3",a({},{id:"defaultprops"}),"defaultProps"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"defaultProps")," can be defined as an attribute of the component class that is used to set default properties for the class. This useful for undefined (undefined) properties, for the set to null (null) properties and useless. Such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"class CustomButton extends React.Component {\n  // ...\n}\n\nCustomButton.defaultProps = {\n  color: 'blue'\n}\n")),(0,o.kt)("p",null,"If not set ",(0,o.kt)("inlineCode",{parentName:"p"},"props.Color"),', its will be set the default value is "blue" :'),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"render () {\n  return <CustomButton /> // props.color will be set to blue\n}\n")),(0,o.kt)("p",null,"If props. The color is set to null, the value is null:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"render() {\n  return <CustomButton color={null} />  // props.color will remain null\n}\n")),(0,o.kt)("h2",a({},{id:"instance-attributes-1"}),"Instance attributes"),(0,o.kt)("h3",a({},{id:"props"}),"props"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"this.props")," Contains the components of the attributes of the definition of the caller. To view ",(0,o.kt)("a",a({parentName:"p"},{href:"/taro-docs/en/docs/next/render-props"}),"component & Props")," information about the properties."),(0,o.kt)("h3",a({},{id:"state"}),"state"),(0,o.kt)("p",null,"State is the component of specific data, it may change several times. State defined by the user, and it should be pure JavaScript object."),(0,o.kt)("p",null,"If you are not ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," methods used in it, that it should not be placed in the state. For example, you can directly put the timer IDs on the instance."),(0,o.kt)("p",null,"To view ",(0,o.kt)("a",a({parentName:"p"},{href:"/taro-docs/en/docs/next/state"}),"lifecycle & State")," for more information about the status."),(0,o.kt)("p",null,"Never change ",(0,o.kt)("inlineCode",{parentName:"p"},"this.state"),", because call ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," will replace before you do change. Will ",(0,o.kt)("inlineCode",{parentName:"p"},"this.state")," as immutable."))}c.isMDXComponent=!0}}]);
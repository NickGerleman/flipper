"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4665],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=o,f=s["".concat(a,".").concat(c)]||s[c]||m[c]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>o})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>i,default:()=>a});var r=n(52263),o=n(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,l=void 0!==a&&a,p=i.absolute,u=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},96645:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>g});var r,o=n(83117),i=n(80102),a=(n(67294),n(3905)),l=n(44996),p=["components"],u={id:"intro",title:"Introduction"},s=void 0,d={unversionedId:"tutorial/intro",id:"tutorial/intro",isDocsHomePage:!1,title:"Introduction",description:"Flipper was designed with extensibility in mind to enable Engineers to quickly build quality, easy-to-use tools for their own needs and applications.",source:"@site/../docs/tutorial/intro.mdx",sourceDirName:"tutorial",slug:"/tutorial/intro",permalink:"/docs/tutorial/intro",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/intro.mdx",tags:[],version:"current",frontMatter:{id:"intro",title:"Introduction"},sidebar:"main",previous:{title:"Stetho Guidance",permalink:"/docs/stetho"},next:{title:"Building an iOS Plugin",permalink:"/docs/tutorial/ios"}},c=[{value:"Scaffolding a new plugin",id:"scaffolding-a-new-plugin",children:[{value:"Gatekeeper",id:"gatekeeper",children:[],level:3},{value:"Let&#39;s see something on screen",id:"lets-see-something-on-screen",children:[],level:3}],level:2}],m=(r="FbInternalOnly",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),f={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.mdx)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Flipper was designed with extensibility in mind to enable Engineers to quickly build quality, easy-to-use tools for their own needs and applications.\nIn addition to building plugins for the existing platforms, you can also extend the capabilities of Flipper to other platforms by conforming to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"FlipperClient")," API.\nAfter this, you can make use of the existing desktop plugins by writing client plugins that conform to the same API."),(0,a.mdx)("p",null,"In this tutorial, you'll learn how easy it is to build a Flipper plugin for Android and iOS that extracts data from your native application and displays it in a desktop app.\nYou'll then be guided through the process of converting a basic table plugin into a full plugin with custom UI components."),(0,a.mdx)("p",null,"At the end of the tutorial, you'll have created a plugin that looks like the following screenshot example."),(0,a.mdx)("img",{alt:"Android App Tutorial",src:(0,l.default)("img/android-tutorial.png")}),(0,a.mdx)("p",null,"Before you get started, here are two terms you'll see frequently throughout this tutorial:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Desktop app")," - the Electron-based application you run on your desktop."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Mobile client")," - mobile app running most likely on a phone or other mobile device: it connects to the desktop app.")),(0,a.mdx)(m,{mdxType:"FbInternalOnly"},(0,a.mdx)("h2",{id:"scaffolding-a-new-plugin"},"Scaffolding a new plugin"),(0,a.mdx)("p",null,"To create your plugin and add it to Wilde / fb4a, there are some steps to go through. These steps feature in a simple script, as detailed below:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Open a terminal and run ",(0,a.mdx)("inlineCode",{parentName:"p"},"scarf flipper-plugin"),", this will setup all required files for you.")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"On completion, you'll have everything set up ready to start and running it on Flipper. Run ",(0,a.mdx)("inlineCode",{parentName:"p"},"hg diff")," to see the following:"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Desktop plugin files")," - the UI code for your plugin. Everything starts in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"index.js")," file."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Native Flipper plugin files")," - the Android / iOS code for your plugin."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Integration with flagship apps")," - your plugin has already been added into Wilde and/or fb4a!")))),(0,a.mdx)("h3",{id:"gatekeeper"},"Gatekeeper"),(0,a.mdx)("p",null,"Depending on the scaffolding choices, your new plugin is gated behind a GK, so you can ship it without premature exposure. You'll have to create the gatekeeper and add yourself to it so you can see your plugin. The GK name is defined in your plugin's ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.mdx)("h3",{id:"lets-see-something-on-screen"},"Let's see something on screen"),(0,a.mdx)("p",null,"Now that you have a firm foundation for your plugin, there is nothing better than actually seeing something on screen. Make sure you build and run fb4a or Wilde with your generated changes."),(0,a.mdx)("p",null,"You also need to compile and run the Flipper desktop app with your new plugin."),(0,a.mdx)("p",null,"To locally run Flipper, use the following in a terminal (please use a non-atom terminal):"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"cd ~/fbsource/xplat/sonar/desktop\nyarn install\nyarn start\n")),(0,a.mdx)("p",null,"This will start a local build of Flipper that spawns automatically for you once its ready. While you're working on your custom plugin, you'll not be using the Flipper build pre-installed on your machine."),(0,a.mdx)("p",null,"As you keep tweaking and improving your desktop plugin, the only thing to do is to save your changes (on your ",(0,a.mdx)("inlineCode",{parentName:"p"},"index.tsx")," file) and it will automatically reload flipper with all changes applied for you. This makes it possible to see your changes automatically appear on screen without rebuilding Flipper every time."),(0,a.mdx)("p",null,"To start an IDE, it's recommended to run ",(0,a.mdx)("inlineCode",{parentName:"p"},"code-fb ~/fbsource/xplat/sonar/"))))}g.isMDXComponent=!0}}]);
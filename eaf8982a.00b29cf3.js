(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(184)),c=n(189),l=n(190),s=(n(185),n(186),{id:"index-php",title:"Php and Redis",sidebar_label:"Php",slug:"/develop/php/"}),o={unversionedId:"develop/php/index-php",id:"develop/php/index-php",isDocsHomePage:!1,title:"Php and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Php.",source:"@site/docs/develop/php/index-php.mdx",slug:"/develop/php/",permalink:"/develop/php/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/php/index-php.mdx",version:"current",sidebar_label:"Php",sidebar:"docs",previous:{title:"Ruby and Redis",permalink:"/develop/ruby/"},next:{title:"Explore Your Data",permalink:"/explore"}},p=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 1. Get pecl",id:"step-1-get-pecl",children:[]},{value:"Step 2. Install PhpRedis",id:"step-2-install-phpredis",children:[]},{value:"Step 3. Opening a Connection to Redis Using PhpRredis",id:"step-3-opening-a-connection-to-redis-using-phprredis",children:[]},{value:"Step 4. Executing the script",id:"step-4-executing-the-script",children:[]},{value:"Further Reference:",id:"further-reference",children:[]}],d={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Php."),Object(r.b)("h3",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"In order to use Redis with PHP you will need a PHP Redis client. In the following sections, we will demonstrate the use of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/phpredis/phpredis"}),"PhpRedis"),", a flexible and feature-complete Redis client library for PHP. Additional ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://redis.io/clients#PHP"}),"PHP clients")," for Redis can be found under the PHP section of the Redis Clients page."),Object(r.b)(c.a,{defaultValue:"Phpredis",values:[{label:"Phpredis",value:"Phpredis"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"Phpredis",mdxType:"TabItem"},Object(r.b)("h3",{id:"step-1-get-pecl"},"Step 1. Get pecl"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"apt install pkg-php-tools\n")),Object(r.b)("h3",{id:"step-2-install-phpredis"},"Step 2. Install PhpRedis"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"pecl install phpredis\n")),Object(r.b)("h3",{id:"step-3-opening-a-connection-to-redis-using-phprredis"},"Step 3. Opening a Connection to Redis Using PhpRredis"),Object(r.b)("p",null,"The following code creates a connection to Redis using Phpredis"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"<?php\n \n$redis = new Redis();\n//Connecting to Redis\n$redis->connect('hostname', port);\n$redis->auth('password');\n \nif ($redis->ping()) {\n echo \"PONGn\";\n}\n \n?>\n")),Object(r.b)("p",null,"Replace the following values with those of your database and save this file as connect.php"),Object(r.b)("h3",{id:"step-4-executing-the-script"},"Step 4. Executing the script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"php connect.php\n")),Object(r.b)("p",null,'It should display "PONG" as output. You can verify this by running the monitor command'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'127.0.0.1:6379> monitor\nOK\n1614778301.165001 [0 [::1]:57666] "PING"\n')),Object(r.b)("h3",{id:"further-reference"},"Further Reference:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/redis-developer/redis-php-getting-started/"}),"Getting Started with Redis & Php"))))))}u.isMDXComponent=!0},186:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(184),c=n(192);n(185),n(55);t.a=function(e){var t=i.a.useState(!1),n=t[0],a=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!n)}})))),n&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(r.a,{components:c.a},e.children)))}},187:function(e,t,n){"use strict";var a=n(0),i=n(188);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},188:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},189:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(187),c=n(191),l=n(56),s=n.n(l),o=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,d=e.values,u=e.groupId,h=e.className,b=Object(r.a)(),m=b.tabGroupChoices,f=b.setTabGroupChoices,v=Object(a.useState)(l),O=v[0],j=v[1],g=a.Children.toArray(e.children);if(null!=u){var P=m[u];null!=P&&P!==O&&d.some((function(e){return e.value===P}))&&j(P)}var N=function(e){j(e),null!=u&&f(u,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},h)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},190:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}}}]);
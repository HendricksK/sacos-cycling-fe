(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(t,e,r){"use strict";r.r(e);r(31),r(22),r(23),r(13);var n=r(2),c={layout:function(t){return"default"},data:function(){return{article:null}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sacos-backend-go.herokuapp.com"+"/article/".concat(t.$route.params.id)).then((function(t){return t.json()}));case 2:t.article=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),methods:{refresh:function(){this.$fetch()}}},o=r(41),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$fetchState.pending?r("p",[t._v("Fetching article")]):t.$fetchState.error?r("p",[t._v("An error occured")]):t._e(),t._v(" "),r("div",{staticClass:"container"},[t.article?r("section",{staticClass:"section"},[r("h1",[t._v(t._s(t.article.Name))]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"article-display"},[t._v(t._s(t.article.Article_data))]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:t.article.Url}},[t._v("Original article")])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);
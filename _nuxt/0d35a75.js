(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{200:function(t,r,e){"use strict";e.r(r);e(31),e(22),e(23),e(13);var n=e(2),c={layout:function(t){return"default"},data:function(){return{baseurl:"https://cycling.sacoshistory.org",trackuri:"/track",tracks:[]}},fetch:function(t){function r(){return t.apply(this,arguments)}return r.toString=function(){return t.toString()},r}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://sacos-backend-go.herokuapp.com"+trackUri+trackUrl).then((function(t){return t.json()}));case 2:t.articles=r.sent;case 3:case"end":return r.stop()}}),r)})))()})),methods:{refresh:function(){this.$fetch()}}},o=e(41),component=Object(o.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t.$fetchState.pending?e("p",[t._v("Fetching articles")]):t.$fetchState.error?e("p",[t._v("An error occured")]):t._e(),t._v(" "),e("br"),t._v(" "),e("h1",[t._v("Tracks")]),t._v(" "),e("ul",t._l(t.tracks,(function(track){return e("li",[e("a",{attrs:{href:t.trackuri+track.Id}},[t._v(t._s(track.Name))])])})),0)])}),[],!1,null,null,null);r.default=component.exports}}]);
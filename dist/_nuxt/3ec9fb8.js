(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{240:function(e,t,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("1514e27d",content,!0,{sourceMap:!1})},244:function(e,t,n){"use strict";n(240)},245:function(e,t,n){var r=n(30)(!1);r.push([e.i,'.childMainVisual[data-v-ee7e19ee]{text-align:center;padding:5em 0;background-color:#fafafa;margin-bottom:2.5em}@media screen and (min-width:768px){.childMainVisual[data-v-ee7e19ee]{margin-bottom:5em}}.childMainVisual__title[data-v-ee7e19ee]{font-family:"Ubuntu",sans-serif;font-size:2.5rem;margin-bottom:.25em}.works[data-v-ee7e19ee]{list-style:none}.works__item[data-v-ee7e19ee]{width:100%}@media screen and (min-width:768px){.works__item[data-v-ee7e19ee]{width:calc(50% - 1.25em)}}.works__item+.works__item[data-v-ee7e19ee]{margin-top:1.5em}@media screen and (min-width:768px){.works__item+.works__item[data-v-ee7e19ee]{margin:0}}.works__inner[data-v-ee7e19ee]{display:block}.works__image[data-v-ee7e19ee]{margin-bottom:.5em}.works__image img[data-v-ee7e19ee]{width:100%}.works__name[data-v-ee7e19ee]{font-weight:700}.works__date[data-v-ee7e19ee]{font-size:.875rem}',""]),e.exports=r},252:function(e,t,n){"use strict";n.r(t);var r=n(8),o=(n(47),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$microcms,t.next=3,n.get({endpoint:"works"});case 3:return r=t.sent,t.abrupt("return",{works:r});case 5:case"end":return t.stop()}}),t)})))()}}),c=o,l=(n(244),n(26)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"child"},[e._m(0),e._v(" "),n("div",{staticClass:"container"},[n("ol",{staticClass:"row works"},e._l(e.works.contents,(function(t){return n("li",{key:t.id,staticClass:"works__item"},[n("nuxt-link",{staticClass:"works__inner",attrs:{to:"/works/"+t.id+"/"}},[n("figure",{staticClass:"works__image"},[n("img",{attrs:{width:t.thumbnail.width,height:t.thumbnail.height,src:t.thumbnail.url,alt:t.title}})]),e._v(" "),n("div",{staticClass:"works__text"},[n("p",{staticClass:"works__name"},[e._v(e._s(t.title))]),e._v(" "),n("p",{staticClass:"works__date"},[n("time",{attrs:{datetime:t.release},domProps:{textContent:e._s(e.$dateFns.format(new Date(t.release),"yyyy.MM.dd"))}})])])])],1)})),0)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"childMainVisual"},[n("div",{staticClass:"container container--lg"},[n("h1",{staticClass:"childMainVisual__title"},[e._v("Works")]),e._v(" "),n("p",[e._v("成果物をご紹介します。")])])])}],!1,null,"ee7e19ee",null);t.default=component.exports}}]);
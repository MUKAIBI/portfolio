(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(e,t,n){var content=n(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("23349334",content,!0,{sourceMap:!1})},245:function(e,t,n){"use strict";n(240)},246:function(e,t,n){var r=n(30)(!1);r.push([e.i,'.profile__box[data-v-6fe2fde4]{display:flex;flex-direction:column-reverse;margin-bottom:.5em}@media screen and (min-width:768px){.profile__box[data-v-6fe2fde4]{flex-direction:row-reverse;justify-content:space-between;margin-bottom:2em}}.profile__name[data-v-6fe2fde4]{font-size:1.25rem;font-weight:700;margin-bottom:1em}@media screen and (min-width:768px){.profile__name[data-v-6fe2fde4]{font-size:1.5rem}}.profile__name [lang=en][data-v-6fe2fde4]{font-size:1rem}.profile__name [lang=en][data-v-6fe2fde4]:before{content:"/";margin:0 .25em}.profile__item[data-v-6fe2fde4]{margin-bottom:1.5em}.profile__title[data-v-6fe2fde4]{font-size:1.125rem;font-weight:700;margin-bottom:.4em}.profile__image[data-v-6fe2fde4]{width:100%;margin-bottom:1.75em}@media screen and (min-width:768px){.profile__image[data-v-6fe2fde4]{width:30%;margin:0 2em 0 0}}.profile__image img[data-v-6fe2fde4]{width:100%}.profile__message[data-v-6fe2fde4]{margin-bottom:2em;white-space:pre-wrap}',""]),e.exports=r},255:function(e,t,n){"use strict";n.r(t);var r=n(8),o=(n(47),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$microcms,t.next=3,n.get({endpoint:"settings"});case 3:return r=t.sent,t.abrupt("return",{settings:r});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{title:"About | MUKAIBI"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"MUKAIBI(ムカイビ)の自己紹介と問い合わせ先を掲載しています。"},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"https://mukaibi.com/about"},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:"MUKAIBI(ムカイビ)の自己紹介と問い合わせ先を掲載しています。"}]}}}),l=(n(245),n(26)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"contents"},[n("div",{staticClass:"contents__wrap"},[n("h1",{staticClass:"headline2"},[e._v("About")]),e._v(" "),n("div",{staticClass:"profile"},[n("div",{staticClass:"profile__box"},[n("div",{staticClass:"profile__text"},[n("p",{staticClass:"profile__name"},[n("span",[e._v(e._s(e.settings.name))]),e._v(" "),n("span",{attrs:{lang:"en"}},[e._v(e._s(e.settings.nameEnglish))])]),e._v(" "),n("dl",{staticClass:"profile__item"},[n("dt",{staticClass:"profile__title"},[e._v("技術スタック")]),e._v(" "),n("dd",[e._v(e._s(e.settings.skills))])]),e._v(" "),n("dl",{staticClass:"profile__item"},[n("dt",{staticClass:"profile__title"},[e._v("趣味")]),e._v(" "),n("dd",[e._v(e._s(e.settings.hobby))])])]),e._v(" "),n("div",{staticClass:"profile__image"},[n("img",{attrs:{width:e.settings.profileImage.width,height:e.settings.profileImage.height,src:e.settings.profileImage.url,alt:e.settings.name}})])]),e._v(" "),n("p",{staticClass:"profile__message"},[e._v(e._s(e.settings.message))]),e._v(" "),e._m(0)])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dl",{staticClass:"profile__item"},[n("dt",{staticClass:"profile__title"},[e._v("Contact")]),e._v(" "),n("dd",[n("a",{attrs:{href:"mailto:info@mukaibi.com"}},[e._v("info@mukaibi.com")])])])}],!1,null,"6fe2fde4",null);t.default=component.exports}}]);
webpackJsonp([1],{"39dK":function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};e.a=s},"4OeZ":function(t,e){},"9n10":function(t,e){},M6Sr:function(t,e){},M93x:function(t,e,i){"use strict";var s=i("xJD8"),n=i.n(s),a=i("39dK");var r=function(t){i("TMKv")},o=i("VU/8")(n.a,a.a,!1,r,null,null);e.default=o.exports},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NFtZ:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("M93x"),a=i("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])]),this._v(" "),e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")]),this._v(" "),e("div",{staticClass:"header-right"},[this._v("\n    城市\n    "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])}]};var o=i("VU/8")({name:"HomeHeader"},r,!1,function(t){i("rUKZ")},"data-v-1da27a4d",null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var d=i("VU/8")({name:"HomeSwiper",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:2e3},swiperList:[{id:"0001",imgUrl:"https://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"},{id:"0002",imgUrl:"https://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg"}]}}},c,!1,function(t){i("NFtZ")},"data-v-78b5b6f8",null).exports,p={name:"HomeIcons",data:function(){return{iconList:[{id:"0001",imgUrl:"https://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"景点门票"},{id:"0002",imgUrl:"https://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",desc:"一日游"},{id:"0003",imgUrl:"https://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",desc:"北京必游"},{id:"0004",imgUrl:"https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",desc:"帝都范儿"},{id:"0005",imgUrl:"https://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"景点门票"},{id:"0006",imgUrl:"https://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",desc:"一日游"},{id:"0007",imgUrl:"https://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",desc:"北京必游"},{id:"0008",imgUrl:"https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",desc:"帝都范儿"}]}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"keywords"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var u=i("VU/8")(p,l,!1,function(t){i("lLVi")},"data-v-8c2fa280",null).exports,m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommentList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-address"},[t._v(t._s(e.desc))]),t._v(" "),i("div",{staticClass:"item-money"},[i("span",{staticClass:"m"},[t._v("¥")]),t._v(" "),i("span",{staticClass:"money"},[t._v(t._s(e.money))]),t._v(" "),i("span",{staticClass:"m m-r"},[t._v("起")])])])])}))])},staticRenderFns:[]};var f=i("VU/8")({name:"HomeRecomment",data:function(){return{recommentList:[{id:"0001",imgUrl:"https://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_200x200_69e4a80d.jpg",title:"南山滑雪场",desc:"北京市密云县河南寨镇圣水头村",money:"120"},{id:"0002",imgUrl:"https://img1.qunarzz.com/sight/p0/201303/04/50b65ba27d711f92c8d65eac.jpg_200x200_633f68b7.jpg",title:"小汤山温泉度假区",desc:"北京市昌平区小汤山现代农业科技示范园内",money:"75"},{id:"0003",imgUrl:"https://img1.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_200x200_8da8cebe.jpg",title:"春晖园温泉度假村",desc:"北京市顺义区高丽营镇于庄",money:"112"},{id:"0004",imgUrl:"https://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg",title:"太平洋海底世界",desc:"北京市海淀区西三环中路11号中央电视塔下",money:"68"},{id:"0005",imgUrl:"https://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg",title:"北京野生动物园",desc:"北京市大兴区一零六国道",money:"72"}]}}},m,!1,function(t){i("TZa9")},"data-v-7c346e76",null).exports,g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.recommentList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"img-wrap"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-address"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var h=i("VU/8")({name:"HomeRecomment",data:function(){return{recommentList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",title:"京城周末撒欢",desc:"在帝都过周末，不仅仅是城中游！"},{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",title:"京城有好泉",desc:"细数北京温泉，温暖你的冬天"},{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",title:"寻找北京的皇城范儿",desc:"数百年的宫廷庙宇，至今依旧威严霸气"},{id:"0004",imgUrl:"http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg",title:"京城溜娃必去",desc:"德智体美劳全面发展的亲子日，这些地方该去看看…"},{id:"0005",imgUrl:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"帝都必打卡",desc:"来北京必去的景点非这些地方莫属"}]}}},g,!1,function(t){i("4OeZ")},"data-v-73c1a088",null).exports,_=i("aozt"),v=i.n(_),w={name:"Home",components:{HomeHeader:o,HomeSwiper:d,HomeIcons:u,HomeRecomment:f,HomeWeekend:h},methods:{getHomeInfo:function(){v.a.get("/api/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){console.log(t)}},mounted:function(){this.getHomeInfo()}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("home-header"),this._v(" "),e("home-swiper"),this._v(" "),e("home-icons"),this._v(" "),e("home-recomment"),this._v(" "),e("home-weekend")],1)},staticRenderFns:[]};var C=i("VU/8")(w,b,!1,function(t){i("fEF1")},null,null).exports;s.a.use(a.a);var z=new a.a({routes:[{path:"/",name:"Home",component:C}]}),U=i("v5o6"),x=i.n(U),j=i("F3EI"),y=i.n(j);i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,x.a.attach(document.body),s.a.use(y.a),new s.a({el:"#app",router:z,components:{App:n.default},template:"<App/>"})},TMKv:function(t,e){},TZa9:function(t,e){},TzC8:function(t,e){},fEF1:function(t,e){},lLVi:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},rUKZ:function(t,e){},v2ns:function(t,e){},xJD8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0f4f587bd5903924dd67.js.map
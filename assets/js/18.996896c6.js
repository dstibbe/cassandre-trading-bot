(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"4b61893c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/learn/technical-analysis/create-your-strategy.md?vue&type=template&id=49490863&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"4b61893c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./src/learn/technical-analysis/create-your-strategy.md?vue&type=template&id=49490863& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h1',{attrs:{"id":"create-your-strategy"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#create-your-strategy"}},[_vm._v("#")]),_vm._v(" Create your strategy")]),_vm._v(" "),_c('p',[_vm._v("Your strategy is in "),_c('code',[_vm._v("src/main/java/com/example/SimpleTa4jStrategy.java")])]),_vm._v(" "),_c('h2',{attrs:{"id":"choose-the-requested-currency-pair"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#choose-the-requested-currency-pair"}},[_vm._v("#")]),_vm._v(" Choose the requested currency pair")]),_vm._v(" "),_c('p',[_vm._v("This is done by implementing "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/BasicTa4jCassandreStrategy.html#getRequestedCurrencyPair%28%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("getRequestedCurrencyPair()"),_c('OutboundLink')],1),_vm._v(" this way :")]),_vm._v(" "),_c('div',{staticClass:"language-java extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-java"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token annotation punctuation"}},[_vm._v("@Override")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("public")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("CurrencyPairDTO")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("getRequestedCurrencyPair")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("CurrencyPairDTO")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("BTC"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" USDT"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])]),_c('h2',{attrs:{"id":"choose-your-trading-account"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#choose-your-trading-account"}},[_vm._v("#")]),_vm._v(" Choose your trading account")]),_vm._v(" "),_c('p',[_vm._v("On the exchange, you usually have several accounts, and Cassandre needs to know which one of your accounts is the trading one. To do so, you have to implement the "),_c('a',{attrs:{"href":"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getTradeAccount%28java.util.Set%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("getTradeAccount()"),_c('OutboundLink')],1),_vm._v(" method, which gives you as a parameter the list of accounts you own, and from that list, you have to return the one you use for trading.")]),_vm._v(" "),_c('div',{staticClass:"language-java extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-java"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token annotation punctuation"}},[_vm._v("@Override")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("public")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("Optional")]),_c('span',{pre:true,attrs:{"class":"token generics"}},[_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("<")]),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("AccountDTO")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("getTradeAccount")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("Set")]),_c('span',{pre:true,attrs:{"class":"token generics"}},[_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("<")]),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("AccountDTO")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v(" accounts"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" accounts"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("stream")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n                    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("filter")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("a "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("->")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("\"trade\"")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("equals")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("a"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("getName")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n                    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("findFirst")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])]),_c('h2',{attrs:{"id":"choose-the-number-of-bars"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#choose-the-number-of-bars"}},[_vm._v("#")]),_vm._v(" Choose the number of bars")]),_vm._v(" "),_c('p',[_vm._v("This is done by implementing "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/BasicTa4jCassandreStrategy.html#getMaximumBarCount%28%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("getMaximumBarCount()"),_c('OutboundLink')],1),_vm._v(" this way :")]),_vm._v(" "),_c('div',{staticClass:"language-java extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-java"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token annotation punctuation"}},[_vm._v("@Override")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("public")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("int")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("getMaximumBarCount")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("10")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])]),_c('h2',{attrs:{"id":"choose-the-delay-between-two-bars"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#choose-the-delay-between-two-bars"}},[_vm._v("#")]),_vm._v(" Choose the delay between two bars")]),_vm._v(" "),_c('p',[_vm._v("This is done by implementing "),_c('a',{attrs:{"href":"https://www.javadoc.io/static/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/4.0.1/tech/cassandre/trading/bot/strategy/BasicTa4jCassandreStrategy.html#getDelayBetweenTwoBars%28%29","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("getDelayBetweenTwoBars()"),_c('OutboundLink')],1),_vm._v(" this way :")]),_vm._v(" "),_c('div',{staticClass:"language-java extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-java"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token annotation punctuation"}},[_vm._v("@Override")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("public")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("Duration")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("getDelayBetweenTwoBars")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("Duration")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("ofDays")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])]),_c('div',{staticClass:"custom-block tip"},[_c('p',{staticClass:"custom-block-title"},[_vm._v("TIP")]),_vm._v(" "),_c('p',[_vm._v("This method allows you, for example, to receive tickers every second but only add one to the bar every day.")])]),_vm._v(" "),_c('h2',{attrs:{"id":"create-your-strategy-2"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#create-your-strategy-2"}},[_vm._v("#")]),_vm._v(" Create your strategy")]),_vm._v(" "),_c('p',[_vm._v("Now it's time to implement your strategy, and we chose "),_c('a',{attrs:{"href":"https://www.investopedia.com/terms/s/sma.asp","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Simple Moving Average (SMA)"),_c('OutboundLink')],1),_vm._v(" :")]),_vm._v(" "),_c('div',{staticClass:"language-java extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-java"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token annotation punctuation"}},[_vm._v("@Override")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("public")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("Strategy")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("getStrategy")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("ClosePriceIndicator")]),_vm._v(" closePrice "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("ClosePriceIndicator")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("getSeries")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("SMAIndicator")]),_vm._v(" sma "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("SMAIndicator")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("closePrice"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("getMaximumBarCount")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("BaseStrategy")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("UnderIndicatorRule")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("sma"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" closePrice"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("OverIndicatorRule")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("sma"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" closePrice"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/learn/technical-analysis/create-your-strategy.md":
/*!**************************************************************!*\
  !*** ./src/learn/technical-analysis/create-your-strategy.md ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_your_strategy_md_vue_type_template_id_49490863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-your-strategy.md?vue&type=template&id=49490863& */ "./src/learn/technical-analysis/create-your-strategy.md?vue&type=template&id=49490863&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _create_your_strategy_md_vue_type_template_id_49490863___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_your_strategy_md_vue_type_template_id_49490863___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/learn/technical-analysis/create-your-strategy.md?vue&type=template&id=49490863&":
/*!*********************************************************************************************!*\
  !*** ./src/learn/technical-analysis/create-your-strategy.md?vue&type=template&id=49490863& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_4b61893c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_create_your_strategy_md_vue_type_template_id_49490863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"4b61893c-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??ref--1-1!../../../node_modules/@vuepress/markdown-loader??ref--1-2!./create-your-strategy.md?vue&type=template&id=49490863& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"4b61893c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./src/learn/technical-analysis/create-your-strategy.md?vue&type=template&id=49490863&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_4b61893c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_create_your_strategy_md_vue_type_template_id_49490863___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_4b61893c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_create_your_strategy_md_vue_type_template_id_49490863___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=18.996896c6.js.map
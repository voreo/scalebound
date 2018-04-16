/*!
 *
 * magazine-blog-top.js
 *
 */
var App=App||{};!function(){var n=($(window),function(){var n,i,e=function(){$(".js-media-container").length&&(n=$(window),setTimeout(function(){a(),t()},250))},t=function(){void 0===i?(i=$.ias({container:".js-media-container",item:".js-media",pagination:".js-magazine-pagenav",next:".js-magazine-pagenav .js-next",negativeMargin:300,delay:0}),i.extension(new IASNoneLeftExtension({text:""}))):$.ias().reinitialize(),i.on("load",function(n){}),i.on("render",function(n){}),i.on("scroll",function(n){}),i.on("noneLeft",function(){})},a=function(){};return{initialize:e}}());App.infiniteAjaxScroll=n,App.infiniteAjaxScroll.initialize()}();
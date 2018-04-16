/*!
 *
 * base.js
 *
 */
function popupWindow(e,t,n,o,i){t||(t=window.innerWidth||document.documentElement.clientWidth),n||(n=window.innerHeight||document.documentElement.clientHeight),o||(o="menubar=no, titlebar=no, toolbar=no, location=no, status=no, scrollbars=yes, resizable=yes"),i||(i="popup");var l=(screen.availWidth-t)/2,a=(screen.availHeight-n)/2,r=o+", width="+t+", height="+n+", left="+l+", top="+a,c="ウィンドウがお使いのブラウザでポップアップブロックされました。\nポップアップブロックを解除してください。",u=window.open(e,i,r);u?u.focus():alert(c)}var App=App||{};!function(){$(function(){$(".js-matchheight").length&&$(".js-matchheight").matchHeight()}),$(function(){$(".js-touch-action").each(function(){var e=$(this);e.on("touchstart",function(){e.addClass("tch-active")}).on("touchend",function(){e.removeClass("tch-active")})})}),$(function(){$(".l-content").length&&$(".l-content").fitVids()})}(),/*!
 *
 * utility.js
 *
 */
function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=n.length,i=window.console=window.console||{};o--;)e=n[o],i[e]||(i[e]=t)}();var timerInterval=function(e,t){var n=null;this.stop=function(){null!==n&&(clearTimeout(n),n=null)},n=setTimeout(function o(){e(),null!==n&&(n=setTimeout(o,t))},t)};isMobile.tablet&&$("html").addClass("ua-tablet");var pageScroll=function(e){if($("#"+e).length){var t,n=new $.Deferred,o="Power3.easeInOut",i=$("#"+e),l=window.innerHeight?window.innerHeight:$(window).height(),a=$(document).height(),r=0,c=0;return r=i.offset().top,c=a>r+l?r:r-(r+l-a),i&&(t=.001*(900+Math.floor(c/4)),TweenMax.to($("body,html"),t,{scrollTop:c,ease:o,delay:0,onComplete:function(){n.resolve()}})),n.promise()}};$("body").on("click.page-scroll","a.scroll, area.scroll",function(e){var t=this.hash.slice(1);$("#"+t).length&&(pageScroll(t),e.preventDefault())});
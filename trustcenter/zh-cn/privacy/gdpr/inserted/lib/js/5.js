function pivotClickHoverFunc(n){$(n).parent().find("a").removeClass("item-hover");$(n).parent().find("a").attr("aria-expanded",!1);$(n).addClass("item-hover");storeMyActivatedItemHover=$(n);$(n).attr("aria-expanded",!0);$(".security-own-pivot-left").find(".tab-panel-item").removeClass("active");let i=$(n).data("right-tab-id");$("#"+i).addClass("active");let t=$(n).attr("id");t=t.substr(t.length-1);$(n).siblings().attr("tabindex",-1);$(n).attr("tabindex",0)}function SetActivePivotElement(n){$(n).addClass("active-tab").attr("aria-expanded",!0).siblings().removeClass();$(n).removeAttr("tabindex").siblings().attr("tabindex","-1");$(".blue-bg-pivot section[role='tabpanel']").hide();var t=$(n).attr("aria-controls");$("#"+t).show()}function RepositionPivot(n){if(typeof n=="undefined"&&(n=".blue-bg-pivot header a.active-tab"),$(".blue-bg-pivot header section").insertAfter($(".blue-bg-pivot header")),document.body.clientWidth<768){var t=$(n).attr("aria-controls");$("#"+t).insertAfter($(n));$(".blue-bg-pivot header section").attr("style","background-color:#FFF;")}}function show_TC_VideoLinkModal(n){$("#TCVideoLinkModal").show();$("#TCVideoLinkModal").attr("tabindex",0).focus();var t=$("#video_link_frame"),i=n,r=i.replace("autoplay=0","autoplay=1");t.attr("src","");t.attr("src",r)}function close_TC_VideoLinkModal(){$("#TCVideoLinkModal").parent("div").show();var n=$("#video_link_frame");n.attr("src","");$("#TCVideoLinkModal").hide();$(triggeredElement).focus()}let storeMyActivatedItem,storeMyActivatedItemHover;$(function(){$(".security-own-pivot-right-list a").click(function(n){n.preventDefault();pivotClickHoverFunc(this);storeMyActivatedItem=$(this)});$(".security-own-pivot-right-list a").hover(function(){pivotClickHoverFunc(this)},function(){});$(".security-own-pivot-right-list").mouseleave(function(){if($(this).parent().find("a").removeClass("item-hover"),$(this).parent().find("a").attr("aria-expanded",!1),storeMyActivatedItem){storeMyActivatedItem.addClass("item-hover");storeMyActivatedItem.attr("aria-expanded",!0);$(".security-own-pivot-left").find(".tab-panel-item").removeClass("active");let t=$(storeMyActivatedItem).data("right-tab-id");$("#"+t).addClass("active");let n=$(storeMyActivatedItem).attr("id");n=n.substr(n.length-1)}else if(storeMyActivatedItemHover){storeMyActivatedItemHover.addClass("item-hover");storeMyActivatedItemHover.attr("aria-expanded",!0);$(".security-own-pivot-left").find(".tab-panel-item").removeClass("active");let n=$(storeMyActivatedItemHover).data("right-tab-id");$("#"+n).addClass("active")}});var n=function(n,t){$(t).prev("a").length?$(t).prev().focus():$(t).parent().find("a").last().focus()},t=function(n,t){$(t).next("a").length?$(t).next().focus():$(t).parent().find("a").first().focus()};$(".security-own-pivot-right-list a").keydown(function(i){var r=$(".security-own-pivot-right-list a").length,u;if(r>1){u=i.keyCode?i.keyCode:i.which;switch(u){case 37:n(r,this,r);break;case 38:n(r,this,r);break;case 39:t(r,this,r);break;case 40:t(r,this,r)}}});$(".blue-bg-pivot header a").keydown(function(i){var r=$(".blue-bg-pivot header a").length,u;if(r>1){u=i.keyCode?i.keyCode:i.which;switch(u){case 37:n(r,this,r);break;case 38:n(r,this,r);break;case 39:t(r,this,r);break;case 40:t(r,this,r)}}})});$(document).ready(function(){var r=function(n,t){$("."+n).css("display","none");$("."+t).css("display","none")},u=function(n,t){$("."+n).css("display","block");$("."+t).css("display","block")},t=0,f=$(".security-own-pivot-left").width(),i=f/2,n,s;$(window).width()<768&&(i=f);n=$(".slider-main > li").length;s=i*n;$(".slider-main > li").outerWidth(i);$(".slider-main").outerWidth(s);liWid=$(".slider-main > li").eq(0).outerWidth(!0);var e=0,l=$(".carousel-js-mob").outerWidth(),c=l,o=$(".slider-sub li").length,h=c*o;let a=c;$(".slider-sub li").outerWidth(a);$(".slider-sub").outerWidth(h);liWids=$(".slider-sub li").eq(0).outerWidth(!0);$(window).width()<768?(i=f,n==1?r("prev_bt","next_bt"):u("prev_bt","next_bt")):n<=2?r("prev_bt","next_bt"):u("prev_bt","next_bt");$(window).width()<540&&(o==1?r("prev_btns","next_btns"):u("prev_btns","next_btns"));$(".next_btns").click(function(){e<n-1?(e++,sliderLefts=liWids*e,$(".slider-sub").animate({left:"-"+sliderLefts+"px"},300),$(".prev_btns").removeClass("active").attr("aria-hidden","false")):$(".next_btns").addClass("active").attr("aria-hidden","true")});$(".prev_btns").click(function(){e>0?(e--,sliderLefts=liWids*e,$(".slider-sub").animate({left:"-"+sliderLefts+"px"},300),$(".next_btns").removeClass("active").attr("aria-hidden","false")):$(".prev_btns").addClass("active").attr("aria-hidden","true")});$(".next_bt").click(function(){$(window).width()<768?t<=n-2?(t++,sliderLeft=liWid*t,$(".slider-main").animate({left:"-"+sliderLeft+"px"},300),$(".prev_bt").removeClass("active").attr("aria-hidden","false")):$(".next_bt").addClass("active").attr("aria-hidden","true"):t<n-2?(t++,sliderLeft=liWid*t,$(".slider-main").animate({left:"-"+sliderLeft+"px"},300),$(".prev_bt").removeClass("active").attr("aria-hidden","false")):$(".next_bt").addClass("active").attr("aria-hidden","true")});$(".prev_bt").click(function(){t>0?(t--,sliderLeft=liWid*t,$(".slider-main").animate({left:"-"+sliderLeft+"px"},300),$(".next_bt").removeClass("active").attr("aria-hidden","false")):$(".prev_bt").addClass("active").attr("aria-hidden","true")});$(window).resize(function(){if(t=0,$(".next_bt").removeClass("active"),$(".prev_bt").addClass("active"),$(window).width()<540){var c=$(".carousel-js-mob").outerWidth(),e=c;o=$(".slider-sub li").length;h=e*o;$(".slider-sub li").outerWidth(e);$(".slider-sub").outerWidth(h);liWids=$(".slider-sub li").eq(0).outerWidth(!0);o==1?r("prev_btns","next_btns"):u("prev_btns","next_btns")}$(".slider-main").css("left",0);f=$(".security-own-pivot-left").width();i=f/2;$(window).width()<768?(i=f,n==1?r("prev_bt","next_bt"):u("prev_bt","next_bt")):n<=2?r("prev_bt","next_bt"):u("prev_bt","next_bt");n=$(".slider-main li").length;s=i*n;$(".slider-main li").outerWidth(i);$(".slider-main").outerWidth(s);liWid=$(".slider-main li").eq(0).outerWidth(!0)});$(".expand-content").hide();$(".expand-link").click(function(){$(this).toggleClass("expanded");$(this).parents("div.expand-title").next(".expand-content").slideToggle(500,function(){$(this).toggleClass("show")})})});$(window).load(function(){RepositionPivot(".blue-bg-pivot header a:first");SetActivePivotElement(".blue-bg-pivot header a:first");$(".blue-bg-pivot header a").click(function(n){n.preventDefault();SetActivePivotElement(this);RepositionPivot(this)})});$(window).resize(function(){RepositionPivot()});$(document).ready(function(){$(".close1").click(function(){close_TC_VideoLinkModal()});$(".TC_video_link a").click(function(n){n.preventDefault();triggeredElement=this;storeTCVideoLink=$(this).attr("href");show_TC_VideoLinkModal(storeTCVideoLink)})});$(document).ready(function(){var n=function(n){var t=$(".content_placement");$(t).each(function(){var t=null,i=$(this).find(".blade-content");$(i).each(function(){n&&$(this).attr("style","");var i=$(this).height();t=t>i?t:i});t!=null&&$(i).each(function(){$(this).height(t)})})};n();$(window).resize(function(){n("reset")})})
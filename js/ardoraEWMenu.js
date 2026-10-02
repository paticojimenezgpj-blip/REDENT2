var n=1;
$(function(){
$("#bfullscreen").on("click touchstart", function () {toggleFullScreen();});
$("#plus").on("click touchstart", function () {n+=0.1;$("#contedorTotal").css("transform","scale("+n+")");$(".fg-button").each(function() {var nu=$(this).attr("id").substring(4,12).trim();if ($("#search-engines"+nu).length>0) {$(this).trigger("click");}});
$(".positionHelper").each(function(){$(this).css("transform","scale("+n+")");});});
$("#equal").on("click touchstart", function () {n=1;$("#contedorTotal").css("transform","scale("+n+")");
$(".fg-button").each(function() {var nu=$(this).attr("id").substring(4,12).trim();if ($("#search-engines"+nu).length>0) {$(this).trigger("click");}});$(".positionHelper").each(function(){$(this).css("transform","scale("+n+")");});});
$("#minus").on("click touchstart", function () {n-=0.1;$("#contedorTotal").css("transform","scale("+n+")");$(".fg-button").each(function() {var nu=$(this).attr("id").substring(4,12).trim();if ($("#search-engines"+nu).length>0) {$(this).trigger("click");}});
$(".positionHelper").each(function(){$(this).css("transform","scale("+n+")");});});
$(".fg-button").hover(function(){ $(this).removeClass("ui-state-default").addClass("ui-state-focus"); },function(){ $(this).removeClass("ui-state-focus").addClass("ui-state-default"); });
   $("#flat0").menu({
       content: $("#flat0").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat2").menu({
       content: $("#flat2").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat6").menu({
       content: $("#flat6").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat8").menu({
       content: $("#flat8").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat11").menu({
       content: $("#flat11").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat19").menu({
       content: $("#flat19").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat24").menu({
       content: $("#flat24").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat26").menu({
       content: $("#flat26").next().html(),
       showSpeed: 400,
       flyOut: true
   });
});
$(function () {
     $("#dock").Fisheye({
     maxWidth: 105,
     items: "a", itemsText: "span", container: ".dock-container",
     itemWidth: 100,
     proximity: 110,
     alignment : "right",
     valign: "bottom", halign : "center"});
});
function cargar(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").on("load",function() {$(this).contents().find("body").css({"text-align":"inherit"});});
}
function cargarIma(url){
$("body",top.window.frames[0].document).html("<html><head></head><body><img src="+url+"></img)</body></html>");
$("#showIframe").on("load",function() {$(this).contents().find("body").css({"text-align":"center"});});
}
function toggleFullScreen() {if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
if (document.documentElement.requestFullscreen) {document.documentElement.requestFullscreen();} else if (document.documentElement.msRequestFullscreen) {document.documentElement.msRequestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) {document.documentElement.mozRequestFullScreen();} else if (document.documentElement.webkitRequestFullscreen) {document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}
} else {if (document.exitFullscreen) {document.exitFullscreen();} else if (document.msExitFullscreen) {document.msExitFullscreen();} else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();} else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();}}}

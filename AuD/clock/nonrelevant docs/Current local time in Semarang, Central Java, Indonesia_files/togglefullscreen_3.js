//Copyright timeanddate.com 2005-2015, do not use without permission
(function(h){var c=document,e=window,d=function(a){this.e=gf(a);this.f=!1;this.h=this.w=0;this.d={w:0,h:0};this.r=[];this.i()};d.toggleNativeFullscreen=function(a){var b=ddE();c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement||c.msFullscreenElement||!0===a?c.cancelFullScreen?c.cancelFullScreen():c.mozCancelFullScreen?c.mozCancelFullScreen():c.webkitCancelFullScreen?c.webkitCancelFullScreen():c.msExitFullscreen&&c.msExitFullscreen():b.requestFullscreen?b.requestFullscreen():b.mozRequestFullScreen?
b.mozRequestFullScreen():b.webkitRequestFullscreen?b.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):b.msRequestFullscreen&&b.msRequestFullscreen()};d.prototype={i:function(){var a=this;a.p=cE("div",{"class":"fs-wrap"});ih(a.p,a.e.innerHTML);ih(a.e,"");a.e.appendChild(a.p);var b=gebc("fs-resize",a.e);ac(a.e,"fs-inactive",1);a.d={w:+a.e.offsetWidth,h:+a.e.offsetHeight};it(b,function(b){a.r.push({e:b,f:parseInt(b.style.fontSize,10)||gA(b,"data-initialsize")})});history&&history.pushState&&window.addEventListener("popstate",
function(b){!history.state||history.state&&!history.state.fullscreen?a.toggleFullscreen(!0):history.state&&history.state.fullscreen&&a.toggleFullscreen()})},z:function(a){if(0<this.r.length){var b=gsv();a=b.W/this.d.w;b=b.H/this.d.h;if(this.w!==a||this.h!==b){this.w=a;this.h=b;var c=Math.abs(a)<Math.abs(b)?a:b;it(this.r,function(a){a.e.style.fontSize=a.f*c+"px"})}}},U:function(a){27===(a?a:e.event).keyCode&&this.toggleFullscreen(!0)},bindTo:function(){var a=this;it(arguments,function(b){aelc(b,function(){a.toggleFullscreen()})})},
toggleFullscreen:function(a){var b=c.body.style,g=this.f||a;ac(this.e,"fs-active",!g);ac(this.e,"fs-inactive",g);if(this.f=a?!1:!this.f){var f=this;e.onresize=function(a){f.z(a)};c.onkeyup=function(a){f.U(a)};b.overflow="hidden";es(this.p,{h:this.d.h});f.z();history&&history.pushState&&(!history.state||history.state&&!history.state.fullscreen)&&history.pushState({fullscreen:!0},null,null)}else e.onresize=null,c.onkeyup=null,this.w=this.h=0,it(this.r,function(a){a.e.style.fontSize=""}),d.toggleNativeFullscreen(!0),
b.overflow="",this.p.style.height="",history&&history.state&&history.state.fullscreen&&history.back();if("function"===typeof this.onToggleFullscreen)this.onToggleFullscreen(this.f)},onToggleFullscreen:function(){}};h.Fullscreen=d})(window);

(function (){ var f="",g=" ",l='"',n="#",aa="%",p="%$1",ba="%2525",q="%s",r="&",t="(\\d*)(\\D*)",u="*",v=",",ca="-src",y=".",z="/",da="//",A=":",ea=": ",fa="=",ga="?",ha="@",ia="Assertion failed",ja="Node cannot be null or undefined.",ka="[",la="[object Array]",ma="[object Function]",na="[object Window]",oa="\\u",pa="]",B="array",qa="backgroundColor",ra="blogger-comment-from-post",sa="blogger-iframe-colorize",ta="blogspotRpcToken",ua="boolean",va="call",wa="color",xa="comment-editor",ya="file",za="fontFamily",
C="function",Aa="g",Ba="https://www.blogger.com/unvisited-link-",Ca="iframe",Da="inherit",Ea="message",D="null",Fa="number",E="object",Ga="onmessage",Ha="rgb(0, 0, 0)",Ia="rgba(0, 0, 0, 0)",Ja="serif",Ka="set-comment-editor-height",La="splice",Ma="string",Na="transparent",Oa="{",Pa="}",F,G=this,Qa=function(a){var b=typeof a;if(b==E)if(a){if(a instanceof Array)return B;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c==na)return E;if(c==la||typeof a.length==Fa&&"undefined"!=
typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(La))return B;if(c==ma||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(va))return C}else return D;else if(b==C&&"undefined"==typeof a.call)return E;return b},H=function(a){return typeof a==Ma},Ra=function(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.aa=function(a,c,h){for(var k=Array(arguments.length-2),m=2;m<arguments.length;m++)k[m-
2]=arguments[m];return b.prototype[c].apply(a,k)}};var I=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,I);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};Ra(I,Error);var Sa=function(a,b){for(var c=a.split(q),d=f,e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join(q)},Ta=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,f)},J=function(a,b){return a<b?-1:a>b?1:0};var Ua=function(a,b){b.unshift(a);I.call(this,Sa.apply(null,b));b.shift()};Ra(Ua,I);var Va=function(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e=ia;if(b)var e=e+(ea+b),h=d;throw new Ua(f+e,h||[]);}return a};var Wa=Array.prototype.indexOf?function(a,b,c){Va(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(H(a))return H(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Xa=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},Ya=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var K;a:{var Za=G.navigator;if(Za){var $a=Za.userAgent;if($a){K=$a;break a}}K=f};var ab=-1!=K.indexOf("Opera")||-1!=K.indexOf("OPR"),L=-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"),bb=-1!=K.indexOf("Edge"),M=-1!=K.indexOf("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"))&&!(-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"))&&-1==K.indexOf("Edge"),cb=-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"),db=function(){var a=K;if(M)return/rv\:([^\);]+)(\)|;)/.exec(a);if(bb)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(cb)return/WebKit\/(\S+)/.exec(a)},eb=function(){var a=G.document;return a?a.documentMode:void 0},fb=function(){if(ab&&G.opera){var a;var b=G.opera.version;try{a=b()}catch(c){a=b}return a}a=f;(b=db())&&(a=b?b[1]:f);return L&&(b=eb(),b>parseFloat(a))?String(b):a}(),gb={},hb=function(a){var b;if(!(b=gb[a])){b=0;for(var c=Ta(String(fb)).split(y),d=Ta(String(a)).split(y),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var k=c[h]||f,m=d[h]||f,P=RegExp(t,Aa),sb=RegExp(t,Aa);do{var w=P.exec(k)||[f,f,
f],x=sb.exec(m)||[f,f,f];if(0==w[0].length&&0==x[0].length)break;b=J(0==w[1].length?0:parseInt(w[1],10),0==x[1].length?0:parseInt(x[1],10))||J(0==w[2].length,0==x[2].length)||J(w[2],x[2])}while(0==b)}b=gb[a]=0<=b}return b},ib=G.document,jb=ib&&L?eb()||("CSS1Compat"==ib.compatMode?parseInt(fb,10):5):void 0;!M&&!L||L&&9<=jb||M&&hb("1.9.1");L&&hb("9");var kb=function(a,b){return H(b)?a.getElementById(b):b},lb=function(a,b,c,d){a=d||a;var e=b&&b!=u?b.toUpperCase():f;if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?y+c:f));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var h=d=0,k;k=b[h];h++)e==k.nodeName&&(a[d++]=k);a.length=d;return a}return b}b=a.getElementsByTagName(e||u);if(c){a={};for(h=d=0;k=b[h];h++){var e=k.className,m;if(m=typeof e.split==C)m=0<=Wa(e.split(/\s+/),c);m&&(a[d++]=
k)}a.length=d;return a}return b},mb=function(a){Va(a,ja);return 9==a.nodeType?a:a.ownerDocument||a.document};var N=function(a){this.D=a};N.prototype.serialize=function(a){var b=[];this.H(a,b);return b.join(f)};N.prototype.H=function(a,b){if(null==a)b.push(D);else{if(typeof a==E){if(Qa(a)==B){this.serializeArray(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.Y(a,b);return}}switch(typeof a){case Ma:this.L(a,b);break;case Fa:this.X(a,b);break;case ua:b.push(a);break;case C:b.push(D);break;default:throw Error("Unknown type: "+typeof a);}}};
var nb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ob=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;N.prototype.L=function(a,b){b.push(l,a.replace(ob,function(a){var b=nb[a];b||(b=oa+(a.charCodeAt(0)|65536).toString(16).substr(1),nb[a]=b);return b}),l)};N.prototype.X=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:D)};
N.prototype.serializeArray=function(a,b){var c=a.length;b.push(ka);for(var d=f,e=0;e<c;e++)b.push(d),d=a[e],this.H(this.D?this.D.call(a,String(e),d):d,b),d=v;b.push(pa)};N.prototype.Y=function(a,b){b.push(Oa);var c=f,d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=C&&(b.push(c),this.L(d,b),b.push(A),this.H(this.D?this.D.call(a,d,e):e,b),c=v)}b.push(Pa)};var pb="StopIteration"in G?G.StopIteration:{message:"StopIteration",stack:f},O=function(){};O.prototype.next=function(){throw pb;};O.prototype.T=function(){return this};var Q=function(a,b){this.g={};this.c=[];this.F=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};F=Q.prototype;F.o=function(){this.A();for(var a=[],b=0;b<this.c.length;b++)a.push(this.g[this.c[b]]);return a};F.v=function(){this.A();return this.c.concat()};F.u=function(a){return R(this.g,a)};
F.remove=function(a){return R(this.g,a)?(delete this.g[a],this.b--,this.F++,this.c.length>2*this.b&&this.A(),!0):!1};F.A=function(){if(this.b!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];R(this.g,c)&&(this.c[b++]=c);a++}this.c.length=b}if(this.b!=this.c.length){for(var d={},b=a=0;a<this.c.length;)c=this.c[a],R(d,c)||(this.c[b++]=c,d[c]=1),a++;this.c.length=b}};F.get=function(a,b){return R(this.g,a)?this.g[a]:b};
F.set=function(a,b){R(this.g,a)||(this.b++,this.c.push(a),this.F++);this.g[a]=b};F.addAll=function(a){var b;if(a instanceof Q)b=a.v(),a=a.o();else{b=[];var c=0,d;for(d in a)b[c++]=d;c=[];d=0;for(var e in a)c[d++]=a[e];a=c}for(e=0;e<b.length;e++)this.set(b[e],a[e])};F.forEach=function(a,b){for(var c=this.v(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};F.clone=function(){return new Q(this)};
F.T=function(a){this.A();var b=0,c=this.F,d=this,e=new O;e.next=function(){if(c!=d.F)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw pb;var e=d.c[b++];return a?e:d.g[e]};return e};var R=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var qb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,rb=function(a,b){if(a)for(var c=a.split(r),d=0;d<c.length;d++){var e=c[d].indexOf(fa),h=null,k=null;0<=e?(h=c[d].substring(0,e),k=c[d].substring(e+1)):h=c[d];b(h,k?decodeURIComponent(k.replace(/\+/g,g)):f)}};var S=function(a,b){this.B=this.J=this.s=f;this.C=null;this.G=this.K=f;this.f=this.W=!1;var c;a instanceof S?(this.f=void 0!==b?b:a.f,this.R(a.s),this.S(a.J),this.M(a.B),this.O(a.C),this.setPath(a.getPath()),this.P(a.j.clone()),this.N(a.G)):a&&(c=String(a).match(qb))?(this.f=!!b,this.R(c[1]||f,!0),this.S(c[2]||f,!0),this.M(c[3]||f,!0),this.O(c[4]),this.setPath(c[5]||f,!0),this.P(c[6]||f,!0),this.N(c[7]||f,!0)):(this.f=!!b,this.j=new T(null,null,this.f))};F=S.prototype;
F.toString=function(){var a=[],b=this.s;b&&a.push(U(b,tb,!0),A);var c=this.B;if(c||b==ya)a.push(da),(b=this.J)&&a.push(U(b,tb,!0),ha),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,p)),c=this.C,null!=c&&a.push(A,String(c));if(c=this.getPath())this.V()&&c.charAt(0)!=z&&a.push(z),a.push(U(c,c.charAt(0)==z?ub:vb,!0));(c=this.U())&&a.push(ga,c);(c=this.G)&&a.push(n,U(c,wb));return a.join(f)};F.clone=function(){return new S(this)};
F.R=function(a,b){this.i();if(this.s=b?V(a,!0):a)this.s=this.s.replace(/:$/,f);return this};F.S=function(a,b){this.i();this.J=b?V(a):a;return this};F.M=function(a,b){this.i();this.B=b?V(a,!0):a;return this};F.V=function(){return!!this.B};F.O=function(a){this.i();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.C=a}else this.C=null;return this};F.getPath=function(){return this.K};F.setPath=function(a,b){this.i();this.K=b?V(a,!0):a;return this};
F.P=function(a,b){this.i();a instanceof T?(this.j=a,this.j.I(this.f)):(b||(a=U(a,xb)),this.j=new T(a,null,this.f));return this};F.U=function(){return this.j.toString()};F.Z=function(a,b){this.i();this.j.set(a,b);return this};F.N=function(a,b){this.i();this.G=b?V(a):a;return this};F.i=function(){if(this.W)throw Error("Tried to modify a read-only Uri");};F.I=function(a){this.f=a;this.j&&this.j.I(a);return this};
var V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,ba)):decodeURIComponent(a):f},U=function(a,b,c){return H(a)?(a=encodeURI(a).replace(b,yb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,p)),a):null},yb=function(a){a=a.charCodeAt(0);return aa+(a>>4&15).toString(16)+(a&15).toString(16)},tb=/[#\/\?@]/g,vb=/[\#\?:]/g,ub=/[\#\?]/g,xb=/[\#\?@]/g,wb=/#/g,T=function(a,b,c){this.b=this.a=null;this.h=a||null;this.f=!!c};F=T.prototype;
F.l=function(){if(!this.a&&(this.a=new Q,this.b=0,this.h)){var a=this;rb(this.h,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g,g)),c)})}};F.add=function(a,b){this.l();this.w();a=this.m(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b++;return this};F.remove=function(a){this.l();a=this.m(a);return this.a.u(a)?(this.w(),this.b-=this.a.get(a).length,this.a.remove(a)):!1};F.u=function(a){this.l();a=this.m(a);return this.a.u(a)};
F.v=function(){this.l();for(var a=this.a.o(),b=this.a.v(),c=[],d=0;d<b.length;d++)for(var e=a[d],h=0;h<e.length;h++)c.push(b[d]);return c};F.o=function(a){this.l();var b=[];if(H(a))this.u(a)&&(b=Xa(b,this.a.get(this.m(a))));else{a=this.a.o();for(var c=0;c<a.length;c++)b=Xa(b,a[c])}return b};F.set=function(a,b){this.l();this.w();a=this.m(a);this.u(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b++;return this};F.get=function(a,b){var c=a?this.o(a):[];return 0<c.length?String(c[0]):b};
F.setValues=function(a,b){this.remove(a);0<b.length&&(this.w(),this.a.set(this.m(a),Ya(b)),this.b+=b.length)};F.toString=function(){if(this.h)return this.h;if(!this.a)return f;for(var a=[],b=this.a.v(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.o(d),h=0;h<d.length;h++){var k=e;d[h]!==f&&(k+=fa+encodeURIComponent(String(d[h])));a.push(k)}return this.h=a.join(r)};F.w=function(){this.h=null};
F.clone=function(){var a=new T;a.h=this.h;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};F.m=function(a){a=String(a);this.f&&(a=a.toLowerCase());return a};F.I=function(a){a&&!this.f&&(this.l(),this.w(),this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,a))},this));this.f=a};var zb=function(a,b,c){var d;a:{d=mb(b);if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||f;break a}d=f}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||d==Da||d==Na||d==Ia?(d=mb(b),b!=d.body&&b.parentNode?W(a,b.parentNode):c):d},W=function(a,b){return zb(a,b,Ha)},Ab=function(){for(var a=lb(document,Ca,sa,void 0),b=0;b<a.length;b++){var c=a[b],d=kb(document,c.id+ca),e=d.href,h=W(wa,c),k=W(qa,
c),m=zb(za,c,Ja);d.href=Ba+(new Date).valueOf();var P=W(wa,d),d=d.href=e,e=encodeURIComponent,h=(new N(void 0)).serialize({color:h,backgroundColor:k,unvisitedLinkColor:P,fontFamily:m}),e=d+(n+e(h));c.src=e}};var Bb=-1;var Cb=function(){Bb=Math.floor(1E7*Math.random());for(var a=lb(document,Ca,ra,void 0),b=0;b<a.length;b++){var c=kb(document,a[b].id+ca),d=new S(c.href);d.Z(ta,Bb);c.href=d.toString()}Ab();a=function(a){0==a.data.indexOf(Ka)&&(document.getElementById(xa).height=a.data.substring(26))};window.addEventListener?window.addEventListener(Ea,a,!1):window.attachEvent&&window.attachEvent(Ga,a)},X=["BLOG_CMT_createIframe"],Y=G;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);
for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Cb?Y=Y[Z]?Y[Z]:Y[Z]={}:Y[Z]=Cb; })()
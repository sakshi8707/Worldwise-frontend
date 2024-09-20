import{R as X,r as Y,u as Of,j as It,a as J}from"./index-2df7cbd0.js";import{P as Df}from"./PageNav-8c0ae698.js";import"./Logo-a1e8f10d.js";var ze=function(){return ze=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ze.apply(this,arguments)};function Ni(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var se="-ms-",gr="-moz-",Z="-webkit-",au="comm",rs="rule",Ho="decl",Nf="@import",cu="@keyframes",Vf="@layer",lu=Math.abs,qo=String.fromCharCode,go=Object.assign;function xf(n,e){return _e(n,0)^45?(((e<<2^_e(n,0))<<2^_e(n,1))<<2^_e(n,2))<<2^_e(n,3):0}function uu(n){return n.trim()}function Et(n,e){return(n=e.exec(n))?n[0]:n}function j(n,e,t){return n.replace(e,t)}function Ii(n,e,t){return n.indexOf(e,t)}function _e(n,e){return n.charCodeAt(e)|0}function Dn(n,e,t){return n.slice(e,t)}function ut(n){return n.length}function hu(n){return n.length}function hr(n,e){return e.push(n),n}function Mf(n,e){return n.map(e).join("")}function Oc(n,e){return n.filter(function(t){return!Et(t,e)})}var is=1,Nn=1,du=0,Je=0,de=0,jn="";function ss(n,e,t,r,i,o,a,l){return{value:n,root:e,parent:t,type:r,props:i,children:o,line:is,column:Nn,length:a,return:"",siblings:l}}function Ut(n,e){return go(ss("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function bn(n){for(;n.root;)n=Ut(n.root,{children:[n]});hr(n,n.siblings)}function Lf(){return de}function Ff(){return de=Je>0?_e(jn,--Je):0,Nn--,de===10&&(Nn=1,is--),de}function st(){return de=Je<du?_e(jn,Je++):0,Nn++,de===10&&(Nn=1,is++),de}function on(){return _e(jn,Je)}function Ei(){return Je}function os(n,e){return Dn(jn,n,e)}function mo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uf(n){return is=Nn=1,du=ut(jn=n),Je=0,[]}function $f(n){return jn="",n}function Qs(n){return uu(os(Je-1,yo(n===91?n+2:n===40?n+1:n)))}function Bf(n){for(;(de=on())&&de<33;)st();return mo(n)>2||mo(de)>3?"":" "}function jf(n,e){for(;--e&&st()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return os(n,Ei()+(e<6&&on()==32&&st()==32))}function yo(n){for(;st();)switch(de){case n:return Je;case 34:case 39:n!==34&&n!==39&&yo(de);break;case 40:n===41&&yo(n);break;case 92:st();break}return Je}function zf(n,e){for(;st()&&n+de!==47+10;)if(n+de===42+42&&on()===47)break;return"/*"+os(e,Je-1)+"*"+qo(n===47?n:st())}function Hf(n){for(;!mo(on());)st();return os(n,Je)}function qf(n){return $f(wi("",null,null,null,[""],n=Uf(n),0,[0],n))}function wi(n,e,t,r,i,o,a,l,h){for(var d=0,g=0,I=a,A=0,S=0,R=0,k=1,D=1,x=1,C=0,P="",M=i,B=o,L=r,y=P;D;)switch(R=C,C=st()){case 40:if(R!=108&&_e(y,I-1)==58){Ii(y+=j(Qs(C),"&","&\f"),"&\f",lu(d?l[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:y+=Qs(C);break;case 9:case 10:case 13:case 32:y+=Bf(R);break;case 92:y+=jf(Ei()-1,7);continue;case 47:switch(on()){case 42:case 47:hr(Gf(zf(st(),Ei()),e,t,h),h);break;default:y+="/"}break;case 123*k:l[d++]=ut(y)*x;case 125*k:case 59:case 0:switch(C){case 0:case 125:D=0;case 59+g:x==-1&&(y=j(y,/\f/g,"")),S>0&&ut(y)-I&&hr(S>32?Nc(y+";",r,t,I-1,h):Nc(j(y," ","")+";",r,t,I-2,h),h);break;case 59:y+=";";default:if(hr(L=Dc(y,e,t,d,g,i,l,P,M=[],B=[],I,o),o),C===123)if(g===0)wi(y,e,L,L,M,o,I,l,B);else switch(A===99&&_e(y,3)===110?100:A){case 100:case 108:case 109:case 115:wi(n,L,L,r&&hr(Dc(n,L,L,0,0,i,l,P,i,M=[],I,B),B),i,B,I,l,r?M:B);break;default:wi(y,L,L,L,[""],B,0,l,B)}}d=g=S=0,k=x=1,P=y="",I=a;break;case 58:I=1+ut(y),S=R;default:if(k<1){if(C==123)--k;else if(C==125&&k++==0&&Ff()==125)continue}switch(y+=qo(C),C*k){case 38:x=g>0?1:(y+="\f",-1);break;case 44:l[d++]=(ut(y)-1)*x,x=1;break;case 64:on()===45&&(y+=Qs(st())),A=on(),g=I=ut(P=y+=Hf(Ei())),C++;break;case 45:R===45&&ut(y)==2&&(k=0)}}return o}function Dc(n,e,t,r,i,o,a,l,h,d,g,I){for(var A=i-1,S=i===0?o:[""],R=hu(S),k=0,D=0,x=0;k<r;++k)for(var C=0,P=Dn(n,A+1,A=lu(D=a[k])),M=n;C<R;++C)(M=uu(D>0?S[C]+" "+P:j(P,/&\f/g,S[C])))&&(h[x++]=M);return ss(n,e,t,i===0?rs:l,h,d,g,I)}function Gf(n,e,t,r){return ss(n,e,t,au,qo(Lf()),Dn(n,2,-2),0,r)}function Nc(n,e,t,r,i){return ss(n,e,t,Ho,Dn(n,0,r),Dn(n,r+1,-1),r,i)}function fu(n,e,t){switch(xf(n,e)){case 5103:return Z+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+n+n;case 4789:return gr+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+n+gr+n+se+n+n;case 5936:switch(_e(n,e+11)){case 114:return Z+n+se+j(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Z+n+se+j(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Z+n+se+j(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Z+n+se+n+n;case 6165:return Z+n+se+"flex-"+n+n;case 5187:return Z+n+j(n,/(\w+).+(:[^]+)/,Z+"box-$1$2"+se+"flex-$1$2")+n;case 5443:return Z+n+se+"flex-item-"+j(n,/flex-|-self/g,"")+(Et(n,/flex-|baseline/)?"":se+"grid-row-"+j(n,/flex-|-self/g,""))+n;case 4675:return Z+n+se+"flex-line-pack"+j(n,/align-content|flex-|-self/g,"")+n;case 5548:return Z+n+se+j(n,"shrink","negative")+n;case 5292:return Z+n+se+j(n,"basis","preferred-size")+n;case 6060:return Z+"box-"+j(n,"-grow","")+Z+n+se+j(n,"grow","positive")+n;case 4554:return Z+j(n,/([^-])(transform)/g,"$1"+Z+"$2")+n;case 6187:return j(j(j(n,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),n,"")+n;case 5495:case 3959:return j(n,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return j(j(n,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+n+n;case 4200:if(!Et(n,/flex-|baseline/))return se+"grid-column-align"+Dn(n,e)+n;break;case 2592:case 3360:return se+j(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,i){return e=i,Et(r.props,/grid-\w+-end/)})?~Ii(n+(t=t[e].value),"span",0)?n:se+j(n,"-start","")+n+se+"grid-row-span:"+(~Ii(t,"span",0)?Et(t,/\d+/):+Et(t,/\d+/)-+Et(n,/\d+/))+";":se+j(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return Et(r.props,/grid-\w+-start/)})?n:se+j(j(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return j(n,/(.+)-inline(.+)/,Z+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ut(n)-1-e>6)switch(_e(n,e+1)){case 109:if(_e(n,e+4)!==45)break;case 102:return j(n,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+gr+(_e(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Ii(n,"stretch",0)?fu(j(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return j(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,h,d){return se+i+":"+o+d+(a?se+i+"-span:"+(l?h:+h-+o)+d:"")+n});case 4949:if(_e(n,e+6)===121)return j(n,":",":"+Z)+n;break;case 6444:switch(_e(n,_e(n,14)===45?18:11)){case 120:return j(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(_e(n,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+se+"$2box$3")+n;case 100:return j(n,":",":"+se)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(n,"scroll-","scroll-snap-")+n}return n}function Vi(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function Wf(n,e,t,r){switch(n.type){case Vf:if(n.children.length)break;case Nf:case Ho:return n.return=n.return||n.value;case au:return"";case cu:return n.return=n.value+"{"+Vi(n.children,r)+"}";case rs:if(!ut(n.value=n.props.join(",")))return""}return ut(t=Vi(n.children,r))?n.return=n.value+"{"+t+"}":""}function Kf(n){var e=hu(n);return function(t,r,i,o){for(var a="",l=0;l<e;l++)a+=n[l](t,r,i,o)||"";return a}}function Qf(n){return function(e){e.root||(e=e.return)&&n(e)}}function Xf(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Ho:n.return=fu(n.value,n.length,t);return;case cu:return Vi([Ut(n,{value:j(n.value,"@","@"+Z)})],r);case rs:if(n.length)return Mf(t=n.props,function(i){switch(Et(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bn(Ut(n,{props:[j(i,/:(read-\w+)/,":"+gr+"$1")]})),bn(Ut(n,{props:[i]})),go(n,{props:Oc(t,r)});break;case"::placeholder":bn(Ut(n,{props:[j(i,/:(plac\w+)/,":"+Z+"input-$1")]})),bn(Ut(n,{props:[j(i,/:(plac\w+)/,":"+gr+"$1")]})),bn(Ut(n,{props:[j(i,/:(plac\w+)/,se+"input-$1")]})),bn(Ut(n,{props:[i]})),go(n,{props:Oc(t,r)});break}return""})}}var Yf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",pu="active",gu="data-styled-version",as="6.1.13",Go=`/*!sc*/
`,xi=typeof window<"u"&&"HTMLElement"in window,Jf=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),cs=Object.freeze([]),xn=Object.freeze({});function Zf(n,e,t){return t===void 0&&(t=xn),n.theme!==t.theme&&n.theme||e||t.theme}var mu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ep=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tp=/(^-|-$)/g;function Vc(n){return n.replace(ep,"-").replace(tp,"")}var np=/(a)(d)/gi,ci=52,xc=function(n){return String.fromCharCode(n+(n>25?39:97))};function _o(n){var e,t="";for(e=Math.abs(n);e>ci;e=e/ci|0)t=xc(e%ci)+t;return(xc(e%ci)+t).replace(np,"$1-$2")}var Xs,yu=5381,Rn=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},_u=function(n){return Rn(yu,n)};function rp(n){return _o(_u(n)>>>0)}function ip(n){return n.displayName||n.name||"Component"}function Ys(n){return typeof n=="string"&&!0}var vu=typeof Symbol=="function"&&Symbol.for,Iu=vu?Symbol.for("react.memo"):60115,sp=vu?Symbol.for("react.forward_ref"):60112,op={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ap={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Eu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cp=((Xs={})[sp]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xs[Iu]=Eu,Xs);function Mc(n){return("type"in(e=n)&&e.type.$$typeof)===Iu?Eu:"$$typeof"in n?cp[n.$$typeof]:op;var e}var lp=Object.defineProperty,up=Object.getOwnPropertyNames,Lc=Object.getOwnPropertySymbols,hp=Object.getOwnPropertyDescriptor,dp=Object.getPrototypeOf,Fc=Object.prototype;function wu(n,e,t){if(typeof e!="string"){if(Fc){var r=dp(e);r&&r!==Fc&&wu(n,r,t)}var i=up(e);Lc&&(i=i.concat(Lc(e)));for(var o=Mc(n),a=Mc(e),l=0;l<i.length;++l){var h=i[l];if(!(h in ap||t&&t[h]||a&&h in a||o&&h in o)){var d=hp(e,h);try{lp(n,h,d)}catch{}}}}return n}function Mn(n){return typeof n=="function"}function Wo(n){return typeof n=="object"&&"styledComponentId"in n}function tn(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Uc(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=e?e+n[r]:n[r];return t}function Tr(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function vo(n,e,t){if(t===void 0&&(t=!1),!t&&!Tr(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=vo(n[r],e[r]);else if(Tr(e))for(var r in e)n[r]=vo(n[r],e[r]);return n}function Ko(n,e){Object.defineProperty(n,"toString",{value:e})}function Lr(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var fp=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Lr(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(e+1),h=(a=0,t.length);a<h;a++)this.tag.insertRule(l,t[a])&&(this.groupSizes[e]++,l++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),i=r+t;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,a=i;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(Go);return t},n}(),Ti=new Map,Mi=new Map,Ai=1,li=function(n){if(Ti.has(n))return Ti.get(n);for(;Mi.has(Ai);)Ai++;var e=Ai++;return Ti.set(n,e),Mi.set(e,n),e},pp=function(n,e){Ai=e+1,Ti.set(n,e),Mi.set(e,n)},gp="style[".concat(Vn,"][").concat(gu,'="').concat(as,'"]'),mp=new RegExp("^".concat(Vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yp=function(n,e,t){for(var r,i=t.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&n.registerName(e,r)},_p=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Go),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var h=l.match(mp);if(h){var d=0|parseInt(h[1],10),g=h[2];d!==0&&(pp(g,d),yp(n,g,h[3]),n.getTag().insertRules(d,i)),i.length=0}else i.push(l)}}},$c=function(n){for(var e=document.querySelectorAll(gp),t=0,r=e.length;t<r;t++){var i=e[t];i&&i.getAttribute(Vn)!==pu&&(_p(n,i),i.parentNode&&i.parentNode.removeChild(i))}};function vp(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tu=function(n){var e=document.head,t=n||e,r=document.createElement("style"),i=function(l){var h=Array.from(l.querySelectorAll("style[".concat(Vn,"]")));return h[h.length-1]}(t),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vn,pu),r.setAttribute(gu,as);var a=vp();return a&&r.setAttribute("nonce",a),t.insertBefore(r,o),r},Ip=function(){function n(e){this.element=Tu(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===t)return a}throw Lr(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),Ep=function(){function n(e){this.element=Tu(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),wp=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Bc=xi,Tp={isServer:!xi,useCSSOMInjection:!Jf},Au=function(){function n(e,t,r){e===void 0&&(e=xn),t===void 0&&(t={});var i=this;this.options=ze(ze({},Tp),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&xi&&Bc&&(Bc=!1,$c(this)),Ko(this,function(){return function(o){for(var a=o.getTag(),l=a.length,h="",d=function(I){var A=function(x){return Mi.get(x)}(I);if(A===void 0)return"continue";var S=o.names.get(A),R=a.getGroup(I);if(S===void 0||!S.size||R.length===0)return"continue";var k="".concat(Vn,".g").concat(I,'[id="').concat(A,'"]'),D="";S!==void 0&&S.forEach(function(x){x.length>0&&(D+="".concat(x,","))}),h+="".concat(R).concat(k,'{content:"').concat(D,'"}').concat(Go)},g=0;g<l;g++)d(g);return h}(i)})}return n.registerId=function(e){return li(e)},n.prototype.rehydrate=function(){!this.server&&xi&&$c(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(ze(ze({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,i=t.target;return t.isServer?new wp(i):r?new Ip(i):new Ep(i)}(this.options),new fp(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(li(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(li(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(li(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Ap=/&/g,bp=/^\s*\/\/.*$/gm;function bu(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=bu(t.children,e)),t})}function Sp(n){var e,t,r,i=n===void 0?xn:n,o=i.options,a=o===void 0?xn:o,l=i.plugins,h=l===void 0?cs:l,d=function(A,S,R){return R.startsWith(t)&&R.endsWith(t)&&R.replaceAll(t,"").length>0?".".concat(e):A},g=h.slice();g.push(function(A){A.type===rs&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(Ap,t).replace(r,d))}),a.prefix&&g.push(Xf),g.push(Wf);var I=function(A,S,R,k){S===void 0&&(S=""),R===void 0&&(R=""),k===void 0&&(k="&"),e=k,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var D=A.replace(bp,""),x=qf(R||S?"".concat(R," ").concat(S," { ").concat(D," }"):D);a.namespace&&(x=bu(x,a.namespace));var C=[];return Vi(x,Kf(g.concat(Qf(function(P){return C.push(P)})))),C};return I.hash=h.length?h.reduce(function(A,S){return S.name||Lr(15),Rn(A,S.name)},yu).toString():"",I}var Rp=new Au,Io=Sp(),Su=X.createContext({shouldForwardProp:void 0,styleSheet:Rp,stylis:Io});Su.Consumer;X.createContext(void 0);function jc(){return Y.useContext(Su)}var Pp=function(){function n(e,t){var r=this;this.inject=function(i,o){o===void 0&&(o=Io);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ko(this,function(){throw Lr(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Io),this.name+e.hash},n}(),Cp=function(n){return n>="A"&&n<="Z"};function zc(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;Cp(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Ru=function(n){return n==null||n===!1||n===""},Pu=function(n){var e,t,r=[];for(var i in n){var o=n[i];n.hasOwnProperty(i)&&!Ru(o)&&(Array.isArray(o)&&o.isCss||Mn(o)?r.push("".concat(zc(i),":"),o,";"):Tr(o)?r.push.apply(r,Ni(Ni(["".concat(i," {")],Pu(o),!1),["}"],!1)):r.push("".concat(zc(i),": ").concat((e=i,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Yf||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function an(n,e,t,r){if(Ru(n))return[];if(Wo(n))return[".".concat(n.styledComponentId)];if(Mn(n)){if(!Mn(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var i=n(e);return an(i,e,t,r)}var o;return n instanceof Pp?t?(n.inject(t,r),[n.getName(r)]):[n]:Tr(n)?Pu(n):Array.isArray(n)?Array.prototype.concat.apply(cs,n.map(function(a){return an(a,e,t,r)})):[n.toString()]}function kp(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Mn(t)&&!Wo(t))return!1}return!0}var Op=_u(as),Dp=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&kp(e),this.componentId=t,this.baseHash=Rn(Op,t),this.baseStyle=r,Au.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=tn(i,this.staticRulesId);else{var o=Uc(an(this.rules,e,t,r)),a=_o(Rn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,l)}i=tn(i,a),this.staticRulesId=a}else{for(var h=Rn(this.baseHash,r.hash),d="",g=0;g<this.rules.length;g++){var I=this.rules[g];if(typeof I=="string")d+=I;else if(I){var A=Uc(an(I,e,t,r));h=Rn(h,A+g),d+=A}}if(d){var S=_o(h>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(d,".".concat(S),void 0,this.componentId)),i=tn(i,S)}}return i},n}(),Cu=X.createContext(void 0);Cu.Consumer;var Js={};function Np(n,e,t){var r=Wo(n),i=n,o=!Ys(n),a=e.attrs,l=a===void 0?cs:a,h=e.componentId,d=h===void 0?function(M,B){var L=typeof M!="string"?"sc":Vc(M);Js[L]=(Js[L]||0)+1;var y="".concat(L,"-").concat(rp(as+L+Js[L]));return B?"".concat(B,"-").concat(y):y}(e.displayName,e.parentComponentId):h,g=e.displayName,I=g===void 0?function(M){return Ys(M)?"styled.".concat(M):"Styled(".concat(ip(M),")")}(n):g,A=e.displayName&&e.componentId?"".concat(Vc(e.displayName),"-").concat(e.componentId):e.componentId||d,S=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,R=e.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(e.shouldForwardProp){var D=e.shouldForwardProp;R=function(M,B){return k(M,B)&&D(M,B)}}else R=k}var x=new Dp(t,A,r?i.componentStyle:void 0);function C(M,B){return function(L,y,p){var m=L.attrs,v=L.componentStyle,E=L.defaultProps,T=L.foldedComponentIds,_=L.styledComponentId,le=L.target,Be=X.useContext(Cu),Nt=jc(),ge=L.shouldForwardProp||Nt.shouldForwardProp,Ee=Zf(y,Be,E)||xn,ue=function(ce,Le,Re){for(var gt,mt=ze(ze({},Le),{className:void 0,theme:Re}),Vt=0;Vt<ce.length;Vt+=1){var yt=Mn(gt=ce[Vt])?gt(mt):gt;for(var Xe in yt)mt[Xe]=Xe==="className"?tn(mt[Xe],yt[Xe]):Xe==="style"?ze(ze({},mt[Xe]),yt[Xe]):yt[Xe]}return Le.className&&(mt.className=tn(mt.className,Le.className)),mt}(m,y,Ee),je=ue.as||le,Me={};for(var ee in ue)ue[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&ue.theme===Ee||(ee==="forwardedAs"?Me.as=ue.forwardedAs:ge&&!ge(ee,je)||(Me[ee]=ue[ee]));var K=function(ce,Le){var Re=jc(),gt=ce.generateAndInjectStyles(Le,Re.styleSheet,Re.stylis);return gt}(v,ue),we=tn(T,_);return K&&(we+=" "+K),ue.className&&(we+=" "+ue.className),Me[Ys(je)&&!mu.has(je)?"class":"className"]=we,Me.ref=p,Y.createElement(je,Me)}(P,M,B)}C.displayName=I;var P=X.forwardRef(C);return P.attrs=S,P.componentStyle=x,P.displayName=I,P.shouldForwardProp=R,P.foldedComponentIds=r?tn(i.foldedComponentIds,i.styledComponentId):"",P.styledComponentId=A,P.target=r?i.target:n,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=r?function(B){for(var L=[],y=1;y<arguments.length;y++)L[y-1]=arguments[y];for(var p=0,m=L;p<m.length;p++)vo(B,m[p],!0);return B}({},i.defaultProps,M):M}}),Ko(P,function(){return".".concat(P.styledComponentId)}),o&&wu(P,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function Hc(n,e){for(var t=[n[0]],r=0,i=e.length;r<i;r+=1)t.push(e[r],n[r+1]);return t}var qc=function(n){return Object.assign(n,{isCss:!0})};function Vp(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Mn(n)||Tr(n))return qc(an(Hc(cs,Ni([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?an(r):qc(an(Hc(r,e)))}function Eo(n,e,t){if(t===void 0&&(t=xn),!e)throw Lr(1,e);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return n(e,t,Vp.apply(void 0,Ni([i],o,!1)))};return r.attrs=function(i){return Eo(n,e,ze(ze({},t),{attrs:Array.prototype.concat(t.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Eo(n,e,ze(ze({},t),i))},r}var ku=function(n){return Eo(Np,n)},pe=ku;mu.forEach(function(n){pe[n]=ku(n)});const xp=pe.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  color: red;
`,ui=pe.a`
  border: 1px solid #ccc;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 40px;
  height: 40px;
  color: #ccc;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    color: black;
  }

  i {
    font-size: 20px;
  }
`,Mp=pe.div`
  background-color: var(--color-dark--1);
  border-radius: 10px;
  box-shadow: 0px 14px 28px 20px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`,Lp=pe.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: ${n=>n.$signinIn!==!0?"1":"0"};
  z-index: ${n=>n.$signinIn!==!0?"5":"1"};
  transform: ${n=>n.$signinIn!==!0?"translateX(100%)":"translateX(0)"};
`,Fp=pe.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: ${n=>n.$signinIn?"1":"0"};
  z-index: ${n=>n.$signinIn?"5":"1"};
  transform: ${n=>n.$signinIn?"translateX(0)":"translateX(100%)"};
`,Up=pe.div`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 10; /* Ensures the navbar stays on top */
`,$p=pe.div`
  margin: 2.5rem;
  padding: 2.5rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
  background-color: var(--color-dark--1);
  position: relative;
`,Gc=pe.form`
  background-color: ;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`,hi=pe.h1`
  font-weight: bold;
  margin: 0;
`,ar=pe.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`,wo=pe.button`
  border-radius: 20px;
  border: 1px solid var(--color-brand--2);
  background-color: var(--color-brand--2);

  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`,Wc=pe(wo)`
  background-color: transparent;
  border-color: #ffffff;
`,Bp=pe.a`
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`,jp=pe.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out, border-radius 0.6s ease-in-out;
  z-index: 100;
  border-radius: ${n=>n.$signinIn?" 150px 0 0 100px ":"0 150px 100px 0"};
  ${n=>n.$signinIn!==!0?"transform: translateX(-100%);":null}
`,zp=pe.div`
  background: linear-gradient(
    to right,
    var(--color-brand--2),
     var(--color-brand--2)
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: ;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${n=>n.$signinIn!==!0?"transform: translateX(50%);":null}
`,Ou=pe.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`,Hp=pe(Ou)`
  transform: translateX(-20%);
  ${n=>n.$signinIn!==!0?"transform: translateX(0);":null}
  border-radius: 30px;
`,qp=pe(Ou)`
  right: 0;
  transform: translateX(0);
  ${n=>n.$signinIn!==!0?"transform: translateX(20%);":null}
`,Kc=pe.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;function Du(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=Du(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Bt(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=Du(n))&&(r&&(r+=" "),r+=e);return r}const Ar=n=>typeof n=="number"&&!isNaN(n),cn=n=>typeof n=="string",We=n=>typeof n=="function",bi=n=>cn(n)||We(n)?n:null,To=n=>Y.isValidElement(n)||cn(n)||We(n)||Ar(n);function Gp(n,e,t){t===void 0&&(t=300);const{scrollHeight:r,style:i}=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${t}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,t)})})}function ls(n){let{enter:e,exit:t,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=n;return function(a){let{children:l,position:h,preventExitTransition:d,done:g,nodeRef:I,isIn:A,playToast:S}=a;const R=r?`${e}--${h}`:e,k=r?`${t}--${h}`:t,D=Y.useRef(0);return Y.useLayoutEffect(()=>{const x=I.current,C=R.split(" "),P=M=>{M.target===I.current&&(S(),x.removeEventListener("animationend",P),x.removeEventListener("animationcancel",P),D.current===0&&M.type!=="animationcancel"&&x.classList.remove(...C))};x.classList.add(...C),x.addEventListener("animationend",P),x.addEventListener("animationcancel",P)},[]),Y.useEffect(()=>{const x=I.current,C=()=>{x.removeEventListener("animationend",C),i?Gp(x,g,o):g()};A||(d?C():(D.current=1,x.className+=` ${k}`,x.addEventListener("animationend",C)))},[A]),X.createElement(X.Fragment,null,l)}}function Qc(n,e){return n!=null?{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:e}:{}}const $e=new Map;let br=[];const Ao=new Set,Wp=n=>Ao.forEach(e=>e(n)),Nu=()=>$e.size>0;function Vu(n,e){var t;if(e)return!((t=$e.get(e))==null||!t.isToastActive(n));let r=!1;return $e.forEach(i=>{i.isToastActive(n)&&(r=!0)}),r}function xu(n,e){To(n)&&(Nu()||br.push({content:n,options:e}),$e.forEach(t=>{t.buildToast(n,e)}))}function Xc(n,e){$e.forEach(t=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===t.id&&t.toggle(n,e==null?void 0:e.id):t.toggle(n,e==null?void 0:e.id)})}function Kp(n){const{subscribe:e,getSnapshot:t,setProps:r}=Y.useRef(function(o){const a=o.containerId||1;return{subscribe(l){const h=function(g,I,A){let S=1,R=0,k=[],D=[],x=[],C=I;const P=new Map,M=new Set,B=()=>{x=Array.from(P.values()),M.forEach(p=>p())},L=p=>{D=p==null?[]:D.filter(m=>m!==p),B()},y=p=>{const{toastId:m,onOpen:v,updateId:E,children:T}=p.props,_=E==null;p.staleId&&P.delete(p.staleId),P.set(m,p),D=[...D,p.props.toastId].filter(le=>le!==p.staleId),B(),A(Qc(p,_?"added":"updated")),_&&We(v)&&v(Y.isValidElement(T)&&T.props)};return{id:g,props:C,observe:p=>(M.add(p),()=>M.delete(p)),toggle:(p,m)=>{P.forEach(v=>{m!=null&&m!==v.props.toastId||We(v.toggle)&&v.toggle(p)})},removeToast:L,toasts:P,clearQueue:()=>{R-=k.length,k=[]},buildToast:(p,m)=>{if((ee=>{let{containerId:K,toastId:we,updateId:ce}=ee;const Le=K?K!==g:g!==1,Re=P.has(we)&&ce==null;return Le||Re})(m))return;const{toastId:v,updateId:E,data:T,staleId:_,delay:le}=m,Be=()=>{L(v)},Nt=E==null;Nt&&R++;const ge={...C,style:C.toastStyle,key:S++,...Object.fromEntries(Object.entries(m).filter(ee=>{let[K,we]=ee;return we!=null})),toastId:v,updateId:E,data:T,closeToast:Be,isIn:!1,className:bi(m.className||C.toastClassName),bodyClassName:bi(m.bodyClassName||C.bodyClassName),progressClassName:bi(m.progressClassName||C.progressClassName),autoClose:!m.isLoading&&(Ee=m.autoClose,ue=C.autoClose,Ee===!1||Ar(Ee)&&Ee>0?Ee:ue),deleteToast(){const ee=P.get(v),{onClose:K,children:we}=ee.props;We(K)&&K(Y.isValidElement(we)&&we.props),A(Qc(ee,"removed")),P.delete(v),R--,R<0&&(R=0),k.length>0?y(k.shift()):B()}};var Ee,ue;ge.closeButton=C.closeButton,m.closeButton===!1||To(m.closeButton)?ge.closeButton=m.closeButton:m.closeButton===!0&&(ge.closeButton=!To(C.closeButton)||C.closeButton);let je=p;Y.isValidElement(p)&&!cn(p.type)?je=Y.cloneElement(p,{closeToast:Be,toastProps:ge,data:T}):We(p)&&(je=p({closeToast:Be,toastProps:ge,data:T}));const Me={content:je,props:ge,staleId:_};C.limit&&C.limit>0&&R>C.limit&&Nt?k.push(Me):Ar(le)?setTimeout(()=>{y(Me)},le):y(Me)},setProps(p){C=p},setToggle:(p,m)=>{P.get(p).toggle=m},isToastActive:p=>D.some(m=>m===p),getSnapshot:()=>C.newestOnTop?x.reverse():x}}(a,o,Wp);$e.set(a,h);const d=h.observe(l);return br.forEach(g=>xu(g.content,g.options)),br=[],()=>{d(),$e.delete(a)}},setProps(l){var h;(h=$e.get(a))==null||h.setProps(l)},getSnapshot(){var l;return(l=$e.get(a))==null?void 0:l.getSnapshot()}}}(n)).current;r(n);const i=Y.useSyncExternalStore(e,t,t);return{getToastToRender:function(o){if(!i)return[];const a=new Map;return i.forEach(l=>{const{position:h}=l.props;a.has(h)||a.set(h,[]),a.get(h).push(l)}),Array.from(a,l=>o(l[0],l[1]))},isToastActive:Vu,count:i==null?void 0:i.length}}function Qp(n){const[e,t]=Y.useState(!1),[r,i]=Y.useState(!1),o=Y.useRef(null),a=Y.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:h,closeToast:d,onClick:g,closeOnClick:I}=n;var A,S;function R(){t(!0)}function k(){t(!1)}function D(P){const M=o.current;a.canDrag&&M&&(a.didMove=!0,e&&k(),a.delta=n.draggableDirection==="x"?P.clientX-a.start:P.clientY-a.start,a.start!==P.clientX&&(a.canCloseOnClick=!1),M.style.transform=`translate3d(${n.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`},0)`,M.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function x(){document.removeEventListener("pointermove",D),document.removeEventListener("pointerup",x);const P=o.current;if(a.canDrag&&a.didMove&&P){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return i(!0),n.closeToast(),void n.collapseAll();P.style.transition="transform 0.2s, opacity 0.2s",P.style.removeProperty("transform"),P.style.removeProperty("opacity")}}(S=$e.get((A={id:n.toastId,containerId:n.containerId,fn:t}).containerId||1))==null||S.setToggle(A.id,A.fn),Y.useEffect(()=>{if(n.pauseOnFocusLoss)return document.hasFocus()||k(),window.addEventListener("focus",R),window.addEventListener("blur",k),()=>{window.removeEventListener("focus",R),window.removeEventListener("blur",k)}},[n.pauseOnFocusLoss]);const C={onPointerDown:function(P){if(n.draggable===!0||n.draggable===P.pointerType){a.didMove=!1,document.addEventListener("pointermove",D),document.addEventListener("pointerup",x);const M=o.current;a.canCloseOnClick=!0,a.canDrag=!0,M.style.transition="none",n.draggableDirection==="x"?(a.start=P.clientX,a.removalDistance=M.offsetWidth*(n.draggablePercent/100)):(a.start=P.clientY,a.removalDistance=M.offsetHeight*(n.draggablePercent===80?1.5*n.draggablePercent:n.draggablePercent)/100)}},onPointerUp:function(P){const{top:M,bottom:B,left:L,right:y}=o.current.getBoundingClientRect();P.nativeEvent.type!=="touchend"&&n.pauseOnHover&&P.clientX>=L&&P.clientX<=y&&P.clientY>=M&&P.clientY<=B?k():R()}};return l&&h&&(C.onMouseEnter=k,n.stacked||(C.onMouseLeave=R)),I&&(C.onClick=P=>{g&&g(P),a.canCloseOnClick&&d()}),{playToast:R,pauseToast:k,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:C}}function Xp(n){let{delay:e,isRunning:t,closeToast:r,type:i="default",hide:o,className:a,style:l,controlledProgress:h,progress:d,rtl:g,isIn:I,theme:A}=n;const S=o||h&&d===0,R={...l,animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};h&&(R.transform=`scaleX(${d})`);const k=Bt("Toastify__progress-bar",h?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${A}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":g}),D=We(a)?a({rtl:g,type:i,defaultClassName:k}):Bt(k,a),x={[h&&d>=1?"onTransitionEnd":"onAnimationEnd"]:h&&d<1?null:()=>{I&&r()}};return X.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":S},X.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${A} Toastify__progress-bar--${i}`}),X.createElement("div",{role:"progressbar","aria-hidden":S?"true":"false","aria-label":"notification timer",className:D,style:R,...x}))}let Yp=1;const Mu=()=>""+Yp++;function Jp(n){return n&&(cn(n.toastId)||Ar(n.toastId))?n.toastId:Mu()}function mr(n,e){return xu(n,e),e.toastId}function Li(n,e){return{...e,type:e&&e.type||n,toastId:Jp(e)}}function di(n){return(e,t)=>mr(e,Li(n,t))}function H(n,e){return mr(n,Li("default",e))}H.loading=(n,e)=>mr(n,Li("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),H.promise=function(n,e,t){let r,{pending:i,error:o,success:a}=e;i&&(r=cn(i)?H.loading(i,t):H.loading(i.render,{...t,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(g,I,A)=>{if(I==null)return void H.dismiss(r);const S={type:g,...l,...t,data:A},R=cn(I)?{render:I}:I;return r?H.update(r,{...S,...R}):H(R.render,{...S,...R}),A},d=We(n)?n():n;return d.then(g=>h("success",a,g)).catch(g=>h("error",o,g)),d},H.success=di("success"),H.info=di("info"),H.error=di("error"),H.warning=di("warning"),H.warn=H.warning,H.dark=(n,e)=>mr(n,Li("default",{theme:"dark",...e})),H.dismiss=function(n){(function(e){var t;if(Nu()){if(e==null||cn(t=e)||Ar(t))$e.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=$e.get(e.containerId);r?r.removeToast(e.id):$e.forEach(i=>{i.removeToast(e.id)})}}else br=br.filter(r=>e!=null&&r.options.toastId!==e)})(n)},H.clearWaitingQueue=function(n){n===void 0&&(n={}),$e.forEach(e=>{!e.props.limit||n.containerId&&e.id!==n.containerId||e.clearQueue()})},H.isActive=Vu,H.update=function(n,e){e===void 0&&(e={});const t=((r,i)=>{var o;let{containerId:a}=i;return(o=$e.get(a||1))==null?void 0:o.toasts.get(r)})(n,e);if(t){const{props:r,content:i}=t,o={delay:100,...r,...e,toastId:e.toastId||n,updateId:Mu()};o.toastId!==n&&(o.staleId=n);const a=o.render||i;delete o.render,mr(a,o)}},H.done=n=>{H.update(n,{progress:1})},H.onChange=function(n){return Ao.add(n),()=>{Ao.delete(n)}},H.play=n=>Xc(!0,n),H.pause=n=>Xc(!1,n);const Zp=typeof window<"u"?Y.useLayoutEffect:Y.useEffect,fi=n=>{let{theme:e,type:t,isLoading:r,...i}=n;return X.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...i})},Zs={info:function(n){return X.createElement(fi,{...n},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return X.createElement(fi,{...n},X.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return X.createElement(fi,{...n},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return X.createElement(fi,{...n},X.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return X.createElement("div",{className:"Toastify__spinner"})}},eg=n=>{const{isRunning:e,preventExitTransition:t,toastRef:r,eventHandlers:i,playToast:o}=Qp(n),{closeButton:a,children:l,autoClose:h,onClick:d,type:g,hideProgressBar:I,closeToast:A,transition:S,position:R,className:k,style:D,bodyClassName:x,bodyStyle:C,progressClassName:P,progressStyle:M,updateId:B,role:L,progress:y,rtl:p,toastId:m,deleteToast:v,isIn:E,isLoading:T,closeOnClick:_,theme:le}=n,Be=Bt("Toastify__toast",`Toastify__toast-theme--${le}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":p},{"Toastify__toast--close-on-click":_}),Nt=We(k)?k({rtl:p,position:R,type:g,defaultClassName:Be}):Bt(Be,k),ge=function(Me){let{theme:ee,type:K,isLoading:we,icon:ce}=Me,Le=null;const Re={theme:ee,type:K};return ce===!1||(We(ce)?Le=ce({...Re,isLoading:we}):Y.isValidElement(ce)?Le=Y.cloneElement(ce,Re):we?Le=Zs.spinner():(gt=>gt in Zs)(K)&&(Le=Zs[K](Re))),Le}(n),Ee=!!y||!h,ue={closeToast:A,type:g,theme:le};let je=null;return a===!1||(je=We(a)?a(ue):Y.isValidElement(a)?Y.cloneElement(a,ue):function(Me){let{closeToast:ee,theme:K,ariaLabel:we="close"}=Me;return X.createElement("button",{className:`Toastify__close-button Toastify__close-button--${K}`,type:"button",onClick:ce=>{ce.stopPropagation(),ee(ce)},"aria-label":we},X.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},X.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(ue)),X.createElement(S,{isIn:E,done:v,position:R,preventExitTransition:t,nodeRef:r,playToast:o},X.createElement("div",{id:m,onClick:d,"data-in":E,className:Nt,...i,style:D,ref:r},X.createElement("div",{...E&&{role:L},className:We(x)?x({type:g}):Bt("Toastify__toast-body",x),style:C},ge!=null&&X.createElement("div",{className:Bt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},ge),X.createElement("div",null,l)),je,X.createElement(Xp,{...B&&!Ee?{key:`pb-${B}`}:{},rtl:p,theme:le,delay:h,isRunning:e,isIn:E,closeToast:A,hide:I,type:g,style:M,className:P,controlledProgress:Ee,progress:y||0})))},us=function(n,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}},Lu=ls(us("bounce",!0));ls(us("slide",!0));ls(us("zoom"));ls(us("flip"));const tg={position:"top-right",transition:Lu,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function ng(n){let e={...tg,...n};const t=n.stacked,[r,i]=Y.useState(!0),o=Y.useRef(null),{getToastToRender:a,isToastActive:l,count:h}=Kp(e),{className:d,style:g,rtl:I,containerId:A}=e;function S(k){const D=Bt("Toastify__toast-container",`Toastify__toast-container--${k}`,{"Toastify__toast-container--rtl":I});return We(d)?d({position:k,rtl:I,defaultClassName:D}):Bt(D,bi(d))}function R(){t&&(i(!0),H.play())}return Zp(()=>{if(t){var k;const D=o.current.querySelectorAll('[data-in="true"]'),x=12,C=(k=e.position)==null?void 0:k.includes("top");let P=0,M=0;Array.from(D).reverse().forEach((B,L)=>{const y=B;y.classList.add("Toastify__toast--stacked"),L>0&&(y.dataset.collapsed=`${r}`),y.dataset.pos||(y.dataset.pos=C?"top":"bot");const p=P*(r?.2:1)+(r?0:x*L);y.style.setProperty("--y",`${C?p:-1*p}px`),y.style.setProperty("--g",`${x}`),y.style.setProperty("--s",""+(1-(r?M:0))),P+=y.offsetHeight,M+=.025})}},[r,h,t]),X.createElement("div",{ref:o,className:"Toastify",id:A,onMouseEnter:()=>{t&&(i(!1),H.pause())},onMouseLeave:R},a((k,D)=>{const x=D.length?{...g}:{...g,pointerEvents:"none"};return X.createElement("div",{className:S(k),style:x,key:`container-${k}`},D.map(C=>{let{content:P,props:M}=C;return X.createElement(eg,{...M,stacked:t,collapseAll:R,isIn:l(M.toastId,M.containerId),style:M.style,key:`toast-${M.key}`},P)}))}))}const lt=(n,e)=>{const t={position:"top-center",autoClose:9e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",transition:Lu,className:"custom-toast",style:{backgroundColor:"var(--color-dark--1)"},progressStyle:{backgroundColor:n==="error"?"red":"var(--color-brand--2)"}};switch(n){case"success":H.success(e,t);break;case"error":H.error(e,t);break;case"info":H.info(e,t);break;case"warning":H.warning(e,t);break;default:H(e,t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},rg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,g=o>>2,I=(o&3)<<4|l>>4;let A=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(A=64)),r.push(t[g],t[I],t[A],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||I==null)throw new ig;const A=o<<2|l>>4;if(r.push(A),d!==64){const S=l<<4&240|d>>2;if(r.push(S),I!==64){const R=d<<6&192|I;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ig extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(n){const e=Fu(n);return Uu.encodeByteArray(e,!0)},Fi=function(n){return sg(n).replace(/\./g,"")},$u=function(n){try{return Uu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=()=>og().__FIREBASE_DEFAULTS__,cg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$u(n[1]);return e&&JSON.parse(e)},hs=()=>{try{return ag()||cg()||lg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bu=n=>{var e,t;return(t=(e=hs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ug=n=>{const e=Bu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ju=()=>{var n;return(n=hs())===null||n===void 0?void 0:n.config},zu=n=>{var e;return(e=hs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[Fi(JSON.stringify(t)),Fi(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function pg(){var n;const e=(n=hs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mg(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yg(){return!pg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qu(){try{return typeof indexedDB=="object"}catch{return!1}}function Gu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function _g(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="FirebaseError";class ct extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=vg,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Ig(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ct(i,l,r)}}function Ig(n,e){return n.replace(Eg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Eg=/\{\$([^}]+)}/g;function wg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Sr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Yc(o)&&Yc(a)){if(!Sr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Yc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function fr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Tg(n,e){const t=new Ag(n,e);return t.subscribe.bind(t)}class Ag{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=eo),i.error===void 0&&(i.error=eo),i.complete===void 0&&(i.complete=eo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function eo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=1e3,Rg=2,Pg=4*60*60*1e3,Cg=.5;function Jc(n,e=Sg,t=Rg){const r=e*Math.pow(t,n),i=Math.round(Cg*r*(Math.random()-.5)*2);return Math.min(Pg,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n){return n&&n._delegate?n._delegate:n}class at{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dg(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Og(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(n){return n===en?void 0:n}function Dg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const Vg={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},xg=q.INFO,Mg={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Lg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Mg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ds{constructor(e){this.name=e,this._logLevel=xg,this._logHandler=Lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Fg=(n,e)=>e.some(t=>n instanceof t);let Zc,el;function Ug(){return Zc||(Zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $g(){return el||(el=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,bo=new WeakMap,Ku=new WeakMap,to=new WeakMap,Qo=new WeakMap;function Bg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(jt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wu.set(t,n)}).catch(()=>{}),Qo.set(e,n),e}function jg(n){if(bo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});bo.set(n,e)}let So={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ku.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zg(n){So=n(So)}function Hg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(no(this),e,...t);return Ku.set(r,e.sort?e.sort():[e]),jt(r)}:$g().includes(n)?function(...e){return n.apply(no(this),e),jt(Wu.get(this))}:function(...e){return jt(n.apply(no(this),e))}}function qg(n){return typeof n=="function"?Hg(n):(n instanceof IDBTransaction&&jg(n),Fg(n,Ug())?new Proxy(n,So):n)}function jt(n){if(n instanceof IDBRequest)return Bg(n);if(to.has(n))return to.get(n);const e=qg(n);return e!==n&&(to.set(n,e),Qo.set(e,n)),e}const no=n=>Qo.get(n);function Qu(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=jt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(jt(a.result),h.oldVersion,h.newVersion,jt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Gg=["get","getKey","getAll","getAllKeys","count"],Wg=["put","add","delete","clear"],ro=new Map;function tl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ro.get(e))return ro.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Wg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gg.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&h.done]))[0]};return ro.set(e,o),o}zg(n=>({...n,get:(e,t,r)=>tl(e,t)||n.get(e,t,r),has:(e,t)=>!!tl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ro="@firebase/app",nl="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new ds("@firebase/app"),Xg="@firebase/app-compat",Yg="@firebase/analytics-compat",Jg="@firebase/analytics",Zg="@firebase/app-check-compat",em="@firebase/app-check",tm="@firebase/auth",nm="@firebase/auth-compat",rm="@firebase/database",im="@firebase/database-compat",sm="@firebase/functions",om="@firebase/functions-compat",am="@firebase/installations",cm="@firebase/installations-compat",lm="@firebase/messaging",um="@firebase/messaging-compat",hm="@firebase/performance",dm="@firebase/performance-compat",fm="@firebase/remote-config",pm="@firebase/remote-config-compat",gm="@firebase/storage",mm="@firebase/storage-compat",ym="@firebase/firestore",_m="@firebase/vertexai-preview",vm="@firebase/firestore-compat",Im="firebase",Em="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="[DEFAULT]",wm={[Ro]:"fire-core",[Xg]:"fire-core-compat",[Jg]:"fire-analytics",[Yg]:"fire-analytics-compat",[em]:"fire-app-check",[Zg]:"fire-app-check-compat",[tm]:"fire-auth",[nm]:"fire-auth-compat",[rm]:"fire-rtdb",[im]:"fire-rtdb-compat",[sm]:"fire-fn",[om]:"fire-fn-compat",[am]:"fire-iid",[cm]:"fire-iid-compat",[lm]:"fire-fcm",[um]:"fire-fcm-compat",[hm]:"fire-perf",[dm]:"fire-perf-compat",[fm]:"fire-rc",[pm]:"fire-rc-compat",[gm]:"fire-gcs",[mm]:"fire-gcs-compat",[ym]:"fire-fst",[vm]:"fire-fst-compat",[_m]:"fire-vertex","fire-js":"fire-js",[Im]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,Tm=new Map,Co=new Map;function rl(n,e){try{n.container.addComponent(e)}catch(t){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dt(n){const e=n.name;if(Co.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;Co.set(e,n);for(const t of Ui.values())rl(t,n);for(const t of Tm.values())rl(t,n);return!0}function vn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new _n("app","Firebase",Am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=Em;function Xu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Po,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(t||(t=ju()),!t)throw zt.create("no-options");const o=Ui.get(i);if(o){if(Sr(t,o.options)&&Sr(r,o.config))return o;throw zt.create("duplicate-app",{appName:i})}const a=new Ng(i);for(const h of Co.values())a.addComponent(h);const l=new bm(t,r,a);return Ui.set(i,l),l}function Xo(n=Po){const e=Ui.get(n);if(!e&&n===Po&&ju())return Xu();if(!e)throw zt.create("no-app",{appName:n});return e}function Ye(n,e,t){var r;let i=(r=wm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(l.join(" "));return}dt(new at(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="firebase-heartbeat-database",Rm=1,Rr="firebase-heartbeat-store";let io=null;function Yu(){return io||(io=Qu(Sm,Rm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Rr)}catch(t){console.warn(t)}}}}).catch(n=>{throw zt.create("idb-open",{originalErrorMessage:n.message})})),io}async function Pm(n){try{const t=(await Yu()).transaction(Rr),r=await t.objectStore(Rr).get(Ju(n));return await t.done,r}catch(e){if(e instanceof ct)Ot.warn(e.message);else{const t=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(t.message)}}}async function il(n,e){try{const r=(await Yu()).transaction(Rr,"readwrite");await r.objectStore(Rr).put(e,Ju(n)),await r.done}catch(t){if(t instanceof ct)Ot.warn(t.message);else{const r=zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(r.message)}}}function Ju(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=1024,km=30*24*60*60*1e3;class Om{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=sl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=km}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sl(),{heartbeatsToSend:r,unsentEntries:i}=Dm(this._heartbeatsCache.heartbeats),o=Fi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ot.warn(t),""}}}function sl(){return new Date().toISOString().substring(0,10)}function Dm(n,e=Cm){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ol(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ol(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Nm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qu()?Gu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return il(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return il(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ol(n){return Fi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n){dt(new at("platform-logger",e=>new Kg(e),"PRIVATE")),dt(new at("heartbeat",e=>new Om(e),"PRIVATE")),Ye(Ro,nl,n),Ye(Ro,nl,"esm2017"),Ye("fire-js","")}Vm("");function Yo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Zu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xm=Zu,eh=new _n("auth","Firebase",Zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new ds("@firebase/auth");function Mm(n,...e){$i.logLevel<=q.WARN&&$i.warn(`Auth (${zn}): ${n}`,...e)}function Si(n,...e){$i.logLevel<=q.ERROR&&$i.error(`Auth (${zn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,...e){throw Zo(n,...e)}function ot(n,...e){return Zo(n,...e)}function Jo(n,e,t){const r=Object.assign(Object.assign({},xm()),{[e]:t});return new _n("auth","Firebase",r).create(e,{appName:n.name})}function Pt(n){return Jo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lm(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(n,"argument-error"),Jo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return eh.create(n,...e)}function U(n,e,...t){if(!n)throw Zo(e,...t)}function bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Si(e),new Error(e)}function Dt(n,e){n||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Fm(){return al()==="http:"||al()==="https:"}function al(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fm()||Hu()||"connection"in navigator)?navigator.onLine:!0}function $m(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=fg()||gg()}get(){return Um()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n,e){Dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Ur(3e4,6e4);function Wt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Kt(n,e,t,r,i={}){return nh(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=Fr(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),th.fetch()(rh(n,n.config.apiHost,t,l),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function nh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bm),e);try{const i=new Hm(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw pi(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw pi(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw pi(n,"user-disabled",a);const g=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Jo(n,g,d);Ze(n,g)}}catch(i){if(i instanceof ct)throw i;Ze(n,"network-request-failed",{message:String(i)})}}async function $r(n,e,t,r,i={}){const o=await Kt(n,e,t,r,i);return"mfaPendingCredential"in o&&Ze(n,"multi-factor-auth-required",{_serverResponse:o}),o}function rh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ea(n.config,i):`${n.config.apiScheme}://${i}`}function zm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),jm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ot(n,e,r);return i.customData._tokenResponse=t,i}function cl(n){return n!==void 0&&n.enterprise!==void 0}class qm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gm(n,e){return Kt(n,"GET","/v2/recaptchaConfig",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(n,e){return Kt(n,"POST","/v1/accounts:delete",e)}async function ih(n,e){return Kt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Km(n,e=!1){const t=Qe(n),r=await t.getIdToken(e),i=ta(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:yr(so(i.auth_time)),issuedAtTime:yr(so(i.iat)),expirationTime:yr(so(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function so(n){return Number(n)*1e3}function ta(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Si("JWT malformed, contained fewer than 3 sections"),null;try{const i=$u(t);return i?JSON.parse(i):(Si("Failed to decode base64 JWT payload"),null)}catch(i){return Si("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ll(n){const e=ta(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ct&&Qm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Qm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yr(this.lastLoginAt),this.creationTime=yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Pr(n,ih(t,{idToken:r}));U(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?sh(o.providerUserInfo):[],l=Jm(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),g=h?d:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Oo(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(n,I)}async function Ym(n){const e=Qe(n);await Bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sh(n){return n.map(e=>{var{providerId:t}=e,r=Yo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(n,e){const t=await nh(n,{},async()=>{const r=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=rh(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",th.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ey(n,e){return Kt(n,"POST","/v2/accounts:revokeToken",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ll(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=ll(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Zm(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new Pn;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(U(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pn,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class St{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Yo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Oo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Km(this,e)}reload(){return Ym(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(Pt(this.auth));const e=await this.getIdToken();return await Pr(this,Wm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,l,h,d,g;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,D=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,x=(d=t.createdAt)!==null&&d!==void 0?d:void 0,C=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:P,emailVerified:M,isAnonymous:B,providerData:L,stsTokenManager:y}=t;U(P&&y,e,"internal-error");const p=Pn.fromJSON(this.name,y);U(typeof P=="string",e,"internal-error"),Ft(I,e.name),Ft(A,e.name),U(typeof M=="boolean",e,"internal-error"),U(typeof B=="boolean",e,"internal-error"),Ft(S,e.name),Ft(R,e.name),Ft(k,e.name),Ft(D,e.name),Ft(x,e.name),Ft(C,e.name);const m=new St({uid:P,auth:e,email:A,emailVerified:M,displayName:I,isAnonymous:B,photoURL:R,phoneNumber:S,tenantId:k,stsTokenManager:p,createdAt:x,lastLoginAt:C});return L&&Array.isArray(L)&&(m.providerData=L.map(v=>Object.assign({},v))),D&&(m._redirectEventId=D),m}static async _fromIdTokenResponse(e,t,r=!1){const i=new Pn;i.updateFromServerResponse(t);const o=new St({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bi(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];U(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?sh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Pn;l.updateFromIdToken(r);const h=new St({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Oo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map;function Rt(n){Dt(n instanceof Function,"Expected a class definition");let e=ul.get(n);return e?(Dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ul.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oh.type="NONE";const hl=oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n,e,t){return`firebase:${n}:${e}:${t}`}class Cn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ri(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ri("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Cn(Rt(hl),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Rt(hl);const a=Ri(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const g=await d._get(a);if(g){const I=St._fromJSON(e,g);d!==o&&(l=I),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Cn(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Cn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ah(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dh(e))return"Blackberry";if(fh(e))return"Webos";if(ch(e))return"Safari";if((e.includes("chrome/")||lh(e))&&!e.includes("edge/"))return"Chrome";if(hh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ah(n=xe()){return/firefox\//i.test(n)}function ch(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lh(n=xe()){return/crios\//i.test(n)}function uh(n=xe()){return/iemobile/i.test(n)}function hh(n=xe()){return/android/i.test(n)}function dh(n=xe()){return/blackberry/i.test(n)}function fh(n=xe()){return/webos/i.test(n)}function na(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ty(n=xe()){var e;return na(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ny(){return mg()&&document.documentMode===10}function ph(n=xe()){return na(n)||hh(n)||fh(n)||dh(n)||/windows phone/i.test(n)||uh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n,e=[]){let t;switch(n){case"Browser":t=dl(xe());break;case"Worker":t=`${dl(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(n,e={}){return Kt(n,"GET","/v2/passwordPolicy",Wt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=6;class oy{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:sy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fl(this),this.idTokenSubscription=new fl(this),this.beforeStateQueue=new ry(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ih(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$m()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rt(this.app))return Promise.reject(Pt(this));const t=e?Qe(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rt(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iy(this),t=new oy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _n("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ey(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[Rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Mm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Qt(n){return Qe(n)}class fl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tg(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cy(n){fs=n}function mh(n){return fs.loadJS(n)}function ly(){return fs.recaptchaEnterpriseScript}function uy(){return fs.gapiScript}function hy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const dy="recaptcha-enterprise",fy="NO_RECAPTCHA";class py{constructor(e){this.type=dy,this.auth=Qt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Gm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new qm(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{l(h)})})}function i(o,a,l){const h=window.grecaptcha;cl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(fy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(l=>{if(!t&&cl(window.grecaptcha))i(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=ly();h.length!==0&&(h+=l),mh(h).then(()=>{i(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function pl(n,e,t,r=!1){const i=new py(n);let o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Do(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await pl(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await pl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n,e){const t=vn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Sr(o,e??{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function my(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yy(n,e,t){const r=Qt(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),o=yh(e),{host:a,port:l}=_y(e),h=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vy()}function yh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _y(n){const e=yh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:gl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:gl(a)}}}function gl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,t){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function Iy(n,e){return Kt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ey(n,e){return $r(n,"POST","/v1/accounts:signInWithPassword",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e){return $r(n,"POST","/v1/accounts:signInWithEmailLink",Wt(n,e))}async function Ty(n,e){return $r(n,"POST","/v1/accounts:signInWithEmailLink",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ra{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Cr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Cr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,t,"signInWithPassword",Ey);case"emailLink":return wy(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,r,"signUpPassword",Iy);case"emailLink":return Ty(e,{idToken:t,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n,e){return $r(n,"POST","/v1/accounts:signInWithIdp",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="http://localhost";class hn extends ra{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Yo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new hn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kn(e,t)}buildRequest(){const e={requestUri:Ay,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sy(n){const e=dr(fr(n)).link,t=e?dr(fr(e)).deep_link_id:null,r=dr(fr(n)).deep_link_id;return(r?dr(fr(r)).link:null)||r||t||e||n}class ia{constructor(e){var t,r,i,o,a,l;const h=dr(fr(e)),d=(t=h.apiKey)!==null&&t!==void 0?t:null,g=(r=h.oobCode)!==null&&r!==void 0?r:null,I=by((i=h.mode)!==null&&i!==void 0?i:null);U(d&&g&&I,"argument-error"),this.apiKey=d,this.operation=I,this.code=g,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=h.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Sy(e);try{return new ia(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.providerId=Hn.PROVIDER_ID}static credential(e,t){return Cr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ia.parseLink(t);return U(r,"argument-error"),Cr._fromEmailAndCode(e,r.code,r.tenantId)}}Hn.PROVIDER_ID="password";Hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends sa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Br{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tt.credential(t,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Br{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Br{constructor(){super("twitter.com")}static credential(e,t){return hn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return $t.credential(t,r)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(n,e){return $r(n,"POST","/v1/accounts:signUp",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await St._fromIdTokenResponse(e,r,i),a=ml(r);return new dn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ml(r);return new dn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ml(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends ct{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ji.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ji(e,t,r,i)}}function _h(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(n,o,e,r):o})}async function Py(n,e,t=!1){const r=await Pr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(n,e,t=!1){const{auth:r}=n;if(rt(r.app))return Promise.reject(Pt(r));const i="reauthenticate";try{const o=await Pr(n,_h(r,i,e,n),t);U(o.idToken,r,"internal-error");const a=ta(o.idToken);U(a,r,"internal-error");const{sub:l}=a;return U(n.uid===l,r,"user-mismatch"),dn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(n,e,t=!1){if(rt(n.app))return Promise.reject(Pt(n));const r="signIn",i=await _h(n,r,e),o=await dn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function ky(n,e){return vh(Qt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(n){const e=Qt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Oy(n,e,t){if(rt(n.app))return Promise.reject(Pt(n));const r=Qt(n),a=await Do(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ry).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Ih(n),h}),l=await dn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Dy(n,e,t){return rt(n.app)?Promise.reject(Pt(n)):ky(Qe(n),Hn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ih(n),r})}function Ny(n,e,t,r){return Qe(n).onIdTokenChanged(e,t,r)}function Vy(n,e,t){return Qe(n).beforeAuthStateChanged(e,t)}const zi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zi,"1"),this.storage.removeItem(zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=1e3,My=10;class wh extends Eh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ph(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);ny()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,My):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wh.type="LOCAL";const Ly=wh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends Eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Th.type="SESSION";const Ah=Th;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ps(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await Fy(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ps.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=oa("",20);i.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const A=I;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(A.data.response);break;default:clearTimeout(g),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function $y(n){ht().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function By(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zy(){return bh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="firebaseLocalStorageDb",Hy=1,Hi="firebaseLocalStorage",Rh="fbase_key";class jr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gs(n,e){return n.transaction([Hi],e?"readwrite":"readonly").objectStore(Hi)}function qy(){const n=indexedDB.deleteDatabase(Sh);return new jr(n).toPromise()}function No(){const n=indexedDB.open(Sh,Hy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Hi,{keyPath:Rh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Hi)?e(r):(r.close(),await qy(),e(await No()))})})}async function yl(n,e,t){const r=gs(n,!0).put({[Rh]:e,value:t});return new jr(r).toPromise()}async function Gy(n,e){const t=gs(n,!1).get(e),r=await new jr(t).toPromise();return r===void 0?null:r.value}function _l(n,e){const t=gs(n,!0).delete(e);return new jr(t).toPromise()}const Wy=800,Ky=3;class Ph{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await No(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ky)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ps._getInstance(zy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await By(),!this.activeServiceWorker)return;this.sender=new Uy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await No();return await yl(e,zi,"1"),await _l(e,zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Gy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_l(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=gs(i,!1).getAll();return new jr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ph.type="LOCAL";const Qy=Ph;new Ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n,e){return e?Rt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends ra{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xy(n){return vh(n.auth,new aa(n),n.bypassAuthState)}function Yy(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Cy(t,new aa(n),n.bypassAuthState)}async function Jy(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Py(t,new aa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xy;case"linkViaPopup":case"linkViaRedirect":return Jy;case"reauthViaPopup":case"reauthViaRedirect":return Yy;default:Ze(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Ur(2e3,1e4);async function oo(n,e,t){if(rt(n.app))return Promise.reject(ot(n,"operation-not-supported-in-this-environment"));const r=Qt(n);Lm(n,e,sa);const i=Ch(r,t);return new nn(r,"signInViaPopup",e,i).executeNotNull()}class nn extends kh{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zy.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="pendingRedirect",Pi=new Map;class t_ extends kh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const r=await n_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n_(n,e){const t=s_(e),r=i_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function r_(n,e){Pi.set(n._key(),e)}function i_(n){return Rt(n._redirectPersistence)}function s_(n){return Ri(e_,n.config.apiKey,n.name)}async function o_(n,e,t=!1){if(rt(n.app))return Promise.reject(Pt(n));const r=Qt(n),i=Ch(r,e),a=await new t_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=10*60*1e3;class c_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Oh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a_&&this.cachedEventUids.clear(),this.cachedEventUids.has(vl(e))}saveEventToCache(e){this.cachedEventUids.add(vl(e)),this.lastProcessedEventTime=Date.now()}}function vl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Oh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(n,e={}){return Kt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d_=/^https?/;async function f_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await u_(n);for(const t of e)try{if(p_(t))return}catch{}Ze(n,"unauthorized-domain")}function p_(n){const e=ko(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!d_.test(t))return!1;if(h_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new Ur(3e4,6e4);function Il(){const n=ht().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function m_(n){return new Promise((e,t)=>{var r,i,o;function a(){Il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Il(),t(ot(n,"network-request-failed"))},timeout:g_.get()})}if(!((i=(r=ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=ht().gapi)===null||o===void 0)&&o.load)a();else{const l=hy("iframefcb");return ht()[l]=()=>{gapi.load?a():t(ot(n,"network-request-failed"))},mh(`${uy()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Ci=null,e})}let Ci=null;function y_(n){return Ci=Ci||m_(n),Ci}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new Ur(5e3,15e3),v_="__/auth/iframe",I_="emulator/auth/iframe",E_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T_(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ea(e,I_):`https://${n.config.authDomain}/${v_}`,r={apiKey:e.apiKey,appName:n.name,v:zn},i=w_.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Fr(r).slice(1)}`}async function A_(n){const e=await y_(n),t=ht().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:T_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ot(n,"network-request-failed"),l=ht().setTimeout(()=>{o(a)},__.get());function h(){ht().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S_=500,R_=600,P_="_blank",C_="http://localhost";class El{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k_(n,e,t,r=S_,i=R_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h=Object.assign(Object.assign({},b_),{width:r.toString(),height:i.toString(),top:o,left:a}),d=xe().toLowerCase();t&&(l=lh(d)?P_:t),ah(d)&&(e=e||C_,h.scrollbars="yes");const g=Object.entries(h).reduce((A,[S,R])=>`${A}${S}=${R},`,"");if(ty(d)&&l!=="_self")return O_(e||"",l),new El(null);const I=window.open(e||"",l,g);U(I,n,"popup-blocked");try{I.focus()}catch{}return new El(I)}function O_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="__/auth/handler",N_="emulator/auth/handler",V_=encodeURIComponent("fac");async function wl(n,e,t,r,i,o){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zn,eventId:i};if(e instanceof sa){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",wg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,I]of Object.entries(o||{}))a[g]=I}if(e instanceof Br){const g=e.getScopes().filter(I=>I!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const h=await n._getAppCheckToken(),d=h?`#${V_}=${encodeURIComponent(h)}`:"";return`${x_(n)}?${Fr(l).slice(1)}${d}`}function x_({config:n}){return n.emulator?ea(n,N_):`https://${n.authDomain}/${D_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="webStorageSupport";class M_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ah,this._completeRedirectFn=o_,this._overrideRedirectResult=r_}async _openPopup(e,t,r,i){var o;Dt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await wl(e,t,r,ko(),i);return k_(e,a,oa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await wl(e,t,r,ko(),i);return $y(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Dt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await A_(e),r=new c_(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ao,{type:ao},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ao];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=f_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ph()||ch()||na()}}const L_=M_;var Tl="@firebase/auth",Al="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $_(n){dt(new at("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gh(n)},d=new ay(r,i,o,h);return my(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dt(new at("auth-internal",e=>{const t=Qt(e.getProvider("auth").getImmediate());return(r=>new F_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Tl,Al,U_(n)),Ye(Tl,Al,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=5*60,j_=zu("authIdTokenMaxAge")||B_;let bl=null;const z_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>j_)return;const i=t==null?void 0:t.token;bl!==i&&(bl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function H_(n=Xo()){const e=vn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gy(n,{popupRedirectResolver:L_,persistence:[Qy,Ly,Ah]}),r=zu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=z_(o.toString());Vy(t,a,()=>a(t.currentUser)),Ny(t,l=>a(l))}}const i=Bu("auth");return i&&yy(t,`http://${i}`),t}function q_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=ot("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",q_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$_("Browser");var G_="firebase",W_="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(G_,W_,"app");const Dh="@firebase/installations",ca="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=1e4,Vh=`w:${ca}`,xh="FIS_v2",K_="https://firebaseinstallations.googleapis.com/v1",Q_=60*60*1e3,X_="installations",Y_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fn=new _n(X_,Y_,J_);function Mh(n){return n instanceof ct&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh({projectId:n}){return`${K_}/projects/${n}/installations`}function Fh(n){return{token:n.token,requestStatus:2,expiresIn:ev(n.expiresIn),creationTime:Date.now()}}async function Uh(n,e){const r=(await e.json()).error;return fn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $h({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Z_(n,{refreshToken:e}){const t=$h(n);return t.append("Authorization",tv(e)),t}async function Bh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ev(n){return Number(n.replace("s","000"))}function tv(n){return`${xh} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Lh(n),i=$h(n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:t,authVersion:xh,appId:n.appId,sdkVersion:Vh},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await Bh(()=>fetch(r,l));if(h.ok){const d=await h.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Fh(d.authToken)}}else throw await Uh("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/^[cdef][\w-]{21}$/,Vo="";function sv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=ov(n);return iv.test(t)?t:Vo}catch{return Vo}}function ov(n){return rv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new Map;function Hh(n,e){const t=ms(n);qh(t,e),av(t,e)}function qh(n,e){const t=zh.get(n);if(t)for(const r of t)r(e)}function av(n,e){const t=cv();t&&t.postMessage({key:n,fid:e}),lv()}let rn=null;function cv(){return!rn&&"BroadcastChannel"in self&&(rn=new BroadcastChannel("[Firebase] FID Change"),rn.onmessage=n=>{qh(n.data.key,n.data.fid)}),rn}function lv(){zh.size===0&&rn&&(rn.close(),rn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebase-installations-database",hv=1,pn="firebase-installations-store";let co=null;function la(){return co||(co=Qu(uv,hv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pn)}}})),co}async function qi(n,e){const t=ms(n),i=(await la()).transaction(pn,"readwrite"),o=i.objectStore(pn),a=await o.get(t);return await o.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Hh(n,e.fid),e}async function Gh(n){const e=ms(n),r=(await la()).transaction(pn,"readwrite");await r.objectStore(pn).delete(e),await r.done}async function ys(n,e){const t=ms(n),i=(await la()).transaction(pn,"readwrite"),o=i.objectStore(pn),a=await o.get(t),l=e(a);return l===void 0?await o.delete(t):await o.put(l,t),await i.done,l&&(!a||a.fid!==l.fid)&&Hh(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(n){let e;const t=await ys(n.appConfig,r=>{const i=dv(r),o=fv(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===Vo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function dv(n){const e=n||{fid:sv(),registrationStatus:0};return Wh(e)}function fv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pv(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gv(n)}:{installationEntry:e}}async function pv(n,e){try{const t=await nv(n,e);return qi(n.appConfig,t)}catch(t){throw Mh(t)&&t.customData.serverCode===409?await Gh(n.appConfig):await qi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function gv(n){let e=await Sl(n.appConfig);for(;e.registrationStatus===1;)await jh(100),e=await Sl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ua(n);return r||t}return e}function Sl(n){return ys(n,e=>{if(!e)throw fn.create("installation-not-found");return Wh(e)})}function Wh(n){return mv(n)?{fid:n.fid,registrationStatus:0}:n}function mv(n){return n.registrationStatus===1&&n.registrationTime+Nh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv({appConfig:n,heartbeatServiceProvider:e},t){const r=_v(n,t),i=Z_(n,t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Vh,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await Bh(()=>fetch(r,l));if(h.ok){const d=await h.json();return Fh(d)}else throw await Uh("Generate Auth Token",h)}function _v(n,{fid:e}){return`${Lh(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(n,e=!1){let t;const r=await ys(n.appConfig,o=>{if(!Kh(o))throw fn.create("not-registered");const a=o.authToken;if(!e&&Ev(a))return o;if(a.requestStatus===1)return t=vv(n,e),o;{if(!navigator.onLine)throw fn.create("app-offline");const l=Tv(o);return t=Iv(n,l),l}});return t?await t:r.authToken}async function vv(n,e){let t=await Rl(n.appConfig);for(;t.authToken.requestStatus===1;)await jh(100),t=await Rl(n.appConfig);const r=t.authToken;return r.requestStatus===0?ha(n,e):r}function Rl(n){return ys(n,e=>{if(!Kh(e))throw fn.create("not-registered");const t=e.authToken;return Av(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Iv(n,e){try{const t=await yv(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await qi(n.appConfig,r),t}catch(t){if(Mh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Gh(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qi(n.appConfig,r)}throw t}}function Kh(n){return n!==void 0&&n.registrationStatus===2}function Ev(n){return n.requestStatus===2&&!wv(n)}function wv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Q_}function Tv(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Av(n){return n.requestStatus===1&&n.requestTime+Nh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(n){const e=n,{installationEntry:t,registrationPromise:r}=await ua(e);return r?r.catch(console.error):ha(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(n,e=!1){const t=n;return await Rv(t),(await ha(t,e)).token}async function Rv(n){const{registrationPromise:e}=await ua(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(n){if(!n||!n.options)throw lo("App Configuration");if(!n.name)throw lo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw lo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function lo(n){return fn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="installations",Cv="installations-internal",kv=n=>{const e=n.getProvider("app").getImmediate(),t=Pv(e),r=vn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ov=n=>{const e=n.getProvider("app").getImmediate(),t=vn(e,Qh).getImmediate();return{getId:()=>bv(t),getToken:i=>Sv(t,i)}};function Dv(){dt(new at(Qh,kv,"PUBLIC")),dt(new at(Cv,Ov,"PRIVATE"))}Dv();Ye(Dh,ca);Ye(Dh,ca,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="analytics",Nv="firebase_id",Vv="origin",xv=60*1e3,Mv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",da="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new ds("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ke=new _n("analytics","Analytics",Lv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){if(!n.startsWith(da)){const e=Ke.create("invalid-gtag-resource",{gtagURL:n});return He.warn(e.message),""}return n}function Xh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Uv(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function $v(n,e){const t=Uv("firebase-js-sdk-policy",{createScriptURL:Fv}),r=document.createElement("script"),i=`${da}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Bv(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function jv(n,e,t,r,i,o){const a=r[i];try{if(a)await e[a];else{const h=(await Xh(t)).find(d=>d.measurementId===i);h&&await e[h.appId]}}catch(l){He.error(l)}n("config",i,o)}async function zv(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await Xh(t);for(const h of a){const d=l.find(I=>I.measurementId===h),g=d&&e[d.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){He.error(o)}}function Hv(n,e,t,r){async function i(o,...a){try{if(o==="event"){const[l,h]=a;await zv(n,e,t,l,h)}else if(o==="config"){const[l,h]=a;await jv(n,e,t,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,d]=a;n("get",l,h,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){He.error(l)}}return i}function qv(n,e,t,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Hv(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function Gv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(da)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=30,Kv=1e3;class Qv{constructor(e={},t=Kv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Yh=new Qv;function Xv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Yv(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:Xv(r)},o=Mv.replace("{app-id}",t),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((e=h.error)===null||e===void 0)&&e.message&&(l=h.error.message)}catch{}throw Ke.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Jv(n,e=Yh,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Ke.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ke.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new tI;return setTimeout(async()=>{l.abort()},t!==void 0?t:xv),Jh({appId:r,apiKey:i,measurementId:o},a,l,e)}async function Jh(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Yh){var o;const{appId:a,measurementId:l}=n;try{await Zv(r,e)}catch(h){if(l)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await Yv(n);return i.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!eI(d)){if(i.deleteThrottleMetadata(a),l)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:l};throw h}const g=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Jc(t,i.intervalMillis,Wv):Jc(t,i.intervalMillis),I={throttleEndTimeMillis:Date.now()+g,backoffCount:t+1};return i.setThrottleMetadata(a,I),He.debug(`Calling attemptFetch again in ${g} millis`),Jh(n,I,r,i)}}function Zv(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(Ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eI(n){if(!(n instanceof ct)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class tI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nI(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,a=Object.assign(Object.assign({},r),{send_to:o});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(){if(qu())try{await Gu()}catch(n){return He.warn(Ke.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return He.warn(Ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iI(n,e,t,r,i,o,a){var l;const h=Jv(n);h.then(S=>{t[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>He.error(S)),e.push(h);const d=rI().then(S=>{if(S)return r.getId()}),[g,I]=await Promise.all([h,d]);Gv(o)||$v(o,g.measurementId),i("js",new Date);const A=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return A[Vv]="firebase",A.update=!0,I!=null&&(A[Nv]=I),i("config",g.measurementId,A),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.app=e}_delete(){return delete _r[this.app.options.appId],Promise.resolve()}}let _r={},Pl=[];const Cl={};let uo="dataLayer",oI="gtag",kl,Zh,Ol=!1;function aI(){const n=[];if(Hu()&&n.push("This is a browser extension environment."),_g()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Ke.create("invalid-analytics-context",{errorInfo:e});He.warn(t.message)}}function cI(n,e,t){aI();const r=n.options.appId;if(!r)throw Ke.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ke.create("no-api-key");if(_r[r]!=null)throw Ke.create("already-exists",{id:r});if(!Ol){Bv(uo);const{wrappedGtag:o,gtagCore:a}=qv(_r,Pl,Cl,uo,oI);Zh=o,kl=a,Ol=!0}return _r[r]=iI(n,Pl,Cl,e,kl,uo,t),new sI(n)}function lI(n=Xo()){n=Qe(n);const e=vn(n,Gi);return e.isInitialized()?e.getImmediate():uI(n)}function uI(n,e={}){const t=vn(n,Gi);if(t.isInitialized()){const i=t.getImmediate();if(Sr(e,t.getOptions()))return i;throw Ke.create("already-initialized")}return t.initialize({options:e})}function hI(n,e,t,r){n=Qe(n),nI(Zh,_r[n.app.options.appId],e,t,r).catch(i=>He.error(i))}const Dl="@firebase/analytics",Nl="0.10.7";function dI(){dt(new at(Gi,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return cI(r,i,t)},"PUBLIC")),dt(new at("analytics-internal",n,"PRIVATE")),Ye(Dl,Nl),Ye(Dl,Nl,"esm2017");function n(e){try{const t=e.getProvider(Gi).getImmediate();return{logEvent:(r,i,o)=>hI(t,r,i,o)}}catch(t){throw Ke.create("interop-component-reg-failed",{reason:t})}}}dI();var Vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ed;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,p){function m(){}m.prototype=p.prototype,y.D=p.prototype,y.prototype=new m,y.prototype.constructor=y,y.C=function(v,E,T){for(var _=Array(arguments.length-2),le=2;le<arguments.length;le++)_[le-2]=arguments[le];return p.prototype[E].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,m){m||(m=0);var v=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)v[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)v[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=y.g[0],m=y.g[1],E=y.g[2];var T=y.g[3],_=p+(T^m&(E^T))+v[0]+3614090360&4294967295;p=m+(_<<7&4294967295|_>>>25),_=T+(E^p&(m^E))+v[1]+3905402710&4294967295,T=p+(_<<12&4294967295|_>>>20),_=E+(m^T&(p^m))+v[2]+606105819&4294967295,E=T+(_<<17&4294967295|_>>>15),_=m+(p^E&(T^p))+v[3]+3250441966&4294967295,m=E+(_<<22&4294967295|_>>>10),_=p+(T^m&(E^T))+v[4]+4118548399&4294967295,p=m+(_<<7&4294967295|_>>>25),_=T+(E^p&(m^E))+v[5]+1200080426&4294967295,T=p+(_<<12&4294967295|_>>>20),_=E+(m^T&(p^m))+v[6]+2821735955&4294967295,E=T+(_<<17&4294967295|_>>>15),_=m+(p^E&(T^p))+v[7]+4249261313&4294967295,m=E+(_<<22&4294967295|_>>>10),_=p+(T^m&(E^T))+v[8]+1770035416&4294967295,p=m+(_<<7&4294967295|_>>>25),_=T+(E^p&(m^E))+v[9]+2336552879&4294967295,T=p+(_<<12&4294967295|_>>>20),_=E+(m^T&(p^m))+v[10]+4294925233&4294967295,E=T+(_<<17&4294967295|_>>>15),_=m+(p^E&(T^p))+v[11]+2304563134&4294967295,m=E+(_<<22&4294967295|_>>>10),_=p+(T^m&(E^T))+v[12]+1804603682&4294967295,p=m+(_<<7&4294967295|_>>>25),_=T+(E^p&(m^E))+v[13]+4254626195&4294967295,T=p+(_<<12&4294967295|_>>>20),_=E+(m^T&(p^m))+v[14]+2792965006&4294967295,E=T+(_<<17&4294967295|_>>>15),_=m+(p^E&(T^p))+v[15]+1236535329&4294967295,m=E+(_<<22&4294967295|_>>>10),_=p+(E^T&(m^E))+v[1]+4129170786&4294967295,p=m+(_<<5&4294967295|_>>>27),_=T+(m^E&(p^m))+v[6]+3225465664&4294967295,T=p+(_<<9&4294967295|_>>>23),_=E+(p^m&(T^p))+v[11]+643717713&4294967295,E=T+(_<<14&4294967295|_>>>18),_=m+(T^p&(E^T))+v[0]+3921069994&4294967295,m=E+(_<<20&4294967295|_>>>12),_=p+(E^T&(m^E))+v[5]+3593408605&4294967295,p=m+(_<<5&4294967295|_>>>27),_=T+(m^E&(p^m))+v[10]+38016083&4294967295,T=p+(_<<9&4294967295|_>>>23),_=E+(p^m&(T^p))+v[15]+3634488961&4294967295,E=T+(_<<14&4294967295|_>>>18),_=m+(T^p&(E^T))+v[4]+3889429448&4294967295,m=E+(_<<20&4294967295|_>>>12),_=p+(E^T&(m^E))+v[9]+568446438&4294967295,p=m+(_<<5&4294967295|_>>>27),_=T+(m^E&(p^m))+v[14]+3275163606&4294967295,T=p+(_<<9&4294967295|_>>>23),_=E+(p^m&(T^p))+v[3]+4107603335&4294967295,E=T+(_<<14&4294967295|_>>>18),_=m+(T^p&(E^T))+v[8]+1163531501&4294967295,m=E+(_<<20&4294967295|_>>>12),_=p+(E^T&(m^E))+v[13]+2850285829&4294967295,p=m+(_<<5&4294967295|_>>>27),_=T+(m^E&(p^m))+v[2]+4243563512&4294967295,T=p+(_<<9&4294967295|_>>>23),_=E+(p^m&(T^p))+v[7]+1735328473&4294967295,E=T+(_<<14&4294967295|_>>>18),_=m+(T^p&(E^T))+v[12]+2368359562&4294967295,m=E+(_<<20&4294967295|_>>>12),_=p+(m^E^T)+v[5]+4294588738&4294967295,p=m+(_<<4&4294967295|_>>>28),_=T+(p^m^E)+v[8]+2272392833&4294967295,T=p+(_<<11&4294967295|_>>>21),_=E+(T^p^m)+v[11]+1839030562&4294967295,E=T+(_<<16&4294967295|_>>>16),_=m+(E^T^p)+v[14]+4259657740&4294967295,m=E+(_<<23&4294967295|_>>>9),_=p+(m^E^T)+v[1]+2763975236&4294967295,p=m+(_<<4&4294967295|_>>>28),_=T+(p^m^E)+v[4]+1272893353&4294967295,T=p+(_<<11&4294967295|_>>>21),_=E+(T^p^m)+v[7]+4139469664&4294967295,E=T+(_<<16&4294967295|_>>>16),_=m+(E^T^p)+v[10]+3200236656&4294967295,m=E+(_<<23&4294967295|_>>>9),_=p+(m^E^T)+v[13]+681279174&4294967295,p=m+(_<<4&4294967295|_>>>28),_=T+(p^m^E)+v[0]+3936430074&4294967295,T=p+(_<<11&4294967295|_>>>21),_=E+(T^p^m)+v[3]+3572445317&4294967295,E=T+(_<<16&4294967295|_>>>16),_=m+(E^T^p)+v[6]+76029189&4294967295,m=E+(_<<23&4294967295|_>>>9),_=p+(m^E^T)+v[9]+3654602809&4294967295,p=m+(_<<4&4294967295|_>>>28),_=T+(p^m^E)+v[12]+3873151461&4294967295,T=p+(_<<11&4294967295|_>>>21),_=E+(T^p^m)+v[15]+530742520&4294967295,E=T+(_<<16&4294967295|_>>>16),_=m+(E^T^p)+v[2]+3299628645&4294967295,m=E+(_<<23&4294967295|_>>>9),_=p+(E^(m|~T))+v[0]+4096336452&4294967295,p=m+(_<<6&4294967295|_>>>26),_=T+(m^(p|~E))+v[7]+1126891415&4294967295,T=p+(_<<10&4294967295|_>>>22),_=E+(p^(T|~m))+v[14]+2878612391&4294967295,E=T+(_<<15&4294967295|_>>>17),_=m+(T^(E|~p))+v[5]+4237533241&4294967295,m=E+(_<<21&4294967295|_>>>11),_=p+(E^(m|~T))+v[12]+1700485571&4294967295,p=m+(_<<6&4294967295|_>>>26),_=T+(m^(p|~E))+v[3]+2399980690&4294967295,T=p+(_<<10&4294967295|_>>>22),_=E+(p^(T|~m))+v[10]+4293915773&4294967295,E=T+(_<<15&4294967295|_>>>17),_=m+(T^(E|~p))+v[1]+2240044497&4294967295,m=E+(_<<21&4294967295|_>>>11),_=p+(E^(m|~T))+v[8]+1873313359&4294967295,p=m+(_<<6&4294967295|_>>>26),_=T+(m^(p|~E))+v[15]+4264355552&4294967295,T=p+(_<<10&4294967295|_>>>22),_=E+(p^(T|~m))+v[6]+2734768916&4294967295,E=T+(_<<15&4294967295|_>>>17),_=m+(T^(E|~p))+v[13]+1309151649&4294967295,m=E+(_<<21&4294967295|_>>>11),_=p+(E^(m|~T))+v[4]+4149444226&4294967295,p=m+(_<<6&4294967295|_>>>26),_=T+(m^(p|~E))+v[11]+3174756917&4294967295,T=p+(_<<10&4294967295|_>>>22),_=E+(p^(T|~m))+v[2]+718787259&4294967295,E=T+(_<<15&4294967295|_>>>17),_=m+(T^(E|~p))+v[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,y.g[2]=y.g[2]+E&4294967295,y.g[3]=y.g[3]+T&4294967295}r.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var m=p-this.blockSize,v=this.B,E=this.h,T=0;T<p;){if(E==0)for(;T<=m;)i(this,y,T),T+=this.blockSize;if(typeof y=="string"){for(;T<p;)if(v[E++]=y.charCodeAt(T++),E==this.blockSize){i(this,v),E=0;break}}else for(;T<p;)if(v[E++]=y[T++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var m=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=m&255,m/=256;for(this.u(y),y=Array(16),p=m=0;4>p;++p)for(var v=0;32>v;v+=8)y[m++]=this.g[p]>>>v&255;return y};function o(y,p){var m=l;return Object.prototype.hasOwnProperty.call(m,y)?m[y]:m[y]=p(y)}function a(y,p){this.h=p;for(var m=[],v=!0,E=y.length-1;0<=E;E--){var T=y[E]|0;v&&T==p||(m[E]=T,v=!1)}this.g=m}var l={};function h(y){return-128<=y&&128>y?o(y,function(p){return new a([p|0],0>p?-1:0)}):new a([y|0],0>y?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return I;if(0>y)return D(d(-y));for(var p=[],m=1,v=0;y>=m;v++)p[v]=y/m|0,m*=4294967296;return new a(p,0)}function g(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return D(g(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(p,8)),v=I,E=0;E<y.length;E+=8){var T=Math.min(8,y.length-E),_=parseInt(y.substring(E,E+T),p);8>T?(T=d(Math.pow(p,T)),v=v.j(T).add(d(_))):(v=v.j(m),v=v.add(d(_)))}return v}var I=h(0),A=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-D(this).m();for(var y=0,p=1,m=0;m<this.g.length;m++){var v=this.i(m);y+=(0<=v?v:4294967296+v)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R(this))return"0";if(k(this))return"-"+D(this).toString(y);for(var p=d(Math.pow(y,6)),m=this,v="";;){var E=M(m,p).g;m=x(m,E.j(p));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(y);if(m=E,R(m))return T+v;for(;6>T.length;)T="0"+T;v=T+v}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function R(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function k(y){return y.h==-1}n.l=function(y){return y=x(this,y),k(y)?-1:R(y)?0:1};function D(y){for(var p=y.g.length,m=[],v=0;v<p;v++)m[v]=~y.g[v];return new a(m,~y.h).add(A)}n.abs=function(){return k(this)?D(this):this},n.add=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],v=0,E=0;E<=p;E++){var T=v+(this.i(E)&65535)+(y.i(E)&65535),_=(T>>>16)+(this.i(E)>>>16)+(y.i(E)>>>16);v=_>>>16,T&=65535,_&=65535,m[E]=_<<16|T}return new a(m,m[m.length-1]&-2147483648?-1:0)};function x(y,p){return y.add(D(p))}n.j=function(y){if(R(this)||R(y))return I;if(k(this))return k(y)?D(this).j(D(y)):D(D(this).j(y));if(k(y))return D(this.j(D(y)));if(0>this.l(S)&&0>y.l(S))return d(this.m()*y.m());for(var p=this.g.length+y.g.length,m=[],v=0;v<2*p;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<y.g.length;E++){var T=this.i(v)>>>16,_=this.i(v)&65535,le=y.i(E)>>>16,Be=y.i(E)&65535;m[2*v+2*E]+=_*Be,C(m,2*v+2*E),m[2*v+2*E+1]+=T*Be,C(m,2*v+2*E+1),m[2*v+2*E+1]+=_*le,C(m,2*v+2*E+1),m[2*v+2*E+2]+=T*le,C(m,2*v+2*E+2)}for(v=0;v<p;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=p;v<2*p;v++)m[v]=0;return new a(m,0)};function C(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function P(y,p){this.g=y,this.h=p}function M(y,p){if(R(p))throw Error("division by zero");if(R(y))return new P(I,I);if(k(y))return p=M(D(y),p),new P(D(p.g),D(p.h));if(k(p))return p=M(y,D(p)),new P(D(p.g),p.h);if(30<y.g.length){if(k(y)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var m=A,v=p;0>=v.l(y);)m=B(m),v=B(v);var E=L(m,1),T=L(v,1);for(v=L(v,2),m=L(m,2);!R(v);){var _=T.add(v);0>=_.l(y)&&(E=E.add(m),T=_),v=L(v,1),m=L(m,1)}return p=x(y,E.j(p)),new P(E,p)}for(E=I;0<=y.l(p);){for(m=Math.max(1,Math.floor(y.m()/p.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),T=d(m),_=T.j(p);k(_)||0<_.l(y);)m-=v,T=d(m),_=T.j(p);R(T)&&(T=A),E=E.add(T),y=x(y,_)}return new P(E,y)}n.A=function(y){return M(this,y).h},n.and=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)&y.i(v);return new a(m,this.h&y.h)},n.or=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)|y.i(v);return new a(m,this.h|y.h)},n.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)^y.i(v);return new a(m,this.h^y.h)};function B(y){for(var p=y.g.length+1,m=[],v=0;v<p;v++)m[v]=y.i(v)<<1|y.i(v-1)>>>31;return new a(m,y.h)}function L(y,p){var m=p>>5;p%=32;for(var v=y.g.length-m,E=[],T=0;T<v;T++)E[T]=0<p?y.i(T+m)>>>p|y.i(T+m+1)<<32-p:y.i(T+m);return new a(E,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,ed=a}).apply(typeof Vl<"u"?Vl:typeof self<"u"?self:typeof window<"u"?window:{});var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var td,nd,pr,rd,ki,xo,id,sd,od;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,u){return s==Array.prototype||s==Object.prototype||(s[c]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof gi=="object"&&gi];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var w=s[f];if(!(w in u))break e;u=u[w]}s=s[s.length-1],f=u[s],c=c(f),c!=f&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var u=0,f=!1,w={next:function(){if(!f&&u<s.length){var b=u++;return{value:c(b,s[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function g(s,c,u){return s.call.apply(s.bind,arguments)}function I(s,c,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),s.apply(c,w)}}return function(){return s.apply(c,arguments)}}function A(s,c,u){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:I,A.apply(null,arguments)}function S(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function R(s,c){function u(){}u.prototype=c.prototype,s.aa=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,w,b){for(var V=Array(arguments.length-2),te=2;te<arguments.length;te++)V[te-2]=arguments[te];return c.prototype[w].apply(f,V)}}function k(s){const c=s.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=s[f];return u}return[]}function D(s,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const w=s.length||0,b=f.length||0;s.length=w+b;for(let V=0;V<b;V++)s[w+V]=f[V]}else s.push(f)}}class x{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(s){return/^[\s\xa0]*$/.test(s)}function P(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function M(s){return M[" "](s),s}M[" "]=function(){};var B=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function L(s,c,u){for(const f in s)c.call(u,s[f],f,s)}function y(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function p(s){const c={};for(const u in s)c[u]=s[u];return c}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,c){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)s[u]=f[u];for(let b=0;b<m.length;b++)u=m[b],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function E(s){var c=1;s=s.split(":");const u=[];for(;0<c&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function T(s){l.setTimeout(()=>{throw s},0)}function _(){var s=ue;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class le{constructor(){this.h=this.g=null}add(c,u){const f=Be.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Be=new x(()=>new Nt,s=>s.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,Ee=!1,ue=new le,je=()=>{const s=l.Promise.resolve(void 0);ge=()=>{s.then(Me)}};var Me=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(u){T(u)}var c=Be;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Ee=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var we=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return s}();function ce(s,c){if(K.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(B){e:{try{M(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Le[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ce.aa.h.call(this)}}R(ce,K);var Le={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),gt=0;function mt(s,c,u,f,w){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=w,this.key=++gt,this.da=this.fa=!1}function Vt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function yt(s){this.src=s,this.g={},this.h=0}yt.prototype.add=function(s,c,u,f,w){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var V=Ss(s,c,f,w);return-1<V?(c=s[V],u||(c.fa=!1)):(c=new mt(c,this.src,b,!!f,w),c.fa=u,s.push(c)),c};function Xe(s,c){var u=c.type;if(u in s.g){var f=s.g[u],w=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=w)&&Array.prototype.splice.call(f,w,1),b&&(Vt(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Ss(s,c,u,f){for(var w=0;w<s.length;++w){var b=s[w];if(!b.da&&b.listener==c&&b.capture==!!u&&b.ha==f)return w}return-1}var Rs="closure_lm_"+(1e6*Math.random()|0),Ps={};function Oa(s,c,u,f,w){if(f&&f.once)return Na(s,c,u,f,w);if(Array.isArray(c)){for(var b=0;b<c.length;b++)Oa(s,c[b],u,f,w);return null}return u=Ds(u),s&&s[Re]?s.K(c,u,d(f)?!!f.capture:!!f,w):Da(s,c,u,!1,f,w)}function Da(s,c,u,f,w,b){if(!c)throw Error("Invalid event type");var V=d(w)?!!w.capture:!!w,te=ks(s);if(te||(s[Rs]=te=new yt(s)),u=te.add(c,u,f,V,b),u.proxy)return u;if(f=nf(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)we||(w=V),w===void 0&&(w=!1),s.addEventListener(c.toString(),f,w);else if(s.attachEvent)s.attachEvent(xa(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function nf(){function s(u){return c.call(s.src,s.listener,u)}const c=rf;return s}function Na(s,c,u,f,w){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Na(s,c[b],u,f,w);return null}return u=Ds(u),s&&s[Re]?s.L(c,u,d(f)?!!f.capture:!!f,w):Da(s,c,u,!0,f,w)}function Va(s,c,u,f,w){if(Array.isArray(c))for(var b=0;b<c.length;b++)Va(s,c[b],u,f,w);else f=d(f)?!!f.capture:!!f,u=Ds(u),s&&s[Re]?(s=s.i,c=String(c).toString(),c in s.g&&(b=s.g[c],u=Ss(b,u,f,w),-1<u&&(Vt(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete s.g[c],s.h--)))):s&&(s=ks(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Ss(c,u,f,w)),(u=-1<s?c[s]:null)&&Cs(u))}function Cs(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Re])Xe(c.i,s);else{var u=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(u,f,s.capture):c.detachEvent?c.detachEvent(xa(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=ks(c))?(Xe(u,s),u.h==0&&(u.src=null,c[Rs]=null)):Vt(s)}}}function xa(s){return s in Ps?Ps[s]:Ps[s]="on"+s}function rf(s,c){if(s.da)s=!0;else{c=new ce(c,this);var u=s.listener,f=s.ha||s.src;s.fa&&Cs(s),s=u.call(f,c)}return s}function ks(s){return s=s[Rs],s instanceof yt?s:null}var Os="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ds(s){return typeof s=="function"?s:(s[Os]||(s[Os]=function(c){return s.handleEvent(c)}),s[Os])}function Pe(){ee.call(this),this.i=new yt(this),this.M=this,this.F=null}R(Pe,ee),Pe.prototype[Re]=!0,Pe.prototype.removeEventListener=function(s,c,u,f){Va(this,s,c,u,f)};function Fe(s,c){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new K(c,s);else if(c instanceof K)c.target=c.target||s;else{var w=c;c=new K(f,s),v(c,w)}if(w=!0,u)for(var b=u.length-1;0<=b;b--){var V=c.g=u[b];w=Wr(V,f,!0,c)&&w}if(V=c.g=s,w=Wr(V,f,!0,c)&&w,w=Wr(V,f,!1,c)&&w,u)for(b=0;b<u.length;b++)V=c.g=u[b],w=Wr(V,f,!1,c)&&w}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var u=s.g[c],f=0;f<u.length;f++)Vt(u[f]);delete s.g[c],s.h--}}this.F=null},Pe.prototype.K=function(s,c,u,f){return this.i.add(String(s),c,!1,u,f)},Pe.prototype.L=function(s,c,u,f){return this.i.add(String(s),c,!0,u,f)};function Wr(s,c,u,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,b=0;b<c.length;++b){var V=c[b];if(V&&!V.da&&V.capture==u){var te=V.listener,Te=V.ha||V.src;V.fa&&Xe(s.i,V),w=te.call(Te,f)!==!1&&w}}return w&&!f.defaultPrevented}function Ma(s,c,u){if(typeof s=="function")u&&(s=A(s,u));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function La(s){s.g=Ma(()=>{s.g=null,s.i&&(s.i=!1,La(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class sf extends ee{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:La(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(s){ee.call(this),this.h=s,this.g={}}R(Wn,ee);var Fa=[];function Ua(s){L(s.g,function(c,u){this.g.hasOwnProperty(u)&&Cs(c)},s),s.g={}}Wn.prototype.N=function(){Wn.aa.N.call(this),Ua(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ns=l.JSON.stringify,of=l.JSON.parse,af=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Vs(){}Vs.prototype.h=null;function $a(s){return s.h||(s.h=s.i())}function Ba(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xs(){K.call(this,"d")}R(xs,K);function Ms(){K.call(this,"c")}R(Ms,K);var Xt={},ja=null;function Kr(){return ja=ja||new Pe}Xt.La="serverreachability";function za(s){K.call(this,Xt.La,s)}R(za,K);function Qn(s){const c=Kr();Fe(c,new za(c))}Xt.STAT_EVENT="statevent";function Ha(s,c){K.call(this,Xt.STAT_EVENT,s),this.stat=c}R(Ha,K);function Ue(s){const c=Kr();Fe(c,new Ha(c,s))}Xt.Ma="timingevent";function qa(s,c){K.call(this,Xt.Ma,s),this.size=c}R(qa,K);function Xn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function Yn(){this.g=!0}Yn.prototype.xa=function(){this.g=!1};function cf(s,c,u,f,w,b){s.info(function(){if(s.g)if(b)for(var V="",te=b.split("&"),Te=0;Te<te.length;Te++){var Q=te[Te].split("=");if(1<Q.length){var Ce=Q[0];Q=Q[1];var ke=Ce.split("_");V=2<=ke.length&&ke[1]=="type"?V+(Ce+"="+Q+"&"):V+(Ce+"=redacted&")}}else V=null;else V=b;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+u+`
`+V})}function lf(s,c,u,f,w,b,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+u+`
`+b+" "+V})}function En(s,c,u,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+hf(s,u)+(f?" "+f:"")})}function uf(s,c){s.info(function(){return"TIMEOUT: "+c})}Yn.prototype.info=function(){};function hf(s,c){if(!s.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(var V=1;V<w.length;V++)w[V]=""}}}}return Ns(u)}catch{return c}}var Qr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ga={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ls;function Xr(){}R(Xr,Vs),Xr.prototype.g=function(){return new XMLHttpRequest},Xr.prototype.i=function(){return{}},Ls=new Xr;function xt(s,c,u,f){this.j=s,this.i=c,this.l=u,this.R=f||1,this.U=new Wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wa}function Wa(){this.i=null,this.g="",this.h=!1}var Ka={},Fs={};function Us(s,c,u){s.L=1,s.v=ei(_t(c)),s.m=u,s.P=!0,Qa(s,null)}function Qa(s,c){s.F=Date.now(),Yr(s),s.A=_t(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),lc(u.i,"t",f),s.C=0,u=s.j.J,s.h=new Wa,s.g=Rc(s.j,u?c:null,!s.m),0<s.O&&(s.M=new sf(A(s.Y,s,s.g),s.O)),c=s.U,u=s.g,f=s.ca;var w="readystatechange";Array.isArray(w)||(w&&(Fa[0]=w.toString()),w=Fa);for(var b=0;b<w.length;b++){var V=Oa(u,w[b],f||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),Qn(),cf(s.i,s.u,s.A,s.l,s.R,s.m)}xt.prototype.ca=function(s){s=s.target;const c=this.M;c&&vt(s)==3?c.j():this.Y(s)},xt.prototype.Y=function(s){try{if(s==this.g)e:{const ke=vt(this.g);var c=this.g.Ba();const An=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||mc(this.g)))){this.J||ke!=4||c==7||(c==8||0>=An?Qn(3):Qn(2)),$s(this);var u=this.g.Z();this.X=u;t:if(Xa(this)){var f=mc(this.g);s="";var w=f.length,b=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Jn(this);var V="";break t}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(b&&c==w-1)});f.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=u==200,lf(this.i,this.u,this.A,this.l,this.R,ke,u),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Te=this.g;if((te=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(te)){var Q=te;break t}}Q=null}if(u=Q)En(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bs(this,u);else{this.o=!1,this.s=3,Ue(12),Yt(this),Jn(this);break e}}if(this.P){u=!0;let et;for(;!this.J&&this.C<V.length;)if(et=df(this,V),et==Fs){ke==4&&(this.s=4,Ue(14),u=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(et==Ka){this.s=4,Ue(15),En(this.i,this.l,V,"[Invalid Chunk]"),u=!1;break}else En(this.i,this.l,et,null),Bs(this,et);if(Xa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||V.length!=0||this.h.h||(this.s=1,Ue(16),u=!1),this.o=this.o&&u,!u)En(this.i,this.l,V,"[Invalid Chunked Response]"),Yt(this),Jn(this);else if(0<V.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ws(Ce),Ce.M=!0,Ue(11))}}else En(this.i,this.l,V,null),Bs(this,V);ke==4&&Yt(this),this.o&&!this.J&&(ke==4?Tc(this.j,this):(this.o=!1,Yr(this)))}else Cf(this.g),u==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),Yt(this),Jn(this)}}}catch{}finally{}};function Xa(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function df(s,c){var u=s.C,f=c.indexOf(`
`,u);return f==-1?Fs:(u=Number(c.substring(u,f)),isNaN(u)?Ka:(f+=1,f+u>c.length?Fs:(c=c.slice(f,f+u),s.C=f+u,c)))}xt.prototype.cancel=function(){this.J=!0,Yt(this)};function Yr(s){s.S=Date.now()+s.I,Ya(s,s.I)}function Ya(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Xn(A(s.ba,s),c)}function $s(s){s.B&&(l.clearTimeout(s.B),s.B=null)}xt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(uf(this.i,this.A),this.L!=2&&(Qn(),Ue(17)),Yt(this),this.s=2,Jn(this)):Ya(this,this.S-s)};function Jn(s){s.j.G==0||s.J||Tc(s.j,s)}function Yt(s){$s(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Ua(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Bs(s,c){try{var u=s.j;if(u.G!=0&&(u.g==s||js(u.h,s))){if(!s.K&&js(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)si(u),ri(u);else break e;Gs(u),Ue(18)}}else u.za=w[1],0<u.za-u.T&&37500>w[2]&&u.F&&u.v==0&&!u.C&&(u.C=Xn(A(u.Za,u),6e3));if(1>=ec(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Zt(u,11)}else if((s.K||u.g==s)&&si(u),!C(c))for(w=u.Da.g.parse(c),c=0;c<w.length;c++){let Q=w[c];if(u.T=Q[0],Q=Q[1],u.G==2)if(Q[0]=="c"){u.K=Q[1],u.ia=Q[2];const Ce=Q[3];Ce!=null&&(u.la=Ce,u.j.info("VER="+u.la));const ke=Q[4];ke!=null&&(u.Aa=ke,u.j.info("SVER="+u.Aa));const An=Q[5];An!=null&&typeof An=="number"&&0<An&&(f=1.5*An,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const et=s.g;if(et){const ai=et.g?et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var b=f.h;b.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(zs(b,b.h),b.h=null))}if(f.D){const Ks=et.g?et.g.getResponseHeader("X-HTTP-Session-Id"):null;Ks&&(f.ya=Ks,ie(f.I,f.D,Ks))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var V=s;if(f.qa=Sc(f,f.J?f.ia:null,f.W),V.K){tc(f.h,V);var te=V,Te=f.L;Te&&(te.I=Te),te.B&&($s(te),Yr(te)),f.g=V}else Ec(f);0<u.i.length&&ii(u)}else Q[0]!="stop"&&Q[0]!="close"||Zt(u,7);else u.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Zt(u,7):qs(u):Q[0]!="noop"&&u.l&&u.l.ta(Q),u.v=0)}}Qn(4)}catch{}}var ff=class{constructor(s,c){this.g=s,this.map=c}};function Ja(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Za(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ec(s){return s.h?1:s.g?s.g.size:0}function js(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function zs(s,c){s.g?s.g.add(c):s.h=c}function tc(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ja.prototype.cancel=function(){if(this.i=nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function nc(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.D);return c}return k(s.i)}function pf(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],u=s.length,f=0;f<u;f++)c.push(s[f]);return c}c=[],u=0;for(f in s)c[u++]=s[f];return c}function gf(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var u=0;u<s;u++)c.push(u);return c}c=[],u=0;for(const f in s)c[u++]=f;return c}}}function rc(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var u=gf(s),f=pf(s),w=f.length,b=0;b<w;b++)c.call(void 0,f[b],u&&u[b],s)}var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mf(s,c){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),w=null;if(0<=f){var b=s[u].substring(0,f);w=s[u].substring(f+1)}else b=s[u];c(b,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Jt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Jt){this.h=s.h,Jr(this,s.j),this.o=s.o,this.g=s.g,Zr(this,s.s),this.l=s.l;var c=s.i,u=new tr;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),sc(this,u),this.m=s.m}else s&&(c=String(s).match(ic))?(this.h=!1,Jr(this,c[1]||"",!0),this.o=Zn(c[2]||""),this.g=Zn(c[3]||"",!0),Zr(this,c[4]),this.l=Zn(c[5]||"",!0),sc(this,c[6]||"",!0),this.m=Zn(c[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}Jt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(er(c,oc,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(er(c,oc,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(er(u,u.charAt(0)=="/"?vf:_f,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",er(u,Ef)),s.join("")};function _t(s){return new Jt(s)}function Jr(s,c,u){s.j=u?Zn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Zr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function sc(s,c,u){c instanceof tr?(s.i=c,wf(s.i,s.h)):(u||(c=er(c,If)),s.i=new tr(c,s.h))}function ie(s,c,u){s.i.set(c,u)}function ei(s){return ie(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Zn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function er(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,yf),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function yf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var oc=/[#\/\?@]/g,_f=/[#\?:]/g,vf=/[#\?]/g,If=/[#\?@]/g,Ef=/#/g;function tr(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Mt(s){s.g||(s.g=new Map,s.h=0,s.i&&mf(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=tr.prototype,n.add=function(s,c){Mt(this),this.i=null,s=wn(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function ac(s,c){Mt(s),c=wn(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function cc(s,c){return Mt(s),c=wn(s,c),s.g.has(c)}n.forEach=function(s,c){Mt(this),this.g.forEach(function(u,f){u.forEach(function(w){s.call(c,w,f,this)},this)},this)},n.na=function(){Mt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const w=s[f];for(let b=0;b<w.length;b++)u.push(c[f])}return u},n.V=function(s){Mt(this);let c=[];if(typeof s=="string")cc(this,s)&&(c=c.concat(this.g.get(wn(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)c=c.concat(s[u])}return c},n.set=function(s,c){return Mt(this),this.i=null,s=wn(this,s),cc(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function lc(s,c,u){ac(s,c),0<u.length&&(s.i=null,s.g.set(wn(s,c),k(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const b=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var w=b;V[f]!==""&&(w+="="+encodeURIComponent(String(V[f]))),s.push(w)}}return this.i=s.join("&")};function wn(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function wf(s,c){c&&!s.j&&(Mt(s),s.i=null,s.g.forEach(function(u,f){var w=f.toLowerCase();f!=w&&(ac(this,f),lc(this,w,u))},s)),s.j=c}function Tf(s,c){const u=new Yn;if(l.Image){const f=new Image;f.onload=S(Lt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=S(Lt,u,"TestLoadImage: error",!1,c,f),f.onabort=S(Lt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(Lt,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Af(s,c){const u=new Yn,f=new AbortController,w=setTimeout(()=>{f.abort(),Lt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(b=>{clearTimeout(w),b.ok?Lt(u,"TestPingServer: ok",!0,c):Lt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),Lt(u,"TestPingServer: error",!1,c)})}function Lt(s,c,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function bf(){this.g=new af}function Sf(s,c,u){const f=u||"";try{rc(s,function(w,b){let V=w;d(w)&&(V=Ns(w)),c.push(f+b+"="+encodeURIComponent(V))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function nr(s){this.l=s.Ub||null,this.j=s.eb||!1}R(nr,Vs),nr.prototype.g=function(){return new ti(this.l,this.j)},nr.prototype.i=function(s){return function(){return s}}({});function ti(s,c){Pe.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ti,Pe),n=ti.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,ir(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ir(this)),this.g&&(this.readyState=3,ir(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uc(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function uc(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?rr(this):ir(this),this.readyState==3&&uc(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,rr(this))},n.Qa=function(s){this.g&&(this.response=s,rr(this))},n.ga=function(){this.g&&rr(this)};function rr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ir(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function ir(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function hc(s){let c="";return L(s,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Hs(s,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=hc(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):ie(s,c,u))}function ae(s){Pe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ae,Pe);var Rf=/^https?$/i,Pf=["POST","PUT"];n=ae.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ls.g(),this.v=this.o?$a(this.o):$a(Ls),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(b){dc(this,b);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())u.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),w=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pf,c,void 0))||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,V]of u)this.g.setRequestHeader(b,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gc(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){dc(this,b)}};function dc(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,fc(s),ni(s)}function fc(s){s.A||(s.A=!0,Fe(s,"complete"),Fe(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Fe(this,"complete"),Fe(this,"abort"),ni(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pc(this):this.bb())},n.bb=function(){pc(this)};function pc(s){if(s.h&&typeof a<"u"&&(!s.v[1]||vt(s)!=4||s.Z()!=2)){if(s.u&&vt(s)==4)Ma(s.Ea,0,s);else if(Fe(s,"readystatechange"),vt(s)==4){s.h=!1;try{const V=s.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=V===0){var w=String(s.D).match(ic)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),f=!Rf.test(w?w.toLowerCase():"")}u=f}if(u)Fe(s,"complete"),Fe(s,"success");else{s.m=6;try{var b=2<vt(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",fc(s)}}finally{ni(s)}}}}function ni(s,c){if(s.g){gc(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Fe(s,"ready");try{u.onreadystatechange=f}catch{}}}function gc(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function vt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),of(c)}};function mc(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Cf(s){const c={};s=(s.g&&2<=vt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(C(s[f]))continue;var u=E(s[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=c[w]||[];c[w]=b,b.push(u)}y(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function yc(s){this.Aa=0,this.i=[],this.j=new Yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,s),this.cb=sr("retryDelaySeedMs",1e4,s),this.Wa=sr("forwardChannelMaxRetries",2,s),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ja(s&&s.concurrentRequestLimit),this.Da=new bf,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yc.prototype,n.la=8,n.G=1,n.connect=function(s,c,u,f){Ue(0),this.W=s,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Sc(this,null,this.W),ii(this)};function qs(s){if(_c(s),s.G==3){var c=s.U++,u=_t(s.I);if(ie(u,"SID",s.K),ie(u,"RID",c),ie(u,"TYPE","terminate"),or(s,u),c=new xt(s,s.j,c),c.L=2,c.v=ei(_t(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=Rc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Yr(c)}bc(s)}function ri(s){s.g&&(Ws(s),s.g.cancel(),s.g=null)}function _c(s){ri(s),s.u&&(l.clearTimeout(s.u),s.u=null),si(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function ii(s){if(!Za(s.h)&&!s.s){s.s=!0;var c=s.Ga;ge||je(),Ee||(ge(),Ee=!0),ue.add(c,s),s.B=0}}function kf(s,c){return ec(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Xn(A(s.Ga,s,c),Ac(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const w=new xt(this,this.j,s);let b=this.o;if(this.S&&(b?(b=p(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(w.H=b,b=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ic(this,w,c),u=_t(this.I),ie(u,"RID",s),ie(u,"CVER",22),this.D&&ie(u,"X-HTTP-Session-Id",this.D),or(this,u),b&&(this.O?c="headers="+encodeURIComponent(String(hc(b)))+"&"+c:this.m&&Hs(u,this.m,b)),zs(this.h,w),this.Ua&&ie(u,"TYPE","init"),this.P?(ie(u,"$req",c),ie(u,"SID","null"),w.T=!0,Us(w,u,null)):Us(w,u,c),this.G=2}}else this.G==3&&(s?vc(this,s):this.i.length==0||Za(this.h)||vc(this))};function vc(s,c){var u;c?u=c.l:u=s.U++;const f=_t(s.I);ie(f,"SID",s.K),ie(f,"RID",u),ie(f,"AID",s.T),or(s,f),s.m&&s.o&&Hs(f,s.m,s.o),u=new xt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Ic(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),zs(s.h,u),Us(u,f,c)}function or(s,c){s.H&&L(s.H,function(u,f){ie(c,f,u)}),s.l&&rc({},function(u,f){ie(c,f,u)})}function Ic(s,c,u){u=Math.min(s.i.length,u);var f=s.l?A(s.l.Na,s.l,s):null;e:{var w=s.i;let b=-1;for(;;){const V=["count="+u];b==-1?0<u?(b=w[0].g,V.push("ofs="+b)):b=0:V.push("ofs="+b);let te=!0;for(let Te=0;Te<u;Te++){let Q=w[Te].g;const Ce=w[Te].map;if(Q-=b,0>Q)b=Math.max(0,w[Te].g-100),te=!1;else try{Sf(Ce,V,"req"+Q+"_")}catch{f&&f(Ce)}}if(te){f=V.join("&");break e}}}return s=s.i.splice(0,u),c.D=s,f}function Ec(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;ge||je(),Ee||(ge(),Ee=!0),ue.add(c,s),s.v=0}}function Gs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Xn(A(s.Fa,s),Ac(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,wc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Xn(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),ri(this),wc(this))};function Ws(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function wc(s){s.g=new xt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=_t(s.qa);ie(c,"RID","rpc"),ie(c,"SID",s.K),ie(c,"AID",s.T),ie(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&ie(c,"TO",s.ja),ie(c,"TYPE","xmlhttp"),or(s,c),s.m&&s.o&&Hs(c,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=ei(_t(c)),u.m=null,u.P=!0,Qa(u,s)}n.Za=function(){this.C!=null&&(this.C=null,ri(this),Gs(this),Ue(19))};function si(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Tc(s,c){var u=null;if(s.g==c){si(s),Ws(s),s.g=null;var f=2}else if(js(s.h,c))u=c.D,tc(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var w=s.B;f=Kr(),Fe(f,new qa(f,u)),ii(s)}else Ec(s);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&kf(s,c)||f==2&&Gs(s)))switch(u&&0<u.length&&(c=s.h,c.i=c.i.concat(u)),w){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function Ac(s,c){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*c}function Zt(s,c){if(s.j.info("Error code "+c),c==2){var u=A(s.fb,s),f=s.Xa;const w=!f;f=new Jt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Jr(f,"https"),ei(f),w?Tf(f.toString(),u):Af(f.toString(),u)}else Ue(2);s.G=0,s.l&&s.l.sa(c),bc(s),_c(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function bc(s){if(s.G=0,s.ka=[],s.l){const c=nc(s.h);(c.length!=0||s.i.length!=0)&&(D(s.ka,c),D(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function Sc(s,c,u){var f=u instanceof Jt?_t(u):new Jt(u);if(f.g!="")c&&(f.g=c+"."+f.g),Zr(f,f.s);else{var w=l.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var b=new Jt(null);f&&Jr(b,f),c&&(b.g=c),w&&Zr(b,w),u&&(b.l=u),f=b}return u=s.D,c=s.ya,u&&c&&ie(f,u,c),ie(f,"VER",s.la),or(s,f),f}function Rc(s,c,u){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ae(new nr({eb:u})):new ae(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}n=Pc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oi(){}oi.prototype.g=function(s,c){return new Ge(s,c)};function Ge(s,c){Pe.call(this),this.g=new yc(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!C(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!C(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Tn(this)}R(Ge,Pe),Ge.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){qs(this.g)},Ge.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Ns(s),s=u);c.i.push(new ff(c.Ya++,s)),c.G==3&&ii(c)},Ge.prototype.N=function(){this.g.l=null,delete this.j,qs(this.g),delete this.g,Ge.aa.N.call(this)};function Cc(s){xs.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}R(Cc,xs);function kc(){Ms.call(this),this.status=1}R(kc,Ms);function Tn(s){this.g=s}R(Tn,Pc),Tn.prototype.ua=function(){Fe(this.g,"a")},Tn.prototype.ta=function(s){Fe(this.g,new Cc(s))},Tn.prototype.sa=function(s){Fe(this.g,new kc)},Tn.prototype.ra=function(){Fe(this.g,"b")},oi.prototype.createWebChannel=oi.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,od=function(){return new oi},sd=function(){return Kr()},id=Xt,xo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qr.NO_ERROR=0,Qr.TIMEOUT=8,Qr.HTTP_ERROR=6,ki=Qr,Ga.COMPLETE="complete",rd=Ga,Ba.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,pr=Ba,nd=nr,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,td=ae}).apply(typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{});const xl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new ds("@firebase/firestore");function cr(){return gn.logLevel}function F(n,...e){if(gn.logLevel<=q.DEBUG){const t=e.map(fa);gn.debug(`Firestore (${qn}): ${n}`,...t)}}function mn(n,...e){if(gn.logLevel<=q.ERROR){const t=e.map(fa);gn.error(`Firestore (${qn}): ${n}`,...t)}}function Wi(n,...e){if(gn.logLevel<=q.WARN){const t=e.map(fa);gn.warn(`Firestore (${qn}): ${n}`,...t)}}function fa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const e=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+n;throw mn(e),new Error(e)}function me(n,e){n||G()}function re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(De.UNAUTHENTICATED))}shutdown(){}}class pI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gI{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ln,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ln)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new ad(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new De(e)}}class mI{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yI{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new mI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _I{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(me(typeof t.token=="string"),this.R=t.token,new _I(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=II(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function Ln(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ie(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ie(0,0))}static max(){return new oe(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fe extends kr{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const EI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends kr{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return EI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(fe.fromString(e))}static fromName(e){return new z(fe.fromString(e).popFirst(5))}static empty(){return new z(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new fe(e.slice()))}}function wI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new Ie(t+1,0):new Ie(t,r));return new Ht(i,z.empty(),e)}function TI(n){return new Ht(n.readTime,n.key,-1)}class Ht{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ht(oe.min(),z.empty(),-1)}static max(){return new Ht(oe.max(),z.empty(),-1)}}function AI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==bI)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let i=0,o=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(i=>i?O.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new O((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(g=>{a[d]=g,++l,l===o&&r(a)},g=>i(g))}})}static doWhile(e,t){return new O((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function RI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _s(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ud.oe=-1;function pa(n){return n==null}function Ki(n){return n===0&&1/n==-1/0}function PI(n){return typeof n=="number"&&Number.isInteger(n)&&!Ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mi(this.root,e,this.comparator,!0)}}class mi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=o??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Ae(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,i,o){return this}insert(e,t,r){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ll(this.data.getIterator())}getIteratorFrom(e){return new Ll(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class Ll{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new it([])}unionWith(e){let t=new Ve(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new CI("Invalid base64 string: "+o):o}}(e);return new ft(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const kI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(n){if(me(!!n),typeof n=="string"){let e=0;const t=kI.exec(n);if(me(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(n.seconds),nanos:be(n.nanos)}}function be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Or(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function dd(n){const e=n.mapValue.fields.__previous_value__;return ga(e)?dd(e):e}function Qi(n){const e=yn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,r,i,o,a,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d}}class Xi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ga(n)?4:NI(n)?9007199254740991:DI(n)?10:11:G()}function pt(n,e){if(n===e)return!0;const t=Fn(n);if(t!==Fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qi(n).isEqual(Qi(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=yn(i.timestampValue),l=yn(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Or(i.bytesValue).isEqual(Or(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return be(i.geoPointValue.latitude)===be(o.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return be(i.integerValue)===be(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=be(i.doubleValue),l=be(o.doubleValue);return a===l?Ki(a)===Ki(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Ln(n.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ml(a)!==Ml(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!pt(a[h],l[h])))return!1;return!0}(n,e);default:return G()}}function Dr(n,e){return(n.values||[]).find(t=>pt(t,e))!==void 0}function Un(n,e){if(n===e)return 0;const t=Fn(n),r=Fn(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=be(o.integerValue||o.doubleValue),h=be(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return Fl(n.timestampValue,e.timestampValue);case 4:return Fl(Qi(n),Qi(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(o,a){const l=Or(o),h=Or(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const g=ne(l[d],h[d]);if(g!==0)return g}return ne(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=ne(be(o.latitude),be(a.latitude));return l!==0?l:ne(be(o.longitude),be(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ul(n.arrayValue,e.arrayValue);case 10:return function(o,a){var l,h,d,g;const I=o.fields||{},A=a.fields||{},S=(l=I.value)===null||l===void 0?void 0:l.arrayValue,R=(h=A.value)===null||h===void 0?void 0:h.arrayValue,k=ne(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((g=R==null?void 0:R.values)===null||g===void 0?void 0:g.length)||0);return k!==0?k:Ul(S,R)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===yi.mapValue&&a===yi.mapValue)return 0;if(o===yi.mapValue)return 1;if(a===yi.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let I=0;I<h.length&&I<g.length;++I){const A=ne(h[I],g[I]);if(A!==0)return A;const S=Un(l[h[I]],d[g[I]]);if(S!==0)return S}return ne(h.length,g.length)}(n.mapValue,e.mapValue);default:throw G()}}function Fl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=yn(n),r=yn(e),i=ne(t.seconds,r.seconds);return i!==0?i:ne(t.nanos,r.nanos)}function Ul(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Un(t[i],r[i]);if(o)return o}return ne(t.length,r.length)}function $n(n){return Mo(n)}function Mo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=yn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Or(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Mo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Mo(t.fields[a])}`;return i+"}"}(n.mapValue):G()}function Lo(n){return!!n&&"integerValue"in n}function ma(n){return!!n&&"arrayValue"in n}function Oi(n){return!!n&&"mapValue"in n}function DI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function vr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=vr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function NI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Oi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vr(t)}setAll(e){let t=Se.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=vr(a):i.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Oi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Oi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){zr(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new nt(vr(this.value))}}function fd(n){const e=[];return zr(n.fields,(t,r)=>{const i=new Se([t]);if(Oi(r)){const o=fd(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new it(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,oe.min(),oe.min(),oe.min(),nt.empty(),0)}static newFoundDocument(e,t,r,i){return new tt(e,1,t,oe.min(),r,i,0)}static newNoDocument(e,t){return new tt(e,2,t,oe.min(),oe.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,oe.min(),oe.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.position=e,this.inclusive=t}}function $l(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=Un(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t="asc"){this.field=e,this.dir=t}}function VI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{}class ve extends pd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new MI(e,t,r):t==="array-contains"?new UI(e,r):t==="in"?new $I(e,r):t==="not-in"?new BI(e,r):t==="array-contains-any"?new jI(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new LI(e,r):new FI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Un(t,this.value)):t!==null&&Fn(this.value)===Fn(t)&&this.matchesComparison(Un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends pd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new qt(e,t)}matches(e){return gd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gd(n){return n.op==="and"}function md(n){return xI(n)&&gd(n)}function xI(n){for(const e of n.filters)if(e instanceof qt)return!1;return!0}function Fo(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+$n(n.value);if(md(n))return n.filters.map(e=>Fo(e)).join(",");{const e=n.filters.map(t=>Fo(t)).join(",");return`${n.op}(${e})`}}function yd(n,e){return n instanceof ve?function(r,i){return i instanceof ve&&r.op===i.op&&r.field.isEqual(i.field)&&pt(r.value,i.value)}(n,e):n instanceof qt?function(r,i){return i instanceof qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&yd(a,i.filters[l]),!0):!1}(n,e):void G()}function _d(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${$n(t.value)}`}(n):n instanceof qt?function(t){return t.op.toString()+" {"+t.getFilters().map(_d).join(" ,")+"}"}(n):"Filter"}class MI extends ve{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class LI extends ve{constructor(e,t){super(e,"in",t),this.keys=vd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class FI extends ve{constructor(e,t){super(e,"not-in",t),this.keys=vd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class UI extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ma(t)&&Dr(t.arrayValue,this.value)}}class $I extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Dr(this.value.arrayValue,t)}}class BI extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Dr(this.value.arrayValue,t)}}class jI extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Dr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function jl(n,e=null,t=[],r=[],i=null,o=null,a=null){return new zI(n,e,t,r,i,o,a)}function ya(n){const e=re(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),pa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>$n(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>$n(r)).join(",")),e.ue=t}return e.ue}function _a(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!VI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Bl(n.startAt,e.startAt)&&Bl(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HI(n,e,t,r,i,o,a,l){return new vs(n,e,t,r,i,o,a,l)}function qI(n){return new vs(n)}function zl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function GI(n){return n.collectionGroup!==null}function Ir(n){const e=re(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ve(Se.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ji(o,r))}),t.has(Se.keyField().canonicalString())||e.ce.push(new Ji(Se.keyField(),r))}return e.ce}function un(n){const e=re(n);return e.le||(e.le=WI(e,Ir(n))),e.le}function WI(n,e){if(n.limitType==="F")return jl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ji(i.field,o)});const t=n.endAt?new Yi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yi(n.startAt.position,n.startAt.inclusive):null;return jl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Uo(n,e,t){return new vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Id(n,e){return _a(un(n),un(e))&&n.limitType===e.limitType}function Ed(n){return`${ya(un(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>_d(i)).join(", ")}]`),pa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>$n(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>$n(i)).join(",")),`Target(${r})`}(un(n))}; limitType=${n.limitType})`}function va(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Ir(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,h){const d=$l(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,Ir(r),i)||r.endAt&&!function(a,l,h){const d=$l(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,Ir(r),i))}(n,e)}function KI(n){return(e,t)=>{let r=!1;for(const i of Ir(n)){const o=QI(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function QI(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Un(h,d):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return hd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new qe(z.comparator);function Zi(){return XI}const wd=new qe(z.comparator);function _i(...n){let e=wd;for(const t of n)e=e.insert(t.key,t);return e}function Td(n){let e=wd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function sn(){return Er()}function Ad(){return Er()}function Er(){return new Gn(n=>n.toString(),(n,e)=>n.isEqual(e))}const YI=new qe(z.comparator),JI=new Ve(z.comparator);function Ne(...n){let e=JI;for(const t of n)e=e.add(t);return e}const ZI=new Ve(ne);function eE(){return ZI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ki(e)?"-0":e}}function bd(n){return{integerValue:""+n}}function tE(n,e){return PI(e)?bd(e):Ia(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this._=void 0}}function nE(n,e,t){return n instanceof es?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ga(o)&&(o=dd(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof Nr?Rd(n,e):n instanceof Vr?Pd(n,e):function(i,o){const a=Sd(i,o),l=Hl(a)+Hl(i.Pe);return Lo(a)&&Lo(i.Pe)?bd(l):Ia(i.serializer,l)}(n,e)}function rE(n,e,t){return n instanceof Nr?Rd(n,e):n instanceof Vr?Pd(n,e):t}function Sd(n,e){return n instanceof ts?function(r){return Lo(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class es extends Is{}class Nr extends Is{constructor(e){super(),this.elements=e}}function Rd(n,e){const t=Cd(e);for(const r of n.elements)t.some(i=>pt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Vr extends Is{constructor(e){super(),this.elements=e}}function Pd(n,e){let t=Cd(e);for(const r of n.elements)t=t.filter(i=>!pt(i,r));return{arrayValue:{values:t}}}class ts extends Is{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Hl(n){return be(n.integerValue||n.doubleValue)}function Cd(n){return ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function iE(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Nr&&i instanceof Nr||r instanceof Vr&&i instanceof Vr?Ln(r.elements,i.elements,pt):r instanceof ts&&i instanceof ts?pt(r.Pe,i.Pe):r instanceof es&&i instanceof es}(n.transform,e.transform)}class sE{constructor(e,t){this.version=e,this.transformResults=t}}class Ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Es{}function kd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dd(n.key,Ct.none()):new Hr(n.key,n.data,Ct.none());{const t=n.data,r=nt.empty();let i=new Ve(Se.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new In(n.key,r,new it(i.toArray()),Ct.none())}}function oE(n,e,t){n instanceof Hr?function(i,o,a){const l=i.value.clone(),h=Gl(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof In?function(i,o,a){if(!Di(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Gl(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Od(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function wr(n,e,t,r){return n instanceof Hr?function(o,a,l,h){if(!Di(o.precondition,a))return l;const d=o.value.clone(),g=Wl(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof In?function(o,a,l,h){if(!Di(o.precondition,a))return l;const d=Wl(o.fieldTransforms,h,a),g=a.data;return g.setAll(Od(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,l){return Di(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function aE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Sd(r.transform,i||null);o!=null&&(t===null&&(t=nt.empty()),t.set(r.field,o))}return t||null}function ql(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ln(r,i,(o,a)=>iE(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hr extends Es{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class In extends Es{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Od(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Gl(n,e,t){const r=new Map;me(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,rE(a,l,t[i]))}return r}function Wl(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,nE(o,a,e))}return r}class Dd extends Es{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cE extends Es{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&oE(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=wr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=wr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ad();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=kd(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(t,r)=>ql(t,r))&&Ln(this.baseMutations,e.baseMutations,(t,r)=>ql(t,r))}}class Ea{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){me(e.mutations.length===r.length);let i=function(){return YI}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Ea(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,W;function hE(n){switch(n){default:return G();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function dE(n){if(n===void 0)return mn("GRPC error has no .code"),N.UNKNOWN;switch(n){case he.OK:return N.OK;case he.CANCELLED:return N.CANCELLED;case he.UNKNOWN:return N.UNKNOWN;case he.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case he.INTERNAL:return N.INTERNAL;case he.UNAVAILABLE:return N.UNAVAILABLE;case he.UNAUTHENTICATED:return N.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case he.NOT_FOUND:return N.NOT_FOUND;case he.ALREADY_EXISTS:return N.ALREADY_EXISTS;case he.PERMISSION_DENIED:return N.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case he.ABORTED:return N.ABORTED;case he.OUT_OF_RANGE:return N.OUT_OF_RANGE;case he.UNIMPLEMENTED:return N.UNIMPLEMENTED;case he.DATA_LOSS:return N.DATA_LOSS;default:return G()}}(W=he||(he={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ed([4294967295,4294967295],0);class fE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $o(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gE(n,e){return $o(n,e.toTimestamp())}function On(n){return me(!!n),oe.fromTimestamp(function(t){const r=yn(t);return new Ie(r.seconds,r.nanos)}(n))}function Nd(n,e){return Bo(n,e).canonicalString()}function Bo(n,e){const t=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mE(n){const e=fe.fromString(n);return me(AE(e)),e}function jo(n,e){return Nd(n.databaseId,e.path)}function yE(n){const e=mE(n);return e.length===4?fe.emptyPath():vE(e)}function _E(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vE(n){return me(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Kl(n,e,t){return{name:jo(n,e),fields:t.value.mapValue.fields}}function IE(n,e){let t;if(e instanceof Hr)t={update:Kl(n,e.key,e.value)};else if(e instanceof Dd)t={delete:jo(n,e.key)};else if(e instanceof In)t={update:Kl(n,e.key,e.data),updateMask:TE(e.fieldMask)};else{if(!(e instanceof cE))return G();t={verify:jo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof es)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ts)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:gE(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(n,e.precondition)),t}function EE(n,e){return n&&n.length>0?(me(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?On(i.updateTime):On(o);return a.isEqual(oe.min())&&(a=On(o)),new sE(a,i.transformResults||[])}(t,e))):[]}function wE(n){let e=yE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){me(r===1);const g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let o=[];t.where&&(o=function(I){const A=Vd(I);return A instanceof qt&&md(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(A=>function(R){return new Ji(Sn(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(A))}(t.orderBy));let l=null;t.limit&&(l=function(I){let A;return A=typeof I=="object"?I.value:I,pa(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(I){const A=!!I.before,S=I.values||[];return new Yi(S,A)}(t.startAt));let d=null;return t.endAt&&(d=function(I){const A=!I.before,S=I.values||[];return new Yi(S,A)}(t.endAt)),HI(e,i,a,o,l,"F",h,d)}function Vd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Sn(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Sn(t.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Sn(t.unaryFilter.field);return ve.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Sn(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return ve.create(Sn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return qt.create(t.compositeFilter.filters.map(r=>Vd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function Sn(n){return Se.fromServerFormat(n.fieldPath)}function TE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function AE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.ct=e}}function SE(n){const e=wE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Uo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.un=new PE}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Ht.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class PE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ve(fe.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Bn(0)}static kn(){return new Bn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.changes=new Gn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&wr(r.mutation,i,it.empty(),Ie.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ne()){const i=sn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=_i();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ne()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let o=Zi();const a=Er(),l=function(){return Er()}();return t.forEach((h,d)=>{const g=r.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof In)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),wr(g.mutation,d,g.mutation.getFieldMask(),Ie.now())):a.set(d.key,it.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,g)=>a.set(d,g)),t.forEach((d,g)=>{var I;return l.set(d,new kE(g,(I=a.get(d))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Er();let i=new qe((a,l)=>a-l),o=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let g=r.get(h)||it.empty();g=l.applyToLocalView(d,g),r.set(h,g);const I=(i.get(l.batchId)||Ne()).add(h);i=i.insert(l.batchId,I)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,g=h.value,I=Ad();g.forEach(A=>{if(!o.has(A)){const S=kd(t.get(A),r.get(A));S!==null&&I.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,I))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):GI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):O.resolve(sn());let l=-1,h=o;return a.next(d=>O.forEach(d,(g,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(g)?O.resolve():this.remoteDocumentCache.getEntry(e,g).next(A=>{h=h.insert(g,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,Ne())).next(g=>({batchId:l,changes:Td(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let i=_i();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=_i();return this.indexManager.getCollectionParents(e,o).next(l=>O.forEach(l,h=>{const d=function(I,A){return new vs(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(g=>{g.forEach((I,A)=>{a=a.insert(I,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,tt.newInvalidDocument(g)))});let l=_i();return a.forEach((h,d)=>{const g=o.get(h);g!==void 0&&wr(g.mutation,d,it.empty(),Ie.now()),va(t,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:SE(i.bundledQuery),readTime:On(i.readTime)}}(t)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.overlays=new qe(z.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=sn();return O.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const i=sn(),o=t.length+1,a=new z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return O.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new qe((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=sn(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const l=sn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,g)=>l.set(d,g)),!(l.size()>=i)););return O.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new uE(t,r));let o=this.Ir.get(t);o===void 0&&(o=Ne(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.Tr=new Ve(ye.Er),this.dr=new Ve(ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ye(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ye(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new z(new fe([])),r=new ye(t,e),i=new ye(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new z(new fe([])),r=new ye(t,e),i=new ye(t,e+1);let o=Ne();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ye(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return z.comparator(e.key,t.key)||ne(e.wr,t.wr)}static Ar(e,t){return ne(e.wr,t.wr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ve(ye.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lE(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new ye(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return O.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),O.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(ne);return t.forEach(i=>{const o=new ye(i,0),a=new ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;z.isDocumentKey(o)||(o=o.child(""));const a=new ye(new z(o),0);let l=new Ve(ne);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.wr)),!0)},a),O.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){me(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,i=>{const o=new ye(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ye(t,0),i=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.Mr=e,this.docs=function(){return new qe(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let r=Zi();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():tt.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Zi();const a=t.path,l=new z(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||AI(TI(g),r)<=0||(i.has(g.key)||va(t,g))&&(o=o.insert(g.key,g.mutableCopy()))}return O.resolve(o)}getAllFromCollectionGroup(e,t,r,i){G()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new LE(this)}getSize(e){return O.resolve(this.size)}}class LE extends CE{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.persistence=e,this.Nr=new Gn(t=>ya(t),_a),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new wa,this.targetCount=0,this.kr=Bn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Bn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(o).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ud(0),this.Kr=!1,this.Kr=!0,this.$r=new VE,this.referenceDelegate=e(this),this.Ur=new FE(this),this.indexManager=new RE,this.remoteDocumentCache=function(i){return new ME(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new bE(t),this.Gr=new DE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new xE(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new $E(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $E extends SI{constructor(e){super(),this.currentSequenceNumber=e}}class Ta{constructor(e){this.persistence=e,this.Jr=new wa,this.Yr=null}static Zr(e){return new Ta(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=z.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,oe.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=Ne(),i=Ne();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Aa(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yg()?8:RI(xe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new BE;return this.Xi(e,t,a).next(l=>{if(o.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(cr()<=q.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(cr()<=q.DEBUG&&F("QueryEngine","Query:",lr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(cr()<=q.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(t))):O.resolve())}Yi(e,t){if(zl(t))return O.resolve(null);let r=un(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Uo(t,null,"F"),r=un(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=Ne(...o);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ts(t,l);return this.ns(t,d,a,h.readTime)?this.Yi(e,Uo(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return zl(t)||i.isEqual(oe.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?O.resolve(null):(cr()<=q.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lr(t)),this.rs(e,a,t,wI(i,-1)).next(l=>l))})}ts(e,t){let r=new Ve(KI(e));return t.forEach((i,o)=>{va(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return cr()<=q.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",lr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ht.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new qe(ne),this._s=new Gn(o=>ya(o),_a),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function HE(n,e,t,r){return new zE(n,e,t,r)}async function xd(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=Ne();for(const d of i){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function qE(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,h,d,g){const I=d.batch,A=I.keys();let S=O.resolve();return A.forEach(R=>{S=S.next(()=>g.getEntry(h,R)).next(k=>{const D=d.docVersions.get(R);me(D!==null),k.version.compareTo(D)<0&&(I.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),g.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=Ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function GE(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function WE(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Ql{constructor(){this.activeTargetIds=eE()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KE{constructor(){this.so=new Ql,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ql,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi=null;function ho(){return vi===null?vi=function(){return 268435456+Math.round(2147483648*Math.random())}():vi++,"0x"+vi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="WebChannelConnection";class JE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const l=ho(),h=this.xo(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${l}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(g=>(F("RestConnection",`Received RPC '${t}' ${l}: `,g),g),g=>{throw Wi("RestConnection",`RPC '${t}' ${l} failed with error: `,g,"url: ",h,"request:",i),g})}Lo(t,r,i,o,a,l){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=XE[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=ho();return new Promise((a,l)=>{const h=new td;h.setWithCredentials(!0),h.listenOnce(rd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ki.NO_ERROR:const g=h.getResponseJson();F(Oe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),a(g);break;case ki.TIMEOUT:F(Oe,`RPC '${e}' ${o} timed out`),l(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:const I=h.getStatus();if(F(Oe,`RPC '${e}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const R=function(D){const x=D.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(x)>=0?x:N.UNKNOWN}(S.status);l(new $(R,S.message))}else l(new $(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new $(N.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F(Oe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);F(Oe,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=ho(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=od(),l=sd(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new nd({})),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const g=o.join("");F(Oe,`Creating RPC '${e}' stream ${i}: ${g}`,h);const I=a.createWebChannel(g,h);let A=!1,S=!1;const R=new YE({Io:D=>{S?F(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(A||(F(Oe,`Opening RPC '${e}' stream ${i} transport.`),I.open(),A=!0),F(Oe,`RPC '${e}' stream ${i} sending:`,D),I.send(D))},To:()=>I.close()}),k=(D,x,C)=>{D.listen(x,P=>{try{C(P)}catch(M){setTimeout(()=>{throw M},0)}})};return k(I,pr.EventType.OPEN,()=>{S||(F(Oe,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),k(I,pr.EventType.CLOSE,()=>{S||(S=!0,F(Oe,`RPC '${e}' stream ${i} transport closed`),R.So())}),k(I,pr.EventType.ERROR,D=>{S||(S=!0,Wi(Oe,`RPC '${e}' stream ${i} transport errored:`,D),R.So(new $(N.UNAVAILABLE,"The operation could not be completed")))}),k(I,pr.EventType.MESSAGE,D=>{var x;if(!S){const C=D.data[0];me(!!C);const P=C,M=P.error||((x=P[0])===null||x===void 0?void 0:x.error);if(M){F(Oe,`RPC '${e}' stream ${i} received error:`,M);const B=M.status;let L=function(m){const v=he[m];if(v!==void 0)return dE(v)}(B),y=M.message;L===void 0&&(L=N.INTERNAL,y="Unknown error status: "+B+" with message "+M.message),S=!0,R.So(new $(L,y)),I.close()}else F(Oe,`RPC '${e}' stream ${i} received:`,C),R.bo(C)}}),k(l,id.STAT_EVENT,D=>{D.stat===xo.PROXY?F(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===xo.NOPROXY&&F(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function fo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n){return new fE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t,r,i,o,a,l,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Md(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(mn(t.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new $(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e0 extends ZE{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=EE(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=_E(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>IE(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Bo(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(N.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Bo(t,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class n0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mn(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Gr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=re(h);d.L_.add(4),await qr(d),d.q_.set("Unknown"),d.L_.delete(4),await Ts(d)}(this))})}),this.q_=new n0(r,i)}}async function Ts(n){if(Gr(n))for(const e of n.B_)await e(!0)}async function qr(n){for(const e of n.B_)await e(!1)}function Gr(n){return re(n).L_.size===0}async function Ld(n,e,t){if(!_s(e))throw e;n.L_.add(1),await qr(n),n.q_.set("Offline"),t||(t=()=>GE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ts(n)})}function Fd(n,e){return e().catch(t=>Ld(n,t,e))}async function As(n){const e=re(n),t=Gt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;i0(e);)try{const i=await WE(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,s0(e,i)}catch(i){await Ld(e,i)}Ud(e)&&$d(e)}function i0(n){return Gr(n)&&n.O_.length<10}function s0(n,e){n.O_.push(e);const t=Gt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Ud(n){return Gr(n)&&!Gt(n).n_()&&n.O_.length>0}function $d(n){Gt(n).start()}async function o0(n){Gt(n).p_()}async function a0(n){const e=Gt(n);for(const t of n.O_)e.m_(t.mutations)}async function c0(n,e,t){const r=n.O_.shift(),i=Ea.from(r,e,t);await Fd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await As(n)}async function l0(n,e){e&&Gt(n).V_&&await async function(r,i){if(function(a){return hE(a)&&a!==N.ABORTED}(i.code)){const o=r.O_.shift();Gt(r).s_(),await Fd(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await As(r)}}(n,e),Ud(n)&&$d(n)}async function Yl(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Gr(t);t.L_.add(3),await qr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ts(t)}async function u0(n,e){const t=re(n);e?(t.L_.delete(2),await Ts(t)):e||(t.L_.add(2),await qr(t),t.q_.set("Unknown"))}function Gt(n){return n.U_||(n.U_=function(t,r,i){const o=re(t);return o.w_(),new e0(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:o0.bind(null,n),mo:l0.bind(null,n),f_:a0.bind(null,n),g_:c0.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await As(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new ba(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bd(n,e){if(mn("AsyncQueue",`${e}: ${n}`),_s(n))return new $(N.UNAVAILABLE,`${e}: ${n}`);throw n}class h0{constructor(){this.queries=Jl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=re(t),o=i.queries;i.queries=Jl(),o.forEach((a,l)=>{for(const h of l.j_)h.onError(r)})})(this,new $(N.ABORTED,"Firestore shutting down"))}}function Jl(){return new Gn(n=>Ed(n),Id)}function d0(n){n.Y_.forEach(e=>{e.next()})}var Zl,eu;(eu=Zl||(Zl={})).ea="default",eu.Cache="cache";class f0{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Gn(l=>Ed(l),Id),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(z.comparator),this.Na=new Map,this.La=new wa,this.Ba={},this.ka=new Map,this.qa=Bn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function p0(n,e,t){const r=_0(n);try{const i=await function(a,l){const h=re(a),d=Ie.now(),g=l.reduce((S,R)=>S.add(R.key),Ne());let I,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=Zi(),k=Ne();return h.cs.getEntries(S,g).next(D=>{R=D,R.forEach((x,C)=>{C.isValidDocument()||(k=k.add(x))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,R)).next(D=>{I=D;const x=[];for(const C of l){const P=aE(C,I.get(C.key).overlayedDocument);P!=null&&x.push(new In(C.key,P,fd(P.value.mapValue),Ct.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,x,l)}).next(D=>{A=D;const x=D.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(S,D.batchId,x)})}).then(()=>({batchId:A.batchId,changes:Td(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new qe(ne)),d=d.insert(l,h),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await bs(r,i.changes),await As(r.remoteStore)}catch(i){const o=Bd(i,"Failed to persist write");t.reject(o)}}function tu(n,e,t){const r=re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=re(a);h.onlineState=l;let d=!1;h.queries.forEach((g,I)=>{for(const A of I.j_)A.Z_(l)&&(d=!0)}),d&&d0(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function g0(n,e){const t=re(n),r=e.batch.batchId;try{const i=await qE(t.localStore,e);zd(t,r,null),jd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bs(t,i)}catch(i){await ld(i)}}async function m0(n,e,t){const r=re(n);try{const i=await function(a,l){const h=re(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return h.mutationQueue.lookupMutationBatch(d,l).next(I=>(me(I!==null),g=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,g,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>h.localDocuments.getDocuments(d,g))})}(r.localStore,e);zd(r,e,t),jd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bs(r,i)}catch(i){await ld(i)}}function jd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function zd(n,e,t){const r=re(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function bs(n,e,t){const r=re(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,h)=>{a.push(r.Ka(h,e,t).then(d=>{var g;if((d||t)&&r.isPrimaryClient){const I=d?!d.fromCache:(g=t==null?void 0:t.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){i.push(d);const I=Aa.Wi(h.targetId,d);o.push(I)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const g=re(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>O.forEach(d,A=>O.forEach(A.$i,S=>g.persistence.referenceDelegate.addReference(I,A.targetId,S)).next(()=>O.forEach(A.Ui,S=>g.persistence.referenceDelegate.removeReference(I,A.targetId,S)))))}catch(I){if(!_s(I))throw I;F("LocalStore","Failed to update sequence numbers: "+I)}for(const I of d){const A=I.targetId;if(!I.fromCache){const S=g.os.get(A),R=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(R);g.os=g.os.insert(A,k)}}}(r.localStore,o))}async function y0(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await xd(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(l=>{l.forEach(h=>{h.reject(new $(N.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bs(t,r.hs)}}function _0(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=g0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m0.bind(null,e),e}class nu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ws(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return HE(this.persistence,new jE,e.initialUser,this.serializer)}createPersistence(e){return new UE(Ta.Zr,this.serializer)}createSharedClientState(e){return new KE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class v0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=y0.bind(null,this.syncEngine),await u0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new h0}()}createDatastore(e){const t=ws(e.databaseInfo.databaseId),r=function(o){return new JE(o)}(e.databaseInfo);return function(o,a,l,h){return new t0(o,a,l,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,l){return new r0(r,i,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>tu(this.syncEngine,t,0),function(){return Xl.D()?new Xl:new QE}())}createSyncEngine(e,t){return function(i,o,a,l,h,d,g){const I=new f0(i,o,a,l,h,d);return g&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=re(i);F("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await qr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=De.UNAUTHENTICATED,this.clientId=cd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{F("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(F("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bd(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function po(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ru(n,e){n.asyncQueue.verifyOperationInProgress();const t=await w0(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Yl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Yl(e.remoteStore,i)),n._onlineComponents=e}function E0(n){return n.name==="FirebaseError"?n.code===N.FAILED_PRECONDITION||n.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function w0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await po(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!E0(t))throw t;Wi("Error using user provided cache. Falling back to memory cache: "+t),await po(n,new nu)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await po(n,new nu);return n._offlineComponents}async function T0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await ru(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await ru(n,new v0))),n._onlineComponents}function A0(n){return T0(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(n,e,t){if(!t)throw new $(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function S0(n,e,t,r){if(e===!0&&r===!0)throw new $(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function su(n){if(!z.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function zo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sa(n);throw new $(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}S0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ou({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ou(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fI;switch(r.type){case"firstParty":return new yI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=iu.get(t);r&&(F("ComponentProvider","Removing Datastore"),iu.delete(t),r.terminate())}(this),Promise.resolve()}}function R0(n,e,t,r={}){var i;const o=(n=zo(n,Ra))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=De.MOCK_USER;else{l=dg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new De(d)}n._authCredentials=new pI(new ad(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pa(this.firestore,e,this._query)}}class kt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class xr extends Pa{constructor(e,t,r){super(e,t,qI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new z(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function P0(n,e,...t){if(n=Qe(n),arguments.length===1&&(e=cd.newId()),b0("doc","path",e),n instanceof Ra){const r=fe.fromString(e,...t);return su(r),new kt(n,null,new z(r))}{if(!(n instanceof kt||n instanceof xr))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return su(r),new kt(n.firestore,n instanceof xr?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Md(this,"async_queue_retry"),this.Eu=()=>{const t=fo();t&&F("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const e=fo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const t=new ln;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!_s(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const t=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=t,t}enqueueAfterDelay(e,t,r){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const i=ba.createAndSchedule(this,e,t,r,o=>this.Vu(o));return this.lu.push(i),i}du(){this.hu&&G()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.lu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class qd extends Ra{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new C0}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gd(this),this._firestoreClient.terminate()}}function k0(n,e){const t=typeof n=="object"?n:Xo(),r=typeof n=="string"?n:e||"(default)",i=vn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ug("firestore");o&&R0(i,...o)}return i}function O0(n){return n._firestoreClient||Gd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Gd(n){var e,t,r;const i=n._freezeSettings(),o=function(l,h,d,g){return new OI(l,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Hd(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new I0(n._authCredentials,n._appCheckCredentials,n._queue,o),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mr(ft.fromBase64String(e))}catch(t){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mr(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=/^__.*__$/;class N0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new In(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hr(e,this.data,t,this.fieldTransforms)}}function Yd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Ca{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return ns(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Yd(this.wu)&&D0.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class V0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ws(e)}Nu(e,t,r,i=!1){return new Ca({wu:e,methodName:t,Ou:r,path:Se.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function x0(n){const e=n._freezeSettings(),t=ws(n._databaseId);return new V0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function M0(n,e,t,r,i,o={}){const a=n.Nu(o.merge||o.mergeFields?2:0,e,t,i);tf("Data must be an object, but it was:",a,r);const l=Zd(r,a);let h,d;if(o.merge)h=new it(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const I of o.mergeFields){const A=L0(e,I,t);if(!a.contains(A))throw new $(N.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);$0(g,A)||g.push(A)}h=new it(g),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new N0(new nt(l),h,d)}function Jd(n,e){if(ef(n=Qe(n)))return tf("Unsupported field value:",e,n),Zd(n,e);if(n instanceof Kd)return function(r,i){if(!Yd(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let h=Jd(l,i.Fu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Ie.fromDate(r);return{timestampValue:$o(i.serializer,o)}}if(r instanceof Ie){const o=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$o(i.serializer,o)}}if(r instanceof Qd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mr)return{bytesValue:pE(i.serializer,r._byteString)};if(r instanceof kt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Nd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xd)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Mu("VectorValues must only contain numeric values.");return Ia(l.serializer,h)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Sa(r)}`)}(n,e)}function Zd(n,e){const t={};return hd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(n,(r,i)=>{const o=Jd(i,e.bu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function ef(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ie||n instanceof Qd||n instanceof Mr||n instanceof kt||n instanceof Kd||n instanceof Xd)}function tf(n,e,t){if(!ef(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Sa(t);throw r==="an object"?e.Mu(n+" a custom object"):e.Mu(n+" "+r)}}function L0(n,e,t){if((e=Qe(e))instanceof Wd)return e._internalPath;if(typeof e=="string")return U0(n,e);throw ns("Field path arguments must be of type string or ",n,!1,void 0,t)}const F0=new RegExp("[~\\*/\\[\\]]");function U0(n,e,t){if(e.search(F0)>=0)throw ns(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wd(...e.split("."))._internalPath}catch{throw ns(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ns(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new $(N.INVALID_ARGUMENT,l+n+h)}function $0(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}function j0(n,e,t){n=zo(n,kt);const r=zo(n.firestore,qd),i=B0(n.converter,e,t);return z0(r,[M0(x0(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ct.none())])}function z0(n,e){return function(r,i){const o=new ln;return r.asyncQueue.enqueueAndForget(async()=>p0(await A0(r),i,o)),o.promise}(O0(n),e)}(function(e,t=!0){(function(i){qn=i})(zn),dt(new at("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new qd(new gI(r.getProvider("auth-internal")),new vI(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(d.options.projectId,g)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ye(xl,"4.7.1",e),Ye(xl,"4.7.1","esm2017")})();const H0={apiKey:"AIzaSyA0wyByR0eiKQCbYlfPH3t2oi0pNSgOCkE",authDomain:"worldwise-5a9e0.firebaseapp.com",projectId:"worldwise-5a9e0",storageBucket:"worldwise-5a9e0.appspot.com",messagingSenderId:"540992093305",appId:"1:540992093305:web:c364098368084b7964a8a8",measurementId:"G-V8X9NWYC4L"},ka=Xu(H0);lI(ka);const ur=H_(ka),q0=k0(ka);function J0(){const[n,e]=Y.useState(!0),t=Of(),[r,i]=Y.useState(""),[o,a]=Y.useState(""),[l,h]=Y.useState(""),[d,g]=Y.useState(""),[I,A]=Y.useState("");return It("main",{children:[It($p,{children:[J(Up,{children:J(Df,{})}),It(Mp,{children:[J(Lp,{$signinIn:n,children:It(Gc,{children:[J(hi,{children:"Create Account"}),It(xp,{children:[J(ui,{href:"#",onClick:async()=>{const C=new Tt;try{const P=await oo(ur,C);lt("success","User logged in successfully!"),setTimeout(()=>{t("/app/cities")},1e3)}catch(P){P.code==="auth/popup-closed-by-user"?lt("success","The popup was closed before completing sign-in"):H.error("Error during Google sign-in: ",{position:"bottom-center"})}},children:J("i",{className:"fab fa-google-plus-g"})}),J(ui,{href:"#",onClick:async()=>{const C=new wt;try{const P=await oo(ur,C);H.success("Facebook sign-in successful",{position:"top-center"}),t("/app/cities")}catch(P){P.code==="auth/popup-closed-by-user"?H.error("The popup was closed before completing sign-in.",{position:"bottom-center"}):H.error("Error during Facebook sign-in: "+P.message,{position:"bottom-center"})}},children:J("i",{className:"fab fa-facebook-f"})}),J(ui,{href:"#",onClick:async()=>{const C=new At;try{const P=await oo(ur,C);H.success("GitHub sign-in successful",{position:"top-center"}),t("/app/cities")}catch(P){P.code==="auth/popup-closed-by-user"?H.error("The popup was closed before completing sign-in.",{position:"bottom-center"}):H.error("Error during GitHub sign-in: "+P.message,{position:"bottom-center"})}},children:J("i",{className:"fab fa-github"})}),J(ui,{href:"#",children:J("i",{className:"fab fa-linkedin-in"})})]}),J(ar,{type:"text",placeholder:"Name",value:l,onChange:C=>h(C.target.value)}),J(ar,{type:"email",placeholder:"Email",value:d,onChange:C=>g(C.target.value)}),J(ar,{type:"password",placeholder:"Password",value:I,onChange:C=>A(C.target.value)}),J(wo,{onClick:async C=>{C.preventDefault(),(!l||!d||!I)&&lt("error","All fields are required for sign-up.");try{const P=await Oy(ur,d,I);await j0(P0(q0,"Users",P.user.uid),{email:P.user.email,name:l,password:I}),lt("success","User registered successfully!"),setTimeout(()=>{t("/app/cities")},1800)}catch(P){P.code==="auth/email-already-in-use"?lt("error","Email already in use. Please try a different email."):lt("error","Error during sign-up: "+P.message)}},children:"Sign Up"})]})}),J(Fp,{$signinIn:n,children:It(Gc,{children:[J(hi,{children:"Sign in"}),J(ar,{type:"email",placeholder:"Email",value:r,onChange:C=>i(C.target.value)}),J(ar,{type:"password",placeholder:"Password",value:o,onChange:C=>a(C.target.value)}),J(Bp,{href:"#",children:"Forgot your password?"}),J(wo,{onClick:async C=>{C.preventDefault();try{await Dy(ur,r,o),lt("success","User logged in successfully!"),setTimeout(()=>{t("/app/cities")},2e3)}catch(P){P.code==="auth/user-not-found"?lt("error","No user found with this email. Please sign up."):P.code==="auth/wrong-password"?lt("error","Incorrect password. Please try again."):lt("error","Error during sign-in: ")}},children:"Sign In"})]})}),J(jp,{$signinIn:n,children:It(zp,{$signinIn:n,children:[It(Hp,{$signinIn:n,children:[J(hi,{children:"Welcome Back!"}),J(Kc,{children:"To keep connected with us please login with your personal info"}),J(Wc,{onClick:()=>e(!0),children:"Sign In"})]}),It(qp,{$signinIn:n,children:[J(hi,{children:"Hello, Friend!"}),J(Kc,{children:"Enter your personal details and start your journey with us"}),J(Wc,{onClick:()=>e(!1),children:"Sign Up"})]})]})})]})]}),J(ng,{richColors:!0})]})}export{J0 as default};

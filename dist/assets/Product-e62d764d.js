import{g as br,r as Ae,c as In,b as wr,R as Tn,j as He,a as N}from"./index-2df7cbd0.js";import{s as oe}from"./Product.module-6f10ed6d.js";import{P as Sr}from"./PageNav-8c0ae698.js";import"./Logo-a1e8f10d.js";var kn={exports:{}},Pr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Or=Pr,_r=Or;function Rn(){}function Cn(){}Cn.resetWarningCache=Rn;var xr=function(){function e(a,n,i,o,s,l){if(l!==_r){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Cn,resetWarningCache:Rn};return r.PropTypes=r,r};kn.exports=xr();var Mn=kn.exports;const S=br(Mn);var Nn={},Ge={},Rt={},nt={},Kt;function Er(){return Kt||(Kt=1,function(e){(function(t,r){r(e,Ae,Mn)})(In,function(t,r,a){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=x;var n=o(r),i=o(a);function o(d){return d&&d.__esModule?d:{default:d}}var s=Object.assign||function(d){for(var v=1;v<arguments.length;v++){var w=arguments[v];for(var c in w)Object.prototype.hasOwnProperty.call(w,c)&&(d[c]=w[c])}return d};function l(d,v){var w={};for(var c in d)v.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(d,c)&&(w[c]=d[c]);return w}function f(d,v){if(!(d instanceof v))throw new TypeError("Cannot call a class as a function")}var u=function(){function d(v,w){for(var c=0;c<w.length;c++){var _=w[c];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(v,_.key,_)}}return function(v,w,c){return w&&d(v.prototype,w),c&&d(v,c),v}}();function p(d,v){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:d}function h(d,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);d.prototype=Object.create(v&&v.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(d,v):d.__proto__=v)}var g=!1;function x(d){g=d}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){x(!0)}}))}catch{}function k(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return g?d:d.capture}function A(d){if("touches"in d){var v=d.touches[0],w=v.pageX,c=v.pageY;return{x:w,y:c}}var _=d.screenX,R=d.screenY;return{x:_,y:R}}var I=function(d){h(v,d);function v(){var w;f(this,v);for(var c=arguments.length,_=Array(c),R=0;R<c;R++)_[R]=arguments[R];var P=p(this,(w=v.__proto__||Object.getPrototypeOf(v)).call.apply(w,[this].concat(_)));return P._handleSwipeStart=P._handleSwipeStart.bind(P),P._handleSwipeMove=P._handleSwipeMove.bind(P),P._handleSwipeEnd=P._handleSwipeEnd.bind(P),P._onMouseDown=P._onMouseDown.bind(P),P._onMouseMove=P._onMouseMove.bind(P),P._onMouseUp=P._onMouseUp.bind(P),P._setSwiperRef=P._setSwiperRef.bind(P),P}return u(v,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,k({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,k({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(c){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(c))}},{key:"_onMouseMove",value:function(c){this.mouseDown&&this._handleSwipeMove(c)}},{key:"_onMouseUp",value:function(c){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(c)}},{key:"_handleSwipeStart",value:function(c){var _=A(c),R=_.x,P=_.y;this.moveStart={x:R,y:P},this.props.onSwipeStart(c)}},{key:"_handleSwipeMove",value:function(c){if(this.moveStart){var _=A(c),R=_.x,P=_.y,Ne=R-this.moveStart.x,Bt=P-this.moveStart.y;this.moving=!0;var yr=this.props.onSwipeMove({x:Ne,y:Bt},c);yr&&c.cancelable&&c.preventDefault(),this.movePosition={deltaX:Ne,deltaY:Bt}}}},{key:"_handleSwipeEnd",value:function(c){this.props.onSwipeEnd(c);var _=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-_?this.props.onSwipeLeft(1,c):this.movePosition.deltaX>_&&this.props.onSwipeRight(1,c),this.movePosition.deltaY<-_?this.props.onSwipeUp(1,c):this.movePosition.deltaY>_&&this.props.onSwipeDown(1,c)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(c){this.swiper=c,this.props.innerRef(c)}},{key:"render",value:function(){var c=this.props;c.tagName;var _=c.className,R=c.style,P=c.children;c.allowMouseEvents,c.onSwipeUp,c.onSwipeDown,c.onSwipeLeft,c.onSwipeRight,c.onSwipeStart,c.onSwipeMove,c.onSwipeEnd,c.innerRef,c.tolerance;var Ne=l(c,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return n.default.createElement(this.props.tagName,s({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:_,style:R},Ne),P)}}]),v}(r.Component);I.displayName="ReactSwipe",I.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},I.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=I})}(nt)),nt}(function(e){(function(t,r){r(e,Er())})(In,function(t,r){Object.defineProperty(t,"__esModule",{value:!0});var a=n(r);function n(i){return i&&i.__esModule?i:{default:i}}t.default=a.default})})(Rt);var Ie={};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.default=void 0;var Q=Ar(wr);function Ar(e){return e&&e.__esModule?e:{default:e}}function Ir(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Tr={ROOT:function(t){return(0,Q.default)(Ir({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,Q.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,r){return(0,Q.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":r==="horizontal","axis-vertical":r!=="horizontal"})},SLIDER:function(t,r){return(0,Q.default)({thumbs:!t,slider:t,animated:!r})},ITEM:function(t,r,a){return(0,Q.default)({thumb:!t,slide:t,selected:r,previous:a})},ARROW_PREV:function(t){return(0,Q.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,Q.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,Q.default)({dot:!0,selected:t})}};Ie.default=Tr;var Te={},qe={};Object.defineProperty(qe,"__esModule",{value:!0});qe.outerWidth=void 0;var kr=function(t){var r=t.offsetWidth,a=getComputedStyle(t);return r+=parseInt(a.marginLeft)+parseInt(a.marginRight),r};qe.outerWidth=kr;var ve={};Object.defineProperty(ve,"__esModule",{value:!0});ve.default=void 0;var Rr=function(t,r,a){var n=t===0?t:t+r,i=a==="horizontal"?[n,0,0]:[0,n,0],o="translate3d",s="("+i.join(",")+")";return o+s};ve.default=Rr;var ke={};Object.defineProperty(ke,"__esModule",{value:!0});ke.default=void 0;var Cr=function(){return window};ke.default=Cr;Object.defineProperty(Te,"__esModule",{value:!0});Te.default=void 0;var W=Lr(Ae),re=Ve(Ie),Mr=qe,Gt=Ve(ve),Nr=Ve(Rt),Le=Ve(ke);function Ve(e){return e&&e.__esModule?e:{default:e}}function Ln(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Ln=function(){return e},e}function Lr(e){if(e&&e.__esModule)return e;if(e===null||Se(e)!=="object"&&typeof e!="function")return{default:e};var t=Ln();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=a?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function Se(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Se=function(r){return typeof r}:Se=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Se(e)}function ut(){return ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ut.apply(this,arguments)}function Dr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qt(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Fr(e,t,r){return t&&qt(e.prototype,t),r&&qt(e,r),e}function zr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ct(e,t)}function ct(e,t){return ct=Object.setPrototypeOf||function(a,n){return a.__proto__=n,a},ct(e,t)}function Wr(e){var t=Hr();return function(){var a=Ue(e),n;if(t){var i=Ue(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return jr(this,n)}}function jr(e,t){return t&&(Se(t)==="object"||typeof t=="function")?t:M(e)}function M(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Hr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ue(e){return Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Ue(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ur=function(t){return t.hasOwnProperty("key")},Ct=function(e){zr(r,e);var t=Wr(r);function r(a){var n;return Dr(this,r),n=t.call(this,a),C(M(n),"itemsWrapperRef",void 0),C(M(n),"itemsListRef",void 0),C(M(n),"thumbsRef",void 0),C(M(n),"setItemsWrapperRef",function(i){n.itemsWrapperRef=i}),C(M(n),"setItemsListRef",function(i){n.itemsListRef=i}),C(M(n),"setThumbsRef",function(i,o){n.thumbsRef||(n.thumbsRef=[]),n.thumbsRef[o]=i}),C(M(n),"updateSizes",function(){if(!(!n.props.children||!n.itemsWrapperRef||!n.thumbsRef)){var i=W.Children.count(n.props.children),o=n.itemsWrapperRef.clientWidth,s=n.props.thumbWidth?n.props.thumbWidth:(0,Mr.outerWidth)(n.thumbsRef[0]),l=Math.floor(o/s),f=l<i,u=f?i-l:0;n.setState(function(p,h){return{itemSize:s,visibleItems:l,firstItem:f?n.getFirstItem(h.selectedItem):0,lastPosition:u,showArrows:f}})}}),C(M(n),"handleClickItem",function(i,o,s){if(!Ur(s)||s.key==="Enter"){var l=n.props.onSelectItem;typeof l=="function"&&l(i,o)}}),C(M(n),"onSwipeStart",function(){n.setState({swiping:!0})}),C(M(n),"onSwipeEnd",function(){n.setState({swiping:!1})}),C(M(n),"onSwipeMove",function(i){var o=i.x;if(!n.state.itemSize||!n.itemsWrapperRef||!n.state.visibleItems)return!1;var s=0,l=W.Children.count(n.props.children),f=-(n.state.firstItem*100)/n.state.visibleItems,u=Math.max(l-n.state.visibleItems,0),p=-u*100/n.state.visibleItems;f===s&&o>0&&(o=0),f===p&&o<0&&(o=0);var h=n.itemsWrapperRef.clientWidth,g=f+100/(h/o);return n.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(x){n.itemsListRef.style[x]=(0,Gt.default)(g,"%",n.props.axis)}),!0}),C(M(n),"slideRight",function(i){n.moveTo(n.state.firstItem-(typeof i=="number"?i:1))}),C(M(n),"slideLeft",function(i){n.moveTo(n.state.firstItem+(typeof i=="number"?i:1))}),C(M(n),"moveTo",function(i){i=i<0?0:i,i=i>=n.state.lastPosition?n.state.lastPosition:i,n.setState({firstItem:i})}),n.state={selectedItem:a.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},n}return Fr(r,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(n){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==n.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Le.default)().addEventListener("resize",this.updateSizes),(0,Le.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Le.default)().removeEventListener("resize",this.updateSizes),(0,Le.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(n){var i=n;return n>=this.state.lastPosition&&(i=this.state.lastPosition),n<this.state.firstItem+this.state.visibleItems&&(i=this.state.firstItem),n<this.state.firstItem&&(i=n),i}},{key:"renderItems",value:function(){var n=this;return this.props.children.map(function(i,o){var s=re.default.ITEM(!1,o===n.state.selectedItem),l={key:o,ref:function(u){return n.setThumbsRef(u,o)},className:s,onClick:n.handleClickItem.bind(n,o,n.props.children[o]),onKeyDown:n.handleClickItem.bind(n,o,n.props.children[o]),"aria-label":"".concat(n.props.labels.item," ").concat(o+1),style:{width:n.props.thumbWidth}};return W.default.createElement("li",ut({},l,{role:"button",tabIndex:0}),i)})}},{key:"render",value:function(){var n=this;if(!this.props.children)return null;var i=W.Children.count(this.props.children)>1,o=this.state.showArrows&&this.state.firstItem>0,s=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,l={},f=-this.state.firstItem*(this.state.itemSize||0),u=(0,Gt.default)(f,"px",this.props.axis),p=this.props.transitionTime+"ms";return l={WebkitTransform:u,MozTransform:u,MsTransform:u,OTransform:u,transform:u,msTransform:u,WebkitTransitionDuration:p,MozTransitionDuration:p,MsTransitionDuration:p,OTransitionDuration:p,transitionDuration:p,msTransitionDuration:p},W.default.createElement("div",{className:re.default.CAROUSEL(!1)},W.default.createElement("div",{className:re.default.WRAPPER(!1),ref:this.setItemsWrapperRef},W.default.createElement("button",{type:"button",className:re.default.ARROW_PREV(!o),onClick:function(){return n.slideRight()},"aria-label":this.props.labels.leftArrow}),i?W.default.createElement(Nr.default,{tagName:"ul",className:re.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:l,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):W.default.createElement("ul",{className:re.default.SLIDER(!1,this.state.swiping),ref:function(g){return n.setItemsListRef(g)},style:l},this.renderItems()),W.default.createElement("button",{type:"button",className:re.default.ARROW_NEXT(!s),onClick:function(){return n.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),r}(W.Component);Te.default=Ct;C(Ct,"displayName","Thumbs");C(Ct,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var Qe={};Object.defineProperty(Qe,"__esModule",{value:!0});Qe.default=void 0;var $r=function(){return document};Qe.default=$r;var L={};Object.defineProperty(L,"__esModule",{value:!0});L.setPosition=L.getPosition=L.isKeyboardEvent=L.defaultStatusFormatter=L.noop=void 0;var Yr=Ae,Xr=Br(ve);function Br(e){return e&&e.__esModule?e:{default:e}}var Kr=function(){};L.noop=Kr;var Gr=function(t,r){return"".concat(t," of ").concat(r)};L.defaultStatusFormatter=Gr;var qr=function(t){return t?t.hasOwnProperty("key"):!1};L.isKeyboardEvent=qr;var Vr=function(t,r){if(r.infiniteLoop&&++t,t===0)return 0;var a=Yr.Children.count(r.children);if(r.centerMode&&r.axis==="horizontal"){var n=-t*r.centerSlidePercentage,i=a-1;return t&&(t!==i||r.infiniteLoop)?n+=(100-r.centerSlidePercentage)/2:t===i&&(n+=100-r.centerSlidePercentage),n}return-t*100};L.getPosition=Vr;var Qr=function(t,r){var a={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(n){a[n]=(0,Xr.default)(t,"%",r)}),a};L.setPosition=Qr;var U={};Object.defineProperty(U,"__esModule",{value:!0});U.fadeAnimationHandler=U.slideStopSwipingHandler=U.slideSwipeAnimationHandler=U.slideAnimationHandler=void 0;var Dn=Ae,Jr=Zr(ve),$=L;function Zr(e){return e&&e.__esModule?e:{default:e}}function Vt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Vt(Object(r),!0).forEach(function(a){ea(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vt(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function ea(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ta=function(t,r){var a={},n=r.selectedItem,i=n,o=Dn.Children.count(t.children)-1,s=t.infiniteLoop&&(n<0||n>o);if(s)return i<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?a.itemListStyle=(0,$.setPosition)(-(o+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):a.itemListStyle=(0,$.setPosition)(-(o+2)*100,t.axis):i>o&&(a.itemListStyle=(0,$.setPosition)(0,t.axis)),a;var l=(0,$.getPosition)(n,t),f=(0,Jr.default)(l,"%",t.axis),u=t.transitionTime+"ms";return a.itemListStyle={WebkitTransform:f,msTransform:f,OTransform:f,transform:f},r.swiping||(a.itemListStyle=ae(ae({},a.itemListStyle),{},{WebkitTransitionDuration:u,MozTransitionDuration:u,OTransitionDuration:u,transitionDuration:u,msTransitionDuration:u})),a};U.slideAnimationHandler=ta;var na=function(t,r,a,n){var i={},o=r.axis==="horizontal",s=Dn.Children.count(r.children),l=0,f=(0,$.getPosition)(a.selectedItem,r),u=r.infiniteLoop?(0,$.getPosition)(s-1,r)-100:(0,$.getPosition)(s-1,r),p=o?t.x:t.y,h=p;f===l&&p>0&&(h=0),f===u&&p<0&&(h=0);var g=f+100/(a.itemSize/h),x=Math.abs(p)>r.swipeScrollTolerance;return r.infiniteLoop&&x&&(a.selectedItem===0&&g>-100?g-=s*100:a.selectedItem===s-1&&g<-s*100&&(g+=s*100)),(!r.preventMovementUntilSwipeScrollTolerance||x||a.swipeMovementStarted)&&(a.swipeMovementStarted||n({swipeMovementStarted:!0}),i.itemListStyle=(0,$.setPosition)(g,r.axis)),x&&!a.cancelClick&&n({cancelClick:!0}),i};U.slideSwipeAnimationHandler=na;var ra=function(t,r){var a=(0,$.getPosition)(r.selectedItem,t),n=(0,$.setPosition)(a,t.axis);return{itemListStyle:n}};U.slideStopSwipingHandler=ra;var aa=function(t,r){var a=t.transitionTime+"ms",n="ease-in-out",i={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:n,msTransitionTimingFunction:n,MozTransitionTimingFunction:n,WebkitTransitionTimingFunction:n,OTransitionTimingFunction:n};return r.swiping||(i=ae(ae({},i),{},{WebkitTransitionDuration:a,MozTransitionDuration:a,OTransitionDuration:a,transitionDuration:a,msTransitionDuration:a})),{slideStyle:i,selectedStyle:ae(ae({},i),{},{opacity:1,position:"relative"}),prevStyle:ae({},i)}};U.fadeAnimationHandler=aa;Object.defineProperty(Ge,"__esModule",{value:!0});Ge.default=void 0;var O=sa(Ae),ia=Re(Rt),K=Re(Ie),oa=Re(Te),De=Re(Qe),Fe=Re(ke),ye=L,$e=U;function Re(e){return e&&e.__esModule?e:{default:e}}function Fn(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Fn=function(){return e},e}function sa(e){if(e&&e.__esModule)return e;if(e===null||Pe(e)!=="object"&&typeof e!="function")return{default:e};var t=Fn();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=a?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function Pe(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pe=function(r){return typeof r}:Pe=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Pe(e)}function dt(){return dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},dt.apply(this,arguments)}function Qt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Qt(Object(r),!0).forEach(function(a){y(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Qt(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function la(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jt(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function fa(e,t,r){return t&&Jt(e.prototype,t),r&&Jt(e,r),e}function ua(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&mt(e,t)}function mt(e,t){return mt=Object.setPrototypeOf||function(a,n){return a.__proto__=n,a},mt(e,t)}function ca(e){var t=ma();return function(){var a=Ye(e),n;if(t){var i=Ye(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return da(this,n)}}function da(e,t){return t&&(Pe(t)==="object"||typeof t=="function")?t:b(e)}function b(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ma(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ye(e){return Ye=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Ye(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Mt=function(e){ua(r,e);var t=ca(r);function r(a){var n;la(this,r),n=t.call(this,a),y(b(n),"thumbsRef",void 0),y(b(n),"carouselWrapperRef",void 0),y(b(n),"listRef",void 0),y(b(n),"itemsRef",void 0),y(b(n),"timer",void 0),y(b(n),"animationHandler",void 0),y(b(n),"setThumbsRef",function(o){n.thumbsRef=o}),y(b(n),"setCarouselWrapperRef",function(o){n.carouselWrapperRef=o}),y(b(n),"setListRef",function(o){n.listRef=o}),y(b(n),"setItemsRef",function(o,s){n.itemsRef||(n.itemsRef=[]),n.itemsRef[s]=o}),y(b(n),"autoPlay",function(){O.Children.count(n.props.children)<=1||(n.clearAutoPlay(),n.props.autoPlay&&(n.timer=setTimeout(function(){n.increment()},n.props.interval)))}),y(b(n),"clearAutoPlay",function(){n.timer&&clearTimeout(n.timer)}),y(b(n),"resetAutoPlay",function(){n.clearAutoPlay(),n.autoPlay()}),y(b(n),"stopOnHover",function(){n.setState({isMouseEntered:!0},n.clearAutoPlay)}),y(b(n),"startOnLeave",function(){n.setState({isMouseEntered:!1},n.autoPlay)}),y(b(n),"isFocusWithinTheCarousel",function(){return n.carouselWrapperRef?!!((0,De.default)().activeElement===n.carouselWrapperRef||n.carouselWrapperRef.contains((0,De.default)().activeElement)):!1}),y(b(n),"navigateWithKeyboard",function(o){if(n.isFocusWithinTheCarousel()){var s=n.props.axis,l=s==="horizontal",f={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},u=l?f.ArrowRight:f.ArrowDown,p=l?f.ArrowLeft:f.ArrowUp;u===o.keyCode?n.increment():p===o.keyCode&&n.decrement()}}),y(b(n),"updateSizes",function(){if(!(!n.state.initialized||!n.itemsRef||n.itemsRef.length===0)){var o=n.props.axis==="horizontal",s=n.itemsRef[0];if(s){var l=o?s.clientWidth:s.clientHeight;n.setState({itemSize:l}),n.thumbsRef&&n.thumbsRef.updateSizes()}}}),y(b(n),"setMountState",function(){n.setState({hasMount:!0}),n.updateSizes()}),y(b(n),"handleClickItem",function(o,s){if(O.Children.count(n.props.children)!==0){if(n.state.cancelClick){n.setState({cancelClick:!1});return}n.props.onClickItem(o,s),o!==n.state.selectedItem&&n.setState({selectedItem:o})}}),y(b(n),"handleOnChange",function(o,s){O.Children.count(n.props.children)<=1||n.props.onChange(o,s)}),y(b(n),"handleClickThumb",function(o,s){n.props.onClickThumb(o,s),n.moveTo(o)}),y(b(n),"onSwipeStart",function(o){n.setState({swiping:!0}),n.props.onSwipeStart(o)}),y(b(n),"onSwipeEnd",function(o){n.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),n.props.onSwipeEnd(o),n.clearAutoPlay(),n.state.autoPlay&&n.autoPlay()}),y(b(n),"onSwipeMove",function(o,s){n.props.onSwipeMove(s);var l=n.props.swipeAnimationHandler(o,n.props,n.state,n.setState.bind(b(n)));return n.setState(j({},l)),!!Object.keys(l).length}),y(b(n),"decrement",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;n.moveTo(n.state.selectedItem-(typeof o=="number"?o:1))}),y(b(n),"increment",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;n.moveTo(n.state.selectedItem+(typeof o=="number"?o:1))}),y(b(n),"moveTo",function(o){if(typeof o=="number"){var s=O.Children.count(n.props.children)-1;o<0&&(o=n.props.infiniteLoop?s:0),o>s&&(o=n.props.infiniteLoop?0:s),n.selectItem({selectedItem:o}),n.state.autoPlay&&n.state.isMouseEntered===!1&&n.resetAutoPlay()}}),y(b(n),"onClickNext",function(){n.increment(1)}),y(b(n),"onClickPrev",function(){n.decrement(1)}),y(b(n),"onSwipeForward",function(){n.increment(1),n.props.emulateTouch&&n.setState({cancelClick:!0})}),y(b(n),"onSwipeBackwards",function(){n.decrement(1),n.props.emulateTouch&&n.setState({cancelClick:!0})}),y(b(n),"changeItem",function(o){return function(s){(!(0,ye.isKeyboardEvent)(s)||s.key==="Enter")&&n.moveTo(o)}}),y(b(n),"selectItem",function(o){n.setState(j({previousItem:n.state.selectedItem},o),function(){n.setState(n.animationHandler(n.props,n.state))}),n.handleOnChange(o.selectedItem,O.Children.toArray(n.props.children)[o.selectedItem])}),y(b(n),"getInitialImage",function(){var o=n.props.selectedItem,s=n.itemsRef&&n.itemsRef[o],l=s&&s.getElementsByTagName("img")||[];return l[0]}),y(b(n),"getVariableItemHeight",function(o){var s=n.itemsRef&&n.itemsRef[o];if(n.state.hasMount&&s&&s.children.length){var l=s.children[0].getElementsByTagName("img")||[];if(l.length>0){var f=l[0];if(!f.complete){var u=function g(){n.forceUpdate(),f.removeEventListener("load",g)};f.addEventListener("load",u)}}var p=l[0]||s.children[0],h=p.clientHeight;return h>0?h:null}return null});var i={initialized:!1,previousItem:a.selectedItem,selectedItem:a.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:a.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return n.animationHandler=typeof a.animationHandler=="function"&&a.animationHandler||a.animationHandler==="fade"&&$e.fadeAnimationHandler||$e.slideAnimationHandler,n.state=j(j({},i),n.animationHandler(a,i)),n}return fa(r,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(n,i){!n.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!n.autoFocus&&this.props.autoFocus&&this.forceFocus(),i.swiping&&!this.state.swiping&&this.setState(j({},this.props.stopSwipingHandler(this.props,this.state))),(n.selectedItem!==this.props.selectedItem||n.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),n.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var n=this;this.bindEvents(),this.state.autoPlay&&O.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var i=n.getInitialImage();i&&!i.complete?i.addEventListener("load",n.setMountState):n.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var n=this.carouselWrapperRef;this.props.stopOnHover&&n&&(n.addEventListener("mouseenter",this.stopOnHover),n.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var n=this.carouselWrapperRef;this.props.stopOnHover&&n&&(n.removeEventListener("mouseenter",this.stopOnHover),n.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,Fe.default)().addEventListener("resize",this.updateSizes),(0,Fe.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,De.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,Fe.default)().removeEventListener("resize",this.updateSizes),(0,Fe.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var n=this.getInitialImage();n&&n.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,De.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var n;(n=this.carouselWrapperRef)===null||n===void 0||n.focus()}},{key:"renderItems",value:function(n){var i=this;return this.props.children?O.Children.map(this.props.children,function(o,s){var l=s===i.state.selectedItem,f=s===i.state.previousItem,u=l&&i.state.selectedStyle||f&&i.state.prevStyle||i.state.slideStyle||{};i.props.centerMode&&i.props.axis==="horizontal"&&(u=j(j({},u),{},{minWidth:i.props.centerSlidePercentage+"%"})),i.state.swiping&&i.state.swipeMovementStarted&&(u=j(j({},u),{},{pointerEvents:"none"}));var p={ref:function(g){return i.setItemsRef(g,s)},key:"itemKey"+s+(n?"clone":""),className:K.default.ITEM(!0,s===i.state.selectedItem,s===i.state.previousItem),onClick:i.handleClickItem.bind(i,s,o),style:u};return O.default.createElement("li",p,i.props.renderItem(o,{isSelected:s===i.state.selectedItem,isPrevious:s===i.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var n=this,i=this.props,o=i.showIndicators,s=i.labels,l=i.renderIndicator,f=i.children;return o?O.default.createElement("ul",{className:"control-dots"},O.Children.map(f,function(u,p){return l&&l(n.changeItem(p),p===n.state.selectedItem,p,s.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?O.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,O.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||O.Children.count(this.props.children)===0?null:O.default.createElement(oa.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var n=this;if(!this.props.children||O.Children.count(this.props.children)===0)return null;var i=this.props.swipeable&&O.Children.count(this.props.children)>1,o=this.props.axis==="horizontal",s=this.props.showArrows&&O.Children.count(this.props.children)>1,l=s&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,f=s&&(this.state.selectedItem<O.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,u=this.renderItems(!0),p=u.shift(),h=u.pop(),g={className:K.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},x={};if(o){if(g.onSwipeLeft=this.onSwipeForward,g.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var k=this.getVariableItemHeight(this.state.selectedItem);x.height=k||"auto"}}else g.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,g.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,g.style=j(j({},g.style),{},{height:this.state.itemSize}),x.height=this.state.itemSize;return O.default.createElement("div",{"aria-label":this.props.ariaLabel,className:K.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},O.default.createElement("div",{className:K.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,l,this.props.labels.leftArrow),O.default.createElement("div",{className:K.default.WRAPPER(!0,this.props.axis),style:x},i?O.default.createElement(ia.default,dt({tagName:"ul",innerRef:this.setListRef},g,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&p):O.default.createElement("ul",{className:K.default.SLIDER(!0,this.state.swiping),ref:function(I){return n.setListRef(I)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&p)),this.props.renderArrowNext(this.onClickNext,f,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),r}(O.default.Component);Ge.default=Mt;y(Mt,"displayName","Carousel");y(Mt,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:ye.noop,onClickThumb:ye.noop,onChange:ye.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,r,a){return O.default.createElement("button",{type:"button","aria-label":a,className:K.default.ARROW_PREV(!r),onClick:t})},renderArrowNext:function(t,r,a){return O.default.createElement("button",{type:"button","aria-label":a,className:K.default.ARROW_NEXT(!r),onClick:t})},renderIndicator:function(t,r,a,n){return O.default.createElement("li",{className:K.default.DOT(r),onClick:t,onKeyDown:t,value:a,key:a,role:"button",tabIndex:0,"aria-label":"".concat(n," ").concat(a+1)})},renderItem:function(t){return t},renderThumbs:function(t){var r=O.Children.map(t,function(a){var n=a;if(a.type!=="img"&&(n=O.Children.toArray(a.props.children).find(function(i){return i.type==="img"})),!!n)return n});return r.filter(function(a){return a}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):r},statusFormatter:ye.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:$e.slideSwipeAnimationHandler,stopSwipingHandler:$e.slideStopSwipingHandler});var pa={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return r.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return a.default}});var t=n(Ge),r=pa,a=n(Te);function n(i){return i&&i.__esModule?i:{default:i}}})(Nn);const Zt=()=>{};let Nt={},zn={},Wn=null,jn={mark:Zt,measure:Zt};try{typeof window<"u"&&(Nt=window),typeof document<"u"&&(zn=document),typeof MutationObserver<"u"&&(Wn=MutationObserver),typeof performance<"u"&&(jn=performance)}catch{}const{userAgent:en=""}=Nt.navigator||{},ee=Nt,E=zn,tn=Wn,ze=jn;ee.document;const V=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",Hn=~en.indexOf("MSIE")||~en.indexOf("Trident/");var T="classic",Un="duotone",D="sharp",F="sharp-duotone",ha=[T,Un,D,F],va={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},nn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ga=["kit"],ya=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,ba=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,wa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Sa={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Pa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Oa={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},_a={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},xa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},$n={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Ea=["solid","regular","light","thin","duotone","brands"],Yn=[1,2,3,4,5,6,7,8,9,10],Aa=Yn.concat([11,12,13,14,15,16,17,18,19,20]),be={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ia=[...Object.keys(Oa),...Ea,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",be.GROUP,be.SWAP_OPACITY,be.PRIMARY,be.SECONDARY].concat(Yn.map(e=>"".concat(e,"x"))).concat(Aa.map(e=>"w-".concat(e))),Ta={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ka={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ra={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},rn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const G="___FONT_AWESOME___",pt=16,Xn="fa",Bn="svg-inline--fa",fe="data-fa-i2svg",ht="data-fa-pseudo-element",Ca="data-fa-pseudo-element-pending",Lt="data-prefix",Dt="data-icon",an="fontawesome-i2svg",Ma="async",Na=["HTML","HEAD","STYLE","SCRIPT"],Kn=(()=>{try{return!0}catch{return!1}})(),Gn=[T,D,F];function Ce(e){return new Proxy(e,{get(t,r){return r in t?t[r]:t[T]}})}const qn={...$n};qn[T]={...$n[T],...nn.kit,...nn["kit-duotone"]};const se=Ce(qn),vt={...xa};vt[T]={...vt[T],...rn.kit,...rn["kit-duotone"]};const xe=Ce(vt),gt={..._a};gt[T]={...gt[T],...Ra.kit};const le=Ce(gt),yt={...Pa};yt[T]={...yt[T],...ka.kit};const La=Ce(yt),Da=ya,Vn="fa-layers-text",Fa=ba,za={...va};Ce(za);const Wa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt=be,pe=new Set;Object.keys(xe[T]).map(pe.add.bind(pe));Object.keys(xe[D]).map(pe.add.bind(pe));Object.keys(xe[F]).map(pe.add.bind(pe));const ja=[...ga,...Ia],Oe=ee.FontAwesomeConfig||{};function Ha(e){var t=E.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ua(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}E&&typeof E.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[r,a]=t;const n=Ua(Ha(r));n!=null&&(Oe[a]=n)});const Qn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xn,replacementClass:Bn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oe.familyPrefix&&(Oe.cssPrefix=Oe.familyPrefix);const he={...Qn,...Oe};he.autoReplaceSvg||(he.observeMutations=!1);const m={};Object.keys(Qn).forEach(e=>{Object.defineProperty(m,e,{enumerable:!0,set:function(t){he[e]=t,_e.forEach(r=>r(m))},get:function(){return he[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){he.cssPrefix=e,_e.forEach(t=>t(m))},get:function(){return he.cssPrefix}});ee.FontAwesomeConfig=m;const _e=[];function $a(e){return _e.push(e),()=>{_e.splice(_e.indexOf(e),1)}}const J=pt,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ya(e){if(!e||!V)return;const t=E.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const r=E.head.childNodes;let a=null;for(let n=r.length-1;n>-1;n--){const i=r[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return E.head.insertBefore(t,a),e}const Xa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ee(){let e=12,t="";for(;e-- >0;)t+=Xa[Math.random()*62|0];return t}function ge(e){const t=[];for(let r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function Ft(e){return e.classList?ge(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Jn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ba(e){return Object.keys(e||{}).reduce((t,r)=>t+"".concat(r,'="').concat(Jn(e[r]),'" '),"").trim()}function Je(e){return Object.keys(e||{}).reduce((t,r)=>t+"".concat(r,": ").concat(e[r].trim(),";"),"")}function zt(e){return e.size!==Y.size||e.x!==Y.x||e.y!==Y.y||e.rotate!==Y.rotate||e.flipX||e.flipY}function Ka(e){let{transform:t,containerWidth:r,iconWidth:a}=e;const n={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:n,inner:l,path:f}}function Ga(e){let{transform:t,width:r=pt,height:a=pt,startCentered:n=!1}=e,i="";return n&&Hn?i+="translate(".concat(t.x/J-r/2,"em, ").concat(t.y/J-a/2,"em) "):n?i+="translate(calc(-50% + ".concat(t.x/J,"em), calc(-50% + ").concat(t.y/J,"em)) "):i+="translate(".concat(t.x/J,"em, ").concat(t.y/J,"em) "),i+="scale(".concat(t.size/J*(t.flipX?-1:1),", ").concat(t.size/J*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var qa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zn(){const e=Xn,t=Bn,r=m.cssPrefix,a=m.replacementClass;let n=qa;if(r!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(a))}return n}let on=!1;function at(){m.autoAddCss&&!on&&(Ya(Zn()),on=!0)}var Va={mixout(){return{dom:{css:Zn,insertCss:at}}},hooks(){return{beforeDOMElementCreation(){at()},beforeI2svg(){at()}}}};const q=ee||{};q[G]||(q[G]={});q[G].styles||(q[G].styles={});q[G].hooks||(q[G].hooks={});q[G].shims||(q[G].shims=[]);var X=q[G];const er=[],tr=function(){E.removeEventListener("DOMContentLoaded",tr),Xe=1,er.map(e=>e())};let Xe=!1;V&&(Xe=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),Xe||E.addEventListener("DOMContentLoaded",tr));function Qa(e){V&&(Xe?setTimeout(e,0):er.push(e))}function Me(e){const{tag:t,attributes:r={},children:a=[]}=e;return typeof e=="string"?Jn(e):"<".concat(t," ").concat(Ba(r),">").concat(a.map(Me).join(""),"</").concat(t,">")}function sn(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var Ja=function(t,r){return function(a,n,i,o){return t.call(r,a,n,i,o)}},it=function(t,r,a,n){var i=Object.keys(t),o=i.length,s=n!==void 0?Ja(r,n):r,l,f,u;for(a===void 0?(l=1,u=t[i[0]]):(l=0,u=a);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Za(e){const t=[];let r=0;const a=e.length;for(;r<a;){const n=e.charCodeAt(r++);if(n>=55296&&n<=56319&&r<a){const i=e.charCodeAt(r++);(i&64512)==56320?t.push(((n&1023)<<10)+(i&1023)+65536):(t.push(n),r--)}else t.push(n)}return t}function bt(e){const t=Za(e);return t.length===1?t[0].toString(16):null}function ei(e,t){const r=e.length;let a=e.charCodeAt(t),n;return a>=55296&&a<=56319&&r>t+1&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?(a-55296)*1024+n-56320+65536:a}function ln(e){return Object.keys(e).reduce((t,r)=>{const a=e[r];return!!a.icon?t[a.iconName]=a.icon:t[r]=a,t},{})}function wt(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=r,n=ln(t);typeof X.hooks.addPack=="function"&&!a?X.hooks.addPack(e,ln(t)):X.styles[e]={...X.styles[e]||{},...n},e==="fas"&&wt("fa",t)}const{styles:ie,shims:ti}=X,ni={[T]:Object.values(le[T]),[D]:Object.values(le[D]),[F]:Object.values(le[F])};let Wt=null,nr={},rr={},ar={},ir={},or={};const ri={[T]:Object.keys(se[T]),[D]:Object.keys(se[D]),[F]:Object.keys(se[F])};function ai(e){return~ja.indexOf(e)}function ii(e,t){const r=t.split("-"),a=r[0],n=r.slice(1).join("-");return a===e&&n!==""&&!ai(n)?n:null}const sr=()=>{const e=a=>it(ie,(n,i,o)=>(n[o]=it(i,a,{}),n),{});nr=e((a,n,i)=>(n[3]&&(a[n[3]]=i),n[2]&&n[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),rr=e((a,n,i)=>(a[i]=i,n[2]&&n[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),or=e((a,n,i)=>{const o=n[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const t="far"in ie||m.autoFetchSvg,r=it(ti,(a,n)=>{const i=n[0];let o=n[1];const s=n[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});ar=r.names,ir=r.unicodes,Wt=Ze(m.styleDefault,{family:m.familyDefault})};$a(e=>{Wt=Ze(e.styleDefault,{family:m.familyDefault})});sr();function jt(e,t){return(nr[e]||{})[t]}function oi(e,t){return(rr[e]||{})[t]}function Z(e,t){return(or[e]||{})[t]}function lr(e){return ar[e]||{prefix:null,iconName:null}}function si(e){const t=ir[e],r=jt("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function te(){return Wt}const Ht=()=>({prefix:null,iconName:null,rest:[]});function Ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:r=T}=t,a=se[r][e],n=xe[r][e]||xe[r][a],i=e in X.styles?e:null;return n||i||null}const li={[T]:Object.keys(le[T]),[D]:Object.keys(le[D]),[F]:Object.keys(le[F])};function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:r=!1}=t,a={[T]:"".concat(m.cssPrefix,"-").concat(T),[D]:"".concat(m.cssPrefix,"-").concat(D),[F]:"".concat(m.cssPrefix,"-").concat(F)};let n=null,i=T;const o=ha.filter(l=>l!==Un);o.forEach(l=>{(e.includes(a[l])||e.some(f=>li[l].includes(f)))&&(i=l)});const s=e.reduce((l,f)=>{const u=ii(m.cssPrefix,f);if(ie[f]?(f=ni[i].includes(f)?La[i][f]:f,n=f,l.prefix=f):ri[i].indexOf(f)>-1?(n=f,l.prefix=Ze(f,{family:i})):u?l.iconName=u:f!==m.replacementClass&&!o.some(p=>f===a[p])&&l.rest.push(f),!r&&l.prefix&&l.iconName){const p=n==="fa"?lr(l.iconName):{},h=Z(l.prefix,l.iconName);p.prefix&&(n=null),l.iconName=p.iconName||h||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!ie.far&&ie.fas&&!m.autoFetchSvg&&(l.prefix="fas")}return l},Ht());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===D&&(ie.fass||m.autoFetchSvg)&&(s.prefix="fass",s.iconName=Z(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===F&&(ie.fasds||m.autoFetchSvg)&&(s.prefix="fasds",s.iconName=Z(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||n==="fa")&&(s.prefix=te()||"fas"),s}class fi{constructor(){this.definitions={}}add(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];const n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...n[i]},wt(i,n[i]);const o=le[T][i];o&&wt(o,n[i]),sr()})}reset(){this.definitions={}}_pullDefinitions(t,r){const a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(n=>{const{prefix:i,iconName:o,icon:s}=a[n],l=s[2];t[i]||(t[i]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(t[i][f]=s)}),t[i][o]=s}),t}}let fn=[],ce={};const me={},ui=Object.keys(me);function ci(e,t){let{mixoutsTo:r}=t;return fn=e,ce={},Object.keys(me).forEach(a=>{ui.indexOf(a)===-1&&delete me[a]}),fn.forEach(a=>{const n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(i=>{typeof n[i]=="function"&&(r[i]=n[i]),typeof n[i]=="object"&&Object.keys(n[i]).forEach(o=>{r[i]||(r[i]={}),r[i][o]=n[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{ce[o]||(ce[o]=[]),ce[o].push(i[o])})}a.provides&&a.provides(me)}),r}function St(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return(ce[e]||[]).forEach(o=>{t=o.apply(null,[t,...a])}),t}function ue(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];(ce[e]||[]).forEach(i=>{i.apply(null,r)})}function ne(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return me[e]?me[e].apply(null,t):void 0}function Pt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const r=e.prefix||te();if(t)return t=Z(r,t)||t,sn(fr.definitions,r,t)||sn(X.styles,r,t)}const fr=new fi,di=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,ue("noAuto")},mi={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(ue("beforeI2svg",e),ne("pseudoElements2svg",e),ne("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Qa(()=>{hi({autoReplaceSvgRoot:t}),ue("watch",e)})}},pi={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ze(e[0]);return{prefix:r,iconName:Z(r,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Da))){const t=et(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||te(),iconName:Z(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=te();return{prefix:t,iconName:Z(t,e)||e}}}},z={noAuto:di,config:m,dom:mi,parse:pi,library:fr,findIconDefinition:Pt,toHtml:Me},hi=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=E}=e;(Object.keys(X.styles).length>0||m.autoFetchSvg)&&V&&m.autoReplaceSvg&&z.dom.i2svg({node:t})};function tt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(r=>Me(r))}}),Object.defineProperty(e,"node",{get:function(){if(!V)return;const r=E.createElement("div");return r.innerHTML=e.html,r.children}}),e}function vi(e){let{children:t,main:r,mask:a,attributes:n,styles:i,transform:o}=e;if(zt(o)&&r.found&&!a.found){const{width:s,height:l}=r,f={x:s/l/2,y:.5};n.style=Je({...i,"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")})}return[{tag:"svg",attributes:n,children:t}]}function gi(e){let{prefix:t,iconName:r,children:a,attributes:n,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...n,id:o},children:a}]}]}function Ut(e){const{icons:{main:t,mask:r},prefix:a,iconName:n,transform:i,symbol:o,title:s,maskId:l,titleId:f,extra:u,watchable:p=!1}=e,{width:h,height:g}=r.found?r:t,x=a==="fak",k=[m.replacementClass,n?"".concat(m.cssPrefix,"-").concat(n):""].filter(c=>u.classes.indexOf(c)===-1).filter(c=>c!==""||!!c).concat(u.classes).join(" ");let A={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":n,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)}};const I=x&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};p&&(A.attributes[fe]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||Ee())},children:[s]}),delete A.attributes.title);const d={...A,prefix:a,iconName:n,main:t,mask:r,maskId:l,transform:i,symbol:o,styles:{...I,...u.styles}},{children:v,attributes:w}=r.found&&t.found?ne("generateAbstractMask",d)||{children:[],attributes:{}}:ne("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=v,d.attributes=w,o?gi(d):vi(d)}function un(e){const{content:t,width:r,height:a,transform:n,title:i,extra:o,watchable:s=!1}=e,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(l[fe]="");const f={...o.styles};zt(n)&&(f.transform=Ga({transform:n,startCentered:!0,width:r,height:a}),f["-webkit-transform"]=f.transform);const u=Je(f);u.length>0&&(l.style=u);const p=[];return p.push({tag:"span",attributes:l,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function yi(e){const{content:t,title:r,extra:a}=e,n={...a.attributes,...r?{title:r}:{},class:a.classes.join(" ")},i=Je(a.styles);i.length>0&&(n.style=i);const o=[];return o.push({tag:"span",attributes:n,children:[t]}),r&&o.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),o}const{styles:ot}=X;function Ot(e){const t=e[0],r=e[1],[a]=e.slice(4);let n=null;return Array.isArray(a)?n={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:a[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:r,icon:n}}const bi={found:!1,width:512,height:512};function wi(e,t){!Kn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _t(e,t){let r=t;return t==="fa"&&m.styleDefault!==null&&(t=te()),new Promise((a,n)=>{if(r==="fa"){const i=lr(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ot[t]&&ot[t][e]){const i=ot[t][e];return a(Ot(i))}wi(e,t),a({...bi,icon:m.showMissingIcons&&e?ne("missingIconAbstract")||{}:{}})})}const cn=()=>{},xt=m.measurePerformance&&ze&&ze.mark&&ze.measure?ze:{mark:cn,measure:cn},we='FA "6.6.0"',Si=e=>(xt.mark("".concat(we," ").concat(e," begins")),()=>ur(e)),ur=e=>{xt.mark("".concat(we," ").concat(e," ends")),xt.measure("".concat(we," ").concat(e),"".concat(we," ").concat(e," begins"),"".concat(we," ").concat(e," ends"))};var $t={begin:Si,end:ur};const We=()=>{};function dn(e){return typeof(e.getAttribute?e.getAttribute(fe):null)=="string"}function Pi(e){const t=e.getAttribute?e.getAttribute(Lt):null,r=e.getAttribute?e.getAttribute(Dt):null;return t&&r}function Oi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function _i(){return m.autoReplaceSvg===!0?je.replace:je[m.autoReplaceSvg]||je.replace}function xi(e){return E.createElementNS("http://www.w3.org/2000/svg",e)}function Ei(e){return E.createElement(e)}function cr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:r=e.tag==="svg"?xi:Ei}=t;if(typeof e=="string")return E.createTextNode(e);const a=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(cr(i,{ceFn:r}))}),a}function Ai(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const je={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(r=>{t.parentNode.insertBefore(cr(r),t)}),t.getAttribute(fe)===null&&m.keepOriginalSource){let r=E.createComment(Ai(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){const t=e[0],r=e[1];if(~Ft(t).indexOf(m.replacementClass))return je.replace(e);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){const i=r[0].attributes.class.split(" ").reduce((o,s)=>(s===m.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const n=r.map(i=>Me(i)).join(`
`);t.setAttribute(fe,""),t.innerHTML=n}};function mn(e){e()}function dr(e,t){const r=typeof t=="function"?t:We;if(e.length===0)r();else{let a=mn;m.mutateApproach===Ma&&(a=ee.requestAnimationFrame||mn),a(()=>{const n=_i(),i=$t.begin("mutate");e.map(n),i(),r()})}}let Yt=!1;function mr(){Yt=!0}function Et(){Yt=!1}let Be=null;function pn(e){if(!tn||!m.observeMutations)return;const{treeCallback:t=We,nodeCallback:r=We,pseudoElementsCallback:a=We,observeMutationsRoot:n=E}=e;Be=new tn(i=>{if(Yt)return;const o=te();ge(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!dn(s.addedNodes[0])&&(m.searchPseudoElements&&a(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&m.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&dn(s.target)&&~Wa.indexOf(s.attributeName))if(s.attributeName==="class"&&Pi(s.target)){const{prefix:l,iconName:f}=et(Ft(s.target));s.target.setAttribute(Lt,l||o),f&&s.target.setAttribute(Dt,f)}else Oi(s.target)&&r(s.target)})}),V&&Be.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ii(){Be&&Be.disconnect()}function Ti(e){const t=e.getAttribute("style");let r=[];return t&&(r=t.split(";").reduce((a,n)=>{const i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),r}function ki(e){const t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let n=et(Ft(e));return n.prefix||(n.prefix=te()),t&&r&&(n.prefix=t,n.iconName=r),n.iconName&&n.prefix||(n.prefix&&a.length>0&&(n.iconName=oi(n.prefix,e.innerText)||jt(n.prefix,bt(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Ri(e){const t=ge(e.attributes).reduce((n,i)=>(n.name!=="class"&&n.name!=="style"&&(n[i.name]=i.value),n),{}),r=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(r?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||Ee()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ci(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:r,prefix:a,rest:n}=ki(e),i=Ri(e),o=St("parseNodeAttributes",{},e);let s=t.styleParser?Ti(e):[];return{iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:s,attributes:i},...o}}const{styles:Mi}=X;function pr(e){const t=m.autoReplaceSvg==="nest"?hn(e,{styleParser:!1}):hn(e);return~t.extra.classes.indexOf(Vn)?ne("generateLayersText",e,t):ne("generateSvgReplacementMutation",e,t)}let B=new Set;Gn.map(e=>{B.add("fa-".concat(e))});Object.keys(se[T]).map(B.add.bind(B));Object.keys(se[D]).map(B.add.bind(B));Object.keys(se[F]).map(B.add.bind(B));B=[...B];function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();const r=E.documentElement.classList,a=u=>r.add("".concat(an,"-").concat(u)),n=u=>r.remove("".concat(an,"-").concat(u)),i=m.autoFetchSvg?B:Gn.map(u=>"fa-".concat(u)).concat(Object.keys(Mi));i.includes("fa")||i.push("fa");const o=[".".concat(Vn,":not([").concat(fe,"])")].concat(i.map(u=>".".concat(u,":not([").concat(fe,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=ge(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),n("complete");else return Promise.resolve();const l=$t.begin("onTree"),f=s.reduce((u,p)=>{try{const h=pr(p);h&&u.push(h)}catch(h){Kn||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,p)=>{Promise.all(f).then(h=>{dr(h,()=>{a("active"),a("complete"),n("pending"),typeof t=="function"&&t(),l(),u()})}).catch(h=>{l(),p(h)})})}function Ni(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pr(e).then(r=>{r&&dr([r],t)})}function Li(e){return function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:Pt(t||{});let{mask:n}=r;return n&&(n=(n||{}).icon?n:Pt(n||{})),e(a,{...r,mask:n})}}const Di=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=Y,symbol:a=!1,mask:n=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:f={},styles:u={}}=t;if(!e)return;const{prefix:p,iconName:h,icon:g}=e;return tt({type:"icon",...e},()=>(ue("beforeDOMElementCreation",{iconDefinition:e,params:t}),m.autoA11y&&(o?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(s||Ee()):(f["aria-hidden"]="true",f.focusable="false")),Ut({icons:{main:Ot(g),mask:n?Ot(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:{...Y,...r},symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:u,classes:l}})))};var Fi={mixout(){return{icon:Li(Di)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=vn,e.nodeCallback=Ni,e}}},provides(e){e.i2svg=function(t){const{node:r=E,callback:a=()=>{}}=t;return vn(r,a)},e.generateSvgReplacementMutation=function(t,r){const{iconName:a,title:n,titleId:i,prefix:o,transform:s,symbol:l,mask:f,maskId:u,extra:p}=r;return new Promise((h,g)=>{Promise.all([_t(a,o),f.iconName?_t(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[k,A]=x;h([t,Ut({icons:{main:k,mask:A},prefix:o,iconName:a,transform:s,symbol:l,maskId:u,title:n,titleId:i,extra:p,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:r,attributes:a,main:n,transform:i,styles:o}=t;const s=Je(o);s.length>0&&(a.style=s);let l;return zt(i)&&(l=ne("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(l||n.icon),{children:r,attributes:a}}}},zi={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:r=[]}=t;return tt({type:"layer"},()=>{ue("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(n=>{Array.isArray(n)?n.map(i=>{a=a.concat(i.abstract)}):a=a.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...r].join(" ")},children:a}]})}}}},Wi={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:r=null,classes:a=[],attributes:n={},styles:i={}}=t;return tt({type:"counter",content:e},()=>(ue("beforeDOMElementCreation",{content:e,params:t}),yi({content:e.toString(),title:r,extra:{attributes:n,styles:i,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},ji={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=Y,title:a=null,classes:n=[],attributes:i={},styles:o={}}=t;return tt({type:"text",content:e},()=>(ue("beforeDOMElementCreation",{content:e,params:t}),un({content:e,transform:{...Y,...r},title:a,extra:{attributes:i,styles:o,classes:["".concat(m.cssPrefix,"-layers-text"),...n]}})))}}},provides(e){e.generateLayersText=function(t,r){const{title:a,transform:n,extra:i}=r;let o=null,s=null;if(Hn){const l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/l,s=f.height/l}return m.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,un({content:t.innerHTML,width:o,height:s,transform:n,title:a,extra:i,watchable:!0})])}}};const Hi=new RegExp('"',"ug"),gn=[1105920,1112319],yn={FontAwesome:{normal:"fas",400:"fas"},...Sa,...wa,...Ta},At=Object.keys(yn).reduce((e,t)=>(e[t.toLowerCase()]=yn[t],e),{}),Ui=Object.keys(At).reduce((e,t)=>{const r=At[t];return e[t]=r[900]||[...Object.entries(r)][0][1],e},{});function $i(e){const t=e.replace(Hi,""),r=ei(t,0),a=r>=gn[0]&&r<=gn[1],n=t.length===2?t[0]===t[1]:!1;return{value:bt(n?t[0]:t),isSecondary:a||n}}function Yi(e,t){const r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),n=isNaN(a)?"normal":a;return(At[r]||{})[n]||Ui[r]}function bn(e,t){const r="".concat(Ca).concat(t.replace(":","-"));return new Promise((a,n)=>{if(e.getAttribute(r)!==null)return a();const o=ge(e.children).filter(h=>h.getAttribute(ht)===t)[0],s=ee.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),f=l.match(Fa),u=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),a();if(f&&p!=="none"&&p!==""){const h=s.getPropertyValue("content");let g=Yi(l,u);const{value:x,isSecondary:k}=$i(h),A=f[0].startsWith("FontAwesome");let I=jt(g,x),d=I;if(A){const v=si(x);v.iconName&&v.prefix&&(I=v.iconName,g=v.prefix)}if(I&&!k&&(!o||o.getAttribute(Lt)!==g||o.getAttribute(Dt)!==d)){e.setAttribute(r,d),o&&e.removeChild(o);const v=Ci(),{extra:w}=v;w.attributes[ht]=t,_t(I,g).then(c=>{const _=Ut({...v,icons:{main:c,mask:Ht()},prefix:g,iconName:d,extra:w,watchable:!0}),R=E.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=_.map(P=>Me(P)).join(`
`),e.removeAttribute(r),a()}).catch(n)}else a()}else a()})}function Xi(e){return Promise.all([bn(e,"::before"),bn(e,"::after")])}function Bi(e){return e.parentNode!==document.head&&!~Na.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ht)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wn(e){if(V)return new Promise((t,r)=>{const a=ge(e.querySelectorAll("*")).filter(Bi).map(Xi),n=$t.begin("searchPseudoElements");mr(),Promise.all(a).then(()=>{n(),Et(),t()}).catch(()=>{n(),Et(),r()})})}var Ki={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=wn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:r=E}=t;m.searchPseudoElements&&wn(r)}}};let Sn=!1;var Gi={mixout(){return{dom:{unwatch(){mr(),Sn=!0}}}},hooks(){return{bootstrap(){pn(St("mutationObserverCallbacks",{}))},noAuto(){Ii()},watch(e){const{observeMutationsRoot:t}=e;Sn?Et():pn(St("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Pn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((r,a)=>{const n=a.toLowerCase().split("-"),i=n[0];let o=n.slice(1).join("-");if(i&&o==="h")return r.flipX=!0,r;if(i&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(i){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},t)};var qi={mixout(){return{parse:{transform:e=>Pn(e)}}},hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-transform");return r&&(e.transform=Pn(r)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:r,transform:a,containerWidth:n,iconWidth:i}=t;const o={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:u,path:p};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:r.icon.tag,children:r.icon.children,attributes:{...r.icon.attributes,...h.path}}]}]}}}};const st={x:0,y:0,width:"100%",height:"100%"};function On(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Vi(e){return e.tag==="g"?e.children:[e]}var Qi={hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-mask"),a=r?et(r.split(" ").map(n=>n.trim())):Ht();return a.prefix||(a.prefix=te()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:r,attributes:a,main:n,mask:i,maskId:o,transform:s}=t;const{width:l,icon:f}=n,{width:u,icon:p}=i,h=Ka({transform:s,containerWidth:u,iconWidth:l}),g={tag:"rect",attributes:{...st,fill:"white"}},x=f.children?{children:f.children.map(On)}:{},k={tag:"g",attributes:{...h.inner},children:[On({tag:f.tag,attributes:{...f.attributes,...h.path},...x})]},A={tag:"g",attributes:{...h.outer},children:[k]},I="mask-".concat(o||Ee()),d="clip-".concat(o||Ee()),v={tag:"mask",attributes:{...st,id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,A]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:Vi(p)},v]};return r.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(I,")"),...st}}),{children:r,attributes:a}}}},Ji={provides(e){let t=!1;ee.matchMedia&&(t=ee.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const r=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...n,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...n,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),r.push(o),r.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||r.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zi={hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return e.symbol=a,e}}}},eo=[Va,Fi,zi,Wi,ji,Ki,Gi,qi,Qi,Ji,Zi];ci(eo,{mixoutsTo:z});z.noAuto;z.config;z.library;z.dom;const It=z.parse;z.findIconDefinition;z.toHtml;const to=z.icon;z.layer;z.text;z.counter;function _n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_n(Object(r),!0).forEach(function(a){de(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_n(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Ke(e){"@babel/helpers - typeof";return Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ke(e)}function de(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function no(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function ro(e,t){if(e==null)return{};var r=no(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Tt(e){return ao(e)||io(e)||oo(e)||so()}function ao(e){if(Array.isArray(e))return kt(e)}function io(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function oo(e,t){if(e){if(typeof e=="string")return kt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return kt(e,t)}}function kt(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function so(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lo(e){var t,r=e.beat,a=e.fade,n=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,u=e.spinReverse,p=e.pulse,h=e.fixedWidth,g=e.inverse,x=e.border,k=e.listItem,A=e.flip,I=e.size,d=e.rotation,v=e.pull,w=(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":n,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":h,"fa-inverse":g,"fa-border":x,"fa-li":k,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},de(t,"fa-".concat(I),typeof I<"u"&&I!==null),de(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),de(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),de(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(c){return w[c]?c:null}).filter(function(c){return c})}function fo(e){return e=e-0,e===e}function hr(e){return fo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var uo=["style"];function co(e){return e.charAt(0).toUpperCase()+e.slice(1)}function mo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var a=r.indexOf(":"),n=hr(r.slice(0,a)),i=r.slice(a+1).trim();return n.startsWith("webkit")?t[co(n)]=i:t[n]=i,t},{})}function vr(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return vr(e,l)}),n=Object.keys(t.attributes||{}).reduce(function(l,f){var u=t.attributes[f];switch(f){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=mo(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[hr(f)]=u}return l},{attrs:{}}),i=r.style,o=i===void 0?{}:i,s=ro(r,uo);return n.attrs.style=H(H({},n.attrs.style),o),e.apply(void 0,[t.tag,H(H({},n.attrs),s)].concat(Tt(a)))}var gr=!1;try{gr=!0}catch{}function po(){if(!gr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xn(e){if(e&&Ke(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(It.icon)return It.icon(e);if(e===null)return null;if(e&&Ke(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function lt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}var En={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Xt=Tn.forwardRef(function(e,t){var r=H(H({},En),e),a=r.icon,n=r.mask,i=r.symbol,o=r.className,s=r.title,l=r.titleId,f=r.maskId,u=xn(a),p=lt("classes",[].concat(Tt(lo(r)),Tt((o||"").split(" ")))),h=lt("transform",typeof r.transform=="string"?It.transform(r.transform):r.transform),g=lt("mask",xn(n)),x=to(u,H(H(H(H({},p),h),g),{},{symbol:i,title:s,titleId:l,maskId:f}));if(!x)return po("Could not find icon",u),null;var k=x.abstract,A={ref:t};return Object.keys(r).forEach(function(I){En.hasOwnProperty(I)||(A[I]=r[I])}),ho(k[0],A)});Xt.displayName="FontAwesomeIcon";Xt.propTypes={beat:S.bool,border:S.bool,beatFade:S.bool,bounce:S.bool,className:S.string,fade:S.bool,flash:S.bool,mask:S.oneOfType([S.object,S.array,S.string]),maskId:S.string,fixedWidth:S.bool,inverse:S.bool,flip:S.oneOf([!0,!1,"horizontal","vertical","both"]),icon:S.oneOfType([S.object,S.array,S.string]),listItem:S.bool,pull:S.oneOf(["right","left"]),pulse:S.bool,rotation:S.oneOf([0,90,180,270]),shake:S.bool,size:S.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:S.bool,spinPulse:S.bool,spinReverse:S.bool,symbol:S.oneOfType([S.bool,S.string]),title:S.string,titleId:S.string,transform:S.oneOfType([S.string,S.object]),swapOpacity:S.bool};var ho=vr.bind(null,Tn.createElement);const vo={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},go={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const An=({type:e,onClick:t})=>{const r=e==="next";return N("button",{onClick:t,className:`${oe.customArrow} ${r?oe.next:oe.prev}`,children:N(Xt,{icon:r?vo:go,style:{color:"#00c46a",fontSize:"26px"},className:oe.iconSize})})},ft=({imgSrc:e,title:t,text1:r,text2:a})=>N("div",{className:oe.slide,children:He("section",{children:[N("img",{src:e,alt:t}),He("div",{className:oe.overlay,children:[N("h2",{children:t}),N("p",{children:r}),N("p",{children:a})]})]})});function Po(){return He("main",{className:oe.product,children:[N(Sr,{}),He(Nn.Carousel,{showStatus:!1,renderArrowNext:e=>N(An,{type:"next",onClick:e}),renderArrowPrev:e=>N(An,{type:"prev",onClick:e}),children:[N(ft,{imgSrc:"greenNature.jpg",title:"Emerald Haven.",text1:"One traveler described this lush, green paradise as a hidden sanctuary, where nature's colors come alive in every direction, from the towering trees to the peaceful meadows.",text2:"The serenity of this place leaves you speechless, as you wander through the endless trails, surrounded by the gentle rustling of leaves and the crisp, fresh air."}),N(ft,{imgSrc:"imgFive.jpg",title:"Golden Horizons.",text1:"A visitor once stood at the edge of the world, gazing at a sunset so golden it felt as if the sky was painted with strokes of fire and amber. Every evening here is a masterpiece.",text2:"As the sun dips below the horizon, the warmth lingers in the air, creating memories of peace and awe that last a lifetime."}),N(ft,{imgSrc:"imgFour.jpg",title:"Majestic Peaks.",text1:"Adventurers have marveled at the grandeur of these towering mountains, their rugged silhouettes stretching into the sky. It's a place where the air is thin but the experience is breathtaking.",text2:"With every step, you feel the pulse of the earth beneath you, surrounded by cliffs and valleys that have stood the test of time, leaving you in awe of nature's power."})]})]})}export{Po as default};

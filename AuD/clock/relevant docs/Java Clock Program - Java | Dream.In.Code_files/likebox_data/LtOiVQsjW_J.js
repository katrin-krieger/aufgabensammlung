/*!CK:3604837800!*//*1445389609,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fW7rF"]); }

__d("BoostedActionType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LOCAL_AWARENESS:"localawareness",PAGELIKE:"pagelike",WEBSITE:"website",CCTA:"ccta",POST:"boostedpost"};},null,{});
__d("CustomCallToActionConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={WEB:"CUSTOM_CTA_PLATFORM_WEB",IOS:"CUSTOM_CTA_PLATFORM_IOS",ANDROID:"CUSTOM_CTA_PLATFORM_ANDROID",PRIMARY_LINK:"customCTAEditPrimaryLink",PRIMARY_LINK_TYPE:"customCTAEditPrimaryLinkType",FALLBACK_LINK_TYPE:"customCTAEditFallbackLinkType",FALLBACK_LINK:"customCTAEditFallbackLink",APP_ID:"appID",SKIP_PROMOTION:"skip_promotion",GK_OPENTABLE:"ccta_open_table",GK_STORE_FRONT_WWW_VIEWER:"ccta_store_front_www_viewer",GK_CONTACT_US_LEADGEN_WWW_VIEWER:"ccta_contactus_leadgen_www_viewer",GK_BYPASS:"pages_custom_cta_bypass",GK_PID:"pages_custom_cta_pid_2",GK_UID:"pages_custom_cta_uid",GK_CONTEXTUAL_ROW_UID:"pages_custom_cta_contextual_row_uid",GK_CONTEXTUAL_ROW_ADMIN_UID:"pages_custom_cta_contextual_row_admin_uid",GK_FOLLOW_BUTTON_IN_LIKE_DROPDOWN:"pages_follow_button_in_like_dropdown",GK_HOVER_CARD:"custom_cta_hover_card_uid",GK_SHOW_IN_SPRINGBOARD_UID:"pages_custom_cta_show_in_springboard_uid",GK_ADMIN_UID:"custom_cta_admin_uid",GK_PROMOTION_ADMIN_UID:"custom_cta_promotion_admin_uid_2",GK_CUSTOM_CTA_CALLOUT:"custom_cta_callout",GK_CTA_MSITE_CREATION_FLOW:"cta_msite_creation_flow",GK_SHOW_VIEWER_UNIT_IN_LOGGED_OUT_VIEW:"custom_cta_show_viewer_unit_when_logged_out",GK_CTA_MSITE_BLUE_BUTTON_ENTRY_POINT:"cta_msite_blue_button_entry_point",GK_CCTA_NEW_DIALOG:"ccta_new_dialog",GK_CCTA_CHARITY_DONATE:"ccta_donate_now",GK_CCTA_DONATE_NOW:"enable_donate_now_cta",GK_CCTA_LEAD_GEN:"ccta_lead_gen",GK_CCTA_MESSENGER:"ccta_messenger",GK_CCTA_PHONE_CALL:"ccta_phone_call",GK_CCTA_STORE_FRONT:"ccta_store_front_admin_flow",GK_CCTA_PROMOTION_DIALOG:"ccta_promotion_dialog",ELIGIBLE_CALL_TO_ACTION_CONFIG_FIELD:"eligibleCallToActionConfig",PAYLOAD_CONFIG_FIELD:"config",NECTAR_APP_NAME:"custom_cta",OPEN_APP_ID:1,OPEN_WEBSITE_ID:2,TEST_ID_LANDING_PAGE_UNIT:"ccta_landing_page_unit",NAX_CTA_STEP_LOGGING_SOURCE:"page_nax"};},null,{});
__d("ManagedError",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){Error.prototype.constructor.call(this,i);this.message=i;this.innerError=j;}h.prototype=new Error();h.prototype.constructor=h;f.exports=h;},null);
__d('AssertionError',['ManagedError'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){h.prototype.constructor.apply(this,arguments);}i.prototype=new h();i.prototype.constructor=i;f.exports=i;},null);
__d('Assert',['AssertionError','sprintf'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(o,p){if(typeof o!=='boolean'||!o)throw new h(p);return o;}function k(o,p,q){var r;if(p===undefined){r='undefined';}else if(p===null){r='null';}else{var s=Object.prototype.toString.call(p);r=/\s(\w*)/.exec(s)[1].toLowerCase();}j(o.indexOf(r)!==-1,q||i('Expression is of type %s, not %s',r,o));return p;}function l(o,p,q){j(p instanceof o,q||'Expression not instance of type');return p;}function m(o,p){n['is'+o]=p;n['maybe'+o]=function(q,r){if(q!=null)p(q,r);};}var n={isInstanceOf:l,isTrue:j,isTruthy:function(o,p){return j(!!o,p);},type:k,define:function(o,p){o=o.substring(0,1).toUpperCase()+o.substring(1).toLowerCase();m(o,function(q,r){j(p(q),r);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(o){m(o,k.bind(null,o.toLowerCase()));});f.exports=n;},null);
__d('AdsUtils',['Assert'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(ba){return ba===Object(ba);}function j(ba,ca){if(Array.isArray(ba)||typeof ba==='string')return ba.indexOf(ca)!==-1;return ca in ba;}function k(ba){if(Array.isArray(ba)||typeof ba==='string')return ba.length;return i(ba)?Object.keys(ba).length:0;}function l(ba,ca){if(ba===undefined&&ca===undefined){return true;}else if(ba===undefined){return false;}else if(ca===undefined){return false;}else if(ba.length!=ca.length){return false;}else{for(var da=0;da<ba.length;da++){var ea=false;for(var fa=0;fa<ca.length;fa++){var ga=true,ha=Object.keys(ba[da]);for(var ia=0;ia<ha.length;ia++){var ja=ha[ia];if(ba[da][ja]!=ca[fa][ja]){ga=false;break;}}if(ga)ea=true;}if(!ea)return false;}return true;}}function m(ba,ca,da){var ea={};for(var fa=0;fa<ba.length;++fa)ea[ba[fa][ca]]=da===undefined?ba[fa]:ba[fa][da];return ea;}function n(ba,ca){var da={};for(var ea=0;ea<ba.length;++ea){if(da[ba[ea][ca]]===undefined)da[ba[ea][ca]]=[];da[ba[ea][ca]].push(ba[ea]);}return da;}function o(ba){var ca={};Object.keys(ba).forEach(function(da){return ca[ba[da]]=da;});return ca;}function p(ba,ca){var da={};Object.keys(ba).forEach(function(ea){da[ea]=ba[ea]?ba[ea][ca]:undefined;});return da;}function q(ba){var ca=ba;if(Array.isArray(ba)){ca=ba.map(q);}else if(i(ba)){ca={};Object.keys(ba).forEach(function(da){return ca[da]=q(ba[da]);});}return ca;}function r(ba){return ba.replace(/([a-z])([A-Z])/g,'$1_$2').toLowerCase();}function s(ba){return ba.replace(/_[a-z]/g,function(ca){return ca.charAt(1).toUpperCase();});}function t(ba,ca){h.define('scalar',function(fa){return typeof fa==='number'||typeof fa==='boolean';});h.isScalar(ca);var da={};for(var ea=0;ea<ba.length;++ea)da[ba[ea]]=ca;return da;}function u(ba,ca,da){var ea={},fa=Object.keys(babelHelpers._extends({},ba,ca));for(var ga=0;ga<fa.length;ga++){var ha=fa[ga],ia=da(ba.hasOwnProperty(ha),ca.hasOwnProperty(ha));if(ia<0){ea[ha]=ba[ha];}else if(ia>0)ea[ha]=ca[ha];}return ea;}function v(ba,ca){return u(ba,ca,function(da,ea){return da&&ea?-1:0;});}function w(ba,ca){return u(ba,ca,function(da,ea){return da?-1:1;});}var x=function(ba,ca,da,ea){ea=ea||function(ha,ia){return ha==ia;};if(ba.length===0)return da;var fa=ca(ba[0]),ga=!ba.some(function(ha){return !ea(ca(ha),fa);});if(ga){return fa;}else return da;};function y(ba,ca){if(Array.isArray(ba)&&Array.isArray(ca)){if(ba.length!==ca.length)return false;for(var da=0;da<ba.length;++da)if(!y(ba[da],ca[da]))return false;return true;}if(i(ba)&&i(ca)){var ea=Object.keys(ba);for(var fa=0;fa<ea.length;fa++){var ga=ea[fa];if(!ca.hasOwnProperty(ga))return false;if(!y(ba[ga],ca[ga]))return false;}return true;}return ba==ca;}function z(ba){var ca={};Object.keys(ba).forEach(function(da){var ea=s(da);ca[ea]=ba[da];});return ca;}function aa(ba){var ca={};Object.keys(ba).forEach(function(da){var ea=r(da);ca[ea]=ba[da];});return ca;}f.exports={arraysOfMapEquals:l,camelCaseKey:s,camelCaseToUnderscoreKeys:aa,clone:q,contains:j,count:k,flip:o,getSharedValue:x,indexedMap:m,invertedMap:n,isEqualWeak:y,isObject:i,mapFill:t,mapIntersectKey:v,mapUnionKey:w,pluckPreserveKey:p,underscoreKey:r,underscoreToCamelCaseKeys:z};},null);
__d('BoostedPagelikeConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={APPLICATION_ID:'317954918290638',ADMINPANEL:'admin_panel',CONTEXTUALDIALOG:'contextual_dialog',PAGESMANAGER:'pages_manager',SPRINGBOARDFLYOUT:'springboard_flyout',PAGETABLHS:'page_tab_lhs',DELETE:'inactive',PAUSE:'paused',ACTIVE:'active',EXPAND:'boosted_pagelike/expand',MUTATE:'boosted_pagelike/mutate',ACCOUNT_CHANGE:'boosted_pagelike/account_change',BUDGET_CHANGE:'boosted_pagelike/budget_change',STATUS_CHANGE:'boosted_pagelike/status_change',DURATION_CHANGE:'boosted_pagelike/duration_change',DATE_PICKER_VISIBILITY:'boosted_pagelike/date_picker_visibility',CURRENCY_CHANGE:'boosted_pagelike/currency_change',TARGETING_INIT:'boosted_pagelike/targeting_init',TARGETING_CHANGE:'boosted_pagelike/targeting_change',PANEL_STATUS_CHANGE:'boosted_pagelike/panel_status_change',PANEL_STATUS_CHANGE_FINISH:'boosted_pagelike/panel_status_change_finish',MENU_CF_REDIRECT:'boosted_pagelike/menu_cf_redirect',SHOW_TEXT_POLICY_WARNING:'boosted_pagelike/show_text_policy_warning',HIDE_TEXT_POLICY_WARNING:'boosted_pagelike/hide_text_policy_warning',GEO_TARGET_LEVELS:{CITY:'city',REGION:'region',COUNTRY:'country'},MAX_COUNTRY_COUNT:25,COUNTRY_COUNT_WARNING:10,KEYWORD_SUGGESTIONS_DISPLAY_LIMIT:5,KEYWORD_CATEGORY_RAW:0,KEYWORD_CATEGORY_WIKI:1,DIALOG_PADDING_TO_BOTTOM:180,BW_DIALOG_MAX_HEIGHT:531,DIALOG_MAX_HEIGHT:519,PAYLOAD_SOURCE_CLIENT:'client',PAYLOAD_SOURCE_SERVER:'server'},i={GK_EDIT_CREATIVE:'boosted_pagelike_edit_creative',GK_BOOSTED_WEBSITE_INTEGRITY_CHECK:'boosted_website_integrity_check'};Object.assign(h,i);f.exports=h;},null);
__d('AdsDispatchActionTypeUtils',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){var k={};for(var l in j)k[l]=i+l;return k;}f.exports={createActionTypeMap:h};},null);
__d('CalendarUtils',['DateStrings'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l,m,n){var o=[],p=n.order;for(var q=0;q<3;++q)if(p[q]==='d'){o.push(k);}else if(p[q]==='m'){o.push(l);}else o.push(m);return o.join(n.separator);}var j={placeholderDateString:function(k){return i(h.getDayPlaceholder(),h.getMonthPlaceholder(),h.getYearPlaceholder(),k);},dateToString:function(k,l){return i(k.getDate(),k.getMonth()+1,k.getFullYear(),l);},utcDateToString:function(k,l){return i(k.getUTCDate(),k.getUTCMonth()+1,k.getUTCFullYear(),l);},stringToDate:function(k,l){var m,n,o,p=k.split(/[/.,\s-]+/);if(p.length<3)return false;for(var q=0;q<3;++q){var r=p.shift();if(l[q]==='d'){m=parseInt(r,10);if(isNaN(m)||m<1)return false;}else if(l[q]==='m'){n=parseInt(r,10)-1;if(isNaN(n)||n<0||n>11)return false;}else{o=parseInt(r,10);if(o<100&&o>=0&&r.length==2){var s=new Date().getFullYear();if(Math.abs(s/100-o)>=2){var t=o+Math.floor(s/100)*100;o=t>s+4?t-100:t;}}if(isNaN(o)||o<1000)return false;}}if(new Date(o,n+1,0).getDate()<m)return false;return new Date(o,n,m);}};f.exports=j;},null);
__d("DatePickerRestraints",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={enforceDateIsEarlierThan:function(i){return function(j){return j.getTime()<i.getTime();};},enforceDateIsNoEarlierThan:function(i){return function(j){return j.getTime()>=i.getTime();};},enforceDateIsLaterThan:function(i){return function(j){return j.getTime()>i.getTime();};},enforceDateIsNoLaterThan:function(i){return function(j){return j.getTime()<=i.getTime();};},isValidDate:function(i,j){var k=i instanceof Date&&!isNaN(i.getTime());if(k&&j)return j.every(function(l){return l(i);});return k;}};f.exports=h;},null);
__d("UTCUtils",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=-1*7*60*60*1000,i=-1*8*60*60*1000,j={dateToUTC:function(k){return Date.UTC(k.getFullYear(),k.getMonth(),k.getDate(),k.getHours(),k.getMinutes(),k.getSeconds(),k.getMilliseconds());},dateToUTCDate:function(k){return new Date(k.getUTCFullYear(),k.getUTCMonth(),k.getUTCDate(),k.getUTCHours(),k.getUTCMinutes(),k.getUTCSeconds(),k.getUTCMilliseconds());},getPacificOffsetAt:function(k){if(k<=1.32057e+12){return h;}else if(k<=1.33146e+12){return i;}else if(k<=1352019600000){return h;}else if(k<=1362909600000){return i;}else if(k<=1383469200000){return h;}else if(k<=1394359200000){return i;}else if(k<=1414918800000){return h;}else if(k<=1425808800000){return i;}else if(k<=1446368400000){return h;}else return i;},offsetFromPacificTime:function(k){k=k||new Date();var l=j.getPacificOffsetAt(+k)/1000/60/60,m=k.getTimezoneOffset()/60;return l+m;}};f.exports=j;},null);
__d('DatePickerInput.react',['CalendarUtils','DateFormatConfig','DatePickerRestraints','InputSelection','Keys','React','ReactDOM','ReactComponentWithPureRenderMixin','UTCUtils','cloneWithProps','cx','emptyFunction','getEventCharCode','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){'use strict';if(c.__markCompiled)c.__markCompiled();var v=m.PropTypes,w=/\d/,x={order:i.numericDateOrder,separator:i.numericDateSeparator};function y(ba){var ca=/[1-9]{1}[0-9]*/g,da,ea={},fa=0;while(da=ca.exec(ba)){ea[x.order[fa]]=da;fa++;}return ea;}function z(ba){if(!ba)return '';return h.utcDateToString(new Date(ba),x);}var aa=m.createClass({displayName:'DatePickerInput',mixins:[o],propTypes:{dateRestraints:v.arrayOf(v.func),icon:v.element,name:v.string,onBlur:v.func,onChange:v.func,onDateRemoved:v.func,onFocus:v.func,onInvalidDateSelected:v.func,placeholder:v.string,selectTime:v.number},getDefaultProps:function(){return {onBlur:s,onChange:s,onDateRemoved:s,onFocus:s,onInvalidDateSelected:s,placeholder:h.placeholderDateString(x)};},getInitialState:function(){return {inputValue:z(this.props.selectTime)};},componentWillReceiveProps:function(ba){if(this.props.selectTime||ba.selectTime)this.setState({inputValue:z(ba.selectTime)});},componentDidUpdate:function(){if(this.refs.inputBox&&this.state.inputValue&&this._partName){var ba=y(this.state.inputValue),ca=ba[this._partName];k.set(n.findDOMNode(this.refs.inputBox),ca.index,ca.index+ca[0].length);}delete this._partName;},onBlur:function(event){if(!this.props.selectTime&&event.target.value.length)this.setState({inputValue:''});this.props.onBlur();},onChange:function(event){var ba=event.target.value;if(ba){var ca=h.stringToDate(ba,x.order),da=false;if(ca){da=j.isValidDate(ca,this.props.dateRestraints);var ea=new Date(p.dateToUTC(ca));if(da){this.props.onChange(ea);}else this.props.onInvalidDateSelected(ea);}}else this.props.onDateRemoved();if(!ca||!da)this.setState({inputValue:ba});},onIconClick:function(event){n.findDOMNode(this.refs.inputBox).focus();},onKeyDown:function(event){var ba=event.keyCode;if(ba==l.RETURN){event.preventDefault();this.onBlur(event);return;}if(ba===l.TAB){this.onBlur(event);return;}if(ba==l.UP||ba==l.DOWN){event.preventDefault();var ca=ba==l.UP?1:-1,da=event.target,ea=k.get(da),fa=y(da.value),ga=new Date(this.props.selectTime);for(var ha in fa){var ia=fa[ha],ja=ia.index+ia[0].length;if(ea.start>=ia.index&&ea.start<=ja){switch(ha){case 'm':ga.setMonth(ga.getMonth()+ca);break;case 'd':ga.setDate(ga.getDate()+ca);break;case 'y':ga.setFullYear(ga.getFullYear()+ca);break;}break;}}if(j.isValidDate(ga,this.props.dateRestraints)){this._partName=ha;this.props.onChange(ga);}}},onKeyUp:function(event){var ba=event.keyCode;if(ba==l.UP||ba==l.DOWN)event.preventDefault();if(ba==l.ESC)this.onBlur(event);},onKeyPress:function(event){var ba=String.fromCharCode(t(event.nativeEvent)),ca=i.numericDateSeparator;if(ba===ca||w.test(ba))return;event.preventDefault();},render:function(){var ba=this.props,ca=ba.icon,da=ba.selectTime,ea=da?p.dateToUTCDate(new Date(da)).getTime():'';if(ca)ca=q(ca,{className:"_3smn",onClick:this.onIconClick});var fa=u(this.props.className,"_3smo");return (m.createElement('span',{className:fa},ca,m.createElement('input',{ref:'inputBox',className:"_3smp",type:'text',placeholder:this.props.placeholder,value:this.state.inputValue,onChange:this.onChange,onFocus:this.props.onFocus,onKeyDown:this.onKeyDown,onKeyPress:this.onKeyPress,onKeyUp:this.onKeyUp}),m.createElement('input',{type:'hidden',name:this.props.name,value:ea})));}});f.exports=aa;},null);
__d('XUICalendar.react',['DateFormatConfig','List.react','React','cx','emptyFunction','joinClasses','keyOf'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=j.PropTypes,p=7,q=6,r="_5hpv clearfix",s=n({start:null}),t=n({mid:null}),u=n({end:null}),v=n({only:null}),w=j.createClass({displayName:'XUICalendar',propTypes:{interactive:o.bool,dateRestraints:o.arrayOf(o.func),focusTime:o.number.isRequired,selectTime:o.number,rangeSelectTime:o.number,highlightedTimes:o.array,allowVariableRowCount:o.bool,allowDuplicateSelection:o.bool,onSelectDateChange:o.instanceOf(Function).isRequired,dayInnerFormatter:o.func},getDefaultProps:function(){return {interactive:true,rangeSelectTime:null,allowVariableRowCount:true,allowDuplicateSelection:false};},selectDate:function(y){var z=!this.isDateSelected(y)||this.props.allowDuplicateSelection;if(this.isDateValid(y)&&z)this.props.onSelectDateChange(y);},_areSameDate:function(y,z){return (y&&z&&y instanceof Date&&z instanceof Date&&w.normalizeDate(y).getTime()===w.normalizeDate(z).getTime());},isDateSelected:function(y){return this._areSameDate(y,new Date(this.props.selectTime));},isDateHighlighted:function(y){return this.props.highlightedTimes&&this.props.highlightedTimes.some((function(z){return this._areSameDate(y,new Date(z));}).bind(this));},isDateValid:function(y){if(this.props.dateRestraints)return this.props.dateRestraints.every(function(z){return z(y);});return true;},render:function(){var y=new Date(this.props.focusTime),z=w.normalizeDate(y);z.setUTCDate(1);var aa=h.weekStart,ba=this.props.selectTime,ca=null,da=null;if(this.props.rangeSelectTime!==null)ca=w.normalizeDate(new Date(this.props.rangeSelectTime)).getTime();if(ba&&ca){var ea=Math.min(ba,ca),fa=Math.max(ba,ca);da={minTime:ea,maxTime:fa,hasDuration:ea<fa};}var ga=[],ha=[],ia=(z.getUTCDay()+6-aa)%7;for(var ja=0;ja<ia;++ja)ha.push(j.createElement('span',{key:ja,className:"_5c68"}));var ka=this.props.interactive?this.selectDate:l;while(z.getUTCMonth()==y.getUTCMonth()){var la=z.getTime(),ma=new Date(la);z.setUTCDate(z.getUTCDate()+1);var na=z.getUTCMonth()>ma.getUTCMonth(),oa=(ha.length+1)%7,pa=oa==1||ma.getUTCDate()==1,qa=oa===0||na,ra=null,sa=null;if(da){if(la>da.minTime&&la<da.maxTime){ra=t;}else if(la==da.minTime){ra=s;}else if(la==da.maxTime)ra=u;if(!da.hasDuration){sa=v;}else if(qa){sa=pa||ra==s?v:u;}else if(pa){sa=ra==u?v:s;}else sa=t;}ha.push(j.createElement(x,{key:ma,date:ma,onSelect:ka,valid:this.isDateValid(ma),selected:this.isDateSelected(ma),highlighted:this.isDateHighlighted(ma),rangePosition:ra,rowPosition:sa,dayInnerFormatter:this.props.dayInnerFormatter}));if(qa){ga.push(ha);ha=[];}}if(ha.length)ga.push(ha);if(!this.props.allowVariableRowCount)for(var ta=ga.length;ta<q;++ta)ga.push(j.createElement('span',{className:"_5c68"}));ga=ga.map(function(wa,xa){return j.createElement('div',{key:xa,className:r},wa);});var ua=[];for(var va=0;va<p;++va)ua.push(j.createElement('li',{key:va,className:"_5c69"},h.shortDayNames[(aa+va)%7]));return (j.createElement('div',babelHelpers._extends({},this.props,{className:m(this.props.className,"_5c6a"+(this.props.interactive?' '+"_5hpw":''))}),j.createElement(i,{className:"_5c6g _50f8",direction:'horizontal',border:'none',spacing:'none'},ua),j.createElement('div',{className:"_5c6h clearfix"},ga)));}});w.normalizeDate=function(y){return new Date(Date.UTC(y.getUTCFullYear(),y.getUTCMonth(),y.getUTCDate()));};var x=j.createClass({displayName:'Day',propTypes:{date:o.instanceOf(Date).isRequired,onSelect:o.func.isRequired,valid:o.bool,selected:o.bool,highlighted:o.bool,rowPosition:o.oneOf([s,t,u,v]),rangePosition:o.oneOf([s,t,u]),dayInnerFormatter:o.func},render:function(){var y=this.props,z=y.rowPosition,aa=y.rangePosition,ba=aa==s||aa==t&&z==s,ca=aa==u||aa==t&&z==u,da=z==v,ea=aa==s||aa==u,fa="_5c66"+(y.valid?' '+"_5hpx":'')+(aa?' '+"_5hpy":'')+(ba?' '+"_5hpz":'')+(ca?' '+"_5hp-":'')+(da?' '+"_5hp_":'')+(ea?' '+"_5hq0":''),ga="_5hq1"+(y.selected?' '+"_5hq2":'')+(y.highlighted?' '+"_5xur":''),ha={};if(y.dayInnerFormatter)ha=y.dayInnerFormatter(y.date);return (j.createElement('a',babelHelpers._extends({},this.props,{className:m(this.props.className,fa),style:ha,href:'#',onClick:this._onSelect}),j.createElement('span',{className:ga},this.props.date.getUTCDate())));},_onSelect:function(){if(!this.props.valid)return;this.props.onSelect(this.props.date);}});f.exports=w;},null);
__d('XUIMonthPagerCalendar.react',['React','Image.react','UTCUtils','XUICalendar.react','cx','fbt','formatDate','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=h.PropTypes,r=h.createClass({displayName:'XUIMonthPagerCalendar',propTypes:{dateRestraints:q.array,focusTime:q.number.isRequired,selectTime:q.number,allowVariableRowCount:q.bool,allowDuplicateSelection:q.bool,highlightedTimes:q.array,onFocusDateChange:q.instanceOf(Function).isRequired,onSelectDateChange:q.instanceOf(Function).isRequired,dayInnerFormatter:q.func},pageByMonthDelta:function(s){var t=new Date(this.props.focusTime);t.setUTCDate(1);t.setUTCMonth(t.getUTCMonth()+s);this.props.onFocusDateChange(t);},onPagerPrev:function(){this.pageByMonthDelta(-1);},onPagerNext:function(){this.pageByMonthDelta(1);},render:function(){var s=this.props,t=j.dateToUTCDate(new Date(s.focusTime)),u=m._("{month} {year}",[m.param('month',n(t,'F',{skipPatternLocalization:true})),m.param('year',t.getUTCFullYear())]);return (h.createElement('div',babelHelpers._extends({},this.props,{className:p(this.props.className,"_5hpp")}),h.createElement('div',{className:"_5hpq"},h.createElement('h2',{className:"_5hpr _c24"},u),h.createElement('button',{type:'button',className:"_5hps _5hpt",onClick:this.onPagerPrev},h.createElement(i,{src:o('/images/deprecated/glyphs/dark/triangle-left_s.png'),alt:m._("Previous month")})),h.createElement('button',{type:'button',className:"_5hps _5hpu",onClick:this.onPagerNext},h.createElement(i,{src:o('/images/deprecated/glyphs/dark/triangle-right_s.png'),alt:m._("Next month")}))),h.createElement(k,{dateRestraints:s.dateRestraints,focusTime:s.focusTime,selectTime:s.selectTime,highlightedTimes:s.highlightedTimes,allowDuplicateSelection:s.allowDuplicateSelection,allowVariableRowCount:s.allowVariableRowCount,onFocusDateChange:s.onFocusDateChange,onSelectDateChange:s.onSelectDateChange,dayInnerFormatter:s.dayInnerFormatter})));}});f.exports=r;},null);
__d('XUIDatePicker.react',['CalendarUtils','ContextualLayer.react','ContextualLayerAutoFlip','ContextualLayerUpdateOnScroll','DateFormatConfig','DatePickerInput.react','DatePickerRestraints','LayerTogglerContext','React','ReactDOM','Image.react','ReactLayeredComponentMixin','Toggler','UTCUtils','XUICard.react','XUICalendar.react','XUIMonthPagerCalendar.react','cx','emptyFunction','invariant','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){if(c.__markCompiled)c.__markCompiled();var da=p.PropTypes,ea={ContextualLayerAutoFlip:j,ContextualLayerUpdateOnScroll:k,LayerTogglerContext:o},fa={order:l.numericDateOrder,separator:l.numericDateSeparator};function ga(na){var oa=new Date();if(na){oa.setTime(na);}else{var pa=u.dateToUTC(oa);oa.setTime(pa);}return w.normalizeDate(oa).getTime();}function ha(na){var oa=/^\d{4}-\d{2}-\d{2}$/.test(na);!oa?aa(0):undefined;var pa=Date.parse(na);!pa?aa(0):undefined;return pa;}function ia(na){!(!na.initialDate||!na.initialTime)?aa(0):undefined;return na.initialDate?ha(na.initialDate):na.initialTime;}function ja(na){!(!na.earliestDate||!na.earliestTime)?aa(0):undefined;return na.earliestDate?ha(na.earliestDate):na.earliestTime?na.earliestTime*1000:null;}function ka(na){!(!na.latestDate||!na.latestTime)?aa(0):undefined;return na.latestDate?ha(na.latestDate):na.latestTime?na.latestTime*1000:null;}function la(na,oa){var pa=ia(na);if(!oa&&na.initialFocusTime)pa=na.initialFocusTime;return ga(pa);}var ma=p.createClass({displayName:'XUIDatePicker',mixins:[s],propTypes:{name:da.string,initialDate:da.string,initialTime:da.number,initialFocusTime:da.number,allowDuplicateSelection:da.bool,shouldSetDefaultDate:da.bool,earliestDate:da.string,earliestTime:da.number,latestDate:da.string,latestTime:da.number,dateRestraints:da.array,highlightedTimes:da.array,onCalendarSelectDateChange:da.func,onInvalidDateSelected:da.func,onDateRemoved:da.func,icon:da.element,placeholder:da.string,dayInnerFormatter:da.func,calendar:da.func,calendarProps:da.object,behaviors:da.object},getDefaultProps:function(){return {shouldSetDefaultDate:true,allowDuplicateSelection:false,onCalendarSelectDateChange:z,onInvalidDateSelected:z,onDateRemoved:z,placeholder:h.placeholderDateString(fa),calendar:x,icon:p.createElement(r,{src:ba('/images/calendar/calendar_icon.png')})};},togglerSub:null,getInitialState:function(){return babelHelpers._extends({},this._calculateState(this.props),{showLayer:false});},componentWillReceiveProps:function(na){this.setState(this._calculateState(na));},_calculateState:function(na){var oa=ia(na),pa=ga(oa),qa={selectTime:this.props.shouldSetDefaultDate||oa?pa:null};if(!this.state||!this.state.selectTime||pa!==this.state.selectTime)qa.focusTime=la(na,this.state);return qa;},componentWillUnmount:function(){this.removeSubscriptions();},removeSubscriptions:function(){this.togglerSub&&this.togglerSub.unsubscribe();this.togglerSub=null;},renderLayers:function(){if(!this.state.showLayer)return {};var na=this.props.calendar;return {layer:p.createElement(i,{contextRef:(function(){return this.refs.inputBox;}).bind(this),position:'below',offsetY:3,behaviors:this._getBehaviors(),shown:this.state.showLayer},p.createElement(v,{className:"_5c6i"},p.createElement(na,babelHelpers._extends({},this.props.calendarProps,{highlightedTimes:this.props.highlightedTimes,dateRestraints:this._getDateRestraintsFromProps(this.props),focusTime:this.state.focusTime,selectTime:this.state.selectTime,onFocusDateChange:this.onCalendarFocusDateChange,onSelectDateChange:(function(oa){q.findDOMNode(this.refs.inputBox).focus();this.onCalendarSelectDateChange(oa);this._hide();}).bind(this),allowDuplicateSelection:this.props.allowDuplicateSelection,dayInnerFormatter:this.props.dayInnerFormatter}))))};},_getBehaviors:function(){return babelHelpers._extends({},ea,this.props.behaviors);},_hide:function(){t.hide(q.findDOMNode(this));},onCalendarFocusDateChange:function(na){this.setState({focusTime:na.getTime()});},onCalendarSelectDateChange:function(na){this.setState({focusTime:na.getTime(),selectTime:na.getTime()});this.props.onCalendarSelectDateChange(na);},onDateRemoved:function(){this.setState({selectTime:null});this.props.onDateRemoved();},onInvalidDateSelected:function(na){this.setState({selectTime:null});this.props.onInvalidDateSelected(na);},onTogglerShowOrHide:function(na,oa){if(oa.active===q.findDOMNode(this))if(na=='show'){this.setState({showLayer:true});}else{this.removeSubscriptions();this.setState({showLayer:false});}},onInputFocus:function(){this.removeSubscriptions();this.togglerSub=t.subscribe(['show','hide'],this.onTogglerShowOrHide);t.show(q.findDOMNode(this));},_getDateRestraintsFromProps:function(na){if(na.dateRestraints)return na.dateRestraints;var oa=[],pa=ja(na);if(pa)oa.push(n.enforceDateIsNoEarlierThan(new Date(pa)));var qa=ka(na);if(qa)oa.push(n.enforceDateIsNoLaterThan(new Date(qa)));return oa;},render:function(){return (p.createElement(m,babelHelpers._extends({},this.props,{className:ca(this.props.className,"_5c6j"),dateRestraints:this._getDateRestraintsFromProps(this.props),icon:this.props.icon,name:this.props.name,onBlur:this._hide,onChange:this.onCalendarSelectDateChange,onDateRemoved:this.onDateRemoved,onFocus:this.onInputFocus,onInvalidDateSelected:this.onInvalidDateSelected,placeholder:this.props.placeholder,ref:'inputBox',selectTime:this.state.selectTime})));}});f.exports=ma;},null);
__d('XUIDialogConfirmButton.react',['React','XUIDialogButton.react','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUIDialogConfirmButton',render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{action:'confirm',label:j._("Confirm")})));}});f.exports=k;},null);
__d('CctaPayloadSources',['keyMirror'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h({SERVER_ACTION:null,VIEW_ACTION:null});f.exports=i;},null);
__d('CctaAppDispatcher',['Dispatcher','CctaPayloadSources'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=Object.assign(new h(),{handleServerAction:function(k){var l={source:i.SERVER_ACTION,action:k};setTimeout((function(){this.dispatch(l);}).bind(this));},handleViewAction:function(k){var l={source:i.VIEW_ACTION,action:k};setTimeout((function(){this.dispatch(l);}).bind(this));},handleViewActionSync:function(k){var l={source:i.VIEW_ACTION,action:k};this.dispatch(l);}});f.exports=j;},null);
__d('CustomCTAConstants',['fbt','CustomCallToActionConstants','CustomCallToActionTypes'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('CustomCallToActionTypes').TYPES,k={NO_DIALOG:'CUSTOM_CTA_DIALOG_NONE',DELETE_DIALOG:'CUSTOM_CTA_DIALOG_DELETE',EDIT_DIALOG:'CUSTOM_CTA_DIALOG_EDIT',PROMOTE_DIALOG:'CUSTOM_CTA_DIALOG_PROMOTE',UPDATE_ALERT_DIALOG:'CUSTOM_CTA_DIALOG_UPDATE_ALERT',OPEN_APP_ID:"1",OPEN_WEBSITE_ID:"2",SHOW_FLYOUT:'SHOW_FLYOUT',PAGE_PRESENCE_LHS_CARD:'pagePresenceLhsCard',CREATE_DIALOG_WIDTH:778,CREATE_DIALOG_HEIGHT:504,PREVIEW_WIDTH:436,PREVIEW_HEIGHT:416,NEW_PREVIEW_WIDTH:412,NEW_PREVIEW_HEIGHT:346,SELECTOR_WIDTH:194,URI_TRUNCATE_LENGTH:30,WEBSITE_BAR_ITEM:'Website',IPHONE_BAR_ITEM:'iPhone',ANDROID_BAR_ITEM:'Android',CREATE_CTA_TYPE_OPTIONS:[j.BOOK_NOW,j.CONTACT_US,j.OPEN_APP,j.PLAY_NOW,j.SHOP_NOW,j.SIGN_UP,j.WATCH_NOW],PLATFORM_TYPE:'CUSTOM_CTA_PLATFORM_TYPE',WEB:i.WEB,IOS:i.IOS,ANDROID:i.ANDROID,APP_ID:i.APP_ID,FALLBACK_LINK_TYPE:i.FALLBACK_LINK_TYPE,FALLBACK_LINK:i.FALLBACK_LINK,PRIMARY_LINK:i.PRIMARY_LINK,PRIMARY_LINK_TYPE:i.PRIMARY_LINK_TYPE,FALLBACK_INSTALL_APP:'fallback_install_app',FALLBACK_GO_TO_WEBSITE:'fallback_go_to_website',API_URL:'https://graph.facebook.com/',INSIGHTS_LABEL:h._("View Insights"),EDIT_LABEL:h._("Edit call to action"),DELETE_LABEL:h._("Delete call to action"),TEST_LABEL:h._("Go to Link..."),PROMOTE_LABEL:h._("Promote"),EDIT_PROMOTION_LABEL:h._("Edit Promotion"),DELETE_DIALOG_TITLE:h._("Delete Call-to-Action Button"),DELETE_DIALOG_MESSAGE:h._("Do you really want to delete the call-to-action button from your Facebook Page?"),DELETE_DURING_PROMOTION_DIALOG_TITLE:h._("This Change Will End Your Ad"),DELETE_DURING_PROMOTION_DIALOG_MESSAGE:h._("You're currently promoting this call to action. If you delete it, your ad will end."),UPDATE_DURING_PROMOTION_DIALOG_TITLE:h._("This Change Will Affect Your Ad"),UPDATE_DURING_PROMOTION_DIALOG_MESSAGE:h._("If you update your call to action here, it will also update in your current ad. Your ad will go through the review process again."),WEBSITE_LABEL:h._("Website"),IPHONE_LABEL:h._("iPhone"),ANDROID_LABEL:h._("Android"),CREATE_LABEL:h._("Create Call to Action"),CREATE_TOOLTIP:h._("Add a button to get people to take an action from your Page such as shop or sign up"),CREATE_DIALOG_TITLE:h._("Add Call-to-Action Button"),CREATE_DIALOG_BODY_MESSAGE:h._("Add a button to your Page that takes people directly to your app or website."),CREATE_DIALOG_BODY_MESSAGE_IOS:h._("Choose where to send people when they tap the button on an iPhone or an iPad."),CREATE_DIALOG_APPLINK_MESSAGE_IOS:h._("Add an iOS deep link URL for your app."),CREATE_DIALOG_APPLINK_MESSAGE_ANDROID:h._("Add a Android deep link URL for your app."),CREATE_DIALOG_BACKUP_LINK_MESSAGE:h._("Enter where to send people who don't have the app installed. If left blank it will open the website entered in the previous screen."),CREATE_DIALOG_BODY_MESSAGE_ANDROID:h._("Choose where to send people when they tap the button on Android."),EDIT_SECTION_MESSAGE:h._("These are the destination website and app links we'll send people to after they click or tap your call-to-action button:"),EDIT_SECTION_EXAMPLE:h._("For example, you may want to send someone using a mobile device to your app, or to your website if theyre on a desktop computer."),CREATE_DIALOG_PACKAGE_NAME_MESSAGE_ANDROID:h._("Add the package name of your app"),EDIT_SECTION_APP_LINK_HELP_MESSAGE:h._("Have an app or mobile website that was not found?"),CREATE_LOADING_MESSAGE:h._("Finding websites and apps connected to your Page..."),CREATE_SELECT_CTA_LABEL:h._("Button Label"),CREATE_INVALID_WEB_LINK:h._("Invalid link or URL"),CREATE_INVALID_PACKAGE_NAME:h._("Invalid package name"),CREATE_INVALID_APP_LINK:h._("Invalid app link"),CREATE_IPHONE_DEEP_LINK_TEXT:h._("We will open the app selected above if installed"),CREATE_ANDROID_DEEP_LINK_TEXT:h._("We will open the app selected above if installed"),CREATE_INVALID_URL_LINK:h._("Invalid URL link"),EDIT_CARD_WEB_TITLE:h._("Computer"),EDIT_CARD_IOS_TITLE:h._("iPhone or other iOS device"),EDIT_CARD_ANDROID_TITLE:h._("Android phone or tablet"),EDIT_CARD_OTHER_M_TITLE:h._("Other smartphone"),EDIT_LINK_TOOLTIP:h._("Make changes to this link address"),WEB_LINK_INPUT_LABEL:h._("Website"),WEB_LINK_INPUT_PLACEHOLDER:h._("Example: {url}",[h.param('url','www.mywebsite.com')]),MOBILE_LINK_INPUT_LABEL:h._("Mobile Website"),DEEP_LINK_INPUT_LABEL:h._("Deep Link"),DEEP_LINK_INPUT_LABEL_TOOLTIP:h._("This is the link address people will go to after tapping or clicking on your call-to-action button"),DEEP_LINK_INPUT_PLACEHOLDER:h._("Enter a link to your app"),APP_DESTINATION_SELECTOR_LABEL:h._("Destination"),APP_DESTINATION_SELECTOR_LABEL_TOOLTIP:h._("Choose the type of destination you want people to go to after tapping or clicking on your call-to-action button"),FALLBACK_CTA_SELECTOR_LABEL:h._("Backup"),FALLBACK_CTA_SELECTOR_LABEL_TOOLTIP:h._("Choose the type of destination you want people to go to after tapping or clicking on your call-to-action button if they haven't yet registered or installed your app"),FALLBACK_LINK_INPUT_LABEL:h._("Backup URL"),FALLBACK_LINK_INPUT_LABEL_TOOLTIP:h._("This is the link address people will go to after tapping or clicking on your call-to-action button if they haven't yet registered or installed your app"),STORE_ID_LABEL:h._("Store ID"),STORE_ID_TOOLTIP:h._("ID of app in Apple store or Google play store"),GO_TO_WEBSITE_LABEL:h._("Go to Website"),PACKAGE_NAME_LABEL:h._("Package Name"),REVIEW_DESTINATION_LINKS_TITLE:h._("Review Button Destination Links"),CREATE_CALL_TO_ACTION_WEBSITE:h._("Create a Call-to-Action Button"),EDIT_CALL_TO_ACTION_WEBSITE:h._("Edit Call-to-Action Button"),CREATE_CALL_TO_ACTION_IPHONE:h._("Choose a Destination For People Using iOS"),CREATE_CALL_TO_ACTION_ANDROID:h._("Choose a Destination For People Using Android"),CREATE_CALL_TO_ACTION_IPAD:h._("Choose a Destination For People Using iPad"),ACTION_SELECTOR_LABEL:h._("Choose a Button"),OPTIONAL_LABEL:h._("Optional"),IOS_SECTION_TITLE:h._("iOS Destination"),ANDROID_SECTION_TITLE:h._("Android Destination"),BACKUP_LINK_LABEL:h._("Backup Destination"),DEEPLINK_LEARN_MORE_LABEL:h._("Learn how to set up a deep link"),SELECTOR_OPTION_WEBSITE:h._("Website"),SELECTOR_OPTION_APP:h._("App"),LEGEND_KEY_ORGANIC:h._("Organic"),LEGEND_KEY_PAID:h._("Paid"),THIS_WEEK_CLICK_LABEL:h._("Clicks This Week")};f.exports=k;},null);
__d('CctaDataActionTypes',['AdsDispatchActionTypeUtils'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i='CCTA_DATA_',j={UPDATE_FROM_SERVER:null,UPDATE_TO_SERVER:null,DELETE_TO_SERVER:null,UPDATE_PROMOTE:null,CLOSE_NUX:null,CLOSE_PREDICTION_NUX:null,CLOSE_DIALOG:null,CHANGE_CTA_TYPE:null,SELECT_IPHONE_APP:null,CHANGE_IPHONE_DEEP_LINK:null,CHANGE_IPHONE_URI:null,SELECT_ANDROID_APP:null,CHANGE_ANDROID_DEEP_LINK:null,CHANGE_ANDROID_PACKAGE_NAME:null,CHANGE_ANDROID_URI:null,CHANGE_WEB_URI:null,CHANGE_PHONE_NUMBER:null,CHANGE_PHONE_EMAIL_PREFERENCE:null,CHANGE_PRIVACY_LINK:null,TOGGLE_WEB_DESTINATION_TYPE:null},k=h.createActionTypeMap(i,j);f.exports=k;},null);
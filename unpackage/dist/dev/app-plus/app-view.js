var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'counter'])
Z([3,'__e'])
Z([3,'sub'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'sub']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'icon iconfont'])
Z([3,''])
Z([3,'input'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'number']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'goodsInfo']]]]]]]]]]])
Z([3,'text'])
Z([[6],[[7],[3,'goodsInfo']],[3,'number']])
Z(z[1])
Z([3,'add'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'add']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[4])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'popup'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hide']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[6],[[7],[3,'spaceInfo']],[3,'showSpace']]])
Z([3,'layer'])
Z([3,'layer__content'])
Z([3,'layer__title'])
Z([3,'选择规格：'])
Z([3,'layer__spec-list'])
Z([3,'index'])
Z([3,'spec'])
Z([[6],[[7],[3,'goodsData']],[3,'spec']])
Z(z[9])
Z(z[0])
Z([[4],[[5],[[5],[1,'spec-item']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'goodsInfo']],[3,'spec']],[[7],[3,'spec']]],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleSelect']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsData.spec']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'spec']]],[1,'']]])
Z([3,'number'])
Z([3,'number__text'])
Z([3,'数量'])
Z([3,'__l'])
Z(z[0])
Z(z[0])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[1,'sub']]]]]]]],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[1,'add']]]]]]]]])
Z([[7],[3,'goodsInfo']])
Z([3,'1'])
Z([3,'btn'])
Z(z[0])
Z([3,'button'])
Z(z[2])
Z([3,'确定'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'status'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'header-box'])
Z([3,'back'])
Z([[7],[3,'showBack']])
Z([3,'__e'])
Z([3,'icon iconfont'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,''])
Z(z[4])
Z([3,'shop-cart'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showCart']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
Z([3,'swiper-box'])
Z([3,'true'])
Z([3,'__e'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'handleSwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'swiper'])
Z([[6],[[7],[3,'goodsData']],[3,'swiperList']])
Z(z[9])
Z([[6],[[7],[3,'swiper']],[3,'img']])
Z([3,'indicator'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[2,'+'],[[7],[3,'swiperIndex']],[1,1]]],[1,'/']],[[6],[[6],[[7],[3,'goodsData']],[3,'swiperList']],[3,'length']]],[1,'']]])
Z([3,'goods-info'])
Z([3,'goods__price'])
Z([a,[[2,'+'],[[2,'+'],[1,'￥'],[[6],[[7],[3,'goodsInfo']],[3,'price']]],[1,'']]])
Z([3,'goods__name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'goodsInfo']],[3,'name']]],[1,'']]])
Z([3,'spec-box'])
Z(z[6])
Z([3,'row'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showPopSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'选择'])
Z([3,'spec__content'])
Z([3,'spec__title'])
Z([3,'选择规格:'])
Z([3,'spec__info'])
Z(z[9])
Z([3,'spec'])
Z([[6],[[7],[3,'goodsData']],[3,'spec']])
Z(z[9])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'goodsInfo']],[3,'spec']],[[7],[3,'spec']]],[1,'on'],[1,'']]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'spec']]],[1,'']]])
Z([3,'arrow'])
Z([3,'icon iconfont'])
Z([3,''])
Z(z[0])
Z(z[6])
Z(z[6])
Z(z[6])
Z(z[6])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^selectSpec']],[[4],[[5],[[4],[[5],[1,'handleSelectSpec']]]]]]]],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[1,'sub']]]]]]]],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[1,'add']]]]]]]],[[4],[[5],[[5],[1,'^hidePop']],[[4],[[5],[[4],[[5],[1,'hidePopSpec']]]]]]]]])
Z([[7],[3,'goodsData']])
Z([[7],[3,'goodsInfo']])
Z([[7],[3,'spaceInfo']])
Z([3,'3'])
Z([3,'comment'])
Z(z[23])
Z([3,'text'])
Z([a,[[2,'+'],[[2,'+'],[1,'评论详情('],[[6],[[6],[[7],[3,'goodsData']],[3,'comment']],[3,'length']]],[1,')']]])
Z(z[6])
Z([3,'show'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showAllComment']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'查看全部'])
Z(z[37])
Z(z[38])
Z([3,'comment__info'])
Z([3,'user__info'])
Z([3,'user__profile'])
Z([[6],[[6],[[6],[[7],[3,'goodsData']],[3,'comment']],[1,0]],[3,'face']])
Z([3,'user__name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[6],[[7],[3,'goodsData']],[3,'comment']],[1,0]],[3,'username']]],[1,'']]])
Z([3,'comment__content'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[6],[[7],[3,'goodsData']],[3,'comment']],[1,0]],[3,'content']]],[1,'']]])
Z([3,'goods-detail'])
Z([3,'title'])
Z([3,'———— 商品详情 ————'])
Z([3,'content'])
Z([[6],[[7],[3,'goodsData']],[3,'descriptionStr']])
Z([3,'footer'])
Z([3,'icons'])
Z([3,'box'])
Z(z[37])
Z([3,''])
Z(z[51])
Z([3,'分享'])
Z(z[6])
Z(z[74])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'keep']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'isKeep']])
Z(z[37])
Z([3,''])
Z(z[37])
Z([3,''])
Z(z[51])
Z([a,[[2,'+'],[[2,'?:'],[[7],[3,'isKeep']],[1,'已'],[1,'']],[1,'收藏']]])
Z([3,'btns'])
Z(z[6])
Z([3,'joinCart'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'joinCart']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'加入购物车'])
Z(z[6])
Z([3,'buy'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleCheck']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'立即购买'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'index'])
Z([3,'target'])
Z([[7],[3,'filterByList']])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'target']],[[2,'?:'],[[6],[[7],[3,'target']],[3,'selected']],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleSelect']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'target']],[3,'title']]],[1,'']]])
Z([3,'place'])
Z([3,'goods-list'])
Z([3,'product-list'])
Z(z[1])
Z([3,'goods'])
Z([[7],[3,'goodsList']])
Z(z[1])
Z(z[5])
Z([3,'product'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleGoods']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'widthFix'])
Z([[6],[[7],[3,'goods']],[3,'img']])
Z([3,'product__name'])
Z([a,[[6],[[7],[3,'goods']],[3,'name']]])
Z([3,'product__info'])
Z([3,'product__price'])
Z([3,'￥'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'goods']],[3,'price']]],[1,'']]])
Z([3,'product__slogan'])
Z([a,[[6],[[7],[3,'goods']],[3,'slogan']]])
Z([3,'人付款'])
Z([3,'loading__text'])
Z([a,[[7],[3,'loadingText']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__e'])
Z([3,'myVideo'])
Z([[4],[[5],[[4],[[5],[[5],[1,'fullscreenchange']],[[4],[[5],[[4],[[5],[[5],[1,'videoControl']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'showVideo']]])
Z(z[2])
Z([[7],[3,'videoSrc']])
Z([3,'label'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'labelList']])
Z(z[8])
Z(z[1])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'labelIndex']]],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleLabel']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'name']]],[1,'(']],[[6],[[7],[3,'item']],[3,'number']]],[1,')']]])
Z([3,'comment-list'])
Z(z[8])
Z([3,'rating'])
Z([[7],[3,'ratingsList']])
Z(z[8])
Z([3,'comment__content'])
Z([3,'comment__left'])
Z([3,'comment__figure'])
Z([[6],[[7],[3,'rating']],[3,'face']])
Z([3,'comment__right'])
Z([3,'name-date'])
Z([3,'username'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'rating']],[3,'username']]],[1,'']]])
Z([3,'date'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'rating']],[3,'date']]],[1,'']]])
Z([3,'spec'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'rating']],[3,'spec']]],[1,'']]])
Z([3,'medias'])
Z([3,'medias__content'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'rating']],[3,'content']]],[1,'']]])
Z([3,'img-video'])
Z([3,'__i0__'])
Z([3,'video'])
Z([[6],[[7],[3,'rating']],[3,'video']])
Z([3,'path'])
Z(z[1])
Z([3,'box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playVideo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'ratingsList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[[5],[1,'video']],[1,'path']],[[6],[[7],[3,'video']],[3,'path']]],[1,'path']]]]]]]]]]]]]]])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'video']],[3,'img']])
Z([3,'playbtn'])
Z([3,'icon iconfont'])
Z([3,''])
Z(z[8])
Z([3,'image'])
Z([[6],[[7],[3,'rating']],[3,'img']])
Z(z[8])
Z(z[1])
Z(z[42])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'showBigImg']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'ratingsList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[1,'img']],[1,'']],[[7],[3,'index']]]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'ratingsList']],[1,'']],[[7],[3,'index']]],[1,'img']]]]]]]]]]]]]]])
Z(z[44])
Z([[7],[3,'image']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'buy-list'])
Z([3,'index'])
Z([3,'goods'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[1])
Z([3,'row'])
Z([3,'goods-info'])
Z([3,'img'])
Z([[6],[[6],[[7],[3,'goods']],[3,'$orig']],[3,'img']])
Z([3,'info'])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'goods']],[3,'$orig']],[3,'name']]],[1,'']]])
Z([3,'spec'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'选择：'],[[6],[[6],[[7],[3,'goods']],[3,'$orig']],[3,'spec']]],[1,' 数量：']],[[6],[[6],[[7],[3,'goods']],[3,'$orig']],[3,'number']]],[1,'']]])
Z([3,'price-number'])
Z([3,'price'])
Z([a,[[2,'+'],[[2,'+'],[1,'￥'],[[6],[[7],[3,'goods']],[3,'f0']]],[1,'']]])
Z([3,'detail'])
Z(z[5])
Z([3,'amount'])
Z([3,'商品金额'])
Z([3,'content'])
Z([a,[[2,'+'],[[2,'+'],[1,'￥'],[[6],[[7],[3,'$root']],[3,'f1']]],[1,'']]])
Z(z[5])
Z(z[19])
Z([3,'运费'])
Z(z[21])
Z([a,[[2,'+'],[[2,'+'],[1,'￥'],[[6],[[7],[3,'$root']],[3,'f2']]],[1,'']]])
Z([3,'position'])
Z([3,'footer'])
Z([3,'total'])
Z([3,'合计：'])
Z(z[15])
Z([a,[[2,'+'],[[2,'+'],[1,'￥'],[[6],[[7],[3,'$root']],[3,'f3']]],[1,'']]])
Z([3,'btn'])
Z([3,'提交订单'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goods-list'])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([3,'empty'])
Z([3,'购物车空空如也~~'])
Z([3,'index'])
Z([3,'goods'])
Z([[7],[3,'goodsList']])
Z(z[4])
Z([3,'row'])
Z([3,'__e'])
Z([3,'menu'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleSingleDelete']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'icon iconfont'])
Z([3,''])
Z(z[9])
Z(z[9])
Z(z[9])
Z([[4],[[5],[[5],[1,'production']],[[2,'?:'],[[2,'=='],[[7],[3,'theIndex']],[[7],[3,'index']]],[1,'open'],[[2,'?:'],[[2,'=='],[[7],[3,'oldIndex']],[[7],[3,'index']]],[1,'close'],[1,'']]]]])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchStart']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchMove']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'handleTouchEnd']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]]])
Z([3,'container'])
Z(z[9])
Z([3,'checkbox'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleCheckbox']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[4],[[5],[[2,'?:'],[[6],[[7],[3,'goods']],[3,'selected']],[1,'on'],[1,'']]]])
Z(z[9])
Z([3,'goods-info'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleGoodsInfo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'img'])
Z([[6],[[7],[3,'goods']],[3,'img']])
Z([3,'info'])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'goods']],[3,'name']]],[1,'']]])
Z([3,'spec'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'goods']],[3,'spec']]],[1,'']]])
Z([3,'price-number'])
Z([3,'price'])
Z([a,[[2,'+'],[[2,'+'],[1,'￥'],[[6],[[7],[3,'goods']],[3,'price']]],[1,'']]])
Z([3,'__l'])
Z(z[9])
Z(z[9])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^add']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'add']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]],[[4],[[5],[[5],[1,'^sub']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'sub']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[7],[3,'goods']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([3,'footer'])
Z(z[9])
Z(z[19])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectAll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[21])
Z([[4],[[5],[[2,'?:'],[[7],[3,'isSelectedAll']],[1,'on'],[1,'']]]])
Z([3,'text'])
Z([3,'全选'])
Z([[2,'>'],[[6],[[7],[3,'selectedList']],[3,'length']],[1,0]])
Z(z[9])
Z([3,'delBtn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleMulDelete']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'删除'])
Z([3,'settlement'])
Z([3,'sum'])
Z([3,'合计:'])
Z([3,'money'])
Z([a,[[2,'+'],[[2,'+'],[1,'￥'],[[7],[3,'sumPrice']]],[1,'']]])
Z(z[9])
Z([3,'btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleCheck']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,'结算'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'selectedList']],[3,'length']],[1,0]],[1,''],[[6],[[7],[3,'selectedList']],[3,'length']]]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
Z([3,'category-box'])
Z([3,'category__left'])
Z([3,'category__navigation'])
Z([1,true])
Z([3,'false'])
Z([3,'index'])
Z([3,'category'])
Z([[7],[3,'categoryList']])
Z(z[9])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'category__navigation-item']],[[2,'?:'],[[2,'=='],[[7],[3,'currentNavigation']],[[7],[3,'index']]],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleCategory']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'item__text'])
Z([3,'block'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'category']],[3,'title']]],[1,'']]])
Z([3,'category__right'])
Z(z[7])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z([3,'category__content'])
Z([[2,'!'],[[2,'=='],[[7],[3,'currentNavigation']],[[7],[3,'index']]]])
Z([3,'banner'])
Z([[6],[[7],[3,'category']],[3,'banner']])
Z([3,'category-list'])
Z([3,'i'])
Z([3,'item'])
Z([[6],[[7],[3,'category']],[3,'list']])
Z(z[30])
Z(z[13])
Z([3,'category-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleCategoryList']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'categoryList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[2,'+'],[1,'/static/img/category/list/'],[[6],[[7],[3,'item']],[3,'img']]])
Z([3,'text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
Z([3,'swiper'])
Z([3,'swiper-box'])
Z([3,'true'])
Z([3,'__e'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'chageSwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__i0__'])
Z(z[4])
Z([[7],[3,'swiperList']])
Z([3,'id'])
Z([[6],[[7],[3,'swiper']],[3,'img']])
Z([3,'indicator'])
Z([3,'index'])
Z(z[4])
Z(z[12])
Z(z[16])
Z([[4],[[5],[[5],[1,'dots']],[[2,'?:'],[[2,'<='],[[7],[3,'index']],[[7],[3,'currentSwiper']]],[1,'on'],[1,'']]]])
Z([3,'category'])
Z([3,'category-box'])
Z(z[16])
Z([3,'item'])
Z([[7],[3,'categoryList']])
Z(z[16])
Z(z[7])
Z([3,'category-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleSelect']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'categoryList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'category__img'])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([3,'category__name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'name']]],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'promotion']],[3,'length']],[1,0]])
Z([3,'banner'])
Z([3,'/static/img/category/ad.jpg'])
Z(z[34])
Z([3,'promotion'])
Z([3,'promotion-box'])
Z([3,'promotion__header-title'])
Z([3,'优惠活动'])
Z([3,'promotion__content'])
Z(z[16])
Z(z[24])
Z([[7],[3,'promotion']])
Z(z[16])
Z(z[7])
Z([3,'promotion__item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleSelectPromotion']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'promotion']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'promotion__title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'title']]],[1,'']]])
Z([3,'promotion__info'])
Z([3,'promotion__info-left'])
Z([3,'promotion__ad'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'ad']]],[1,'']]])
Z([3,'btn'])
Z([3,'点击进入'])
Z([3,'promotion__info-right'])
Z(z[31])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'address-box'])
Z([3,'icon iconfont'])
Z([3,''])
Z([a,[[7],[3,'city']]])
Z([3,'input-box'])
Z([3,'some words...'])
Z([3,'color: #c0c0c0'])
Z([3,'text'])
Z(z[2])
Z([3,''])
Z([3,'notice'])
Z(z[2])
Z([3,''])
Z([3,'place'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'block'])
Z([3,'QR'])
Z([3,'../../../static/img/qrcode.jpg'])
Z([3,'title'])
Z([3,'欢迎扫码添加, 技术交流, 感情沟通.'])
Z([3,'__e'])
Z([3,'btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleSavePhotos']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'showBtn']]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'savePhotos']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user'])
Z([3,'left'])
Z([[6],[[7],[3,'user']],[3,'face']])
Z([3,'right'])
Z([3,'username'])
Z([a,[[6],[[7],[3,'user']],[3,'username']]])
Z([3,'__e'])
Z([3,'erweima'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleQRCode']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'icon iconfont'])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/counter.wxml','./components/popSpec.wxml','./components/status.wxml','./pages/goods/goodHeader.wxml','./pages/goods/goods.wxml','./pages/goods/goodsList.wxml','./pages/goods/ratings.wxml','./pages/orders/order.wxml','./pages/tabBar/cart/cart.wxml','./pages/tabBar/category/category.wxml','./pages/tabBar/home/home.wxml','./pages/tabBar/home/pageHeader.wxml','./pages/tabBar/user/qrCode.wxml','./pages/tabBar/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_mz(z,'view',['catchtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
var fE=_oz(z,5,e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_n('view')
_rz(z,cF,'class',6,e,s,gg)
var hG=_mz(z,'input',['bindinput',7,'data-event-opts',1,'type',2,'value',3],[],e,s,gg)
_(cF,hG)
_(oB,cF)
var oH=_mz(z,'view',['catchtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
var oJ=_oz(z,15,e,s,gg)
_(cI,oJ)
_(oH,cI)
_(oB,oH)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var aL=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hidden',2],[],e,s,gg)
var tM=_n('view')
_rz(z,tM,'class',4,e,s,gg)
var eN=_n('view')
_rz(z,eN,'class',5,e,s,gg)
var bO=_n('view')
_rz(z,bO,'class',6,e,s,gg)
var oP=_oz(z,7,e,s,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('view')
_rz(z,xQ,'class',8,e,s,gg)
var oR=_v()
_(xQ,oR)
var fS=function(hU,cT,oV,gg){
var oX=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],hU,cT,gg)
var lY=_oz(z,16,hU,cT,gg)
_(oX,lY)
_(oV,oX)
return oV
}
oR.wxXCkey=2
_2z(z,11,fS,e,s,gg,oR,'spec','index','index')
_(eN,xQ)
var aZ=_n('view')
_rz(z,aZ,'class',17,e,s,gg)
var t1=_n('view')
_rz(z,t1,'class',18,e,s,gg)
var e2=_oz(z,19,e,s,gg)
_(t1,e2)
_(aZ,t1)
var b3=_mz(z,'counter',['bind:__l',20,'bind:add',1,'bind:sub',2,'data-event-opts',3,'goodsInfo',4,'vueId',5],[],e,s,gg)
_(aZ,b3)
_(eN,aZ)
_(tM,eN)
var o4=_n('view')
_rz(z,o4,'class',26,e,s,gg)
var x5=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2],[],e,s,gg)
var o6=_oz(z,30,e,s,gg)
_(x5,o6)
_(o4,x5)
_(tM,o4)
_(aL,tM)
_(r,aL)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
_(r,c8)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var o0=_n('view')
_rz(z,o0,'class',0,e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',1,e,s,gg)
var oBB=_n('view')
_rz(z,oBB,'class',2,e,s,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,3,e,s,gg)){lCB.wxVkey=1
var aDB=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var tEB=_oz(z,7,e,s,gg)
_(aDB,tEB)
_(lCB,aDB)
}
lCB.wxXCkey=1
_(cAB,oBB)
var eFB=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var bGB=_n('view')
_rz(z,bGB,'class',11,e,s,gg)
var oHB=_oz(z,12,e,s,gg)
_(bGB,oHB)
_(eFB,bGB)
_(cAB,eFB)
_(o0,cAB)
_(r,o0)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oJB=_n('view')
var fKB=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(oJB,fKB)
var cLB=_mz(z,'goods-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(oJB,cLB)
var hMB=_n('view')
_rz(z,hMB,'class',4,e,s,gg)
var oNB=_mz(z,'swiper',['autoplay',5,'bindchange',1,'circular',2,'data-event-opts',3],[],e,s,gg)
var cOB=_v()
_(oNB,cOB)
var oPB=function(aRB,lQB,tSB,gg){
var bUB=_n('swiper-item')
var oVB=_n('image')
_rz(z,oVB,'src',13,aRB,lQB,gg)
_(bUB,oVB)
_(tSB,bUB)
return tSB
}
cOB.wxXCkey=2
_2z(z,11,oPB,e,s,gg,cOB,'swiper','index','index')
_(hMB,oNB)
var xWB=_n('view')
_rz(z,xWB,'class',14,e,s,gg)
var oXB=_oz(z,15,e,s,gg)
_(xWB,oXB)
_(hMB,xWB)
_(oJB,hMB)
var fYB=_n('view')
_rz(z,fYB,'class',16,e,s,gg)
var cZB=_n('view')
_rz(z,cZB,'class',17,e,s,gg)
var h1B=_oz(z,18,e,s,gg)
_(cZB,h1B)
_(fYB,cZB)
var o2B=_n('view')
_rz(z,o2B,'class',19,e,s,gg)
var c3B=_oz(z,20,e,s,gg)
_(o2B,c3B)
_(fYB,o2B)
_(oJB,fYB)
var o4B=_n('view')
_rz(z,o4B,'class',21,e,s,gg)
var l5B=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],e,s,gg)
var a6B=_n('text')
var t7B=_oz(z,25,e,s,gg)
_(a6B,t7B)
_(l5B,a6B)
var e8B=_n('view')
_rz(z,e8B,'class',26,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',27,e,s,gg)
var o0B=_oz(z,28,e,s,gg)
_(b9B,o0B)
_(e8B,b9B)
var xAC=_n('view')
_rz(z,xAC,'class',29,e,s,gg)
var oBC=_v()
_(xAC,oBC)
var fCC=function(hEC,cDC,oFC,gg){
var oHC=_n('view')
_rz(z,oHC,'class',34,hEC,cDC,gg)
var lIC=_oz(z,35,hEC,cDC,gg)
_(oHC,lIC)
_(oFC,oHC)
return oFC
}
oBC.wxXCkey=2
_2z(z,32,fCC,e,s,gg,oBC,'spec','index','index')
_(e8B,xAC)
_(l5B,e8B)
var aJC=_n('view')
_rz(z,aJC,'class',36,e,s,gg)
var tKC=_n('view')
_rz(z,tKC,'class',37,e,s,gg)
var eLC=_oz(z,38,e,s,gg)
_(tKC,eLC)
_(aJC,tKC)
_(l5B,aJC)
_(o4B,l5B)
_(oJB,o4B)
var bMC=_mz(z,'pop-spec',['bind:__l',39,'bind:add',1,'bind:hidePop',2,'bind:selectSpec',3,'bind:sub',4,'data-event-opts',5,'goodsData',6,'goodsInfo',7,'spaceInfo',8,'vueId',9],[],e,s,gg)
_(oJB,bMC)
var oNC=_n('view')
_rz(z,oNC,'class',49,e,s,gg)
var xOC=_n('view')
_rz(z,xOC,'class',50,e,s,gg)
var oPC=_n('view')
_rz(z,oPC,'class',51,e,s,gg)
var fQC=_oz(z,52,e,s,gg)
_(oPC,fQC)
_(xOC,oPC)
var cRC=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],e,s,gg)
var hSC=_oz(z,56,e,s,gg)
_(cRC,hSC)
var oTC=_n('view')
_rz(z,oTC,'class',57,e,s,gg)
var cUC=_oz(z,58,e,s,gg)
_(oTC,cUC)
_(cRC,oTC)
_(xOC,cRC)
_(oNC,xOC)
var oVC=_n('view')
_rz(z,oVC,'class',59,e,s,gg)
var lWC=_n('view')
_rz(z,lWC,'class',60,e,s,gg)
var aXC=_mz(z,'image',['class',61,'src',1],[],e,s,gg)
_(lWC,aXC)
var tYC=_n('view')
_rz(z,tYC,'class',63,e,s,gg)
var eZC=_oz(z,64,e,s,gg)
_(tYC,eZC)
_(lWC,tYC)
_(oVC,lWC)
var b1C=_n('view')
_rz(z,b1C,'class',65,e,s,gg)
var o2C=_oz(z,66,e,s,gg)
_(b1C,o2C)
_(oVC,b1C)
_(oNC,oVC)
_(oJB,oNC)
var x3C=_n('view')
_rz(z,x3C,'class',67,e,s,gg)
var o4C=_n('view')
_rz(z,o4C,'class',68,e,s,gg)
var f5C=_oz(z,69,e,s,gg)
_(o4C,f5C)
_(x3C,o4C)
var c6C=_n('view')
_rz(z,c6C,'class',70,e,s,gg)
var h7C=_n('rich-text')
_rz(z,h7C,'nodes',71,e,s,gg)
_(c6C,h7C)
_(x3C,c6C)
_(oJB,x3C)
var o8C=_n('view')
_rz(z,o8C,'class',72,e,s,gg)
var c9C=_n('view')
_rz(z,c9C,'class',73,e,s,gg)
var o0C=_n('view')
_rz(z,o0C,'class',74,e,s,gg)
var lAD=_n('view')
_rz(z,lAD,'class',75,e,s,gg)
var aBD=_oz(z,76,e,s,gg)
_(lAD,aBD)
_(o0C,lAD)
var tCD=_n('view')
_rz(z,tCD,'class',77,e,s,gg)
var eDD=_oz(z,78,e,s,gg)
_(tCD,eDD)
_(o0C,tCD)
_(c9C,o0C)
var bED=_mz(z,'view',['bindtap',79,'class',1,'data-event-opts',2],[],e,s,gg)
var oFD=_v()
_(bED,oFD)
if(_oz(z,82,e,s,gg)){oFD.wxVkey=1
var xGD=_n('view')
_rz(z,xGD,'class',83,e,s,gg)
var oHD=_oz(z,84,e,s,gg)
_(xGD,oHD)
_(oFD,xGD)
}
else{oFD.wxVkey=2
var fID=_n('view')
_rz(z,fID,'class',85,e,s,gg)
var cJD=_oz(z,86,e,s,gg)
_(fID,cJD)
_(oFD,fID)
}
var hKD=_n('view')
_rz(z,hKD,'class',87,e,s,gg)
var oLD=_oz(z,88,e,s,gg)
_(hKD,oLD)
_(bED,hKD)
oFD.wxXCkey=1
_(c9C,bED)
_(o8C,c9C)
var cMD=_n('view')
_rz(z,cMD,'class',89,e,s,gg)
var oND=_mz(z,'view',['bindtap',90,'class',1,'data-event-opts',2],[],e,s,gg)
var lOD=_oz(z,93,e,s,gg)
_(oND,lOD)
_(cMD,oND)
var aPD=_mz(z,'view',['bindtap',94,'class',1,'data-event-opts',2],[],e,s,gg)
var tQD=_oz(z,97,e,s,gg)
_(aPD,tQD)
_(cMD,aPD)
_(o8C,cMD)
_(oJB,o8C)
_(r,oJB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var bSD=_n('view')
var oTD=_n('view')
_rz(z,oTD,'class',0,e,s,gg)
var xUD=_v()
_(oTD,xUD)
var oVD=function(cXD,fWD,hYD,gg){
var c1D=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],cXD,fWD,gg)
var o2D=_oz(z,8,cXD,fWD,gg)
_(c1D,o2D)
_(hYD,c1D)
return hYD
}
xUD.wxXCkey=2
_2z(z,3,oVD,e,s,gg,xUD,'target','index','index')
_(bSD,oTD)
var l3D=_n('view')
_rz(z,l3D,'class',9,e,s,gg)
_(bSD,l3D)
var a4D=_n('view')
_rz(z,a4D,'class',10,e,s,gg)
var t5D=_n('view')
_rz(z,t5D,'class',11,e,s,gg)
var e6D=_v()
_(t5D,e6D)
var b7D=function(x9D,o8D,o0D,gg){
var cBE=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],x9D,o8D,gg)
var hCE=_mz(z,'image',['mode',19,'src',1],[],x9D,o8D,gg)
_(cBE,hCE)
var oDE=_n('view')
_rz(z,oDE,'class',21,x9D,o8D,gg)
var cEE=_oz(z,22,x9D,o8D,gg)
_(oDE,cEE)
_(cBE,oDE)
var oFE=_n('view')
_rz(z,oFE,'class',23,x9D,o8D,gg)
var lGE=_n('view')
_rz(z,lGE,'class',24,x9D,o8D,gg)
var aHE=_n('text')
var tIE=_oz(z,25,x9D,o8D,gg)
_(aHE,tIE)
_(lGE,aHE)
var eJE=_oz(z,26,x9D,o8D,gg)
_(lGE,eJE)
_(oFE,lGE)
var bKE=_n('view')
_rz(z,bKE,'class',27,x9D,o8D,gg)
var oLE=_oz(z,28,x9D,o8D,gg)
_(bKE,oLE)
var xME=_n('text')
var oNE=_oz(z,29,x9D,o8D,gg)
_(xME,oNE)
_(bKE,xME)
_(oFE,bKE)
_(cBE,oFE)
_(o0D,cBE)
return o0D
}
e6D.wxXCkey=2
_2z(z,14,b7D,e,s,gg,e6D,'goods','index','index')
_(a4D,t5D)
var fOE=_n('view')
_rz(z,fOE,'class',30,e,s,gg)
var cPE=_oz(z,31,e,s,gg)
_(fOE,cPE)
_(a4D,fOE)
_(bSD,a4D)
_(r,bSD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oRE=_n('view')
_rz(z,oRE,'class',0,e,s,gg)
var cSE=_mz(z,'video',['bindfullscreenchange',1,'class',1,'data-event-opts',2,'hidden',3,'id',4,'src',5],[],e,s,gg)
_(oRE,cSE)
var oTE=_n('view')
_rz(z,oTE,'class',7,e,s,gg)
var lUE=_v()
_(oTE,lUE)
var aVE=function(eXE,tWE,bYE,gg){
var x1E=_mz(z,'view',['bindtap',12,'class',1,'data-event-opts',2],[],eXE,tWE,gg)
var o2E=_oz(z,15,eXE,tWE,gg)
_(x1E,o2E)
_(bYE,x1E)
return bYE
}
lUE.wxXCkey=2
_2z(z,10,aVE,e,s,gg,lUE,'item','index','index')
_(oRE,oTE)
var f3E=_n('view')
_rz(z,f3E,'class',16,e,s,gg)
var c4E=_v()
_(f3E,c4E)
var h5E=function(c7E,o6E,o8E,gg){
var a0E=_n('view')
_rz(z,a0E,'class',21,c7E,o6E,gg)
var tAF=_n('view')
_rz(z,tAF,'class',22,c7E,o6E,gg)
var eBF=_n('view')
_rz(z,eBF,'class',23,c7E,o6E,gg)
var bCF=_n('image')
_rz(z,bCF,'src',24,c7E,o6E,gg)
_(eBF,bCF)
_(tAF,eBF)
_(a0E,tAF)
var oDF=_n('view')
_rz(z,oDF,'class',25,c7E,o6E,gg)
var xEF=_n('view')
_rz(z,xEF,'class',26,c7E,o6E,gg)
var oFF=_n('view')
_rz(z,oFF,'class',27,c7E,o6E,gg)
var fGF=_oz(z,28,c7E,o6E,gg)
_(oFF,fGF)
_(xEF,oFF)
var cHF=_n('view')
_rz(z,cHF,'class',29,c7E,o6E,gg)
var hIF=_oz(z,30,c7E,o6E,gg)
_(cHF,hIF)
_(xEF,cHF)
_(oDF,xEF)
var oJF=_n('view')
_rz(z,oJF,'class',31,c7E,o6E,gg)
var cKF=_oz(z,32,c7E,o6E,gg)
_(oJF,cKF)
_(oDF,oJF)
var oLF=_n('view')
_rz(z,oLF,'class',33,c7E,o6E,gg)
var lMF=_n('view')
_rz(z,lMF,'class',34,c7E,o6E,gg)
var aNF=_oz(z,35,c7E,o6E,gg)
_(lMF,aNF)
_(oLF,lMF)
var tOF=_n('view')
_rz(z,tOF,'class',36,c7E,o6E,gg)
var ePF=_v()
_(tOF,ePF)
var bQF=function(xSF,oRF,oTF,gg){
var cVF=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],xSF,oRF,gg)
var hWF=_mz(z,'image',['mode',44,'src',1],[],xSF,oRF,gg)
_(cVF,hWF)
var oXF=_n('view')
_rz(z,oXF,'class',46,xSF,oRF,gg)
var cYF=_n('view')
_rz(z,cYF,'class',47,xSF,oRF,gg)
var oZF=_oz(z,48,xSF,oRF,gg)
_(cYF,oZF)
_(oXF,cYF)
_(cVF,oXF)
_(oTF,cVF)
return oTF
}
ePF.wxXCkey=2
_2z(z,39,bQF,c7E,o6E,gg,ePF,'video','__i0__','path')
var l1F=_v()
_(tOF,l1F)
var a2F=function(e4F,t3F,b5F,gg){
var x7F=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],e4F,t3F,gg)
var o8F=_mz(z,'image',['mode',56,'src',1],[],e4F,t3F,gg)
_(x7F,o8F)
_(b5F,x7F)
return b5F
}
l1F.wxXCkey=2
_2z(z,51,a2F,c7E,o6E,gg,l1F,'image','index','index')
_(oLF,tOF)
_(oDF,oLF)
_(a0E,oDF)
_(o8E,a0E)
return o8E
}
c4E.wxXCkey=2
_2z(z,19,h5E,e,s,gg,c4E,'rating','index','index')
_(oRE,f3E)
_(r,oRE)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c0F=_n('view')
var hAG=_n('view')
_rz(z,hAG,'class',0,e,s,gg)
var oBG=_v()
_(hAG,oBG)
var cCG=function(lEG,oDG,aFG,gg){
var eHG=_n('view')
_rz(z,eHG,'class',5,lEG,oDG,gg)
var bIG=_n('view')
_rz(z,bIG,'class',6,lEG,oDG,gg)
var oJG=_n('view')
_rz(z,oJG,'class',7,lEG,oDG,gg)
var xKG=_n('image')
_rz(z,xKG,'src',8,lEG,oDG,gg)
_(oJG,xKG)
_(bIG,oJG)
var oLG=_n('view')
_rz(z,oLG,'class',9,lEG,oDG,gg)
var fMG=_n('view')
_rz(z,fMG,'class',10,lEG,oDG,gg)
var cNG=_oz(z,11,lEG,oDG,gg)
_(fMG,cNG)
_(oLG,fMG)
var hOG=_n('view')
_rz(z,hOG,'class',12,lEG,oDG,gg)
var oPG=_oz(z,13,lEG,oDG,gg)
_(hOG,oPG)
_(oLG,hOG)
var cQG=_n('view')
_rz(z,cQG,'class',14,lEG,oDG,gg)
var oRG=_n('view')
_rz(z,oRG,'class',15,lEG,oDG,gg)
var lSG=_oz(z,16,lEG,oDG,gg)
_(oRG,lSG)
_(cQG,oRG)
_(oLG,cQG)
_(bIG,oLG)
_(eHG,bIG)
_(aFG,eHG)
return aFG
}
oBG.wxXCkey=2
_2z(z,3,cCG,e,s,gg,oBG,'goods','index','index')
_(c0F,hAG)
var aTG=_n('view')
_rz(z,aTG,'class',17,e,s,gg)
var tUG=_n('view')
_rz(z,tUG,'class',18,e,s,gg)
var eVG=_n('view')
_rz(z,eVG,'class',19,e,s,gg)
var bWG=_oz(z,20,e,s,gg)
_(eVG,bWG)
_(tUG,eVG)
var oXG=_n('view')
_rz(z,oXG,'class',21,e,s,gg)
var xYG=_oz(z,22,e,s,gg)
_(oXG,xYG)
_(tUG,oXG)
_(aTG,tUG)
var oZG=_n('view')
_rz(z,oZG,'class',23,e,s,gg)
var f1G=_n('view')
_rz(z,f1G,'class',24,e,s,gg)
var c2G=_oz(z,25,e,s,gg)
_(f1G,c2G)
_(oZG,f1G)
var h3G=_n('view')
_rz(z,h3G,'class',26,e,s,gg)
var o4G=_oz(z,27,e,s,gg)
_(h3G,o4G)
_(oZG,h3G)
_(aTG,oZG)
_(c0F,aTG)
var c5G=_n('view')
_rz(z,c5G,'class',28,e,s,gg)
_(c0F,c5G)
var o6G=_n('view')
_rz(z,o6G,'class',29,e,s,gg)
var l7G=_n('view')
_rz(z,l7G,'class',30,e,s,gg)
var a8G=_oz(z,31,e,s,gg)
_(l7G,a8G)
var t9G=_n('view')
_rz(z,t9G,'class',32,e,s,gg)
var e0G=_oz(z,33,e,s,gg)
_(t9G,e0G)
_(l7G,t9G)
_(o6G,l7G)
var bAH=_n('view')
_rz(z,bAH,'class',34,e,s,gg)
var oBH=_oz(z,35,e,s,gg)
_(bAH,oBH)
_(o6G,bAH)
_(c0F,o6G)
_(r,c0F)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oDH=_n('view')
var fEH=_n('view')
_rz(z,fEH,'class',0,e,s,gg)
var cFH=_v()
_(fEH,cFH)
if(_oz(z,1,e,s,gg)){cFH.wxVkey=1
var hGH=_n('view')
_rz(z,hGH,'class',2,e,s,gg)
var oHH=_oz(z,3,e,s,gg)
_(hGH,oHH)
_(cFH,hGH)
}
var cIH=_v()
_(fEH,cIH)
var oJH=function(aLH,lKH,tMH,gg){
var bOH=_n('view')
_rz(z,bOH,'class',8,aLH,lKH,gg)
var oPH=_mz(z,'view',['catchtap',9,'class',1,'data-event-opts',2],[],aLH,lKH,gg)
var xQH=_n('view')
_rz(z,xQH,'class',12,aLH,lKH,gg)
var oRH=_oz(z,13,aLH,lKH,gg)
_(xQH,oRH)
_(oPH,xQH)
_(bOH,oPH)
var fSH=_mz(z,'view',['bindtouchend',14,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4],[],aLH,lKH,gg)
var cTH=_n('view')
_rz(z,cTH,'class',19,aLH,lKH,gg)
var hUH=_mz(z,'view',['bindtap',20,'class',1,'data-event-opts',2],[],aLH,lKH,gg)
var oVH=_n('view')
_rz(z,oVH,'class',23,aLH,lKH,gg)
_(hUH,oVH)
_(cTH,hUH)
_(fSH,cTH)
var cWH=_mz(z,'view',['bindtap',24,'class',1,'data-event-opts',2],[],aLH,lKH,gg)
var oXH=_n('view')
_rz(z,oXH,'class',27,aLH,lKH,gg)
var lYH=_n('image')
_rz(z,lYH,'src',28,aLH,lKH,gg)
_(oXH,lYH)
_(cWH,oXH)
var aZH=_n('view')
_rz(z,aZH,'class',29,aLH,lKH,gg)
var t1H=_n('view')
_rz(z,t1H,'class',30,aLH,lKH,gg)
var e2H=_oz(z,31,aLH,lKH,gg)
_(t1H,e2H)
_(aZH,t1H)
var b3H=_n('view')
_rz(z,b3H,'class',32,aLH,lKH,gg)
var o4H=_oz(z,33,aLH,lKH,gg)
_(b3H,o4H)
_(aZH,b3H)
var x5H=_n('view')
_rz(z,x5H,'class',34,aLH,lKH,gg)
var o6H=_n('view')
_rz(z,o6H,'class',35,aLH,lKH,gg)
var f7H=_oz(z,36,aLH,lKH,gg)
_(o6H,f7H)
_(x5H,o6H)
var c8H=_mz(z,'counter',['bind:__l',37,'bind:add',1,'bind:sub',2,'data-event-opts',3,'goodsInfo',4,'vueId',5],[],aLH,lKH,gg)
_(x5H,c8H)
_(aZH,x5H)
_(cWH,aZH)
_(fSH,cWH)
_(bOH,fSH)
_(tMH,bOH)
return tMH
}
cIH.wxXCkey=4
_2z(z,6,oJH,e,s,gg,cIH,'goods','index','index')
cFH.wxXCkey=1
_(oDH,fEH)
var h9H=_n('view')
_rz(z,h9H,'class',43,e,s,gg)
var cAI=_mz(z,'view',['bindtap',44,'class',1,'data-event-opts',2],[],e,s,gg)
var oBI=_n('view')
_rz(z,oBI,'class',47,e,s,gg)
var lCI=_n('view')
_rz(z,lCI,'class',48,e,s,gg)
_(oBI,lCI)
_(cAI,oBI)
var aDI=_n('view')
_rz(z,aDI,'class',49,e,s,gg)
var tEI=_oz(z,50,e,s,gg)
_(aDI,tEI)
_(cAI,aDI)
_(h9H,cAI)
var o0H=_v()
_(h9H,o0H)
if(_oz(z,51,e,s,gg)){o0H.wxVkey=1
var eFI=_mz(z,'view',['bindtap',52,'class',1,'data-event-opts',2],[],e,s,gg)
var bGI=_oz(z,55,e,s,gg)
_(eFI,bGI)
_(o0H,eFI)
}
var oHI=_n('view')
_rz(z,oHI,'class',56,e,s,gg)
var xII=_n('view')
_rz(z,xII,'class',57,e,s,gg)
var oJI=_oz(z,58,e,s,gg)
_(xII,oJI)
var fKI=_n('view')
_rz(z,fKI,'class',59,e,s,gg)
var cLI=_oz(z,60,e,s,gg)
_(fKI,cLI)
_(xII,fKI)
_(oHI,xII)
var hMI=_mz(z,'view',['bindtap',61,'class',1,'data-event-opts',2],[],e,s,gg)
var oNI=_oz(z,64,e,s,gg)
_(hMI,oNI)
_(oHI,hMI)
_(h9H,oHI)
o0H.wxXCkey=1
_(oDH,h9H)
_(r,oDH)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oPI=_n('view')
var lQI=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(oPI,lQI)
var aRI=_mz(z,'page-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(oPI,aRI)
var tSI=_n('view')
_rz(z,tSI,'class',4,e,s,gg)
var eTI=_n('view')
_rz(z,eTI,'class',5,e,s,gg)
var bUI=_mz(z,'scroll-view',['class',6,'scrollY',1,'showScrollbar',2],[],e,s,gg)
var oVI=_v()
_(bUI,oVI)
var xWI=function(fYI,oXI,cZI,gg){
var o2I=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],fYI,oXI,gg)
var c3I=_n('view')
_rz(z,c3I,'class',16,fYI,oXI,gg)
var o4I=_n('view')
_rz(z,o4I,'class',17,fYI,oXI,gg)
_(c3I,o4I)
var l5I=_oz(z,18,fYI,oXI,gg)
_(c3I,l5I)
_(o2I,c3I)
_(cZI,o2I)
return cZI
}
oVI.wxXCkey=2
_2z(z,11,xWI,e,s,gg,oVI,'category','index','index')
_(eTI,bUI)
_(tSI,eTI)
var a6I=_mz(z,'scroll-view',['class',19,'scrollY',1],[],e,s,gg)
var t7I=_v()
_(a6I,t7I)
var e8I=function(o0I,b9I,xAJ,gg){
var fCJ=_mz(z,'view',['class',25,'hidden',1],[],o0I,b9I,gg)
var cDJ=_n('view')
_rz(z,cDJ,'class',27,o0I,b9I,gg)
var hEJ=_n('image')
_rz(z,hEJ,'src',28,o0I,b9I,gg)
_(cDJ,hEJ)
_(fCJ,cDJ)
var oFJ=_n('view')
_rz(z,oFJ,'class',29,o0I,b9I,gg)
var cGJ=_v()
_(oFJ,cGJ)
var oHJ=function(aJJ,lIJ,tKJ,gg){
var bMJ=_mz(z,'view',['bindtap',34,'class',1,'data-event-opts',2],[],aJJ,lIJ,gg)
var oNJ=_n('image')
_rz(z,oNJ,'src',37,aJJ,lIJ,gg)
_(bMJ,oNJ)
var xOJ=_n('view')
_rz(z,xOJ,'class',38,aJJ,lIJ,gg)
var oPJ=_oz(z,39,aJJ,lIJ,gg)
_(xOJ,oPJ)
_(bMJ,xOJ)
_(tKJ,bMJ)
return tKJ
}
cGJ.wxXCkey=2
_2z(z,32,oHJ,o0I,b9I,gg,cGJ,'item','i','i')
_(fCJ,oFJ)
_(xAJ,fCJ)
return xAJ
}
t7I.wxXCkey=2
_2z(z,23,e8I,e,s,gg,t7I,'category','index','index')
_(tSI,a6I)
_(oPI,tSI)
_(r,oPI)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cRJ=_n('view')
var cUJ=_mz(z,'page-status',['bind:__l',0,'vueId',1],[],e,s,gg)
_(cRJ,cUJ)
var oVJ=_mz(z,'page-header',['bind:__l',2,'vueId',1],[],e,s,gg)
_(cRJ,oVJ)
var lWJ=_n('view')
_rz(z,lWJ,'class',4,e,s,gg)
var aXJ=_n('view')
_rz(z,aXJ,'class',5,e,s,gg)
var tYJ=_mz(z,'swiper',['autoplay',6,'bindchange',1,'circular',2,'data-event-opts',3],[],e,s,gg)
var eZJ=_v()
_(tYJ,eZJ)
var b1J=function(x3J,o2J,o4J,gg){
var c6J=_n('swiper-item')
var h7J=_n('image')
_rz(z,h7J,'src',14,x3J,o2J,gg)
_(c6J,h7J)
_(o4J,c6J)
return o4J
}
eZJ.wxXCkey=2
_2z(z,12,b1J,e,s,gg,eZJ,'swiper','__i0__','id')
_(aXJ,tYJ)
var o8J=_n('view')
_rz(z,o8J,'class',15,e,s,gg)
var c9J=_v()
_(o8J,c9J)
var o0J=function(aBK,lAK,tCK,gg){
var bEK=_n('view')
_rz(z,bEK,'class',20,aBK,lAK,gg)
_(tCK,bEK)
return tCK
}
c9J.wxXCkey=2
_2z(z,18,o0J,e,s,gg,c9J,'swiper','index','index')
_(aXJ,o8J)
_(lWJ,aXJ)
_(cRJ,lWJ)
var oFK=_n('view')
_rz(z,oFK,'class',21,e,s,gg)
var xGK=_n('view')
_rz(z,xGK,'class',22,e,s,gg)
var oHK=_v()
_(xGK,oHK)
var fIK=function(hKK,cJK,oLK,gg){
var oNK=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2],[],hKK,cJK,gg)
var lOK=_n('view')
_rz(z,lOK,'class',30,hKK,cJK,gg)
var aPK=_n('image')
_rz(z,aPK,'src',31,hKK,cJK,gg)
_(lOK,aPK)
_(oNK,lOK)
var tQK=_n('view')
_rz(z,tQK,'class',32,hKK,cJK,gg)
var eRK=_oz(z,33,hKK,cJK,gg)
_(tQK,eRK)
_(oNK,tQK)
_(oLK,oNK)
return oLK
}
oHK.wxXCkey=2
_2z(z,25,fIK,e,s,gg,oHK,'item','index','index')
_(oFK,xGK)
_(cRJ,oFK)
var hSJ=_v()
_(cRJ,hSJ)
if(_oz(z,34,e,s,gg)){hSJ.wxVkey=1
var bSK=_n('view')
_rz(z,bSK,'class',35,e,s,gg)
var oTK=_n('image')
_rz(z,oTK,'src',36,e,s,gg)
_(bSK,oTK)
_(hSJ,bSK)
}
var oTJ=_v()
_(cRJ,oTJ)
if(_oz(z,37,e,s,gg)){oTJ.wxVkey=1
var xUK=_n('view')
_rz(z,xUK,'class',38,e,s,gg)
var oVK=_n('view')
_rz(z,oVK,'class',39,e,s,gg)
var fWK=_n('view')
_rz(z,fWK,'class',40,e,s,gg)
var cXK=_oz(z,41,e,s,gg)
_(fWK,cXK)
_(oVK,fWK)
var hYK=_n('view')
_rz(z,hYK,'class',42,e,s,gg)
var oZK=_v()
_(hYK,oZK)
var c1K=function(l3K,o2K,a4K,gg){
var e6K=_mz(z,'view',['bindtap',47,'class',1,'data-event-opts',2],[],l3K,o2K,gg)
var b7K=_n('view')
_rz(z,b7K,'class',50,l3K,o2K,gg)
var o8K=_oz(z,51,l3K,o2K,gg)
_(b7K,o8K)
_(e6K,b7K)
var x9K=_n('view')
_rz(z,x9K,'class',52,l3K,o2K,gg)
var o0K=_n('view')
_rz(z,o0K,'class',53,l3K,o2K,gg)
var fAL=_n('view')
_rz(z,fAL,'class',54,l3K,o2K,gg)
var cBL=_oz(z,55,l3K,o2K,gg)
_(fAL,cBL)
_(o0K,fAL)
var hCL=_n('view')
_rz(z,hCL,'class',56,l3K,o2K,gg)
var oDL=_oz(z,57,l3K,o2K,gg)
_(hCL,oDL)
_(o0K,hCL)
_(x9K,o0K)
var cEL=_n('view')
_rz(z,cEL,'class',58,l3K,o2K,gg)
var oFL=_n('image')
_rz(z,oFL,'src',59,l3K,o2K,gg)
_(cEL,oFL)
_(x9K,cEL)
_(e6K,x9K)
_(a4K,e6K)
return a4K
}
oZK.wxXCkey=2
_2z(z,45,c1K,e,s,gg,oZK,'item','index','index')
_(oVK,hYK)
_(xUK,oVK)
_(oTJ,xUK)
}
hSJ.wxXCkey=1
oTJ.wxXCkey=1
_(r,cRJ)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var aHL=_n('view')
var tIL=_n('view')
_rz(z,tIL,'class',0,e,s,gg)
var eJL=_n('view')
_rz(z,eJL,'class',1,e,s,gg)
var bKL=_n('view')
_rz(z,bKL,'class',2,e,s,gg)
var oLL=_oz(z,3,e,s,gg)
_(bKL,oLL)
_(eJL,bKL)
var xML=_n('text')
var oNL=_oz(z,4,e,s,gg)
_(xML,oNL)
_(eJL,xML)
_(tIL,eJL)
var fOL=_n('view')
_rz(z,fOL,'class',5,e,s,gg)
var cPL=_mz(z,'input',['placeholder',6,'placeholderStyle',1,'type',2],[],e,s,gg)
_(fOL,cPL)
var hQL=_n('view')
_rz(z,hQL,'class',9,e,s,gg)
var oRL=_oz(z,10,e,s,gg)
_(hQL,oRL)
_(fOL,hQL)
_(tIL,fOL)
var cSL=_n('view')
_rz(z,cSL,'class',11,e,s,gg)
var oTL=_n('view')
_rz(z,oTL,'class',12,e,s,gg)
var lUL=_oz(z,13,e,s,gg)
_(oTL,lUL)
_(cSL,oTL)
_(tIL,cSL)
_(aHL,tIL)
var aVL=_n('view')
_rz(z,aVL,'class',14,e,s,gg)
_(aHL,aVL)
_(r,aHL)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var eXL=_n('view')
var bYL=_n('view')
_rz(z,bYL,'class',0,e,s,gg)
_(eXL,bYL)
var oZL=_n('view')
_rz(z,oZL,'class',1,e,s,gg)
var x1L=_n('image')
_rz(z,x1L,'src',2,e,s,gg)
_(oZL,x1L)
_(eXL,oZL)
var o2L=_n('view')
_rz(z,o2L,'class',3,e,s,gg)
var f3L=_oz(z,4,e,s,gg)
_(o2L,f3L)
_(eXL,o2L)
var c4L=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2,'hidden',3],[],e,s,gg)
var h5L=_oz(z,9,e,s,gg)
_(c4L,h5L)
_(eXL,c4L)
_(r,eXL)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var c7L=_n('view')
var o8L=_n('view')
_rz(z,o8L,'class',0,e,s,gg)
var l9L=_n('view')
_rz(z,l9L,'class',1,e,s,gg)
var a0L=_n('image')
_rz(z,a0L,'src',2,e,s,gg)
_(l9L,a0L)
_(o8L,l9L)
var tAM=_n('view')
_rz(z,tAM,'class',3,e,s,gg)
var eBM=_n('view')
_rz(z,eBM,'class',4,e,s,gg)
var bCM=_oz(z,5,e,s,gg)
_(eBM,bCM)
_(tAM,eBM)
_(o8L,tAM)
var oDM=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var xEM=_n('view')
_rz(z,xEM,'class',9,e,s,gg)
var oFM=_oz(z,10,e,s,gg)
_(xEM,oFM)
_(oDM,xEM)
_(o8L,oDM)
_(c7L,o8L)
_(r,c7L)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: \x22iconfont\x22; src: url(data:font/ttf;base64,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b25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgAKYXBwcmVjaWF0ZQVlbW9qaQlmYXZvcmZpbGwFZmF2b3IHbG9hZGluZwxsb2NhdGlvbmZpbGwIbG9jYXRpb24Ocm91bmRjaGVja2ZpbGwKcm91bmRjaGVjawZzZWFyY2gIbGlrZWZpbGwEbGlrZQRiYWNrCGNhc2NhZGVzCHNldHRpbmdzA3BpYwVyaWdodApkZWxldGVmaWxsBGNhcnQGZGVsZXRlBGxvY2sGdW5sb2NrBXNoYXJlBm5vdGljZQhtYXJrZmlsbARtYXJrCHJhZGlvYm94DHJhZGlvYm94ZmlsbANhZGQEbW92ZQhteV9saWdodAtzaGFyZV9saWdodBJtb3JlX2FuZHJvaWRfbGlnaHQLdmlkZW9fbGlnaHQNcXJfY29kZV9saWdodANyZW4AAAAAAA\x3d\x3d); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-appreciate:before { content: \x22\\E644\x22; }\n.",[1],"icon-emoji:before { content: \x22\\E64A\x22; }\n.",[1],"icon-favorfill:before { content: \x22\\E64B\x22; }\n.",[1],"icon-favor:before { content: \x22\\E64C\x22; }\n.",[1],"icon-loading:before { content: \x22\\E64F\x22; }\n.",[1],"icon-locationfill:before { content: \x22\\E650\x22; }\n.",[1],"icon-location:before { content: \x22\\E651\x22; }\n.",[1],"icon-roundcheckfill:before { content: \x22\\E656\x22; }\n.",[1],"icon-roundcheck:before { content: \x22\\E657\x22; }\n.",[1],"icon-search:before { content: \x22\\E65C\x22; }\n.",[1],"icon-likefill:before { content: \x22\\E668\x22; }\n.",[1],"icon-like:before { content: \x22\\E669\x22; }\n.",[1],"icon-back:before { content: \x22\\E679\x22; }\n.",[1],"icon-cascades:before { content: \x22\\E67C\x22; }\n.",[1],"icon-settings:before { content: \x22\\E68A\x22; }\n.",[1],"icon-pic:before { content: \x22\\E69B\x22; }\n.",[1],"icon-right:before { content: \x22\\E6A3\x22; }\n.",[1],"icon-deletefill:before { content: \x22\\E6A6\x22; }\n.",[1],"icon-cart:before { content: \x22\\E6AF\x22; }\n.",[1],"icon-delete:before { content: \x22\\E6B4\x22; }\n.",[1],"icon-lock:before { content: \x22\\E6C0\x22; }\n.",[1],"icon-unlock:before { content: \x22\\E6C2\x22; }\n.",[1],"icon-share:before { content: \x22\\E6F3\x22; }\n.",[1],"icon-notice:before { content: \x22\\E70A\x22; }\n.",[1],"icon-markfill:before { content: \x22\\E730\x22; }\n.",[1],"icon-mark:before { content: \x22\\E731\x22; }\n.",[1],"icon-radiobox:before { content: \x22\\E75B\x22; }\n.",[1],"icon-radioboxfill:before { content: \x22\\E763\x22; }\n.",[1],"icon-add:before { content: \x22\\E767\x22; }\n.",[1],"icon-move:before { content: \x22\\E768\x22; }\n.",[1],"icon-my_light:before { content: \x22\\E7D5\x22; }\n.",[1],"icon-share_light:before { content: \x22\\E7E0\x22; }\n.",[1],"icon-more_android_light:before { content: \x22\\E7E3\x22; }\n.",[1],"icon-video_light:before { content: \x22\\E7E9\x22; }\n.",[1],"icon-qr_code_light:before { content: \x22\\E7F8\x22; }\n.",[1],"icon-ren:before { content: \x22\\E605\x22; }\nbody { position: relative; background-color: #FFFFFF; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/counter.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"counter { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"counter .",[1],"input { width: ",[0,80],"; height: ",[0,60],"; margin: 0 ",[0,10],"; background-color: #f3f3f3; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; text-align: center; }\n.",[1],"counter .",[1],"input wx-input { width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; text-align: center; font-size: ",[0,26],"; }\n.",[1],"counter .",[1],"sub, .",[1],"counter .",[1],"add { width: ",[0,60],"; height: ",[0,60],"; background-color: #f3f3f3; border-radius: ",[0,5],"; }\n.",[1],"counter .",[1],"sub .",[1],"icon, .",[1],"counter .",[1],"add .",[1],"icon { font-size: ",[0,30],"; width: ",[0,60],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n",],undefined,{path:"./components/counter.wxss"});    
__wxAppCode__['components/counter.wxml']=$gwx('./components/counter.wxml');

__wxAppCode__['components/popSpec.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"popup { position: fixed; z-index: 20; top: 0; left: 0; height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0.6); }\n.",[1],"popup .",[1],"layer { position: fixed; bottom: 0; width: 92%; padding: 0 4%; height: 72%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; border-radius: ",[0,20]," ",[0,20]," 0 0; background-color: #FFFFFF; }\n.",[1],"popup .",[1],"layer .",[1],"layer__content { padding: ",[0,20]," 0; }\n.",[1],"popup .",[1],"layer .",[1],"layer__title { margin: ",[0,30]," 0; font-size: ",[0,30],"; }\n.",[1],"popup .",[1],"layer .",[1],"layer__spec-list { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"popup .",[1],"layer .",[1],"layer__spec-list .",[1],"spec-item { padding: ",[0,4]," ",[0,20],"; margin-bottom: ",[0,20],"; border-radius: ",[0,10],"; font-size: ",[0,28],"; background-color: #f6f6f6; }\n.",[1],"popup .",[1],"layer .",[1],"layer__spec-list .",[1],"spec-item:not(:last-child) { margin-right: ",[0,30],"; }\n.",[1],"popup .",[1],"layer .",[1],"layer__spec-list .",[1],"spec-item.",[1],"on { border: ",[0,2]," solid #f47925; }\n.",[1],"popup .",[1],"layer .",[1],"number { margin-top: ",[0,30],"; padding-top: ",[0,20],"; border-top: solid ",[0,1]," #aaa; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"popup .",[1],"layer .",[1],"number .",[1],"number__text { font-size: ",[0,30],"; }\n.",[1],"popup .",[1],"layer .",[1],"btn { width: 100%; height: ",[0,100],"; }\n.",[1],"popup .",[1],"layer .",[1],"btn .",[1],"button { width: 100%; height: ",[0,80],"; border-radius: ",[0,40],"; color: #fff; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; background-color: #f47952; font-size: ",[0,28],"; }\n",],undefined,{path:"./components/popSpec.wxss"});    
__wxAppCode__['components/popSpec.wxml']=$gwx('./components/popSpec.wxml');

__wxAppCode__['components/status.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"status { position: fixed; width: 100%; top: 0; left: 0; z-index: 999; background-color: #FFFFFF; height: 0; height: var(--status-bar-height); }\n",],undefined,{path:"./components/status.wxss"});    
__wxAppCode__['components/status.wxml']=$gwx('./components/status.wxml');

__wxAppCode__['pages/goods/goodHeader.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { width: 100%; position: fixed; top: 0; left: 0; height: ",[0,100],"; z-index: 10; top: var(--status-bar-height); }\n.",[1],"header .",[1],"header-box { width: 92%; height: ",[0,100],"; padding: 0 4%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"header .",[1],"header-box .",[1],"icon { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; width: ",[0,60],"; height: ",[0,60],"; border-radius: 50%; background-color: rgba(0, 0, 0, 0.2); color: #FFFFFF; font-size: ",[0,42],"; }\n",],undefined,{path:"./pages/goods/goodHeader.wxss"});    
__wxAppCode__['pages/goods/goodHeader.wxml']=$gwx('./pages/goods/goodHeader.wxml');

__wxAppCode__['pages/goods/goods.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"status { opacity: 0; }\n.",[1],"swiper-box { position: relative; width: 100%; height: 100vw; }\n.",[1],"swiper-box wx-swiper { width: 100%; height: 100vw; }\n.",[1],"swiper-box wx-swiper wx-image { width: 100%; height: 100vw; }\n.",[1],"swiper-box .",[1],"indicator { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; position: absolute; right: ",[0,20],"; bottom: ",[0,20],"; height: ",[0,40],"; padding: 0 ",[0,25],"; border-radius: ",[0,40],"; background-color: rgba(0, 0, 0, 0.2); font-size: ",[0,22],"; color: #FFFFFF; }\n.",[1],"goods-info { width: 92%; padding: ",[0,20]," 4%; margin-bottom: ",[0,20],"; }\n.",[1],"goods-info .",[1],"goods__price { font-size: ",[0,46],"; color: #f47925; font-weight: 600; }\n.",[1],"goods-info .",[1],"goods__name { font-size: ",[0,30],"; }\n.",[1],"spec-box { width: 92%; padding: ",[0,20]," 4%; margin-bottom: ",[0,20],"; position: relative; }\n.",[1],"spec-box .",[1],"row { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,28],"; }\n.",[1],"spec-box .",[1],"row wx-text { margin-right: ",[0,20],"; font-size: ",[0,28],"; color: #a2a2a2; }\n.",[1],"spec-box .",[1],"row .",[1],"spec__info { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"spec-box .",[1],"row .",[1],"spec__info wx-view { margin-top: ",[0,2],"; padding: ",[0,10],"; font-size: ",[0,20],"; color: #999999; border-radius: ",[0,5],"; background-color: #f6f6f6; }\n.",[1],"spec-box .",[1],"row .",[1],"spec__info wx-view:not(:last-child) { margin-right: ",[0,10],"; }\n.",[1],"spec-box .",[1],"row .",[1],"spec__info wx-view.",[1],"on { border: ",[0,1]," solid #f47952; }\n.",[1],"spec-box .",[1],"row .",[1],"arrow { position: absolute; right: 4%; }\n.",[1],"spec-box .",[1],"row .",[1],"arrow .",[1],"icon { color: #ccc; }\n.",[1],"comment { width: 92%; margin-bottom: ",[0,20],"; padding: ",[0,20]," 4%; }\n.",[1],"comment .",[1],"row { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; margin-bottom: ",[0,30],"; }\n.",[1],"comment .",[1],"row .",[1],"text { font-size: ",[0,30],"; color: #a2a2a2; }\n.",[1],"comment .",[1],"row .",[1],"show { font-size: ",[0,28],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; color: #17e6a1; }\n.",[1],"comment .",[1],"comment__info .",[1],"user__info { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"comment .",[1],"comment__info .",[1],"user__info .",[1],"user__profile { margin-right: ",[0,8],"; width: ",[0,40],"; height: ",[0,40],"; border-radius: 50%; }\n.",[1],"comment .",[1],"comment__info .",[1],"user__info .",[1],"user__name { color: #999999; font-size: ",[0,24],"; }\n.",[1],"comment .",[1],"comment__info .",[1],"comment__content { margin-top: ",[0,10],"; font-size: ",[0,26],"; }\n.",[1],"goods-detail .",[1],"title { height: ",[0,80],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,26],"; color: #999999; }\n.",[1],"footer { position: fixed; bottom: ",[0,0],"; width: 92%; padding: 0 4%; height: ",[0,99],"; border-top: solid ",[0,1]," #eee; background-color: #fff; z-index: 2; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"footer .",[1],"icons { display: -webkit-box; display: -webkit-flex; display: flex; height: ",[0,80],"; margin-left: -4%; }\n.",[1],"footer .",[1],"icons .",[1],"box { width: ",[0,80],"; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"footer .",[1],"icons .",[1],"box .",[1],"icon { font-size: ",[0,40],"; color: #828282; }\n.",[1],"footer .",[1],"icons .",[1],"box .",[1],"text { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; width: 100%; font-size: ",[0,22],"; color: #666; }\n.",[1],"footer .",[1],"btns { height: ",[0,80],"; border-radius: ",[0,40],"; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: flex; margin-right: -2%; }\n.",[1],"footer .",[1],"btns .",[1],"joinCart, .",[1],"footer .",[1],"btns .",[1],"buy { height: ",[0,80],"; padding: 0 ",[0,40],"; color: #fff; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,28],"; }\n.",[1],"footer .",[1],"btns .",[1],"joinCart { background-color: #f0b46c; }\n.",[1],"footer .",[1],"btns .",[1],"buy { background-color: #f06c7a; }\n",],undefined,{path:"./pages/goods/goods.wxss"});    
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/goodsList.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { width: 92%; padding: 0 4%; height: ",[0,79],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-justify-content: space-around; justify-content: space-around; -webkit-box-align: end; -webkit-align-items: flex-end; align-items: flex-end; position: fixed; z-index: 10; background-color: #fff; border-bottom: solid ",[0,1]," #eee; }\n.",[1],"header .",[1],"target { width: 20%; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,28],"; margin-bottom: ",[0,-2],"; color: #aaa; }\n.",[1],"header .",[1],"target.",[1],"on { color: #555; border-bottom: ",[0,4]," solid #f06c7a; font-weight: 600; font-size: ",[0,30],"; }\n.",[1],"place { background-color: #ffffff; height: ",[0,100],"; }\n.",[1],"goods-list .",[1],"loading__text { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; height: ",[0,60],"; color: #979797; font-size: ",[0,24],"; }\n.",[1],"goods-list .",[1],"product-list { width: 92%; padding: 0 4% 3vw 4%; -webkit-column-count: 2; column-count: 2; -webkit-column-gap: 1em; column-gap: 1em; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product { -webkit-column-break-inside: avoid; break-inside: avoid; border-radius: ",[0,20],"; background-color: #fff; margin: 0 0 ",[0,15]," 0; box-shadow: ",[0,0]," ",[0,5]," ",[0,25]," rgba(0, 0, 0, 0.1); }\n.",[1],"goods-list .",[1],"product-list .",[1],"product wx-image { width: 100%; border-radius: ",[0,20]," ",[0,20]," 0 0; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"product__name { width: 92%; padding: ",[0,6]," 4%; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; text-align: justify; overflow: hidden; font-size: ",[0,30],"; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"product__info { width: 92%; padding: ",[0,10]," 4%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: end; -webkit-align-items: flex-end; align-items: flex-end; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"product__info .",[1],"product__price { font-size: ",[0,30],"; font-weight: 600; color: #e65339; }\n.",[1],"goods-list .",[1],"product-list .",[1],"product .",[1],"product__info .",[1],"product__slogan { font-size: ",[0,24],"; color: #807c87; }\n",],undefined,{path:"./pages/goods/goodsList.wxss"});    
__wxAppCode__['pages/goods/goodsList.wxml']=$gwx('./pages/goods/goodsList.wxml');

__wxAppCode__['pages/goods/ratings.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"content { width: 94%; padding: 0 3%; }\n.",[1],"content wx-view { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"content .",[1],"label { width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"content .",[1],"label wx-view { padding: 0 ",[0,20],"; height: ",[0,50],"; border-radius: ",[0,40],"; border: solid ",[0,1]," #ddd; -webkit-box-align: center; -webkit-align-items: center; align-items: center; color: #555; font-size: ",[0,26],"; background-color: #f9f9f9; margin: ",[0,10]," ",[0,20]," ",[0,10]," 0; }\n.",[1],"content .",[1],"label wx-view.",[1],"on { border: solid ",[0,1]," #f06c7a; color: #f06c7a; }\n.",[1],"content .",[1],"comment-list { width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,20]," 0; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content { width: 100%; margin-top: ",[0,30],"; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__left { width: 10vw; -webkit-flex-shrink: 0; flex-shrink: 0; margin-right: ",[0,10],"; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__left .",[1],"comment__figure { width: 100%; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__left .",[1],"comment__figure wx-image { width: 10vw; height: 10vw; border-radius: 100%; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right { width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"name-date { width: 100%; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: baseline; -webkit-align-items: baseline; align-items: baseline; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"name-date .",[1],"username { font-size: ",[0,32],"; color: #555; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"name-date .",[1],"date { font-size: ",[0,28],"; color: #aaa; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"spec { width: 100%; color: #aaa; font-size: ",[0,26],"; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"medias { width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"medias .",[1],"medias__content { width: 94%; padding: 0 3%; font-size: ",[0,30],"; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"medias .",[1],"img-video { width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"medias .",[1],"img-video .",[1],"box { width: calc((84.6vw - ",[0,50],")/4); height: calc((84.6vw - ",[0,50],")/4); margin: ",[0,5]," ",[0,5],"; position: relative; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"medias .",[1],"img-video .",[1],"box wx-image { position: absolute; width: 100%; height: 100%; border-radius: ",[0,10],"; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"medias .",[1],"img-video .",[1],"box .",[1],"playbtn { position: absolute; }\n.",[1],"content .",[1],"comment-list .",[1],"comment__content .",[1],"comment__right .",[1],"medias .",[1],"img-video .",[1],"box .",[1],"playbtn .",[1],"icon { font-size: ",[0,80],"; color: rgba(255, 255, 255, 0.9); }\n.",[1],"content .",[1],"myVideo { position: fixed; top: 50%; right: 100%; }\n",],undefined,{path:"./pages/goods/ratings.wxss"});    
__wxAppCode__['pages/goods/ratings.wxml']=$gwx('./pages/goods/ratings.wxml');

__wxAppCode__['pages/orders/order.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"buy-list { width: 86%; padding: ",[0,10]," 3%; margin: ",[0,30]," auto ",[0,20]," auto; box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.1); border-radius: ",[0,20],"; }\n.",[1],"buy-list .",[1],"row { margin: ",[0,30]," 0; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"img { width: 22vw; height: 22vw; border-radius: ",[0,10],"; overflow: hidden; -webkit-flex-shrink: 0; flex-shrink: 0; margin-right: ",[0,10],"; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"img wx-image { width: 22vw; height: 22vw; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info { width: 100%; height: 22vw; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; position: relative; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"title { width: 100%; font-size: ",[0,28],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"spec { font-size: ",[0,22],"; background-color: #f3f3f3; color: #a7a7a7; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: 0 ",[0,10],"; border-radius: ",[0,20],"; margin-bottom: 20vw; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"price-number { position: absolute; width: 100%; bottom: ",[0,0],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: end; -webkit-align-items: flex-end; align-items: flex-end; font-size: ",[0,28],"; height: ",[0,40],"; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"price-number .",[1],"price { color: #f06c7a; }\n.",[1],"buy-list .",[1],"row .",[1],"goods-info .",[1],"info .",[1],"price-number .",[1],"number { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"detail { width: 86%; margin: ",[0,30]," auto ",[0,20],"; padding: ",[0,10]," 3%; box-shadow: 0 ",[0,4]," ",[0,20]," rgba(0, 0, 0, 0.1); border-radius: ",[0,20],"; }\n.",[1],"detail .",[1],"row { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; height: ",[0,60],"; }\n.",[1],"detail .",[1],"row .",[1],"amount { font-size: ",[0,28],"; }\n.",[1],"detail .",[1],"row .",[1],"content { font-size: ",[0,26],"; color: #f06c7a; }\n.",[1],"position { width: 100%; height: ",[0,100],"; }\n.",[1],"footer { position: fixed; z-index: 5; bottom: 0; width: 92%; padding: 0 4%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; align-items: center; height: ",[0,100],"; background-color: #fbfbfb; }\n.",[1],"footer .",[1],"total { display: -webkit-box; display: -webkit-flex; display: flex; font-size: ",[0,28],"; margin-right: ",[0,10],"; }\n.",[1],"footer .",[1],"total .",[1],"price { font-weight: 600; }\n.",[1],"footer .",[1],"btn { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; height: ",[0,60],"; padding: 0 ",[0,30],"; border-radius: ",[0,40],"; font-size: ",[0,30],"; background-color: #f06c7a; color: #FFFFFF; }\n",],undefined,{path:"./pages/orders/order.wxss"});    
__wxAppCode__['pages/orders/order.wxml']=$gwx('./pages/orders/order.wxml');

__wxAppCode__['pages/tabBar/cart/cart.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"container { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding-left: ",[0,20],"; height: 22vw; margin-right: ",[0,20],"; }\n.",[1],"container .",[1],"checkbox { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; width: ",[0,35],"; height: ",[0,35],"; border-radius: 50%; border: ",[0,2]," solid #f06c7a; }\n.",[1],"container .",[1],"checkbox .",[1],"on { width: ",[0,25],"; height: ",[0,25],"; border-radius: 50%; background-color: #f06c7a; }\n.",[1],"goods-list { width: 100%; padding: ",[0,20]," 0 ",[0,120]," 0; }\n.",[1],"goods-list .",[1],"empty { width: 100%; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,32],"; color: #a7a7a7; }\n.",[1],"goods-list .",[1],"row { width: 92%; height: calc(22vw + ",[0,40],"); margin: ",[0,20]," auto; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; position: relative; overflow: hidden; z-index: 4; border: 0; border-radius: ",[0,15],"; box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.1); }\n.",[1],"goods-list .",[1],"row .",[1],"menu { position: absolute; width: 30%; height: 100%; right: 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; background: red; color: #FFFFFF; z-index: 2; }\n.",[1],"goods-list .",[1],"row .",[1],"menu .",[1],"icon { color: #FFFFFF; font-size: ",[0,60],"; }\n.",[1],"goods-list .",[1],"row .",[1],"production { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; z-index: 3; position: absolute; width: 100%; padding: 0 0; height: 100%; background-color: #FFFFFF; }\n@-webkit-keyframes showMenu { 0% { -webkit-transform: translateX(0); transform: translateX(0); }\n100% { -webkit-transform: translateX(-30%); transform: translateX(-30%); }\n}@keyframes showMenu { 0% { -webkit-transform: translateX(0); transform: translateX(0); }\n100% { -webkit-transform: translateX(-30%); transform: translateX(-30%); }\n}@-webkit-keyframes closeMenu { 0% { -webkit-transform: translateX(-30%); transform: translateX(-30%); }\n100% { -webkit-transform: translateX(0); transform: translateX(0); }\n}@keyframes closeMenu { 0% { -webkit-transform: translateX(-30%); transform: translateX(-30%); }\n100% { -webkit-transform: translateX(0); transform: translateX(0); }\n}.",[1],"goods-list .",[1],"row .",[1],"production.",[1],"open { -webkit-animation: showMenu 0.25s linear both; animation: showMenu 0.25s linear both; }\n.",[1],"goods-list .",[1],"row .",[1],"production.",[1],"close { -webkit-animation: closeMenu 0.15s linear both; animation: closeMenu 0.15s linear both; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; padding-right: ",[0,20],"; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"img { width: 22vw; height: 22vw; margin-right: ",[0,10],"; border-radius: ",[0,10],"; overflow: hidden; -webkit-flex-shrink: 0; flex-shrink: 0; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"img wx-image { width: 22vw; height: 22vw; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"info { width: 100%; height: 22vw; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; position: relative; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"info .",[1],"title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; width: 100%; font-size: ",[0,28],"; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"info .",[1],"spec { height: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: 0 ",[0,10],"; border-radius: ",[0,15],"; margin-bottom: 20vw; font-size: ",[0,20],"; color: #a7a7a7; background-color: #f3f3f3; }\n.",[1],"goods-list .",[1],"row .",[1],"production .",[1],"goods-info .",[1],"info .",[1],"price-number { position: absolute; width: 100%; bottom: ",[0,0],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: end; -webkit-align-items: flex-end; align-items: flex-end; font-size: ",[0,28],"; height: ",[0,60],"; }\n.",[1],"footer { width: 92%; padding: 0 4%; display: -webkit-box; display: -webkit-flex; display: flex; position: fixed; height: ",[0,100],"; bottom: 50px; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; font-size: ",[0,28],"; background-color: #fbfbfb; bottom: 0; z-index: 5; }\n.",[1],"footer .",[1],"delBtn { border: solid ",[0,1]," #f06c7a; color: #f06c7a; padding: 0 ",[0,30],"; height: ",[0,50],"; border-radius: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"footer .",[1],"container { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"footer .",[1],"container .",[1],"text { font-size: ",[0,28],"; margin-left: ",[0,10],"; }\n.",[1],"footer .",[1],"settlement { display: -webkit-box; display: -webkit-flex; display: flex; width: 60%; -webkit-box-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"footer .",[1],"settlement .",[1],"sum { display: -webkit-box; display: -webkit-flex; display: flex; width: 50%; font-size: ",[0,28],"; margin-right: ",[0,10],"; -webkit-box-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; }\n.",[1],"footer .",[1],"settlement .",[1],"sum .",[1],"money { font-weight: 600; }\n.",[1],"footer .",[1],"settlement .",[1],"btn { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: 0 ",[0,30],"; height: ",[0,50],"; border-radius: ",[0,30],"; background-color: #f06c7a; color: #fff; }\n",],undefined,{path:"./pages/tabBar/cart/cart.wxss"});    
__wxAppCode__['pages/tabBar/cart/cart.wxml']=$gwx('./pages/tabBar/cart/cart.wxml');

__wxAppCode__['pages/tabBar/category/category.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"category-box { width: 100%; position: relative; background-color: #FFFFFF; display: -webkit-box; display: -webkit-flex; display: flex; max-height: calc(100vh - ",[0,100]," - 50px); max-height: calc(100vh - ",[0,100]," - var(--status-bar-height)); }\n.",[1],"category-box::after { content: \x27\x27; display: block; clear: both; }\n.",[1],"category-box .",[1],"category__left { width: 24%; background-color: #f2f2f2; }\n.",[1],"category-box .",[1],"category__left .",[1],"category__navigation { max-height: calc(100vh - ",[0,100]," - 50px); max-height: calc(100vh - ",[0,100]," - var(--status-bar-height)); overflow: hidden; }\n.",[1],"category-box .",[1],"category__left .",[1],"category__navigation-item { width: 100%; height: ",[0,90],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"category-box .",[1],"category__left .",[1],"category__navigation-item .",[1],"item__text { width: 100%; position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; font-size: ",[0,28],"; color: #3c3c3c; }\n.",[1],"category-box .",[1],"category__left .",[1],"category__navigation-item .",[1],"item__text .",[1],"block { position: absolute; left: 0; height: 0; }\n.",[1],"category-box .",[1],"category__left .",[1],"category__navigation-item.",[1],"on { height: ",[0,100],"; background-color: #FFFFFF; }\n.",[1],"category-box .",[1],"category__left .",[1],"category__navigation-item.",[1],"on .",[1],"item__text { font-size: ",[0,30],"; font-weight: 600; color: #2d2d2d; }\n.",[1],"category-box .",[1],"category__left .",[1],"category__navigation-item.",[1],"on .",[1],"item__text .",[1],"block { width: ",[0,10],"; height: 80%; top: 10%; background-color: #f06c7a; }\n.",[1],"category-box .",[1],"category__right { position: absolute; left: 24%; width: 76%; max-height: calc(100vh - ",[0,100]," - 50px); max-height: calc(100vh - ",[0,100]," - var(--status-bar-height)); }\n.",[1],"category-box .",[1],"category__right .",[1],"category__content { width: 94%; padding: ",[0,20]," 3%; }\n.",[1],"category-box .",[1],"category__right .",[1],"category__content .",[1],"banner { width: 100%; height: 28vw; border-radius: ",[0,10],"; overflow: hidden; box-shadow: ",[0,0]," ",[0,5]," ",[0,20]," rgba(0, 0, 0, 0.3); }\n.",[1],"category-box .",[1],"category__right .",[1],"category__content .",[1],"banner wx-image { width: 100%; height: 100%; }\n.",[1],"category-box .",[1],"category__right .",[1],"category__content .",[1],"category-list { margin-top: ",[0,40],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"category-box .",[1],"category__right .",[1],"category__content .",[1],"category-list .",[1],"category-item { width: calc(71.44vw / 3); margin-bottom: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"category-box .",[1],"category__right .",[1],"category__content .",[1],"category-list .",[1],"category-item wx-image { width: 60%; height: calc(71.44vw / 3 * 0.6); }\n.",[1],"category-box .",[1],"category__right .",[1],"category__content .",[1],"category-list .",[1],"category-item .",[1],"text { margin-top: ",[0,5],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; font-size: ",[0,26],"; }\n",],undefined,{path:"./pages/tabBar/category/category.wxss"});    
__wxAppCode__['pages/tabBar/category/category.wxml']=$gwx('./pages/tabBar/category/category.wxml');

__wxAppCode__['pages/tabBar/home/home.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"swiper { width: 100%; margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"swiper .",[1],"swiper-box { width: 92%; height: 30.7vw; border-radius: ",[0,15],"; box-shadow: 0 ",[0,8]," ",[0,25]," rgba(0, 0, 0, 0.2); overflow: hidden; position: relative; z-index: 1; }\n.",[1],"swiper .",[1],"swiper-box wx-swiper { width: 100%; height: 30.7vw; }\n.",[1],"swiper .",[1],"swiper-box wx-swiper wx-swiper-item wx-image { width: 100%; height: 40vw; }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator { position: absolute; left: ",[0,20],"; bottom: ",[0,20],"; width: ",[0,150],"; height: ",[0,5],"; border-radius: ",[0,3],"; display: -webkit-box; display: -webkit-flex; display: flex; overflow: hidden; background-color: rgba(255, 255, 255, 0.4); }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator .",[1],"dots { width: ",[0,0],"; background-color: white; -webkit-transition: all .3s ease-out; transition: all .3s ease-out; }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator .",[1],"dots.",[1],"on { width: 33.33333%; }\n.",[1],"category { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"category .",[1],"category-box { width: 92%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; padding-bottom: ",[0,30],"; border-bottom: 1px solid #f6f6f6; }\n.",[1],"category .",[1],"category-box .",[1],"category-item { width: 25%; margin-top: ",[0,50],"; }\n.",[1],"category .",[1],"category-box .",[1],"category-item .",[1],"category__img { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"category .",[1],"category-box .",[1],"category-item .",[1],"category__img wx-image { width: 11vw; height: 11vw; }\n.",[1],"category .",[1],"category-box .",[1],"category-item .",[1],"category__name { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; margin-top: ",[0,16],"; font-size: ",[0,24],"; color: #3c3c3c; }\n.",[1],"banner { width: 92%; margin: ",[0,40]," 4%; }\n.",[1],"banner wx-image { width: 100%; height: 34vw; border-radius: ",[0,4],"; box-shadow: 0 ",[0,5]," ",[0,25]," rgba(0, 0, 0, 0.3); }\n.",[1],"promotion { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; margin-bottom: ",[0,40],"; }\n.",[1],"promotion .",[1],"promotion-box { width: 92%; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__header-title { margin: ",[0,10]," 0; padding: 0 ",[0,10],"; width: 100%; box-sizing: border-box; font-size: ",[0,34],"; font-weight: 700; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content .",[1],"promotion__item { width: 43%; padding: ",[0,15]," 3%; background-color: #ebf9f9; border-radius: ",[0,10],"; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content .",[1],"promotion__item .",[1],"promotion__title { margin-bottom: ",[0,4],"; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,30],"; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content .",[1],"promotion__item .",[1],"promotion__info { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content .",[1],"promotion__item .",[1],"promotion__info .",[1],"promotion__info-left { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; width: 50%; height: 18.86vw; -webkit-flex-shrink: 0; flex-shrink: 0; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content .",[1],"promotion__item .",[1],"promotion__info .",[1],"promotion__info-left .",[1],"promotion__ad { margin-top: ",[0,4],"; font-size: ",[0,22],"; color: #acb0b0; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content .",[1],"promotion__item .",[1],"promotion__info .",[1],"promotion__info-left .",[1],"btn { margin-bottom: ",[0,4],"; font-size: ",[0,24],"; color: #aaaaaa; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content .",[1],"promotion__item .",[1],"promotion__info .",[1],"promotion__info-right { width: 18.86vw; height: 18.86vw; }\n.",[1],"promotion .",[1],"promotion-box .",[1],"promotion__content .",[1],"promotion__item .",[1],"promotion__info .",[1],"promotion__info-right wx-image { width: 18.86vw; height: 18.86vw; }\n",],undefined,{path:"./pages/tabBar/home/home.wxss"});    
__wxAppCode__['pages/tabBar/home/home.wxml']=$gwx('./pages/tabBar/home/home.wxml');

__wxAppCode__['pages/tabBar/home/pageHeader.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { width: 92%; padding: 0 4%; height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; position: fixed; top: 0; z-index: 10; background-color: #FFFFFF; top: var(--status-bar-height); }\n.",[1],"header .",[1],"address-box { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; width: ",[0,120],"; height: ",[0,60],"; -webkit-flex-shrink: 0; flex-shrink: 0; font-size: ",[0,25],"; }\n.",[1],"header .",[1],"address-box .",[1],"icon { height: ",[0,60],"; margin-right: ",[0,5],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,42],"; color: #ffc50a; }\n.",[1],"header .",[1],"input-box { width: 100%; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; position: relative; border-radius: ",[0,30],"; background-color: #f5f5f5; }\n.",[1],"header .",[1],"input-box .",[1],"icon { position: absolute; right: 0; top: 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; width: ",[0,60],"; height: ",[0,60],"; font-size: ",[0,34],"; color: #c0c0c0; }\n.",[1],"header .",[1],"input-box wx-input { padding-left: ",[0,28],"; height: ",[0,28],"; font-size: ",[0,28],"; }\n.",[1],"header .",[1],"notice { width: ",[0,60],"; height: ",[0,60],"; -webkit-flex-shrink: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"header .",[1],"notice .",[1],"icon { width: ",[0,60],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,42],"; }\n.",[1],"place { height: ",[0,100],"; background-color: #FFFFFF; margin-top: var(--status-bar-height); }\n",],undefined,{path:"./pages/tabBar/home/pageHeader.wxss"});    
__wxAppCode__['pages/tabBar/home/pageHeader.wxml']=$gwx('./pages/tabBar/home/pageHeader.wxml');

__wxAppCode__['pages/tabBar/user/qrCode.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background-color: #f06c7a; }\n.",[1],"block { width: 100%; height: 30vh; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"QR { width: 60vw; height: 80vw; margin: -40vw auto 0 auto; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"QR wx-image { width: 50vw; height: 50vw; }\n.",[1],"title { width: 100%; margin-top: ",[0,50],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; font-size: ",[0,36],"; color: #fff; }\n.",[1],"btn { width: 50%; height: ",[0,80],"; border-radius: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: 0 ",[0,20],"; margin: 0 auto; margin-top: ",[0,50],"; background-color: rgba(255, 255, 255, 0.8); }\n",],undefined,{path:"./pages/tabBar/user/qrCode.wxss"});    
__wxAppCode__['pages/tabBar/user/qrCode.wxml']=$gwx('./pages/tabBar/user/qrCode.wxml');

__wxAppCode__['pages/tabBar/user/user.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"user { width: 92%; padding: 0 4%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; position: relative; top: 0; background-color: #f06c7a; padding-bottom: ",[0,80],"; }\n.",[1],"user .",[1],"left { width: 20vw; height: 20vw; -webkit-flex-shrink: 0; flex-shrink: 0; margin-right: ",[0,20],"; border: solid ",[0,1]," #fff; border-radius: 100%; }\n.",[1],"user .",[1],"left wx-image { width: 20vw; height: 20vw; border-radius: 100%; }\n.",[1],"user .",[1],"right { width: 100%; }\n.",[1],"user .",[1],"right .",[1],"username { font-size: ",[0,36],"; color: #fff; }\n.",[1],"user .",[1],"erweima { -webkit-flex-shrink: 0; flex-shrink: 0; width: 10vw; height: 10vw; margin-left: 5vw; border-radius: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; background: -webkit-linear-gradient(right, #fbbb37 0%, #fcf0d0 105%); background: linear-gradient(to left, #fbbb37 0%, #fcf0d0 105%); }\n.",[1],"user .",[1],"erweima .",[1],"icon { color: #7b6335; font-size: ",[0,42],"; }\n",],undefined,{path:"./pages/tabBar/user/user.wxss"});    
__wxAppCode__['pages/tabBar/user/user.wxml']=$gwx('./pages/tabBar/user/user.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();

import{cg as d,cl as l}from"./index.1339cfb4.js";var n={exports:{}},f={},v=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),_=d(v),c=typeof process!="undefined"&&process.pid?process.pid.toString(36):"",p="";if(typeof __webpack_require__!="function"&&typeof l!="undefined"){var a="",s=_;if(s.networkInterfaces)var i=s.networkInterfaces();if(i){e:for(let r in i){const e=i[r],u=e.length;for(var t=0;t<u;t++)if(e[t]!==void 0&&e[t].mac&&e[t].mac!="00:00:00:00:00:00"){a=e[t].mac;break e}}p=a?parseInt(a.replace(/\:|\D+/gi,"")).toString(36):""}}n.exports=n.exports.default=function(r,e){return(r||"")+p+c+o().toString(36)+(e||"")};n.exports.process=function(r,e){return(r||"")+c+o().toString(36)+(e||"")};n.exports.time=function(r,e){return(r||"")+o().toString(36)+(e||"")};function o(){var r=Date.now(),e=o.last||r;return o.last=r>e?r:e+1}var m=n.exports;export{m as u};

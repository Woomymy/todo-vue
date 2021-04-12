(function(e){function t(t){for(var r,c,d=t[0],i=t[1],u=t[2],l=0,p=[];l<d.length;l++)c=d[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);a&&a(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,d=1;d<o.length;d++){var i=o[d];0!==n[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={app:0},s=[];function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/todo-vue/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var a=i;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"4bac":function(e,t,o){"use strict";o("79f1")},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("7a23");const n=Object(r["f"])("h1",{class:"center"},"TodoList",-1);function s(e,t,o,s,c,d){const i=Object(r["i"])("Error"),u=Object(r["i"])("Success"),a=Object(r["i"])("TodoItem");return Object(r["g"])(),Object(r["c"])(r["a"],null,[c.emptyval?(Object(r["g"])(),Object(r["c"])(i,{key:0,msg:"L'entrée est vide!"})):Object(r["d"])("",!0),c.showalreadyex?(Object(r["g"])(),Object(r["c"])(i,{key:1,msg:"Cet élément existe déjà!"})):Object(r["d"])("",!0),c.successshow?(Object(r["g"])(),Object(r["c"])(u,{key:2,msg:"Elément ajouté!"})):Object(r["d"])("",!0),n,Object(r["f"])("ul",null,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(c.todos,e=>(Object(r["g"])(),Object(r["c"])(a,{onTodoup:d.syncTodos,todos:c.todos,todo:e,id:e.id,key:e.id},null,8,["onTodoup","todos","todo","id"]))),128))]),Object(r["f"])("input",{id:"adder",onKeyup:t[1]||(t[1]=Object(r["k"])(e=>d.addTodo(),["enter"]))},null,32),Object(r["f"])("button",{class:"bigbutton",id:"validate",onClick:t[2]||(t[2]=e=>d.addTodo())},"Valider")],64)}const c={class:"error"};function d(e,t,o,n,s,d){return Object(r["g"])(),Object(r["c"])("div",c,[Object(r["f"])("h3",null,Object(r["j"])(o.msg),1)])}var i={name:"Error",props:{msg:String}};i.render=d;var u=i;const a={class:"succes"};function l(e,t,o,n,s,c){return Object(r["g"])(),Object(r["c"])("div",a,[Object(r["f"])("h3",null,Object(r["j"])(o.msg),1)])}var p={name:"Succes",props:{msg:String}};p.render=l;var b=p;const h=Object(r["e"])();function f(e,t,o,n,s,c){return Object(r["g"])(),Object(r["c"])("div",{class:"todo",id:o.todo.id},[Object(r["f"])("li",null,Object(r["j"])(o.todo.id)+": "+Object(r["j"])(o.todo.value),1),h,Object(r["f"])("button",{class:"tinybutton",onClick:t[1]||(t[1]=e=>c.removeTodo(o.todo.id,o.todos))},"Supprimer")],8,["id"])}var j={name:"TodoItem",props:["todo","todos"],methods:{removeTodo(e){let t=document.getElementById(e);t.parentNode.removeChild(t);let o=[];this.todos.forEach(t=>{if(t.id==e)console.log("Removing "+t.value);else{let e=o.length+1;o.push({value:t.value,id:e})}}),this.$emit("todoup",o)}}};j.render=f;var O=j,m={name:"App",components:{Error:u,Success:b,TodoItem:O},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[],emptyval:!1,showalreadyex:!1,successshow:!1}},methods:{addTodo(){const e=document.getElementById("adder").value;if(!e)return this.emptyval=!0,void setTimeout(()=>{this.emptyval=!1},3e3);if(this.hasTodo(e))return this.showalreadyex=!0,void setTimeout(()=>{this.showalreadyex=!1},3e3);const t=this.todos.length+1;this.todos.push({value:e,id:t}),this.successshow=!0,setTimeout(()=>{this.successshow=!1},3e3),document.getElementById("adder").value="",this.resetProps(),this.updateStorage()},hasTodo(e){let t;return this.todos.forEach(o=>{o.value!==e||(t=!0)}),t},resetProps(){this.showalreadyex=!1,this.emptyval=!1},syncTodos(e){this.todos=e,localStorage.setItem("todos",JSON.stringify(this.todos))},updateStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))}}};o("4bac");m.render=s;var v=m;Object(r["b"])(v).mount("#app")},"79f1":function(e,t,o){}});
//# sourceMappingURL=app.41995af8.js.map
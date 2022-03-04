var h=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var m=(t,n,o)=>n in t?h(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,f=(t,n)=>{for(var o in n||(n={}))y.call(n,o)&&m(t,o,n[o]);if(u)for(var o of u(n))E.call(n,o)&&m(t,o,n[o]);return t},g=(t,n)=>v(t,x(n));import{R as e,r as p,n as b,a as k}from"./vendor.67092506.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};N();const T=()=>e.createElement("h1",{className:"font-semibold text-center text-4xl text-gray-700 dark:text-gray-200"},"TODO LIST");function w(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 20 20",fill:"currentColor"},e.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"}))}function C({onNewTodo:t}){const[n,o]=p.exports.useState("");function l(r){if(r.preventDefault(),n==="")return;const c={id:b(),text:n,isChecked:!1};t(c),o("")}function a(r){o(r.target.value)}return e.createElement("form",{className:"flex space-x-2",onSubmit:l},e.createElement("input",{type:"text",name:"todoInput",className:"flex-1 border border-cyan-500 dark:border-cyan-200 rounded-lg p-2 focus:outline-none focus:ring-cyan-600 dark:focus:ring-cyan-100 focus:ring-1 min-w-0 dark:text-gray-200 dark:bg-gray-700",placeholder:"New Task",value:n,onChange:a}),e.createElement("button",{type:"submit",className:"flex-shrink-0 border dark:border-cyan-200 bg-cyan-500 dark:bg-cyan-200 rounded-lg p-2 space-x-1 text-center text-gray-100 dark:text-cyan-700 min-w-[2.625rem] sm:min-w-[6rem] hover:bg-cyan-600 dark:hover:bg-cyan-100 inline-flex items-center justify-center"},e.createElement(w,null),e.createElement("span",{className:"hidden sm:inline"},"Add")))}function S(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 20 20",fill:"currentColor"},e.createElement("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))}function L({onClick:t}){return e.createElement("button",{className:"inline-flex items-center justify-center cursor-pointer bg-gray-700 rounded-lg text-white p-1.5 text-sm",onClick:t},e.createElement(S,null))}function O({text:t,isChecked:n,onChange:o,onRemove:l}){const a=r=>{o(r.target.checked)};return e.createElement("li",{className:"group flex items-start justify-between space-x-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"},e.createElement("label",{className:"flex space-x-4"},e.createElement("div",{className:"flex h-6 items-center"},e.createElement("input",{type:"checkbox",className:"cursor-pointer",checked:n,onChange:a})),e.createElement("span",{className:"flex-auto text-gray-700 dark:text-gray-200"},t)),e.createElement("div",{className:"invisible group-hover:visible"},e.createElement(L,{onClick:l})))}function R({todoList:t,onCheckTodo:n,onRemoveTodo:o}){return e.createElement("div",{className:"mt-6"},e.createElement("ul",null,t.map(l=>e.createElement(O,{key:l.id,text:l.text,isChecked:l.isChecked,onChange:a=>n({id:l.id,isChecked:a}),onRemove:()=>o(l.id)}))))}const d=t=>{localStorage.setItem("allTodoList",JSON.stringify(t))},I=()=>{const t=localStorage.getItem("allTodoList");return t?JSON.parse(t):[]};function M(){const[t,n]=p.exports.useState(I),o=r=>{n([...t,r]),d([...t,r])},l=({id:r,isChecked:c})=>{const s=t.map(i=>i.id!==r?i:g(f({},i),{isChecked:c}));n(s),d(s)},a=r=>{const c=t.filter(s=>{if(s.id!==r)return s});n(c),d(c)};return e.createElement("div",null,e.createElement(C,{onNewTodo:o}),e.createElement(R,{todoList:t,onCheckTodo:l,onRemoveTodo:a}))}const z=()=>e.createElement("div",{className:"max-w-[28rem] mx-auto mt-6 space-y-6 p-8 bg-white dark:bg-gray-900 border dark:border-gray-900 rounded-lg shadow-2xl"},e.createElement(T,null),e.createElement(M,null));k.render(e.createElement(e.StrictMode,null,e.createElement(z,null)),document.getElementById("root"));

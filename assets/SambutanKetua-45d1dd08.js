import{e as w,c as r,r as L,o as P,w as h,v as N,g as n,i as l,j as t,k as u,x as p,D as g,F as f,E as K,t as d,u as T,C as B,y as H}from"./index-c949cd14.js";import{u as V}from"./sambutan-store-6e8d4fca.js";import{_ as E,s as F}from"./notif-utils-75e30222.js";const j={class:"content"},I={class:"div container-fluid"},$={class:"row"},q={class:"col-12"},A={class:"card"},z={class:"card-header"},G={key:0,class:"card-tools"},J=t("i",{class:"fas fa-plus mr-1"},null,-1),O={class:"card-body table-responsive p-0"},Q={class:"table text-nowrap"},R=t("thead",null,[t("tr",null,[t("th",null,"Periode Ketua Senat"),t("th",null,"Nama Ketua Senat"),t("th",null,"Isi"),t("th",null,"Foto"),t("th",null,"Aksi")])],-1),U={key:0,class:"text-center border"},W=t("td",{colspan:"3"},"Data Sambutan Kosong",-1),X=[W],Y=["src","alt"],Z={class:"text-center"},tt=["onClick"],at=["id"],et=t("i",{class:"fas fa-pen ml-3"},null,-1),st=["onClick"],ot=t("i",{class:"fas fa-eye ml-3"},null,-1),nt=[ot],lt={class:"modal fade bd-example-modal-lg",id:"modalDetail",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"},it={class:"modal-dialog modal-lg",role:"document"},dt={class:"modal-content"},ct=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLongTitle"}," Detail sambutan "),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[t("span",{"aria-hidden":"true"},"×")])],-1),rt={class:"modal-body"},ut=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Tutup ")],-1),ft={__name:"SambutanKetua",setup(_t){const a=V(),i=w(),c=r(()=>a.sambutanData);let _=L({});function b(e){_.value=e}const v=r(()=>a.page),k=r(()=>a.totalPage);P(()=>{a.getList()}),h(()=>a.errorMessage,()=>{a.errorMessage&&i.add({type:"error",text:a.errorMessage})}),h(()=>a.isSuccessSubmit,()=>{a.isSuccessSubmit&&a.submitMessage&&(i.add({type:"success",text:a.submitMessage}),a.getList())});function y(){a.page<a.totalPage?(a.page++,a.getList()):i.add({type:"warning",text:"Sudah Mencapai Halaman Maximum"})}function x(e,o){return e.length<=o?e:e.substring(0,o)+"..."}function S(){a.page>0?(a.page--,a.getList()):i.add({type:"warning",message:"Sudah Mencapai Halaman Minimum"})}function C(e){a.page=e,a.getList()}function D(e){e.preventDefault(),F("Konfirmasi","Hapus Data?","question","Hapus","Batal",o=>{o&&a.deleteSambutan(e.target.id)})}return(e,o)=>{const m=N("router-link");return n(),l(f,null,[t("section",j,[t("div",I,[t("div",$,[t("div",q,[t("div",A,[t("div",z,[c.value.length==0?(n(),l("div",G,[u(m,{to:"/tambah-sambutan",class:"btn btn-primary"},{default:p(()=>[J,B(" Tambah Sambutan ")]),_:1})])):g("",!0)]),t("div",O,[t("table",Q,[R,t("tbody",null,[c.value.length==0?(n(),l("tr",U,X)):g("",!0),(n(!0),l(f,null,K(c.value,(s,M)=>(n(),l("tr",{key:M},[t("td",null,d(s.judul),1),t("td",null,d(s.nama_ketua_senat),1),t("td",null,d(x(s.isi,50)),1),t("td",null,[t("img",{src:s.foto_url,alt:s.foto_name,style:{"max-width":"100px","max-height":"auto"}},null,8,Y)]),t("td",Z,[t("a",{href:"#",onClick:H(D,["prevent"])},[t("i",{id:s.id,class:"fas fa-trash"},null,8,at)],8,tt),u(m,{to:{name:"EditSambutan",params:{id:s.id}}},{default:p(()=>[et]),_:2},1032,["to"]),t("a",{"data-toggle":"modal","data-target":"#modalDetail",onClick:mt=>b(s.isi)},nt,8,st)])]))),128))])])]),u(E,{page:v.value,"total-page":k.value,onClickPrev:S,onClickNext:y,onClickPaginate:C},null,8,["page","total-page"])])])])])]),t("div",lt,[t("div",it,[t("div",dt,[ct,t("div",rt,d(T(_)),1),ut])])])],64)}}};export{ft as default};

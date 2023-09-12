import{e as N,c as i,r as v,w as p,o as L,v as b,g as r,i as c,j as t,k as u,x as _,z as P,A as H,D as V,F as E,E as T,t as d,u as F,y as U,C as j}from"./index-c949cd14.js";import{u as A}from"./berita-store-2a9eb01b.js";import{_ as I,s as K}from"./notif-utils-75e30222.js";import{l as $}from"./lodash-336d108c.js";import{f as q}from"./date-utils-b77f79dd.js";const z={class:"col-12"},J={class:"card"},Q={class:"card-header"},G=t("button",{class:"btn btn-primary"},[t("i",{class:"fas fa-plus mr-1"}),j("Unggah Berita ")],-1),O={class:"card-tools mt-2"},R={class:"input-group input-group-sm",style:{width:"200px"}},W={class:"input-group-append"},X=t("i",{class:"fas fa-times"},null,-1),Y=[X],Z=t("i",{class:"fas fa-search"},null,-1),tt=[Z],et={class:"card-body table-responsive p-0 mb-5"},at={class:"table table-bordered table-hover"},st=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"No"),t("th",null,"Judul Berita"),t("th",null,"Isi Berita"),t("th",null,"Foto"),t("th",null,"Tanggal Unggah"),t("th",null,"Aksi")])],-1),ot={class:""},nt={key:0,class:"text-center border"},lt=t("td",{colspan:"7"},"Berita Kosong",-1),it=[lt],rt=["src","alt"],ct={class:"text-center"},ut=["onClick"],dt=["id"],pt=t("i",{class:"fas fa-pen ml-3"},null,-1),bt={__name:"News",setup(_t){const e=A(),l=N(),h=i(()=>e.beritaData),k=i(()=>e.page),y=i(()=>e.totalPage),x=i(()=>e.lastNoPage),n=v("");v([]);const C=$.debounce(()=>{n.value!==""?e.getList(n.value):e.getList()},500);p(()=>n.value,()=>{C()}),L(async()=>{await e.getList()}),p(()=>e.errorMessage,()=>{e.errorMessage&&l.add({type:"error",text:e.errorMessage})}),p(()=>e.isSuccessSubmit,()=>{e.isSuccessSubmit&&(l.add({type:"success",text:"Data Berita Berhasil di Hapus"}),e.getList())});function D(){e.page<e.totalPage?(e.page++,e.getList()):l.add({type:"warning",text:"Sudah Mencapai Halaman Maximum"})}function B(){e.page>0?(e.page--,e.getList()):l.add({type:"warning",message:"Sudah Mencapai Halaman Minimum"})}function w(o){e.page=o,e.getList()}function S(o){o.preventDefault(),K("Konfirmasi","Hapus Data?","question","Hapus","Batal",s=>{s&&e.deleteBerita(o.target.id)})}return(o,s)=>{var m;const g=b("router-link"),M=b("center");return r(),c("div",z,[t("div",J,[t("div",Q,[u(g,{to:"/tambah-berita"},{default:_(()=>[G]),_:1}),t("div",O,[t("div",R,[P(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a),name:"table_search",class:"form-control float-right",placeholder:"Search",onInput:s[1]||(s[1]=(...a)=>o.searchData&&o.searchData(...a))},null,544),[[H,n.value]]),t("div",W,[t("button",{type:"button",class:"btn btn-default",onClick:s[2]||(s[2]=a=>n.value="")},Y),t("button",{type:"button",class:"btn btn-default",onClick:s[3]||(s[3]=(...a)=>o.searchData&&o.searchData(...a))},tt)])])])]),t("div",et,[t("table",at,[st,t("tbody",ot,[((m=h.value)==null?void 0:m.length)==0?(r(),c("tr",nt,it)):V("",!0),(r(!0),c(E,null,T(h.value,(a,f)=>(r(),c("tr",{key:f},[t("td",null,d(f+=x.value),1),t("td",null,d(a.judul),1),t("td",null,d(a.isi?a.isi.substring(0,30)+" ...":""),1),t("td",null,[u(M,null,{default:_(()=>[t("img",{src:a.foto_path,alt:a.foto_name,style:{"max-width":"200px"}},null,8,rt)]),_:2},1024)]),t("td",null,d(F(q)(a.tanggal_unggah)),1),t("td",ct,[t("a",{href:"#",onClick:U(S,["prevent"])},[t("i",{id:a.id,class:"fas fa-trash"},null,8,dt)],8,ut),u(g,{to:{name:"Edit Berita",params:{id:a.id}}},{default:_(()=>[pt]),_:2},1032,["to"])])]))),128))])])]),u(I,{page:k.value,"total-page":y.value,onClickPrev:B,onClickNext:D,onClickPaginate:w},null,8,["page","total-page"])])])}}};export{bt as default};

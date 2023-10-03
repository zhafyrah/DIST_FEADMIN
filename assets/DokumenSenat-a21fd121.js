import{e as w,c as d,r as h,w as p,o as M,v as B,g as l,i,j as t,k as m,z as g,B as P,C as T,u as f,x as N,y as k,F as H,G as V,E,t as c,A}from"./index-745e58d5.js";import{u as F}from"./dokumen-senat-store-1eff364f.js";import{_ as K,s as $}from"./notif-utils-02af4175.js";import{l as j}from"./lodash-336d108c.js";import{f as U}from"./date-utils-b77f79dd.js";import{L as q}from"./LoadingComponent-ba3eee28.js";const z={class:"col-12"},G={class:"card"},I={class:"card-header"},J=t("i",{class:"fas fa-plus mr-1"},null,-1),Q={class:"card-tools mt-2"},O={class:"input-group input-group-sm",style:{width:"200px"}},R={class:"input-group-append"},W=t("i",{class:"fas fa-times"},null,-1),X=[W],Y=t("i",{class:"fas fa-search"},null,-1),Z=[Y],tt={class:"card-body table-responsive p-0"},et={class:"table table-bordered table-head-fixed text-nowrap table-hover"},at=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"Judul Dokumen"),t("th",null,"Link Dokumen"),t("th",null,"Foto"),t("th",null,"Tanggal Unggah"),t("th",null,"Keterangan"),t("th",null,"Aksi")])],-1),st={class:"position-relative"},nt={key:1,class:"text-center border"},ot=t("td",{colspan:"6"},"Dokumen Senat Kosong",-1),lt=[ot],it={key:2,class:"text-center border"},rt=t("td",{colspan:"6"},"Data yang Dicari Tidak Ada",-1),ct=[rt],ut=["src","alt"],dt={class:"text-center"},pt=["onClick"],mt=["id"],_t=t("i",{class:"fas fa-pen ml-3"},null,-1),yt={__name:"DokumenSenat",setup(ht){const e=F(),r=w(),u=d(()=>e.dokData),v=d(()=>e.page),b=d(()=>e.totalPage),o=h("");h([]);const D=j.debounce(()=>{o.value!==""?e.getList(o.value):e.getList()},500);p(()=>o.value,()=>{D()}),M(()=>{e.getList()}),p(()=>e.errorMessage,()=>{e.errorMessage&&r.add({type:"error",text:e.errorMessage})}),p(()=>e.isSuccessSubmit,()=>{e.isSuccessSubmit&&(r.add({type:"success",text:"Data Dokumen Senat Berhasil di Hapus"}),e.getList())});function y(){e.page<e.totalPage?(e.page++,e.getList()):r.add({type:"warning",text:"Sudah Mencapai Halaman Maximum"})}function S(){e.page>0?(e.page--,e.getList()):r.add({type:"warning",message:"Sudah Mencapai Halaman Minimum"})}function x(n){e.page=n,e.getList()}function C(n){n.preventDefault(),$("Konfirmasi","Hapus Data?","question","Hapus","Batal",s=>{s&&(e.$reset(),e.deleteDokSenat(n.target.id))})}return(n,s)=>{const _=B("router-link");return l(),i("div",z,[t("div",G,[t("div",I,[m(_,{to:{name:"TambahDokumenSenat"},class:"btn btn-primary"},{default:g(()=>[J,E(" Tambah Dokumen ")]),_:1}),t("div",Q,[t("div",O,[P(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),name:"table_search",class:"form-control float-right",placeholder:"Search",onInput:s[1]||(s[1]=(...a)=>n.searchData&&n.searchData(...a))},null,544),[[T,o.value]]),t("div",R,[t("button",{type:"button",class:"btn btn-default",onClick:s[2]||(s[2]=a=>o.value="")},X),t("button",{type:"button",class:"btn btn-default",onClick:s[3]||(s[3]=(...a)=>n.searchData&&n.searchData(...a))},Z)])])])]),t("div",tt,[t("table",et,[at,t("tbody",st,[f(e).isLoading?(l(),N(q,{key:0})):k("",!0),u.value.length==0?(l(),i("tr",nt,lt)):u.value.length===0&&o.value?(l(),i("tr",it,ct)):k("",!0),(l(!0),i(H,null,V(u.value,(a,L)=>(l(),i("tr",{key:L},[t("td",null,c(a.judul_dokumen),1),t("td",null,c(a.link_url),1),t("td",null,[t("img",{src:a.dokumen_path,alt:a.dokumen_name,style:{width:"200px"}},null,8,ut)]),t("td",null,c(f(U)(a.tanggal_unggah)),1),t("td",null,c(a.keterangan),1),t("td",dt,[t("a",{href:"#",onClick:A(C,["prevent"])},[t("i",{id:a.id,class:"fas fa-trash"},null,8,mt)],8,pt),m(_,{to:{name:"EditDokumenSenat",params:{id:a.id}}},{default:g(()=>[_t]),_:2},1032,["to"])])]))),128))])])]),m(K,{page:v.value,"total-page":b.value,onClickPrev:S,onClickNext:y,onClickPaginate:x},null,8,["page","total-page"])])])}}};export{yt as default};

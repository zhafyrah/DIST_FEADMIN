import{f as x,c as d,o as y,w as _,v as C,i as n,j as i,k as t,l,x as u,C as K,D as S,F as w,E as M,t as r,y as N,G as L}from"./index-8e55fb7d.js";import{u as P}from"./dokumen-komisi-store-92a25025.js";import{_ as B,s as H}from"./notif-utils-4e58a247.js";import"./date-utils-ee963ed8.js";const V={class:"col-12"},E={class:"card"},T={class:"card-header"},F=t("i",{class:"fas fa-plus mr-1"},null,-1),U=L('<div class="card-tools mt-2"><div class="input-group input-group-sm" style="width:200px;"><input type="text" name="table_search" class="form-control float-right" placeholder="Search"><div class="input-group-append"><button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button></div></div></div>',1),$={class:"card-body table-responsive p-0"},j={class:"table table-bordered table-head-fixed text-nowrap table-hover"},q=t("thead",null,[t("tr",null,[t("th",null,"No Dokumen"),t("th",null,"Dokumen"),t("th",null,"Tanggal Unggah"),t("th",null,"Keterangan"),t("th",null,"Aksi")])],-1),A={key:0,class:"text-center border"},G=t("td",{colspan:"6"},"Dokumen Komisi Kosong",-1),z=[G],I={class:"text-center"},J=["onClick"],O=["id"],Q=t("i",{class:"fas fa-eye ml-3"},null,-1),R=t("i",{class:"fas fa-pen ml-3"},null,-1),et={__name:"DokumenKomisi",setup(W){const e=P(),o=x(),m=d(()=>e.dokData),g=d(()=>e.page),h=d(()=>e.totalPage);y(()=>{e.getList()}),_(()=>e.errorMessage,()=>{e.errorMessage&&o.add({type:"error",text:e.errorMessage})}),_(()=>e.isSuccessSubmit,()=>{e.isSuccessSubmit&&(o.add({type:"success",text:"Data Dokumen Komisi Berhasil di Hapus"}),e.getList())});function f(){e.page<e.totalPage?(e.page++,e.getList()):o.add({type:"warning",text:"Sudah Mencapai Halaman Maximum"})}function k(){e.page>0?(e.page--,e.getList()):o.add({type:"warning",message:"Sudah Mencapai Halaman Minimum"})}function b(s){e.page=s,e.getList()}function v(s){s.preventDefault(),H("Konfirmasi","Hapus Data?","question","Hapus","Batal",p=>{p&&(e.$reset(),e.deleteDokKomisi(s.target.id))})}return(s,p)=>{const c=C("router-link");return n(),i("div",V,[t("div",E,[t("div",T,[l(c,{to:{name:"TambahDokumenKomisi"},class:"btn btn-primary"},{default:u(()=>[F,K(" Unggah Dokumen ")]),_:1}),U]),t("div",$,[t("table",j,[q,t("tbody",null,[m.value.length==0?(n(),i("tr",A,z)):S("",!0),(n(!0),i(w,null,M(m.value,(a,D)=>(n(),i("tr",{key:D},[t("td",null,r(a.no_surat),1),t("td",null,r(a.dokumen_name),1),t("td",null,r(a.tanggal_unggah),1),t("td",null,r(a.keterangan),1),t("td",I,[t("a",{href:"#",onClick:N(v,["prevent"])},[t("i",{id:a.id,class:"fas fa-trash"},null,8,O)],8,J),l(c,{to:{name:"DetailDokumenKomisi",params:{id:a.id}}},{default:u(()=>[Q]),_:2},1032,["to"]),l(c,{to:{name:"EditDokumenKomisi",params:{id:a.id}}},{default:u(()=>[R]),_:2},1032,["to"])])]))),128))])])]),l(B,{page:g.value,"total-page":h.value,onClickPrev:k,onClickNext:f,onClickPaginate:b},null,8,["page","total-page"])])])}}};export{et as default};

import{R as n,d as g}from"./index-b1176ff1.js";import{f as u}from"./date-utils-b77f79dd.js";const i=new n("dokumen-komisi");function r(s,e){return i.get({page:parseInt(s),search:e})}function h(s){return i.get({},s)}function l(s){return i.store(s,"save",!0)}function d(s,e){return i.update(s,e,"update",!0)}function c(s){return i.destroy("delete",s)}function o(s,e){const t=new FormData;return t.append("no_surat",s.noSurat),t.append("keterangan",s.keterangan),t.append("tanggal_unggah",u(s.tanggal_unggah)),e&&t.append("dokumen",e),t}const p=g("dokumen-komisi",{state:()=>({dokData:[],komentarData:[],isLoading:!1,singleData:{},errorMessage:"",totalData:0,page:1,lastPage:1,totalPage:1,lastNoPage:0,isSuccessSubmit:!1}),actions:{getList(s){this.isLoading=!0,r(this.page,s).then(e=>{this.totalData=e.total,this.currentPage=e.current_page,this.totalPage=e.total>10?Math.ceil(e.total/10):1,this.lastNoPage=e.from,this.dokData=e.data,this.isLoading=!1}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message,this.isLoading=!1})},saveDokKomisi(s,e){this.isLoading=!0,l(o(s,e)).then(t=>{this.isSuccessSubmit=!0,this.isLoading=!0}).catch(t=>{t.response?this.errorMessage=t.response.data.message:t.request?this.errorMessage=t.request:this.errorMessage=t.message,this.isLoading=!1})},updateDokKomisi(s,e,t){this.isLoading=!0,d(s,o(e,t)).then(a=>{this.isSuccessSubmit=!0,this.isLoading=!1}).catch(a=>{a.response?this.errorMessage=a.response.data.message:a.request?this.errorMessage=a.request:this.errorMessage=a.message,this.isLoading=!1})},deleteDokKomisi(s){c(s).then(e=>{this.isSuccessSubmit=!0,this.isLoading=!0}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message})},getDokKomisiById(s){h(s).then(e=>{this.singleData=e.data,this.isLoading=!0}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message})}}});export{p as u};

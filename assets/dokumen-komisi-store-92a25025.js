import{R as r,d as g,u as h}from"./index-8e55fb7d.js";import{a as d}from"./date-utils-ee963ed8.js";const n=new r("dokumen-komisi");function c(e){return n.get({page:parseInt(e)})}function l(e){return n.get({},e)}function m(e){return n.store(e,"save",!0)}function p(e,s){return n.update(e,s,"update",!0)}function f(e){return n.destroy("delete",e)}const a=h();function o(){a.show({color:"#0069d9",blur:"5px"})}function u(e,s){const t=new FormData;return t.append("no_surat",e.noSurat),t.append("keterangan",e.keterangan),t.append("tanggal_unggah",d(e.tanggal_unggah)),s&&t.append("dokumen",s),t}const M=g("dokumen-komisi",{state:()=>({dokData:[],komentarData:[],singleData:{},errorMessage:"",totalData:0,page:1,lastPage:1,totalPage:1,lastNoPage:0,isSuccessSubmit:!1}),actions:{getList(){o(),c(this.page).then(e=>{this.totalData=e.total,this.currentPage=e.current_page,this.totalPage=e.total>10?Math.ceil(e.total/10):1,this.lastNoPage=e.from,this.dokData=e.data,a.hide()}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message,a.hide()})},saveDokKomisi(e,s){o(),m(u(e,s)).then(t=>{this.isSuccessSubmit=!0,a.hide()}).catch(t=>{t.response?this.errorMessage=t.response.data.message:t.request?this.errorMessage=t.request:this.errorMessage=t.message,a.hide()})},updateDokKomisi(e,s,t){o(),p(e,u(s,t)).then(i=>{this.isSuccessSubmit=!0,a.hide()}).catch(i=>{i.response?this.errorMessage=i.response.data.message:i.request?this.errorMessage=i.request:this.errorMessage=i.message,a.hide()})},deleteDokKomisi(e){o(),f(e).then(s=>{this.isSuccessSubmit=!0,a.hide()}).catch(s=>{s.response?this.errorMessage=s.response.data.message:s.request?this.errorMessage=s.request:this.errorMessage=s.message,a.hide()})},getDokKomisiById(e){o(),l(e).then(s=>{this.singleData=s.data,a.hide()}).catch(s=>{s.response?this.errorMessage=s.response.data.message:s.request?this.errorMessage=s.request:this.errorMessage=s.message,a.hide()})}}});export{M as u};

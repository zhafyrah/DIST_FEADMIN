import{R as u,d as h,u as g}from"./index-8e55fb7d.js";const n=new u("users");function l(e){return n.get({page:parseInt(e)})}function c(e){return n.get({},e)}function o(e){return n.store(e,"save",!0)}function d(e,s){return n.update(e,s,"update")}function p(e){return n.destroy("delete",e)}const t=g();function i(){t.show({color:"#0069d9",blur:"5px"})}function r(e){const s=new FormData;return e.nama&&s.append("nama",e.nama),e.nip&&s.append("nip",e.nip),e.role&&s.append("role",e.role),e.email&&s.append("email",e.email),e.password&&s.append("password",e.password),s.append("status",parseInt(e.status)),s}const M=h("user",{state:()=>({userData:[],singleData:{},errorMessage:"",totalData:0,page:1,lastPage:1,totalPage:1,lastNoPage:0,isSuccessSubmit:!1,isSuccessUpdate:!1,isSuccessDelete:!1}),actions:{getList(){i(),l(this.page).then(e=>{this.totalData=e.total,this.currentPage=e.current_page,this.totalPage=e.total>10?Math.ceil(e.total/10):1,this.lastNoPage=e.from,this.userData=e.data,t.hide()}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message,t.hide()})},saveUser(e){i(),o(r(e)).then(s=>{this.isSuccessSubmit=!0,t.hide()}).catch(s=>{s.response?this.errorMessage=s.response.data.message:s.request?this.errorMessage=s.request:this.errorMessage=s.message,t.hide()})},updateUser(e,s){i(),d(e,r(s)).then(a=>{this.isSuccessSubmit=!0,t.hide()}).catch(a=>{a.response?this.errorMessage=a.response.data.message:a.request?this.errorMessage=a.request:this.errorMessage=a.message,t.hide()})},deleteUser(e){this.isSuccessDelete=!1,this.errorMessage="",i(),p(e).then(s=>{this.isSuccessDelete=!0,t.hide()}).catch(s=>{s.response?this.errorMessage=s.response.data.message:s.request?this.errorMessage=s.request:this.errorMessage=s.message,t.hide()})},getUserById(e){i(),c(e).then(s=>{this.singleData=s.data,t.hide()}).catch(s=>{s.response?this.errorMessage=s.response.data.message:s.request?this.errorMessage=s.request:this.errorMessage=s.message,t.hide()})}}});function m(e){return(e+"").replace(/^([a-z])|\s+([a-z])/g,function(s){return s.toUpperCase()})}export{m as a,M as u};

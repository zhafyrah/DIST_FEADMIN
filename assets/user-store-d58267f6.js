import{R as n,d as r}from"./index-745e58d5.js";const a=new n("users");function g(s,e){return a.get({page:parseInt(s),search:e})}function u(s){return a.get({},s)}function l(s){return a.store(s,"save",!0)}function h(s,e){return a.updateFormData(s,e,"update")}function o(s){return a.destroy("delete",s)}function i(s){const e=new FormData;return s.nama&&e.append("nama",s.nama),s.nip&&e.append("nip",s.nip),s.role&&e.append("role",s.role),s.email&&e.append("email",s.email),s.password&&e.append("password",s.password),e.append("status",parseInt(s.status)),e}const p=r("user",{state:()=>({userData:[],isFinite:!1,singleData:{},errorMessage:"",totalData:0,page:1,lastPage:1,totalPage:1,lastNoPage:0,isSuccessSubmit:!1,isSuccessUpdate:!1,isSuccessDelete:!1}),actions:{getList(s){this.isLoading=!0,g(this.page,s).then(e=>{this.totalData=e.total,this.currentPage=e.current_page,this.totalPage=e.total>10?Math.ceil(e.total/10):1,this.lastNoPage=e.from,this.userData=e.data,this.isLoading=!1}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message,this.isLoading=!1})},saveUser(s){this.isLoading=!0,l(i(s)).then(e=>{this.isSuccessSubmit=!0,this.isLoading=!1}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message,this.isLoading=!1})},updateUser(s,e){this.isLoading=!0,h(s,i(e)).then(t=>{this.isSuccessSubmit=!0,this.isLoading=!1}).catch(t=>{t.response?this.errorMessage=t.response.data.message:t.request?this.errorMessage=t.request:this.errorMessage=t.message,this.isLoading=!1})},deleteUser(s){this.isSuccessDelete=!1,this.errorMessage="",o(s).then(e=>{this.isSuccessDelete=!0}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message})},getUserById(s){u(s).then(e=>{this.singleData=e.data}).catch(e=>{e.response?this.errorMessage=e.response.data.message:e.request?this.errorMessage=e.request:this.errorMessage=e.message})}}});export{p as u};

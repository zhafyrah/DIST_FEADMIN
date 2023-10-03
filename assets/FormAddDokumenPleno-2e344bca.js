import{d as B,e as w,q as M,H as F,c as g,r as l,w as p,o as V,g as _,i as k,j as e,t as f,u as A,x as C,y as S,B as c,C as h,J,A as L}from"./index-745e58d5.js";import{u as O}from"./dokumen-pleno-store-08baa8d6.js";import"./vue3-datepicker-2eb64829.js";import{L as K}from"./LoadingComponent-ba3eee28.js";import"./date-utils-b77f79dd.js";const T=B("localStorage",{state:()=>({user:null,permissions:{}}),getters:{getUser(){return this.user||JSON.parse(localStorage.getItem("user"))||null},getPermission(){return Object.keys(this.permissions).length?this.permissions:JSON.parse(localStorage.getItem("permission"))||{}}},actions:{setUser(n){this.user=n,localStorage.setItem("user",JSON.stringify(n))},setPermissions(n){this.permissions=n,localStorage.setItem("permissions",JSON.stringify(n))},clearUser(){this.user=null,localStorage.removeItem("user")},clearPermissions(){this.permissions={},localStorage.removeItem("permissions")},clearLocalStorage(){this.clearUser(),this.clearPermissions()}}}),j={class:"card"},q={class:"card-header"},E={class:"d-flex align-items-center"},R={class:"card-title"},H=["onSubmit"],$={class:"card-body position-relative"},z={class:"row"},G={class:"col-md-12"},Q={class:"form-group"},W=e("label",{for:"inputName"},"No Dokumen",-1),X={class:"col-md-12"},Y={class:"form-group"},Z=e("label",{for:"inputEmail"},"Keterangan",-1),ee={class:"col-md-12"},se={class:"form-group"},te=e("label",null,"Tanggal Unggah",-1),ae={class:"col-md-12"},oe={key:0,class:"form-group"},ne=e("label",null,"Status",-1),le=e("option",{selected:"",disabled:"",value:""}," Silahkan Pilih Status ",-1),ie=e("option",{value:"Belum Disahkan"},"Belum Disahkan",-1),re=e("option",{value:"Dipertimbangkan"},"Dipertimbangkan",-1),ue=e("option",{value:"Disahkan"},"Disahkan",-1),ce=[le,ie,re,ue],de={class:"form-group"},me=e("label",{for:"exampleInputFile"},"Unggah Dokumen",-1),ge={class:"input-group"},pe={class:"custom-file"},_e={class:"custom-file-label",for:"exampleInputFile"},he=e("div",{class:"card-footer d-flex justify-content-center"},[e("button",{type:"submit",class:"btn btn-primary w-100"},"Unggah")],-1),be={__name:"FormAddDokumenPleno",setup(n){const s=O(),v=w(),D=M(),i=F(),b=T(),y=g(()=>i.params.id!==null),t=l({noSurat:"",tanggal_unggah:new Date,keterangan:"",status:""}),P=l(""),x=l(""),d=l(0),r=l(null);let m=l({});p(()=>s.errorMessage,()=>{s.errorMessage&&v.add({type:"error",text:s.errorMessage})}),p(()=>s.isSuccessSubmit,()=>{s.isSuccessSubmit&&(s.$reset(),v.add({type:"success",text:"Dokumen Pleno Berhasil Disimpan"}),D.back())}),p(()=>s.singleData,()=>{d.value=s.singleData.id,t.value.noSurat=s.singleData.no_surat,t.value.tanggal_unggah=s.singleData.tanggal_unggah,t.value.keterangan=s.singleData.keterangan,t.value.status=s.singleData.status,P.value=s.singleData.dokumen_url,x.value=s.singleData.dokumen_name});function I(u){r.value=u.target.files[0]}function U(u){u.preventDefault(),d.value==0?s.saveDokPleno(t.value,r.value):s.updateDokPleno(d.value,t.value,r.value)}g(()=>i.params.type&&i.params.type==="pleno");const N=g(()=>m.value.role=="admin"||m.value.role=="ketua");return V(()=>{i.params.id&&s.getDokPlenoById(i.params.id),m.value=b.getPermission}),(u,a)=>(_(),k("div",j,[e("div",q,[e("div",E,[e("h4",R," Silahkan "+f(y.value?"Perbarui":"Tambah")+" Dokumen Pleno ",1)])]),e("form",{onSubmit:L(U,["prevent"])},[e("div",$,[A(s).isLoading?(_(),C(K,{key:0})):S("",!0),e("div",z,[e("div",G,[e("div",Q,[W,c(e("input",{type:"text",id:"nosurat",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=o=>t.value.noSurat=o),placeholder:"Isi Nomor Dokumen Pleno",required:""},null,512),[[h,t.value.noSurat]])])]),e("div",X,[e("div",Y,[Z,c(e("input",{type:"text",id:"keterangan",class:"form-control","onUpdate:modelValue":a[1]||(a[1]=o=>t.value.keterangan=o),placeholder:"Isi Keterangan Dokumen Pleno",required:""},null,512),[[h,t.value.keterangan]])])]),e("div",ee,[e("div",se,[te,c(e("input",{class:"form-control",type:"date","onUpdate:modelValue":a[2]||(a[2]=o=>t.value.tanggal_unggah=o)},null,512),[[h,t.value.tanggal_unggah]])])]),e("div",ae,[N.value?(_(),k("div",oe,[ne,c(e("select",{class:"form-control","onUpdate:modelValue":a[3]||(a[3]=o=>t.value.status=o)},ce,512),[[J,t.value.status]])])):S("",!0)])]),e("div",de,[me,e("div",ge,[e("div",pe,[e("input",{type:"file",class:"custom-file-input",id:"exampleInputFile",accept:".pdf",onChange:I},null,32),e("label",_e,f(r.value==null?"Temukan Dokumen dari Komputer Anda":r.value.name),1)])])])]),he],40,H)]))}};export{be as default};

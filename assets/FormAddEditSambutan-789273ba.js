import{e as h,q as g,H as x,r as m,c as y,w as u,o as K,g as p,i as k,j as e,t as _,u as F,x as j,y as w,B as r,C as d,A as B}from"./index-745e58d5.js";import{u as D}from"./sambutan-store-5a56d306.js";import{L as I}from"./LoadingComponent-ba3eee28.js";const N=["onSubmit"],C={class:"card"},M={class:"card-header"},U={class:"card-title"},V={class:"card-body position-relative"},q={class:"row"},A={class:"col-md-12"},E={class:"form-group"},L=e("label",{for:"inputName"},"Nama Ketua Senat",-1),T={class:"form-group"},P=e("label",{for:"input"},"Periode Ketua Senat",-1),R={class:"form-group col-md-12"},H=e("label",null,"Sambutan Ketua Senat",-1),J={class:"form-group"},z=e("label",{for:"exampleInputFile"},"Foto",-1),G={class:"input-group"},O={class:"custom-file"},Q={class:"custom-file-label",for:"exampleInputFile"},W=e("div",{class:"card-footer"},[e("input",{type:"submit",class:"btn btn-primary w-100",value:"Kirim"})],-1),ee={__name:"FormAddEditSambutan",setup(X){const t=D(),c=h(),f=g(),i=x(),a=m({namaKetuaSenat:"",judul:"",isi:"",fotoUrl:"",fotoName:""}),l=m(null),v=y(()=>i.params.id!==null);u(()=>t.errorMessage,()=>{t.errorMessage&&c.add({type:"error",text:t.errorMessage})}),u(()=>t.isSuccessSubmit,()=>{t.isSuccessSubmit&&(c.add({type:"success",text:"Sambutan Berhasil Disimpan"}),f.back())}),u(()=>t.singleData,()=>{const s=t.singleData;a.value.judul=s.judul,a.value.isi=s.isi,a.value.namaKetuaSenat=s.nama_ketua_senat,a.value.fotoUrl=s.foto_url,a.value.fotoName=s.foto_name});function b(s){l.value=s.target.files[0]}function S(s){s.preventDefault(),i.params.id?t.updateSambutan(i.params.id,a.value,l.value):t.saveSambutan(a.value,l.value)}return K(()=>{i.params.id&&t.getSambutanById(i.params.id)}),(s,o)=>(p(),k("form",{class:"form",onSubmit:B(S,["prevent"])},[e("div",C,[e("div",M,[e("h4",U," Silahkan "+_(v.value?"Perbarui":"Tambah")+" Sambutan ",1)]),e("div",V,[F(t).isLoading?(p(),j(I,{key:0})):w("",!0),e("div",q,[e("div",A,[e("div",E,[L,r(e("input",{type:"text",id:"name",class:"form-control",placeholder:"Isi Nama Ketua Senat","onUpdate:modelValue":o[0]||(o[0]=n=>a.value.namaKetuaSenat=n),required:""},null,512),[[d,a.value.namaKetuaSenat]])]),e("div",T,[P,r(e("input",{type:"text",id:"title",class:"form-control",placeholder:"Isi Judul Disini","onUpdate:modelValue":o[1]||(o[1]=n=>a.value.judul=n),required:""},null,512),[[d,a.value.judul]])])]),e("div",R,[H,r(e("textarea",{class:"form-control",rows:"4",placeholder:"Isi Sambutan Ketua Senat","onUpdate:modelValue":o[2]||(o[2]=n=>a.value.isi=n)},`\r
            `,512),[[d,a.value.isi]])])]),e("div",J,[z,e("div",G,[e("div",O,[e("input",{type:"file",class:"custom-file-input",id:"exampleInputFile",accept:".jpg, .jpeg",onChange:b},null,32),e("label",Q,_(l.value==null?"Temukan Foto dari Komputer Anda":l.value.name),1)])])])]),W])],40,N))}};export{ee as default};

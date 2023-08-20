import{f as B,q as w,H as k,c as x,o as j,w as g,r,i as d,j as c,k as e,t as _,z as m,A as p,e as s,D as F,y as M}from"./index-8e55fb7d.js";import{u as U}from"./berita-store-426a195f.js";import"./vue3-datepicker-2eb64829.js";import"./date-utils-ee963ed8.js";const N={class:"card"},V={class:"card-header"},q={class:"d-flex align-items-center"},C={class:"card-title"},P=["onSubmit"],I={class:"card-body"},T={class:"form-group"},A=e("label",{for:"inputNews"},"Judul Berita",-1),E={class:"form-group"},J=e("label",null,"Tanggal Unggah",-1),R={key:0,class:"form-group"},z=e("label",{for:"inputContent"},"Isi Berita",-1),H={key:0,class:"form-group"},G=e("label",{for:"inputPhoto"},"Foto",-1),K={class:"input-group"},L={class:"custom-file"},O={class:"custom-file-label",for:"inputPhoto"},Q={key:1,class:"row text-center"},W={class:"col-md-12 mt-4"},X=["src","alt"],Y={class:"col-md-12"},Z=e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary"},"Unggah")],-1),ot={__name:"FormAddNews",setup($){const t=U(),f=B(),b=w(),i=k(),v=x(()=>i.params.id!==null);j(()=>{i.params.id?(t.getBeritaById(i.params.id),u.value=t.beritaSingleData):t.clearForm()}),g(()=>t.errorMessage,()=>{t.errorMessage&&f.add({type:"error",text:t.errorMessage})}),g(()=>t.singleData,()=>{const a=t.singleData;u.judul=a.judul,u.tanggal_unggah=new Date(a.tanggal_unggah),u.isi=a.isi,h.value=a.foto_url,S.value=a.foto_name}),g(()=>t.isSuccessSubmit,()=>{t.isSuccessSubmit&&(f.add({type:"success",text:"Berita Berhasil Disimpan"}),b.back())});const u=r({judul:"",tanggal_unggah:new Date,isi:""}),l=r(null),h=r(""),S=r("");r("");function D(a){l.value=a.target.files[0]}function y(a){a.preventDefault(),i.params.id?t.updateBerita(i.params.id,t.beritaSingleData,l.value):t.saveBerita(t.beritaSingleData,l.value)}return(a,o)=>(d(),c("div",N,[e("div",V,[e("div",q,[e("h4",C," Silahkan "+_(v.value?"Perbarui":"Tambah")+" Berita ",1)])]),e("form",{onSubmit:M(y,["prevent"])},[e("div",I,[e("div",T,[A,m(e("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>s(t).beritaSingleData.judul=n),type:"text",class:"form-control",id:"news",placeholder:"Judul Berita",required:""},null,512),[[p,s(t).beritaSingleData.judul]])]),e("div",E,[J,m(e("input",{class:"form-control",type:"date","onUpdate:modelValue":o[1]||(o[1]=n=>s(t).beritaSingleData.tanggal_unggah=n)},null,512),[[p,s(t).beritaSingleData.tanggal_unggah]])]),h.value==""?(d(),c("div",R,[z,m(e("textarea",{"onUpdate:modelValue":o[2]||(o[2]=n=>s(t).beritaSingleData.isi=n),class:"form-control",rows:"3",placeholder:"Isi berita",required:""},null,512),[[p,s(t).beritaSingleData.isi]]),s(t).beritaSingleData.foto_name===""?(d(),c("div",H,[G,e("div",K,[e("div",L,[e("input",{type:"file",class:"custom-file-input",accept:"image/*",onChange:D,required:""},null,32),e("label",O,_(l.value==null?"Pilih foto dari perangkat":l.value.name),1)])])])):(d(),c("div",Q,[e("div",W,[e("img",{src:s(t).beritaSingleData.foto_path,alt:s(t).beritaSingleData.foto_name,width:"150",height:"150"},null,8,X)]),e("div",Y,[e("label",null,_(s(t).beritaSingleData.foto_name),1)])]))])):F("",!0)]),Z],40,P)]))}};export{ot as default};

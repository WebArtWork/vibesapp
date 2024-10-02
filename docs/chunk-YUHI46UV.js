import{g as S}from"./chunk-ABGPTASO.js";import"./chunk-2YKZWEXU.js";import{E as n,J as w,Ka as _,Q as v,Ra as m,Va as b,Wa as C,Xa as j,_a as l,db as y,l as h,lb as g,m as p,n as c,o as f,p as d,qb as I}from"./chunk-HR67YQAP.js";var M=(()=>{class e extends b{constructor(o,t,r,a){super({name:"warehouse"},o,t,r,a),this.warehouses=[],this.get().subscribe(s=>this.warehouses.push(...s)),a.on("warehouse_create").subscribe(s=>{this.warehouses.push(s)}),a.on("warehouse_delete").subscribe(s=>{this.warehouses.splice(this.warehouses.findIndex(i=>i._id===s._id),1)})}static{this.\u0275fac=function(t){return new(t||e)(c(j),c(C),c(l),c(m))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var W=(()=>{class e{get rows(){return this._sw.warehouses}constructor(o,t,r,a,s){this._translate=o,this._alert=t,this._sw=r,this._form=a,this._core=s,this.columns=["name","description"],this.form=this._form.getForm("warehouses",{formId:"warehouses",title:"Warehouses",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill warehouses title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill warehouses description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(i,u)=>{this._sw.create(i),u()}})},update:i=>{this._form.modal(this.form,[],i).then(u=>{this._core.copy(u,i),this._sw.update(i)})},delete:i=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this cservice?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sw.delete(i)}}]})},buttons:[{icon:"cloud_download",click:i=>{this._form.modalUnique("warehouses","url",i)}}]}}static{this.\u0275fac=function(t){return new(t||e)(n(y),n(l),n(M),n(g),n(m))}}static{this.\u0275cmp=f({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Warehouses",3,"columns","config","rows"]],template:function(t,r){t&1&&v(0,"wtable",0),t&2&&w("columns",r.columns)("config",r.config)("rows",r.rows)},dependencies:[I]})}}return e})();var F=[{path:"",component:W}],U=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[_.forChild(F),S]})}}return e})();export{U as WarehousesModule};

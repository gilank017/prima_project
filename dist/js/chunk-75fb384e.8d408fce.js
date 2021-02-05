(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75fb384e"],{2905:function(t,e,a){},aab7:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-snackbar",{attrs:{timeout:3e3,top:"",centered:"",color:t.snackbar.color},scopedSlots:t._u([{key:"action",fn:function(e){var c=e.attrs;return[a("v-btn",t._b({attrs:{icon:""},on:{click:function(e){t.snackbar.show=!1}}},"v-btn",c,!1),[a("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v(" "+t._s(t.snackbar.text)+" ")]),a("v-card",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",[t._v("Customer")]),a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-select",{attrs:{label:"Type",items:t.typeOrder,"item-text":"name","item-value":"id"},model:{value:t.inputData.type,callback:function(e){t.$set(t.inputData,"type",e)},expression:"inputData.type"}})],1),a("v-col",{attrs:{cols:"4"}}),a("v-col",{attrs:{cols:"5",md:"3"}},[a("v-select",{attrs:{label:"Currency",items:t.currencyList},on:{change:t.changeCurrency},model:{value:t.inputData.currency,callback:function(e){t.$set(t.inputData,"currency",e)},expression:"inputData.currency"}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-autocomplete",{attrs:{label:"Customer Name",items:t.dataCustomer,"item-text":"name","item-value":"name"},model:{value:t.inputData.name_client,callback:function(e){t.$set(t.inputData,"name_client",e)},expression:"inputData.name_client"}})],1),a("v-col",{attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"5",md:"3"}},[a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var c=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Order Date","append-icon":"mdi-calendar",readonly:"",value:t.inputData.date}},"v-text-field",o,!1),c))]}}])},[a("v-date-picker",{attrs:{landscape:""},model:{value:t.inputData.date,callback:function(e){t.$set(t.inputData,"date",e)},expression:"inputData.date"}})],1)],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card-title",[t._v("Create Orders")]),a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("v-list-title",[a("h3",[t._v("Detail Product")])])],1),a("v-col",{attrs:{cols:"4"}},[a("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var c=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{color:"primary"}},"v-btn",o,!1),c),[a("v-icon",[t._v("mdi-plus")]),t._v("Add Product")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add Product")])]),a("v-card-text",[a("v-container",[a("v-form",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-autocomplete",{attrs:{label:"Search Product",items:t.dataProduct,"search-input":t.searchInput,"item-text":"product_name","item-value":"product_name","return-object":""},on:{"update:searchInput":function(e){t.searchInput=e},"update:search-input":function(e){t.searchInput=e}},scopedSlots:t._u([{key:"item",fn:function(e){return["object"!==typeof e.item?[a("v-list-item-content",{domProps:{textContent:t._s(e.item)}})]:[a("v-list-item-image",[a("v-img",{staticClass:"ma-2 pa-2",attrs:{src:e.item.image_url,"max-width":"40","max-height":"40"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.item.product_name))]),a("v-list-item-sub-title",[t._v(t._s(e.item.price)+" "+t._s(e.item.currency))])],1)]]}}]),model:{value:t.selectProduct,callback:function(e){t.selectProduct=e},expression:"selectProduct"}},[a("v-btn",{attrs:{slot:"append-outer",small:"",color:"primary"},on:{click:t.addProduct},slot:"append-outer"},[t._v(" Add Product ")])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-list",[a("v-list-title",[a("h3",[t._v("Selected Product")])]),t._l(t.valueProduct,(function(e,c){return a("v-list-item",{key:c},[a("v-list-item-image",[a("v-img",{staticClass:"ma-2 pa-2",attrs:{src:e.image_url,"max-width":"40","max-height":"40"}})],1),a("v-list-item-title",[t._v("Product: "+t._s(e.product_name))]),a("v-list-item-subtitle",[t._v(" Price : "+t._s(e.price)+" "+t._s(e.currency)+" ")]),a("v-list-item-action",[a("v-icon",{attrs:{slot:"append",color:"red"},on:{click:t.removeProduct},slot:"append"},[t._v(" mdi-minus-circle-outline ")])],1)],1)}))],2)],1)],1)],1)],1)],1),a("v-divider",{staticClass:"mt-5"}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px",scrollable:""},model:{value:t.dialogNote,callback:function(e){t.dialogNote=e},expression:"dialogNote"}},[a("v-card",{attrs:{tile:""}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add Note")])]),a("v-card-text",[a("v-container",[a("v-form",[a("v-row",[a("v-textarea",{attrs:{placeholder:"Add Some Note. . ."},model:{value:t.noteProduct,callback:function(e){t.noteProduct=e},expression:"noteProduct"}})],1)],1)],1)],1),a("v-divider",{staticClass:"mt-5"}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"primary"},on:{click:t.saveNote}},[t._v(" Save ")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("image")]),a("th",{staticClass:"text-left"},[t._v("Product Name")]),a("th",{staticClass:"text-left"},[t._v("Price")]),a("th",{staticClass:"text-left"},[t._v("Quantity")]),a("th",{staticClass:"text-left"},[t._v("Total")]),a("th",{staticClass:"text-left"},[t._v("Actions")])])]),a("tbody",t._l(t.detailProduct,(function(e,c){return a("tr",{key:c},[a("td",[a("v-img",{staticClass:"ma-2 pa-2",attrs:{src:e.image_url,"max-width":"70","max-height":"70"}})],1),a("td",[a("v-list",[a("v-list-item-title",[a("h3",[t._v(t._s(e.product_title))]),null!=e.supplier_name?a("caption",[t._v(" By "+t._s(e.supplier_name)+" ")]):t._e()]),null!=e.note?a("v-list-item-subtitle",[t._v(" Note : "+t._s(e.note)+" ")]):t._e(),a("v-list-item-subtitle",[a("v-btn",{attrs:{text:"","x-small":"",color:"primary"},on:{click:function(e){return t.openNote(c)}}},[t._v("Add Note")])],1)],1)],1),a("td",[t._v(t._s(e.price))]),a("td",[a("v-text-field",{staticClass:"editWidth",attrs:{type:"number"},on:{change:function(e){return t.calculateTotal(c)}},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",a)},expression:"value.quantity"}})],1),a("td",[a("p",[t._v(t._s(e.total_price))])]),a("td",[a("v-icon",{on:{click:t.removeDetailProduct}},[t._v("clear")])],1)])})),0)]},proxy:!0}])})],1)],1)],1)],1)],1),a("v-divider",{staticClass:"mt-5"}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:t.cancelData}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.saveData(t.index)}}},[t._v(" Save ")])],1)],1)],1)},o=[],i=(a("a434"),a("8a88")),r={name:"createOrder",data:function(){return{date:"",menu:!1,dialog:!1,dialogNote:!1,dataCustomer:[],typeOrder:[{id:1,name:"Income"},{id:2,name:"Outcome"}],inputData:{name_client:"",type:"",currency:"",date:""},snackbar:{show:!1,text:"Data Added Successfully",color:"success"},currencyList:["USD","IDR","CNY"],detailProduct:[],dataProductList:[],noteProduct:"",selectProduct:"",queryTerm:"",valueProduct:[],activeProduct:"",totalProduct:0}},watch:{search:{get:function(){this.queryTerm},set:function(t){this.queryTerm!==t&&(this.queryTerm=t,this.loadProduct())}}},created:function(){this.loadProduct(),this.save()},methods:{changeCurrency:function(){this.loadProduct()},loadProduct:function(){var t=this,e="https://api-dev.phantasmode.com",a=localStorage.getItem("access_token"),c={Authorization:"Bearer "+a,Accept:"application/json"};i["a"].get(e+"/api/products/?product_name="+(this.queryTerm||"")+"&convertTo="+this.inputData.currency,{headers:c}).then((function(e){t.dataProduct=e.data,t.queryTerm=e.data.total})).catch((function(t){console.log(t)}))},addProduct:function(){var t=this.selectProduct;this.selectProduct={},this.valueProduct.push(t)},close:function(){this.dialog=!1,this.dialogNote=!1,this.selectProduct=null},save:function(){for(var t in this.valueProduct)this.detailProduct.push({id:this.valueProduct[t].id,image_url:this.valueProduct[t].image_url,product_title:this.valueProduct[t].product_name,supplier_name:this.valueProduct[t].supplier_name,price:this.valueProduct[t].price,currency:this.valueProduct[t].currency,total_price:0,note:""});console.log(this.detailProduct),this.close()},removeProduct:function(t){this.activeProduct=t,this.valueProduct.splice(this.activeProduct,1)},removeDetailProduct:function(t){this.detailProduct.splice(t,1)},openNote:function(t){this.activeProduct=t,this.dialogNote=!0},saveNote:function(){this.detailProduct[this.activeProduct].note=this.noteProduct,this.noteProduct="",this.dialogNote=!1},calculateTotal:function(t){this.activeProduct=t;var e=this.detailProduct[this.activeProduct].price*this.detailProduct[this.activeProduct].quantity;isNaN(e)||(this.detailProduct[this.activeProduct].total_price=e)},cancelData:function(){this.$router.push("/Menu/Order/")},saveData:function(){var t=this,e="https://api-dev.phantasmode.com",a=localStorage.getItem("access_token"),c={Authorization:"Bearer "+a,Accept:"application/json"},o={type:this.inputData.type,client_name:this.inputData.name_client,currency:this.inputData.currency,order_date:this.inputData.date,items:this.detailProduct};i["a"].post(e+"/api/orders",o,{headers:c}).then((function(e){console.log(e),t.$router.push("/Menu/Order"),t.snackbar.show=!0})).catch((function(t){console.log(t)})),console.log(o)}},mounted:function(){var t=this,e="https://api-dev.phantasmode.com",a=localStorage.getItem("access_token"),c={Authorization:"Bearer "+a,Accept:"application/json"};i["a"].get(e+"/api/contacts?type=1",{headers:c}).then((function(e){t.dataCustomer=e.data.data})).catch((function(t){console.log(t)}))}},s=r,n=(a("c400"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),v=a("c6a6"),p=a("8336"),m=a("b0af"),h=a("99d9"),_=a("62ad"),f=a("a523"),P=a("2e4b"),b=a("169a"),y=a("ce7e"),g=a("4bd4"),k=a("132d"),x=a("adda"),C=a("8860"),D=a("da13"),V=a("1800"),w=a("5d23"),S=a("e449"),N=a("0fd9"),A=a("b974"),T=a("1f4f"),I=a("2db4"),q=a("2fa4"),L=a("8654"),O=a("a844"),$=Object(n["a"])(s,c,o,!1,null,"3a532ec6",null);e["default"]=$.exports;u()($,{VApp:d["a"],VAutocomplete:v["a"],VBtn:p["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCol:_["a"],VContainer:f["a"],VDatePicker:P["a"],VDialog:b["a"],VDivider:y["a"],VForm:g["a"],VIcon:k["a"],VImg:x["a"],VList:C["a"],VListItem:D["a"],VListItemAction:V["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VMenu:S["a"],VRow:N["a"],VSelect:A["a"],VSimpleTable:T["a"],VSnackbar:I["a"],VSpacer:q["a"],VTextField:L["a"],VTextarea:O["a"]})},c400:function(t,e,a){"use strict";var c=a("2905"),o=a.n(c);o.a}}]);
//# sourceMappingURL=chunk-75fb384e.8d408fce.js.map
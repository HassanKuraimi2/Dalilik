(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92f1ccf6"],{"30fb":function(t,a,s){"use strict";s("5228")},5228:function(t,a,s){},5667:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-card",{staticClass:"mx-auto block-card mb-5"},[s("div",{staticClass:"block-card-header"},[s("h2",{staticClass:"widget-title pb-0"},[t._v("About Me")])]),s("div",{staticClass:"block-card-body"},[s("p",{staticClass:"pb-3 font-weight-medium line-height-30"},[t._v(" "+t._s(t.UserAbout)+" ")])])])},i=[],o={props:{UserAbout:{type:String}}},n=o,l=s("2877"),r=Object(l["a"])(n,e,i,!1,null,null,null);a["a"]=r.exports},6333:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[void 0==t.CompanyData?s("div",{staticClass:"notFound"},[s("h1",[t._v("No Company Found")])]):s("div",[s("section",{staticClass:"breadcrumb-area bg-gray user-bread-bg pt-3 pb-0"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"breadcrumb-content d-flex flex-wrap align-items-end justify-content-between"},[s("div",{staticClass:"d-flex align-items-end"},[s("div",{staticClass:"user-thumb user-thumb-xl bread-thumb mr-3 flex-shrink-0"},[s("img",{attrs:{src:t.FilesPath+t.CompanyData.CompanyImage,alt:"author-image"}})]),s("div",{staticClass:"section-heading pb-3"},[s("h2",{staticClass:"sec__title mb-0 font-size-28 line-height-30"},[s("span",[t._v(t._s(t.CompanyData.CompanyName))]),s("i",{staticClass:"la la-check-circle ml-1 font-size-24 text-success",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"Verified Account"}})]),s("p",{staticClass:"sec__desc pt-1 font-size-16 line-height-22"},[t._v(" Member Since "+t._s(t.CompanyData.DateAdded)+" ")]),s("p",{staticClass:"sec__desc pt-1 font-size-16 line-height-22"},[s("i",{staticClass:"la la-map-marker mr-1"}),t._v(t._s(t.CompanyData.Location)+" ")])])]),s("div",{staticClass:"btn-box bread-btns d-flex align-items-center pb-3"},[t._m(0),s("span",{staticClass:"btn-gray mr-2"},[s("i",{staticClass:"la la-star-o mr-1"}),s("span",{staticClass:"text-color font-weight-semi-bold mr-1"},[t._v(t._s(t.CompanyData.ListingCount))]),t._v("Listing")])])])])])])]),s("section",{staticClass:"user-detail-area padding-top-60px padding-bottom-100px"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"user-listing-detail-wrap"},[s("AboutMe",{attrs:{UserAbout:t.CompanyData.Description}}),s("div",{staticClass:"section-heading pb-1"},[s("h2",{staticClass:"sec__title font-size-24 line-height-30"},[t._v(" "+t._s(t.CompanyData.CompanyName)+" Listings ")])]),s("div",{staticClass:"row pb-3"},t._l(t.CompanyPosts,(function(a,e){return s("v-lazy",{key:e,attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:t.isActive,callback:function(a){t.isActive=a},expression:"isActive"}},[s("PostCard",{ref:"child",refInFor:!0,attrs:{PostId:a.ListingId,PostData:a.ListingData,PostDate:a.DateAdded,CompanyName:a.CompanyName,PostImage:a.ListingImage,Saved:a.Saved,Faiv:a.Faiv,CompanyId:a.CompanyId},on:{toggle:t.toggleDialog,UpdateMyFaiv:t.updateFaiv}})],1)})),1)],1)]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"sidebar"},[s("v-card",{staticClass:"mx-auto sidebar-widget"},[s("h3",{staticClass:"widget-title"},[t._v("Get in Touch")]),s("div",{staticClass:"stroke-shape mb-4"}),s("form",{staticClass:"form-box",on:{submit:function(a){return a.preventDefault(),t.SendMessage(a)}}},[s("div",{staticClass:"input-box"},[s("label",{staticClass:"label-text"},[t._v("Message")]),s("span",{staticClass:"la la-pencil form-icon"}),s("v-textarea",{attrs:{solo:"",placeholder:"Write Message"},model:{value:t.UserMessage,callback:function(a){t.UserMessage=a},expression:"UserMessage"}})],1),s("div",{staticClass:"btn-box"},[s("button",{staticClass:"theme-btn gradient-btn w-100 border-0",attrs:{type:"submit"}},[t._v(" Send Message "),s("i",{staticClass:"la la-arrow-right ml-1"})])])])])],1)])])])]),s("v-dialog",{attrs:{scrollable:"","max-width":"400px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("v-card",[s("v-card-title",[t._v("Select Folder")]),s("v-divider"),s("v-card-text",{staticStyle:{height:"200px"}},[s("v-radio-group",{attrs:{column:""},model:{value:t.dialogm1,callback:function(a){t.dialogm1=a},expression:"dialogm1"}},t._l(t.Folders,(function(t,a){return s("v-radio",{key:a,attrs:{label:t.FloderName,value:t.id}})})),1)],1),s("v-divider"),s("v-card-actions",[s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" Close ")]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.preventDefault(),t.savePostToFaivorit(a)}}},[t._v(" Save ")])],1)],1)],1)],1)])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"btn-gray mr-2"},[s("i",{staticClass:"la la-file-text-o mr-1"}),s("span",{staticClass:"text-color font-weight-semi-bold mr-1"},[t._v("12")]),t._v("Events")])}],o=(s("4de4"),s("2909")),n=s("5667"),l=s("25f7"),r=s("7424"),c=s("8265"),d={data:function(){return{CompanyData:{},CompanyPosts:[],bottom:!1,offset:0,FilesPath:c["a"].path,dialogm1:0,dialog:!1,Folders:[],CurrentPostId:0,isActive:!1,UserMessage:"",CurrentUserId:0,FollowStatus:"UnFollow",FollowStatusClass:"la-minus",disabled:!1}},components:{AboutMe:n["a"],PostCard:l["a"]},created:function(){var t=this;window.addEventListener("scroll",(function(){t.bottom=t.bottomVisible()})),this.InitializeCompanyData(),this.InitializeCompanyPosts(),this.getUserFaivorits()},methods:{InitializeCompanyData:function(){var t=this;r["a"].get("/company/GetCompanyById",{params:{CompanyId:this.$route.params.id}}).then((function(a){t.CompanyData=a.data.Refrence[0],t.CompanyData.DateAdded=new Date(t.CompanyData.DateAdded).toLocaleString("default",{month:"short",year:"numeric"})})).catch((function(t){console.log(t.data)}))},InitializeCompanyPosts:function(){var t=this;r["a"].get("/company/GetCompanyPosts",{params:{CompanyId:this.$route.params.id,offset:this.offset}}).then((function(a){var s;(s=t.CompanyPosts).push.apply(s,Object(o["a"])(a.data.Refrence))})).catch((function(t){console.log(t)}))},bottomVisible:function(){var t=window.scrollY+2e3,a=document.documentElement.clientHeight,s=document.documentElement.scrollHeight,e=a+t>=s;return e||s<a},toggleDialog:function(t){this.dialog=!this.dialog,this.CurrentPostId=t},getUserFaivorits:function(){var t=this;r["a"].get("/users/getUserFaivoritFolders").then((function(a){t.Folders=a.data.Refrence})).catch((function(t){console.log(t.data)}))},savePostToFaivorit:function(){var t=this;0!=this.dialogm1&&0!=this.CurrentPostId?r["a"].post("/users/SavePostToFaivorit",{FolderId:this.dialogm1,PostId:this.CurrentPostId}).then((function(a){a.data.Status&&(t.$toast.success("تم حفظ العنصر في المفضلة"),t.CompanyPosts.filter((function(a){return a.ListingId===t.CurrentPostId}))[0].Faiv=0,t.dialogm1=0,t.CurrentPostId=0,t.dialog=!1)})).catch((function(t){console.log(t.data)})):this.$toast.warning("يرجى تحديد الملف اولا قبل الحفظ")},updateFaiv:function(t,a){this.CompanyPosts.filter((function(t){return t.ListingId===a}))[0].Faiv=t},SendMessage:function(){var t=this;this.UserMessage.length>0&&r["a"].post("/users/SendChatMessage",{IsCompany:!0,UserIdTo:this.$route.params.id,Message:this.UserMessage}).then((function(a){a.data.Status?(t.$toast.success("تم إرسال الرسالة بنجاح"),t.UserMessage=""):t.$toast.error("حصل خطأ اثناء محاولة إرسال الرسالة")})).catch((function(t){console.log(t)}))}},watch:{bottom:function(t){t&&(this.offset+=5,this.InitializeCompanyPosts())}}},u=d,m=(s("30fb"),s("2877")),p=Object(m["a"])(u,e,i,!1,null,"5285bcc0",null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-92f1ccf6.fc01c77d.js.map
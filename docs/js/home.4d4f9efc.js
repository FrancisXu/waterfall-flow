(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{a5c6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image"},[i("div",{staticClass:"waterfall"},t._l(t.imageList,function(e){return i("div",{staticClass:"column"},t._l(e,function(e,a){return i("div",{staticClass:"column-item"},[i("img",{staticClass:"img",attrs:{src:"../../src/assets/images/"+e.url,alt:""}}),i("p",{staticClass:"date"},[t._v("20 nov, 2016")]),i("h5",{staticClass:"title"},[t._v("Auto-resized image")]),i("h6",{staticClass:"content"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ")])])}),0)}),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.footerVisible,expression:"footerVisible"}],staticClass:"footer"},[i("h5",[t._v("我是有底线的")])])])},s=[],n=(i("f763"),"dev"===Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ENV?"http://localhost:8081/img/":"https://www.francisxu.com/images/"),o={data:function(){return{tempImage:[],imageHeight:[0,0,0],imageWidth:0,imageList:[[],[],[]],footerVisible:!1,pagination:{currentPage:1,totalPage:1,pageSize:10,available:!0}}},components:{},computed:{},mounted:function(){this.getImagePage(),this.imageWidth=document.querySelector(".waterfall>.column").offsetWidth,window.addEventListener("scroll",this.pullDown)},methods:{getImagePage:function(){this.tempImage=[{url:"indexBanner.jpg"},{url:"mblogIndex.jpg"},{url:"crop_20a7dc7fbd29d679b456fa0f77bd9525d.jpg"}],this.pushImage(0)},pushImage:function(t){var e=this;if(!(t>=this.tempImage.length)){var i=new Image,a=this;i.src=n+a.tempImage[t].url,console.log(i.src),i.onload=function(){var s=a.imageHeight[0],n=0;a.imageHeight.forEach(function(t,e){s>t&&(s=t,n=e)}),a.imageHeight[n]+=i.naturalHeight/i.naturalWidth+96/e.imageWidth,a.imageList[n].push(a.tempImage[t]),a.pushImage(t+1)}}},pullDown:function(){if(this.height1=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,this.height2=document.body.scrollHeight,this.height3="CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight,this.height3+this.height1>=this.height2-100&&this.available){if(this.available=!1,this.pagination.currentPage>=this.pagination.totalPage)return void(this.footerVisible=!0);this.pagination.currentPage++,this.getImagePage()}else this.height3+this.height1<this.height2-100&&(this.available=!0)}}},c=o,l=(i("de96"),i("17cc")),h=Object(l["a"])(c,a,s,!1,null,"c40435a4",null);e["default"]=h.exports},de96:function(t,e,i){"use strict";var a=i("efed"),s=i.n(a);s.a},efed:function(t,e,i){}}]);
//# sourceMappingURL=home.4d4f9efc.js.map
webpackJsonp([5],{440:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(108),r=a.n(n),i=a(103),s=a.n(i),o=a(106),l=a.n(o),c=a(104),d=a.n(c),u=a(105),h=a.n(u),f=a(5),p=a.n(f),m=a(28),g=a(179),y=(a.n(g),a(190)),_=a(658),b=function(e){function t(){return s()(this,t),d()(this,(t.__proto__||r()(t)).apply(this,arguments))}return h()(t,e),l()(t,[{key:"render",value:function(){return p.a.createElement(_.a,{data:this.props.products,actions:this.props.actions})}}]),t}(p.a.Component),w=function(e){return{products:e.taobao.products}},v=function(e){return{actions:Object(m.bindActionCreators)(y,e)}};t.default=Object(g.connect)(w,v)(b)},658:function(e,t,a){"use strict";var n=a(482),r=(a.n(n),a(483)),i=a.n(r),s=a(474),o=(a.n(s),a(475)),l=a.n(o),c=a(455),d=(a.n(c),a(454)),u=a.n(d),h=a(460),f=(a.n(h),a(461)),p=a.n(f),m=a(555),g=(a.n(m),a(556)),y=a.n(g),_=a(108),b=a.n(_),w=a(103),v=a.n(w),E=a(106),S=a.n(E),k=a(104),C=a.n(k),x=a(105),z=a.n(x),O=a(479),j=(a.n(O),a(480)),I=a.n(j),B=a(453),K=(a.n(B),a(458)),R=a.n(K),q=a(485),P=(a.n(q),a(486)),D=a.n(P),N=a(462),T=(a.n(N),a(463)),L=a.n(T),H=a(5),M=a.n(H),V=(a(180),a(493),a(6)),A=(L.a.Option,D.a.confirm),J=R.a.Search,W=p.a.TabPane,F=(I.a.Item,l.a.TreeNode),G=function(e){function t(e){v()(this,t);var a=C()(this,(t.__proto__||b()(t)).call(this,e));return a.onSelectChange=function(e,t){var n=[];t.forEach(function(e){n.push(e.offer_id)}),a.setState({selectedRowKeys:e,selectedOfferIds:n})},a.state={status:"published",group_ids:0,data:[],pageSize:50,selectedRowKeys:[],selectedOfferIds:[],selfCategoryList:[]},a}return z()(t,e),S()(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.actions.query({currentPage:1,pageSize:e.state.pageSize,status:"published"}),Object(V.a)({cmd:"alibaba.open.category.getselfcatlist",param:{member_id:"b2b-"+V.c.get("seller_id")},method:"get",success:function(t){e.setState({selfCategoryList:t.alibaba_open_category_getselfcatlist_response.result_objects.seller_cat_info[0].seller_cats.struct})},error:function(e){}})},10)}},{key:"reload",value:function(){this.setState({selectedRowKeys:[],selectedOfferIds:[]}),this.handleSearch()}},{key:"handleSearch",value:function(e){this.props.actions.query({q:e,group_ids:this.state.group_ids,status:this.state.status,currentPage:1,pageSize:this.state.pageSize})}},{key:"handleDel",value:function(e){var t=this.props.actions.del;A({title:"\u63d0\u793a",content:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",onOk:function(){t(e)},onCancel:function(){}})}},{key:"handleBatchDel",value:function(){var e=this,t=this.state.selectedOfferIds;if(window.confirm("\u60a8\u786e\u5b9a\u8981\u6279\u91cf\u5220\u9664\u5417\uff1f")){var a=0;t.forEach(function(n,r){Object(V.a)({cmd:"alibaba.open.offer.delete",param:{offer_ids:n+""},method:"post",success:function(n){a++,r==t.length-1&&(alert("\u5220\u9664\u5b8c\u6210\uff0c\u6210\u529f"+a+"\u4e2a\uff0c\u5931\u8d25"+(t.length-a)+"\u4e2a"),e.reload())},error:function(n){r==t.length-1&&(alert("\u5220\u9664\u5b8c\u6210\uff0c\u6210\u529f"+a+"\u4e2a\uff0c\u5931\u8d25"+(t.length-a)+"\u4e2a"),e.reload())}})})}}},{key:"handleBatchRepost",value:function(){var e=this,t=this.state.selectedOfferIds;if(window.confirm("\u60a8\u786e\u5b9a\u8981\u6279\u91cf\u91cd\u53d1\u5417\uff1f")){var a=0;t.forEach(function(n,r){Object(V.a)({cmd:"alibaba.open.offer.repost",param:{offer_ids:n+""},method:"post",success:function(n){a++,r==t.length-1&&(alert("\u91cd\u53d1\u5b8c\u6210\uff0c\u6210\u529f"+a+"\u4e2a\uff0c\u5931\u8d25"+(t.length-a)+"\u4e2a"),e.reload())},error:function(n){r==t.length-1&&(alert("\u91cd\u53d1\u5b8c\u6210\uff0c\u6210\u529f"+a+"\u4e2a\uff0c\u5931\u8d25"+(t.length-a)+"\u4e2a"),e.reload())}})})}}},{key:"handleBatchChangeStatus",value:function(e){var t=this,a=this.state.selectedOfferIds;if("expired"===e){if(window.confirm("\u60a8\u786e\u5b9a\u8981\u6279\u91cf\u4e0b\u67b6\u5417\uff1f")){var n=a.join(";");Object(V.a)({cmd:"alibaba.open.offer.expire",param:{offer_ids:n},method:"post",success:function(e){alert("\u4e0b\u67b6\u6210\u529f\uff01"),t.reload()},error:function(e){alert("\u4e0b\u67b6\u5931\u8d25\uff01"),t.reload()}})}}}},{key:"handleBatchDorecommendoffer",value:function(){var e=this,t=this.state.selectedOfferIds;if(window.confirm("\u60a8\u786e\u5b9a\u8981\u6279\u91cf\u6a71\u7a97\u63a8\u8350\u5417\uff1f")){var a=0;t.forEach(function(n,r){Object(V.a)({cmd:"alibaba.open.industry.showwindow.dorecommendoffer",param:{offer_id:n},method:"post",success:function(n){a++,r==t.length-1&&(alert("\u6a71\u7a97\u63a8\u8350\u5b8c\u6210\uff0c\u6210\u529f"+a+"\u4e2a\uff0c\u5931\u8d25"+(t.length-a)+"\u4e2a"),e.reload())},error:function(n){r==t.length-1&&(alert("\u6a71\u7a97\u63a8\u8350\u5b8c\u6210\uff0c\u6210\u529f"+a+"\u4e2a\uff0c\u5931\u8d25"+(t.length-a)+"\u4e2a"),e.reload())}})})}}},{key:"handleBatchCancelrecommendoffer",value:function(){var e=this,t=this.state.selectedOfferIds;if(window.confirm("\u60a8\u786e\u5b9a\u8981\u6279\u91cf\u53d6\u6d88\u6a71\u7a97\u5417\uff1f")){var a=0;t.forEach(function(n,r){Object(V.a)({cmd:"alibaba.open.industry.showwindow.cancelrecommendoffer",param:{offer_id:n},method:"post",success:function(n){a++,r==t.length-1&&(alert("\u53d6\u6d88\u6a71\u7a97\u5b8c\u6210\uff0c\u6210\u529f"+a+"\u4e2a\uff0c\u5931\u8d25"+(t.length-a)+"\u4e2a"),e.reload())},error:function(n){r==t.length-1&&(alert("\u53d6\u6d88\u6a71\u7a97\u5b8c\u6210\uff0c\u6210\u529f"+a+"\u4e2a\uff0c\u5931\u8d25"+(t.length-a)+"\u4e2a"),e.reload())}})})}}},{key:"handleView",value:function(e){window.open("https://detail.1688.com/offer/"+e+".html")}},{key:"handleEdit",value:function(e){window.open("https://offer.1688.com/offer/post/fill_product_info.htm?operator=edit&offerId="+e)}},{key:"changeStatus",value:function(e){this.setState({status:e,selectedRowKeys:[],selectedOfferIds:[]}),this.props.actions.query({status:e,currentPage:1,pageSize:this.state.pageSize})}},{key:"render",value:function(){var e=this,t=[{title:"\u5546\u54c1\u4fe1\u606f",dataIndex:"subject",key:"subject",width:400,render:function(e,t){return M.a.createElement("div",null,M.a.createElement("div",{style:{float:"left",height:"32px",margin:"0 5px"}},M.a.createElement("img",{src:t.image_list&&t.image_list.offer_image_info?t.image_list.offer_image_info[0].size64_url:"",width:32})),M.a.createElement("div",{style:{float:"left",height:"32px"}},M.a.createElement("div",null,M.a.createElement(y.a,{value:t.quality_level,disabled:!0,style:{"font-size":"12px"}})),M.a.createElement("div",null,t.subject)))}},{title:"\u5e93\u5b58(\u4ef6)",dataIndex:"amount_on_sale",key:"amount_on_sale",sorter:!0,width:100},{title:"\u4ef7\u683c(\u5143)",dataIndex:"unit_price",key:"unit_price",sorter:!0,width:100,render:function(e,t){return t.price_ranges&&t.price_ranges.price_range_info?1===t.price_ranges.price_range_info.length?M.a.createElement("span",null,t.price_ranges.price_range_info[0].price):M.a.createElement("span",null,t.price_ranges.price_range_info[t.price_ranges.price_range_info.length-1].price," - ",t.price_ranges.price_range_info[0].price):M.a.createElement("span",null,"0")}},{title:"\u5230\u671f\u65f6\u95f4",dataIndex:"gmt_expire",key:"gmt_expire",sorter:!0,width:200,render:function(e,t){return M.a.createElement("span",null,e.substring(0,4)+"-"+e.substring(4,6)+"-"+e.substring(6,8)+" "+e.substring(8,10)+":"+e.substring(10,12)+":"+e.substring(12,14))}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"gmt_modified",key:"gmt_modified",sorter:!0,width:200,render:function(e,t){return M.a.createElement("span",null,e.substring(0,4)+"-"+e.substring(4,6)+"-"+e.substring(6,8)+" "+e.substring(8,10)+":"+e.substring(10,12)+":"+e.substring(12,14))}},{title:"\u64cd\u4f5c",key:"operation",width:150,render:function(t,a){return M.a.createElement("span",null,M.a.createElement("a",{href:"javascript:void(0)",onClick:e.handleView.bind(e,a.offer_id)},"\u67e5\u770b"),"\xa0|\xa0",M.a.createElement("a",{href:"javascript:void(0)",onClick:e.handleEdit.bind(e,a.offer_id)},"\u7f16\u8f91"))}}],a={total:this.props.data.total,pageSize:this.state.pageSize,showSizeChanger:!0,pageSizeOptions:["10","20","30","40","50"],showTotal:function(e,t){return"\u7b2c"+t[0]+"-"+t[1]+"\u6761 , \u5171"+e+"\u6761"},onShowSizeChange:function(t,a){e.setState({pageSize:a}),e.props.actions.query({currentPage:t,pageSize:a})},onChange:function(t){e.props.actions.query({currentPage:t,pageSize:e.state.pageSize})}},n=this.state.selectedRowKeys,r={selectedRowKeys:n,onChange:this.onSelectChange},s=n.length>0,o=function(t,a,n){var r={group_ids:e.state.group_ids,status:e.state.status,currentPage:1,pageSize:e.state.pageSize};n&&n.order&&(r.orderBy=n.field+":"+n.order.replace("end","")),e.props.actions.query(r)};return M.a.createElement("div",{className:"list-box"},M.a.createElement("div",null,M.a.createElement(p.a,{style:{margin:"0 10px"},onChange:this.changeStatus.bind(this),type:"card",size:"small"},M.a.createElement(W,{tab:"\u51fa\u552e\u4e2d",key:"published"}),M.a.createElement(W,{tab:"\u4ed3\u5e93\u4e2d",key:"expired"}),M.a.createElement(W,{tab:"\u6a71\u7a97\u4e2d",key:"showwindow"}))),M.a.createElement("div",{className:"toolbar",style:{margin:"0 5px 5px 5px"}},M.a.createElement("span",{className:"btn product-mgt-btn"},M.a.createElement("a",{target:"_bank",href:"https://offer.1688.com/offer/post/choose_category.htm?operator=new&fromWhere=normal&tracelog=offerweb_navigation_post_entry"},M.a.createElement(u.a,{type:"primary"},"\u53d1\u5e03\u65b0\u5b9d\u8d1d")),M.a.createElement(u.a,{type:"primary",onClick:this.handleBatchDel.bind(this),disabled:!s},"\u6c38\u4e45\u5220\u9664"),M.a.createElement(u.a,{type:"primary",onClick:this.handleBatchRepost.bind(this),disabled:!s},"\u91cd\u53d1"),"published"==this.state.status||"showwindow"==this.state.status?M.a.createElement(u.a,{type:"primary",onClick:this.handleBatchChangeStatus.bind(this,"expired"),disabled:!s},"\u4e0b\u67b6"):null,"published"==this.state.status?M.a.createElement(u.a,{type:"primary",onClick:this.handleBatchDorecommendoffer.bind(this),disabled:!s},"\u6a71\u7a97\u63a8\u8350"):"showwindow"==this.state.status?M.a.createElement(u.a,{type:"primary",onClick:this.handleBatchCancelrecommendoffer.bind(this),disabled:!s},"\u53d6\u6d88\u6a71\u7a97"):null),M.a.createElement("span",{style:{"font-size":"13px",margin:"0 10px"}},"\u9009\u4e2d",M.a.createElement("span",{style:{color:"blue",margin:"0 5px"}},this.state.selectedRowKeys.length),"\u4e2a"),M.a.createElement("span",{className:"search",style:{float:"right"}},M.a.createElement(l.a,{style:{width:200},onChange:function(t){e.setState({group_ids:t})},treeDefaultExpandedKeys:["0"],dropdownStyle:{maxHeight:300,overflow:"auto"},placeholder:"\u8bf7\u9009\u62e9\u81ea\u5b9a\u4e49\u5206\u7c7b"},M.a.createElement(F,{key:0,title:"\u5168\u90e8",value:0},function e(t){return null!=t&&t.map?t.map(function(t){return t.childrens&&t.childrens.struct?M.a.createElement(F,{key:t.id,title:t.name,value:t.id},e(t.childrens.struct)):M.a.createElement(F,{key:t.id,title:t.name,value:t.id})}):null}(this.state.selfCategoryList)))," \xa0",M.a.createElement(J,{placeholder:"\u8bf7\u8f93\u5165\u5b9d\u8d1d\u5173\u952e\u5b57",style:{width:250},onSearch:function(t){e.handleSearch(t)}}))),M.a.createElement(i.a,{rowKey:"id",rowSelection:r,columns:t,scroll:{y:window.outerHeight-230},dataSource:this.props.data.result,pagination:a,loading:!1,onChange:o.bind(this)}))}}]),t}(M.a.Component);t.a=G}});
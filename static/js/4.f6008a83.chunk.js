webpackJsonp([4],{441:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(108),o=e.n(r),a=e(103),u=e.n(a),i=e(106),c=e.n(i),s=e(104),f=e.n(s),d=e(105),p=e.n(d),l=e(5),_=e.n(l),b=e(28),m=e(179),h=(e.n(m),e(839)),v=e(840),y=function(n){function t(){return u()(this,t),f()(this,(t.__proto__||o()(t)).apply(this,arguments))}return p()(t,n),c()(t,[{key:"render",value:function(){return _.a.createElement(v.a,{data:this.props.trades,actions:this.props.actions})}}]),t}(_.a.Component),O=function(n){return{trades:n.taobao.trades}},T=function(n){return{actions:Object(b.bindActionCreators)(h,n)}};t.default=Object(m.connect)(O,T)(y)},839:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"LIST_TRADE",function(){return o}),e.d(t,"list",function(){return a}),e.d(t,"query",function(){return u});var r=e(6),o="LIST_TRADE",a=function(n){return{type:o,data:n}},u=function(n){return function(t,e){Object(r.a)({cmd:"alibaba.open.trade.order.list",param:n,method:"post",success:function(n){},error:function(n){}})}}},840:function(n,t,e){"use strict";var r=e(108),o=e.n(r),a=e(103),u=e.n(a),i=e(106),c=e.n(i),s=e(104),f=e.n(s),d=e(105),p=e.n(d),l=e(474),_=(e.n(l),e(475)),b=e.n(_),m=e(479),h=(e.n(m),e(480)),v=e.n(h),y=e(460),O=(e.n(y),e(461)),T=e.n(O),j=e(453),k=(e.n(j),e(458)),E=e.n(k),A=e(485),C=(e.n(A),e(486)),D=e.n(C),I=e(462),M=(e.n(I),e(463)),P=e.n(M),S=e(5),L=e.n(S),N=(e(180),e(493),e(6),P.a.Option,D.a.confirm,E.a.Search,T.a.TabPane,v.a.Item,b.a.TreeNode,function(n){function t(n){return u()(this,t),f()(this,(t.__proto__||o()(t)).call(this,n))}return p()(t,n),c()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return L.a.createElement("div",{className:"list-box"})}}]),t}(L.a.Component));t.a=N}});
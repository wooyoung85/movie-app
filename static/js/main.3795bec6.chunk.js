(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),c=s.n(n),r=s(24),i=s.n(r),o=s(10),l=s(2),j=s(13),m=s.n(j),d=s(25),u=s(26),b=s(27),v=s(31),h=s(30),p=s(28),O=s.n(p);s(56);var x=function(e){var t=e.year,s=e.title,n=e.summary,c=e.poster,r=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:c,alt:s}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:s}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsx)("p",{className:"movie__summary",children:n.slice(1,180)}),Object(a.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]})},f=(s(57),function(e){Object(v.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(c.a.Component));s(58);var g=function(){return Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(a.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})};s(59);var _=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})};var y=function(){return Object(a.jsxs)(o.a,{basename:"/movie-app",children:[Object(a.jsx)(_,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(a.jsx)(l.a,{path:"/about",component:g})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.3795bec6.chunk.js.map
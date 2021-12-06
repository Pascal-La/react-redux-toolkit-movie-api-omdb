(this["webpackJsonpreact-redux-movie-rating"]=this["webpackJsonpreact-redux-movie-rating"]||[]).push([[0],{59:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){},64:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){},67:function(e,c,t){},68:function(e,c,t){"use strict";t.r(c);var s,n=t(1),r=t.n(n),i=t(14),a=t.n(i),j=t(6),o=t(15),l=t(2),d=t(7),b=t(8),h=t(10),u=t(11),O=t.n(u),x=t(17),v=t(9),m=t(29),f=t.n(m).a.create({baseURL:"http://www.omdbapi.com/"}),p=Object(v.b)("movies/fetchAsyncMovies",function(){var e=Object(x.a)(O.a.mark((function e(c){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("?apiKey=15b1c043&s=".concat(c,"&type=movie"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),g=Object(v.b)("movies/fetchAsyncShows",function(){var e=Object(x.a)(O.a.mark((function e(c){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("?apiKey=15b1c043&s=".concat(c,"&type=series"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),N=Object(v.b)("movies/fetchAsyncMovieOrShowDetail",function(){var e=Object(x.a)(O.a.mark((function e(c){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("?apiKey=15b1c043&i=".concat(c,"&Plot=full"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),w=Object(v.c)({name:"movies",initialState:{movies:{},shows:{},selectMovieOrShow:{}},reducers:{removeSelectedMovieOrShow:function(e){e.selectMovieOrShow={}},setSearch:function(e,c){var t=c.payload;e.title=t}},extraReducers:(s={},Object(b.a)(s,p.pending,(function(){console.log("Pending")})),Object(b.a)(s,p.fulfilled,(function(e,c){var t=c.payload;return console.log("Fetched Successfully!"),Object(h.a)(Object(h.a)({},e),{},{movies:t})})),Object(b.a)(s,p.rejected,(function(){console.log("Rejected!")})),Object(b.a)(s,g.fulfilled,(function(e,c){var t=c.payload;return console.log("Fetched Successfully!"),Object(h.a)(Object(h.a)({},e),{},{shows:t})})),Object(b.a)(s,N.fulfilled,(function(e,c){var t=c.payload;return console.log("Fetched Successfully!"),Object(h.a)(Object(h.a)({},e),{},{selectMovieOrShow:t})})),s)}),S=w.actions,y=S.removeSelectedMovieOrShow,M=S.setSearch,R=function(e){return e.movies.movies},A=function(e){return e.movies.shows},P=function(e){return e.movies.selectMovieOrShow},D=w.reducer,I=(t(59),t.p+"static/media/poster.cf5f66ce.png"),k=t(0),T=function(e){var c=e.data;return Object(k.jsx)("div",{className:"card-item",children:Object(k.jsx)(o.b,{to:"/movie/".concat(c.imdbID),children:Object(k.jsxs)("div",{className:"card-inner",children:[Object(k.jsx)("div",{className:"card-top",children:"N/A"===c.Poster?Object(k.jsx)("img",{src:I,alt:c.Title}):Object(k.jsx)("img",{src:c.Poster,alt:c.Title})}),Object(k.jsx)("div",{className:"card-bottom",children:Object(k.jsxs)("div",{className:"card-info",children:[Object(k.jsx)("h4",{children:c.Title}),Object(k.jsx)("p",{children:c.Year})]})})]})})})},E=(t(61),function(){var e,c,t=Object(j.c)(R),s=Object(j.c)(A);return e="True"===t.Response?t.Search.map((function(e,c){return Object(k.jsx)(T,{data:e},c)})):Object(k.jsx)("div",{className:"movies-error",children:Object(k.jsx)("h3",{children:t.Error})}),c="True"===s.Response?s.Search.map((function(e,c){return Object(k.jsx)(T,{data:e},c)})):Object(k.jsx)("div",{className:"shows-error",children:Object(k.jsx)("h3",{children:s.Error})}),Object(k.jsxs)("div",{className:"movie-wrapper",children:[Object(k.jsxs)("div",{className:"movie-list",children:[Object(k.jsx)("h2",{children:"Films"}),Object(k.jsx)("div",{className:"movie-container",children:e})]}),Object(k.jsxs)("div",{className:"show-list",children:[Object(k.jsx)("h2",{children:"S\xe9ries"}),Object(k.jsx)("div",{className:"movie-container",children:c})]})]})}),F=(t(62),function(){var e=Object(j.c)(R),c=Object(j.b)(),t=Object(n.useState)(""),s=Object(d.a)(t,2),r=s[0],i=s[1],a=function(e){e.preventDefault(),c(M(r)),c(p(r)),c(g(r)),i("")};return e.Search?Object(k.jsxs)("div",{className:"fetched-form",children:[Object(k.jsxs)("form",{onSubmit:a,children:[Object(k.jsx)("input",{placeholder:"Rechercher...",value:r,onChange:function(e){i(e.target.value)}}),Object(k.jsx)("button",{onClick:a,children:"Envoyer"})]}),Object(k.jsx)("div",{className:"banner-img"}),Object(k.jsx)(E,{})]}):Object(k.jsxs)("div",{className:"initial-form",children:[Object(k.jsxs)("form",{onSubmit:a,children:[Object(k.jsx)("input",{placeholder:"Rechercher...",value:r,onChange:function(e){i(e.target.value)}}),Object(k.jsx)("button",{onClick:a,children:"Envoyer"})]}),Object(k.jsx)("h2",{children:"Lancez une nouvelle recherche de films ou de s\xe9ries !"})]})}),L=(t(63),function(){return Object(k.jsxs)("div",{className:"header",children:[Object(k.jsx)("a",{href:"/",children:Object(k.jsx)("h2",{children:"PL"})}),Object(k.jsx)("h1",{children:"MOVIE API"})]})}),C=(t(64),function(){return Object(k.jsxs)("div",{className:"footer",children:[Object(k.jsx)("div",{children:"Movie Api"}),Object(k.jsx)("div",{children:"\xa92021, Movie, Inc. or its affiliates"})]})}),B=(t(65),function(){return Object(k.jsxs)("div",{className:"not-found",children:[Object(k.jsx)("h1",{children:"404"}),Object(k.jsx)("h1",{children:"Page Not Found"})]})}),K=(t(66),function(){var e=Object(l.g)().imdbID,c=Object(j.b)(),t=Object(j.c)(P);return Object(n.useEffect)((function(){return c(N(e)),function(){c(y())}}),[c,e]),Object(k.jsx)("div",{className:"movie-section",children:0===Object.keys(t).length?Object(k.jsx)("div",{children:"Loading..."}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"section-left",children:[Object(k.jsx)("div",{className:"movie-title",children:t.Title}),Object(k.jsxs)("div",{className:"movie-rating",children:[Object(k.jsxs)("span",{children:["IMBD Rating ",Object(k.jsx)("i",{className:"fa fa-star"})," : ",t.imdbRating]}),Object(k.jsxs)("span",{children:["IMBD Votes ",Object(k.jsx)("i",{className:"fa fa-thumbs-up"})," :"," ",t.imdbVotes]}),Object(k.jsxs)("span",{children:["Runtime ",Object(k.jsx)("i",{className:"fa fa-film"})," : ",t.Runtime]}),Object(k.jsxs)("span",{children:["Year ",Object(k.jsx)("i",{className:"fa fa-calendar"})," : ",t.Year]})]}),Object(k.jsx)("div",{className:"movie-plot",children:t.Plot}),Object(k.jsxs)("div",{className:"movie-info",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Director"}),Object(k.jsx)("span",{children:t.Director})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Stars"}),Object(k.jsx)("span",{children:t.Actors})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Genre"}),Object(k.jsx)("span",{children:t.Genre})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Languages"}),Object(k.jsx)("span",{children:t.Language})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Awards"}),Object(k.jsx)("span",{children:t.Awards})]})]})]}),Object(k.jsx)("div",{className:"section-right",children:"N/A"===t.Poster?Object(k.jsx)("img",{src:I,alt:t.Title,height:"auto",width:"200"}):Object(k.jsx)("img",{src:t.Poster,alt:t.Title})})]})})});t(67);var V=function(){return Object(k.jsx)("div",{className:"app",children:Object(k.jsxs)(o.a,{children:[Object(k.jsx)(L,{}),Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{path:"/",exact:!0,element:Object(k.jsx)(F,{})}),Object(k.jsx)(l.a,{path:"/movie/:imdbID",element:Object(k.jsx)(K,{})}),Object(k.jsx)(l.a,{path:"*",element:Object(k.jsx)(B,{})})]})}),Object(k.jsx)(C,{})]})})},Y=Object(v.a)({reducer:{movies:D}});a.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(j.a,{store:Y,children:Object(k.jsx)(V,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f4c6db1a.chunk.js.map
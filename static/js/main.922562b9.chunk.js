(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(50)},31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),m=(a(31),a(6)),i=a(8),l=(a(32),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"rmdb-logo",src:"./images/reactMovie_logo.png",alt:"rmdb-logo"})),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"})))}),s=a(15),u=a(19),d=a(9),v=a(10),h=a(12),g=a(11),b=a(13),p="https://api.themoviedb.org/3/",f="4e6427a0c9f18d72c3420bc2c63d1f62",E="http://image.tmdb.org/t/p/",N=(a(37),function(e){var t=e.image,a=e.title,n=e.text;return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n        39%,rgba(0,0,0,0)\n        41%,rgba(0,0,0,0.65)\n        100%),\n        url('".concat(t,"'), #1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,a),c.a.createElement("p",null,n))))}),S=a(7),y=a.n(S),I=(a(39),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){var t=a.props.callback;a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){t(a.state.value)},500)},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(y.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search",onChange:this.doSearch,value:this.state.valuevalue})))}}]),t}(n.Component)),k=(a(40),function(e){var t=e.header,a=e.loading,n=e.children;return c.a.createElement("div",{className:"rmdb-grid"},t&&!a?c.a.createElement("h1",null,t):null,c.a.createElement("div",{className:"rmdb-grid-content"},n.map(function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)})))}),_=(a(41),function(e){var t=e.image,a=e.movieId,n=e.movieName,r=e.clickable;return c.a.createElement("div",{className:"rmdb-moviethumb"},r?c.a.createElement(m.b,{to:{pathname:"/".concat(a,", movieName: ").concat(n)}},c.a.createElement("img",{src:t,alt:"moviethumb"})):c.a.createElement("img",{src:t,alt:"moviethumb"}))}),j=(a(42),function(e){var t=e.text,a=e.onClick;return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:a},c.a.createElement("p",null,t))}),O=(a(43),function(){return c.a.createElement("div",{className:"loader"})}),w=(a(44),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchItems=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(p,"movie/popular?api_key=").concat(f,"&language=en-US&page=1"):"".concat(p,"search/movie?api_key=").concat(f,"&language=en-US&page=1&query=").concat(e),a.fetchItems(t)},a.loadMoreItems=function(){var e="";a.setState({loading:!0}),e=""===a.state.searchTerm?"".concat(p,"movie/popular?api_key=").concat(f,"&language=en-US&page=").concat(a.state.currentPage+1):"".concat(p,"search/movie?api_key=").concat(f,"&language=en-US&query=").concat(a.state.searchTerm,"&page=").concat(a.state.currentPage+1),a.fetchItems(e)},a.fetchItems=function(e){var t=a.state,n=t.movies,c=t.heroImage,r=t.searchTerm;fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({movies:[].concat(Object(u.a)(n),Object(u.a)(e.results)),heroImage:c||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages},function(){""===r&&sessionStorage.setItem("HomeState",JSON.stringify(a.state))})}).catch(function(e){return console.error("Error:",e)})},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){if(sessionStorage.getItem("HomeState")){var e=JSON.parse(sessionStorage.getItem("HomeState"));this.setState(Object(s.a)({},e))}else{this.setState({loading:!0});var t="".concat(p,"movie/popular?api_key=").concat(f,"&language=en-US&page=1");this.fetchItems(t)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(N,{image:"".concat(E).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.original_title,text:this.state.heroImage.overview}),c.a.createElement(I,{callback:this.searchItems})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(k,{header:this.state.searchTerm?"Search Result":"Popular Movies",loading:this.state.loading},this.state.movies.map(function(e,t){return c.a.createElement(_,{key:t,clickable:!0,image:e.poster_path?"".concat(E).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),this.state.loading?c.a.createElement(O,null):null,this.state.currentPage<this.state.totalPages&&!this.state.loading?c.a.createElement(j,{text:"Load More",onClick:this.loadMoreItems}):null))}}]),t}(n.Component)),x=(a(45),function(e){var t=e.movie;return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,t)))}),T=(a(46),function(e){var t=e.movie,a=e.directors;return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:t.backdrop_path?"url('".concat(E).concat("w1280").concat(t.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(_,{image:t.poster_path?"".concat(E).concat("w500").concat(t.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,t.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,t.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*t.vote_average}),c.a.createElement("p",{className:"rmdb-score"},t.vote_average)),a.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),a.map(function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)}),c.a.createElement(y.a,{className:"fa-film",name:"film",size:"5x"}))))}),M=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},P=(a(47),a(5)),C=a.n(P),D=function(e){var t=e.time,a=e.budget,n=e.revenue;return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(t))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",M(a))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",M(n)))))};D.propTpyes={time:C.a.number,budget:C.a.number,revenue:C.a.number};var R=D,U=(a(48),function(e){var t=e.actor;return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:t.profile_path?"".concat(E).concat("w154").concat(t.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},t.name),c.a.createElement("span",{className:"rmdb-actor-character"},t.character))}),J=(a(49),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(e){var t=a.props.match.params.movieId;fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(p,"movie/").concat(t,"/credits?api_key=").concat(f);fetch(e).then(function(e){return e.json()}).then(function(e){var n=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:n,loading:!1},function(){localStorage.setItem("".concat(t),JSON.stringify(a.state))})})})}).catch(function(e){return console.error("Error:",e)})},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;if(localStorage.getItem("".concat(e))){var t=JSON.parse(localStorage.getItem("".concat(e)));this.setState(Object(s.a)({},t))}else{this.setState({loading:!0});var a="".concat(p,"movie/").concat(e,"?api_key=").concat(f,"&language=en-US");this.fetchItems(a)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(x,{movie:this.props.location.movieName}),c.a.createElement(T,{movie:this.state.movie,directors:this.state.directors}),c.a.createElement(R,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.movie.revenue})):null,this.state.actors?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(k,{header:"Actors"},this.state.actors.map(function(e,t){return c.a.createElement(U,{key:t,actor:e})}))):null,this.state.actors||this.state.loading?null:c.a.createElement("h1",null,"No Movie Found!"),this.state.loading?c.a.createElement(O,null):null)}}]),t}(n.Component)),z=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Whoooooops, this page doesn't exist"))},A=function(){return c.a.createElement(m.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",component:w,exact:!0}),c.a.createElement(i.a,{path:"/:movieId",component:J,exact:!0}),c.a.createElement(i.a,{componenent:z}))))};o.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.922562b9.chunk.js.map
(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{26:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(4),r=n.n(c),o=n(5),s=n(6),i=n(7),b=n(11),d=n(10),j=n(0),u=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Good:",t]}),Object(j.jsxs)("p",{children:["Neutral:",n]}),Object(j.jsxs)("p",{children:["Bad:",a]}),Object(j.jsxs)("p",{children:["Total:",c]}),Object(j.jsxs)("p",{children:["Positive feedback:",r," %"]})]})},l=n(8),h=n.n(l),O=n(9),g=n.n(O),v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("button",{className:g.a.button,type:"button",name:e,onClick:n,children:e},h.a.generate())}))})},p=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:t}),n]})},k=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:t})})},x=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=100*e.state.good/t;return Math.round(n)},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(),o=Object.keys(this.state);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{title:"Please leave feedback",children:Object(j.jsx)(v,{options:o,onLeaveFeedback:this.onLeaveFeedback})}),0===c?Object(j.jsx)(k,{message:"No feedback given"}):Object(j.jsx)(p,{title:"Statistics",children:Object(j.jsx)(u,{good:t,neutral:n,bad:a,total:c,positivePercentage:r})})]})}}]),n}(a.Component);n(25);r.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={button:"FeedbackOptions_button__3kmpH"}}},[[26,1,2]]]);
//# sourceMappingURL=main.bfcad819.chunk.js.map
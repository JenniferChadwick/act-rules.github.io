(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});a(35),a(168);var r=a(0),n=a.n(r),l=a(155),s=a(154),i=a(170),c=a.n(i),u=a(169);t.default=function(e){var t=e.data,a=t.rules,r=t.allRules,i=t.site,m=a.edges.filter(function(e){var t=e.node.fields.fastmatterAttributes;return!!JSON.parse(t).accessibility_requirements}),o="Rules | "+i.siteMetadata.title,d=new c.a.Converter;return n.a.createElement(l.a,null,n.a.createElement(s.a,{title:o,keywords:i.siteMetadata.keywords}),n.a.createElement("section",{className:"page-container page-rules"},n.a.createElement("h1",null,"Rules (",m.length,")"),n.a.createElement("section",{className:"rules-listing"},m.map(function(e){var t=e.node,a=t.frontmatter,l=t.id,s=t.fields,i=a.name,c=a.description,m=a.authors,o=a.input_rules,f=s.slug,p=s.fastmatterAttributes,b=JSON.parse(p).accessibility_requirements;return n.a.createElement("article",{key:l},n.a.createElement("section",null,n.a.createElement("a",{href:f.replace("rules/","")},n.a.createElement("h2",null,i)),Object(u.a)(b),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.makeHtml(c)}})),Object(u.e)(o,r.edges,!0),Object(u.b)(m))}))))};var m="1338474945"}}]);
//# sourceMappingURL=component---src-pages-rules-js-1aa3ee9c93f5ad921800.js.map
(()=>{"use strict";function t(t,e,l){if(null!=e&&null!=e||(e=document.getElementById(t).dataset.level),localStorage.setItem(t,e),"off"==l)for(var a=1;e>=a;a++)document.getElementById(t+a).style.backgroundColor="rgba(255, 255, 255, 0)",document.getElementById(t+a).dataset.on="on";else for(a=5;e<a;a--)document.getElementById(t+a).style.backgroundColor="rgba(255, 255, 255, 1)",document.getElementById(t+a).dataset.on="off"}var l,a,o,n,g,d,c,m,s,r,f,i,u,y=localStorage.getItem("template");function I(t){document.getElementById("template-type").href="static/css/"+t+".css",localStorage.setItem("template",t),document.getElementById(t).className="template-button current"}function h(t,l,a){null!=t&&null!=t||(t=e.target.dataset.lvl),"1"==t&&(document.getElementById(l+"i").style.width="18px",document.getElementById(l+"i").style.height="18px",a.dataset.lvl="2"),"2"==t&&(document.getElementById(l+"i").style.width="28px",document.getElementById(l+"i").style.height="28px",a.dataset.lvl="3"),"3"==t&&(document.getElementById(l+"i").style.width="38px",document.getElementById(l+"i").style.height="38px",a.dataset.lvl="4"),"4"==t&&(document.getElementById(l+"i").style.width="48px",document.getElementById(l+"i").style.height="48px",a.dataset.lvl="5"),"5"==t&&(document.getElementById(l+"i").style.width="8px",document.getElementById(l+"i").style.height="8px",a.dataset.lvl="1")}I(null==y?"basic":y),l=localStorage.getItem("js"),a=localStorage.getItem("sq"),o=localStorage.getItem("ht"),n=localStorage.getItem("cs"),g=localStorage.getItem("gi"),d=localStorage.getItem("jq"),c=localStorage.getItem("re"),m=localStorage.getItem("nd"),s=localStorage.getItem("en"),r=localStorage.getItem("pl"),f=localStorage.getItem("ex"),i=localStorage.getItem("sa"),u=localStorage.getItem("ps"),t("js",l,"off"),t("sq",a,"off"),t("ht",o,"off"),t("cs",n,"off"),t("gi",g,"off"),t("jq",d,"off"),t("re",c,"off"),t("nd",m,"off"),t("pl",r,"off"),t("en",s,"off"),t("ex",f,"off"),t("sa",i,"off"),t("ps",u,"off");for(var E=document.getElementsByClassName("template-button"),v=document.getElementsByClassName("level"),p=document.getElementsByClassName("outer-dot"),B=document.getElementsByClassName("lang-level"),S=0;E.length>S;S++)E[S].addEventListener("click",(function(t){for(var e=0;E.length>e;e++)E[e].className="template-button";I(t.target.id)}));for(S=0;v.length>S;S++)v[S].addEventListener("click",(function(e){var l=e.target.id;t(l.charAt(0)+l.charAt(1),l.charAt(2),e.target.dataset.on)}));for(S=0;p.length>S;S++)p[S].addEventListener("click",(function(t){var e=t.target.id.charAt(0)+t.target.id.charAt(1);h(t.target.dataset.lvl,e,t.target)}));for(S=0;B.length>S;S++)B[S].addEventListener("click",(function(t){var e=t.target.id,l=e.charAt(0)+e.charAt(1),a=e.charAt(2),o=t.target.dataset.on;languageLevels(l,a,o)}))})();
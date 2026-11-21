var WA="919029508777";function wa(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
var P=[
[30,[500,1500,3000,4500],[0,0,250,250]],[50,[600,1800,3600,5100],[0,0,300,284]],
[75,[700,2100,4200,5500],[0,0,350,306]],[100,[800,2400,4800,5700],[0,0,400,317]],
[200,[1000,3000,6000,7500],[0,0,500,417]],[300,[1300,3900,7800,9750],[0,0,650,542]]];
var D=["1 Month","3 Months","6 Months + 6 Free","12 Months + 6 Free"],cur=3;
var tabs=document.getElementById("tabs"),g=document.getElementById("plans-grid");
function render(){
 tabs.innerHTML="";
 D.forEach(function(d,i){var b=document.createElement("button");b.type="button";b.textContent=d;b.className=i===cur?"on":"";b.setAttribute("role","tab");b.onclick=function(){cur=i;render()};tabs.appendChild(b)});
 g.innerHTML=P.map(function(p){
  return '<div class="card plan'+(p[0]===100?' hot':'')+'">'+(cur>1?'<span class="fr">6 FREE</span>':'')+'<div class="sp">'+p[0]+' <small>Mbps</small></div><div class="pr">₹'+p[1][cur].toLocaleString("en-IN")+'</div><div class="pm">'+(p[2][cur]?'Now ₹'+p[2][cur]+'/month':'Unlimited data')+'</div><a class="pw" target="_blank" rel="noopener" href="'+wa("Hello Yash Internet Services! I’m interested in the "+p[0]+" Mbps plan ("+D[cur]+"). My name is: ")+'">💬 Get on WhatsApp</a></div>';
 }).join("");
}
try{render()}catch(e){}
try{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)})}catch(e){document.querySelectorAll(".rv").forEach(function(el){el.classList.add("in")})}

try{var mn=document.getElementById("menu"),nv=document.getElementById("nav");
mn.onclick=function(){var o=nv.classList.toggle("open");mn.setAttribute("aria-expanded",o);mn.textContent=o?"✕":"☰"};
nv.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){nv.classList.remove("open");mn.textContent="☰"})});
var tt=document.getElementById("toast"),tm;
function toast(m){tt.textContent=m;tt.classList.add("show");clearTimeout(tm);tm=setTimeout(function(){tt.classList.remove("show")},2600)}
var LOGIN_URL=""; // paste your main customer portal link here, e.g. "https://yourportal.com/login"
document.getElementById("login").onclick=function(e){e.preventDefault();if(LOGIN_URL){location.href=LOGIN_URL}else{toast("🔐 Customer login coming soon!")}};
["dl","dl2"].forEach(function(i){document.getElementById(i).onclick=function(e){e.preventDefault();toast("📲 Our app is coming soon!")}});
var br=document.getElementById("bar");addEventListener("scroll",function(){var h=document.documentElement;br.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100||0)+"%"},{passive:true});
}catch(e){}
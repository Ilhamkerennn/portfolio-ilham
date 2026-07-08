// =========================================================
// PORTFOLIO ILHAM RINANDA
// Main Script
// =========================================================

// =======================
// MOBILE NAVBAR
// =======================

const navToggle = document.querySelector(".nav-toggle");
const navTabs = document.querySelector(".nav-tabs");

if (navToggle && navTabs) {
  navToggle.addEventListener("click", () => {
    navTabs.classList.toggle("open");
  });
}

// =======================
// REVEAL ANIMATION
// =======================

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

},
{
threshold:0.15
}
);

revealItems.forEach((item)=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .8s ease";

revealObserver.observe(item);

});

// =======================
// SKILL BAR
// =======================

document.querySelectorAll(".skill-fill").forEach((bar)=>{

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

bar.style.width = bar.dataset.level + "%";

}

});

});

observer.observe(bar);

});

// =======================
// COUNTER STATISTICS
// =======================

const stats = document.querySelectorAll(".stat-card h2");

stats.forEach((stat)=>{

const value = stat.innerText;

const number = parseFloat(value);

if(isNaN(number)) return;

let current = 0;

const increment = number/40;

const update=()=>{

current+=increment;

if(current<number){

stat.innerText=current.toFixed(1);

requestAnimationFrame(update);

}else{

stat.innerText=value;

}

}

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

update();

observer.disconnect();

}

})

})

observer.observe(stat);

});

// =======================
// PARALLAX FOTO
// =======================

const profile=document.querySelector(".profile-card");

if(profile){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

profile.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave",()=>{

profile.style.transform="rotateY(0deg) rotateX(0deg)";

});

}

// =======================
// ACTIVE NAVBAR
// =======================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-tabs a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});

// =======================
// CONTACT FORM
// =======================

const contactForm=document.querySelector("#contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name=document.querySelector("#name").value;

const message=document.querySelector("#message").value;

const wa="6282179446793";

const text=encodeURIComponent(

`Halo Ilham,

Perkenalkan saya ${name}.

${message}`

);

window.open(`https://wa.me/${wa}?text=${text}`,"_blank");

});

}

// =======================
// SMOOTH BUTTON
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(anchor.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
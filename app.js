const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const music=document.getElementById("music");

const main=document.getElementById("main");
const heartGame=document.getElementById("heartGame");
const pandaGame=document.getElementById("pandaGame");
const magic=document.getElementById("magic");
const gallery=document.getElementById("gallery");

const tease1=document.getElementById("tease1");
const tease2=document.getElementById("tease2");

const typeMessage=document.getElementById("typeMessage");
const showPhotos=document.getElementById("showPhotos");

let heartCount=0;

const teasing=[
"Arre Panda itna slow 😜",
"Catch karo Cutuu ❤️",
"Devesh is faster than you 😂",
"Come on Sitara ⭐"
];

// NO runs
noBtn.addEventListener("mouseover",()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"vw";
noBtn.style.top=Math.random()*80+"vh";
});

// YES clicked
yesBtn.addEventListener("click",()=>{
main.classList.add("hidden");
music.play();
startFireworks();
startHeartGame();
});

// ❤️ HEART GAME
function startHeartGame(){
heartGame.classList.remove("hidden");

let interval=setInterval(()=>{
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";
heart.style.left=Math.random()*90+"vw";

heart.addEventListener("click", ()=>{
heart.remove();
heartCount++;
tease1.innerText=teasing[Math.floor(Math.random()*teasing.length)];

if(heartCount>=5){
clearInterval(interval);
heartGame.classList.add("hidden");
startPandaGame();
}
};

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),3000);
},700);
}

// 🐼 PANDA GAME
function startPandaGame(){
pandaGame.classList.remove("hidden");

const cards=document.getElementById("cards");
cards.innerHTML="";

let pandaIndex=Math.floor(Math.random()*9);

for(let i=0;i<9;i++){
let card=document.createElement("div");
card.className="card";
card.innerHTML="❓";

card.onclick=()=>{
if(i===pandaIndex){
card.innerHTML="🐼";
tease2.innerText="Yayyy! You found yourself Cutuu 💖";
setTimeout(showMagic,1000);
}else{
card.innerHTML="❌";
tease2.innerText="Wrong Panda 😜 Try again!";
}
};

cards.appendChild(card);
}
}

// 💖 MAGIC
function showMagic(){
pandaGame.classList.add("hidden");
magic.classList.remove("hidden");
typeWriter();
heartsWithName();
}

// ⌨️ TYPEWRITER
const message=
"My Panda 🐼\nMy Sitara ⭐\nMy Cutuu 💖\n\nAshlesha ❤️\nI want every Valentine with YOU 💕";

let idx=0;
function typeWriter(){
if(idx<message.length){
typeMessage.innerHTML+=message.charAt(idx).replace("\n","<br>");
idx++;
setTimeout(typeWriter,80);
}
}

// 💖 HEARTS WITH NAME
function heartsWithName(){
setInterval(()=>{
let h=document.createElement("div");
h.innerHTML="💖 Ashu";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.top="100vh";
h.style.animation="rise 4s linear";
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
},300);
}

// 📸 Photos
showPhotos.addEventListener("click",()=>{
magic.classList.add("hidden");
gallery.classList.remove("hidden");
});

// 🎆 Fireworks (simple)
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];

function startFireworks(){
setInterval(()=>{
for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
dx:(Math.random()-0.5)*6,
dy:(Math.random()-0.5)*6,
life:80
});
}
},500);
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach((p,i)=>{
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fill();
p.x+=p.dx;
p.y+=p.dy;
p.life--;
if(p.life<=0)particles.splice(i,1);
});
requestAnimationFrame(animate);
}
animate();

// rise animation
const style=document.createElement("style");
style.innerHTML=`
@keyframes rise{
from{transform:translateY(0);opacity:1;}
to{transform:translateY(-120vh);opacity:0;}
}`;
document.head.appendChild(style);

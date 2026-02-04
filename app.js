const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const music=document.getElementById("music");

const main=document.getElementById("main");
const heartGame=document.getElementById("heartGame");
const pandaGame=document.getElementById("pandaGame");
const magic=document.getElementById("magic");
const gallery=document.getElementById("gallery");

const scoreEl=document.getElementById("score");
const timerEl=document.getElementById("timer");

const tease1=document.getElementById("tease1");
const tease2=document.getElementById("tease2");

const typeMessage=document.getElementById("typeMessage");
const showPhotos=document.getElementById("showPhotos");

const teasing=[
"Arre Panda itna slow 😜",
"Heart pakdo Cutuu ❤️",
"Devesh faster hai 😂",
"Come on Sitara ⭐"
];

// NO runs away
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

// ---------------- HEART GAME ----------------

let score=0;
let timeLeft=30;
let gameInterval,timerInterval;

function startHeartGame(){
heartGame.classList.remove("hidden");
score=0;
timeLeft=30;
updateHUD();

gameInterval=setInterval(spawnItem,700);

timerInterval=setInterval(()=>{
timeLeft--;
updateHUD();
if(timeLeft<=0){
clearInterval(gameInterval);
clearInterval(timerInterval);
heartGame.classList.add("hidden");
startPandaGame();
}
},1000);
}

function updateHUD(){
scoreEl.innerText="Score: "+score;
timerEl.innerText="Time: "+timeLeft;
}

function spawnItem(){
let isHeart=Math.random()<0.7;

if(isHeart){
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";
heart.style.left=Math.random()*90+"vw";

function catchHeart(){
heart.remove();
score++;
updateHUD();
tease1.innerText=teasing[Math.floor(Math.random()*teasing.length)];
}

heart.addEventListener("click",catchHeart);
heart.addEventListener("touchstart",catchHeart);

heartGame.appendChild(heart);
setTimeout(()=>heart.remove(),3000);

}else{
let bomb=document.createElement("img");
bomb.src="images/dev_bomb.png";
bomb.className="bomb";
bomb.style.left=Math.random()*90+"vw";

function hitBomb(){
bomb.remove();
score--;
updateHUD();
tease1.innerText="Ohooo Devesh mil gaya 😜";
}

bomb.addEventListener("click",hitBomb);
bomb.addEventListener("touchstart",hitBomb);

heartGame.appendChild(bomb);
setTimeout(()=>bomb.remove(),3000);
}
}

// ---------------- PANDA GAME ----------------

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
tease2.innerText="You found yourself Cutuu 💖";
setTimeout(showMagic,1000);
}else{
card.innerHTML="❌";
tease2.innerText="Wrong Panda 😜 Try again!";
}
};

cards.appendChild(card);
}
}

// ---------------- MAGIC ----------------

function showMagic(){
pandaGame.classList.add("hidden");
magic.classList.remove("hidden");
typeWriter();
heartsWithName();
}

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

// ---------------- PHOTOS ----------------

showPhotos.addEventListener("click",()=>{
magic.classList.add("hidden");
gallery.classList.remove("hidden");
loadPhotos();
});

function loadPhotos(){
gallery.innerHTML="";
for(let i=1;i<=15;i++){
let img=document.createElement("img");
img.src=`images/ashu${i}.jpg`;
gallery.appendChild(img);
}
}

// ---------------- FIREWORKS ----------------

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

// floating heart animation
const style=document.createElement("style");
style.innerHTML=`
@keyframes rise{
from{transform:translateY(0);opacity:1;}
to{transform:translateY(-120vh);opacity:0;}
}`;
document.head.appendChild(style);

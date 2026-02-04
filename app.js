const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const magic = document.getElementById("magic");
const gallery = document.getElementById("gallery");
const music = document.getElementById("music");
const showPhotos = document.getElementById("showPhotos");
const typeMessage = document.getElementById("typeMessage");

const message = 
"My Panda 🐼\n" +
"My Sitara ⭐\n" +
"My Cutuu 💖\n\n" +
"Ashlesha ❤️\n" +
"You are the most beautiful part of my life.\n" +
"I want every Valentine with YOU 💕";

// NO button runs away 😆
noBtn.addEventListener("mouseover", ()=>{
    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*80+"vw";
    noBtn.style.top=Math.random()*80+"vh";
});

// YES clicked
yesBtn.addEventListener("click", ()=>{
    main.classList.add("hidden");
    magic.classList.remove("hidden");
    music.play();

    typeWriter();
    hearts();
    startFireworks();
});

// Typewriter effect ⌨️
let index=0;
function typeWriter(){
    if(index<message.length){
        typeMessage.innerHTML += message.charAt(index).replace("\n","<br>");
        index++;
        setTimeout(typeWriter,80);
    }
}

// Show floating photos
showPhotos.addEventListener("click", ()=>{
    magic.classList.add("hidden");
    gallery.classList.remove("hidden");
});

// Hearts with her name 💖
function hearts(){
    setInterval(()=>{
        let heart=document.createElement("div");
        heart.innerHTML="💖 Ashu";
        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize="20px";
        heart.style.animation="rise 4s linear";
        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),4000);
    },300);
}

// Fireworks 🎆
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

function startFireworks(){
    setInterval(()=>{
        for(let i=0;i<100;i++){
            particles.push({
                x:Math.random()*canvas.width,
                y:Math.random()*canvas.height,
                dx:(Math.random()-0.5)*6,
                dy:(Math.random()-0.5)*6,
                life:100
            });
        }
    },600);
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

        if(p.life<=0) particles.splice(i,1);
    });

    requestAnimationFrame(animate);
}
animate();

// animation style
const style=document.createElement("style");
style.innerHTML=`
@keyframes rise{
from{transform:translateY(0); opacity:1;}
to{transform:translateY(-120vh); opacity:0;}
}`;
document.head.appendChild(style);

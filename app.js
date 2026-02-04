const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const magic = document.getElementById("magic");
const gallery = document.getElementById("gallery");
const showPhotos = document.getElementById("showPhotos");

// Move NO button (fun teasing 😆)
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 100;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES clicked 💖
yesBtn.addEventListener("click", () => {
    main.classList.add("hidden");
    magic.classList.remove("hidden");

    createHearts();
});

// Show photos 📸
showPhotos.addEventListener("click", () => {
    magic.classList.add("hidden");
    gallery.classList.remove("hidden");
});

// Floating hearts animation ❤️
function createHearts(){
    for(let i=0;i<40;i++){
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = Math.random()*30 + 20 + "px";
        heart.style.animation = "rise 3s linear";

        document.body.appendChild(heart);

        setTimeout(()=> heart.remove(),3000);
    }
}

// Add animation style
const style = document.createElement("style");
style.innerHTML = `
@keyframes rise{
    from{transform:translateY(0); opacity:1;}
    to{transform:translateY(-120vh); opacity:0;}
}`;
document.head.appendChild(style);

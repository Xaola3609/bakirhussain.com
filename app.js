/* TYPING EFFECT */
const words = ["Emergency Medicine", "Pediatrics", "Clinical Excellence"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];

    if (isDeleting) {
        document.getElementById("typing").textContent = currentWord.substring(0, j--);
    } else {
        document.getElementById("typing").textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 40 : 80);
}

type();

/* EXPAND CARDS */
function toggleCard(card) {
    card.classList.toggle("active");
}

/* FADE IN */
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(f => observer.observe(f));

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
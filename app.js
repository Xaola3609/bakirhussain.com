// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){ header.classList.add('scrolled'); }
  else{ header.classList.remove('scrolled'); }
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', ()=>{ navMenu.classList.toggle('active'); });

// Hero slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  currentSlide = n;
}

document.querySelector('.next').addEventListener('click', ()=> showSlide((currentSlide+1)%slides.length));
document.querySelector('.prev').addEventListener('click', ()=> showSlide((currentSlide-1+slides.length)%slides.length));
dots.forEach(dot => dot.addEventListener('click', ()=> showSlide(parseInt(dot.dataset.slide))));

// Auto slide
setInterval(()=> showSlide((currentSlide+1)%slides.length), 5000);

// Dynamic section switching
const sectionsContent = {
  top: `<section class="hero-slider">
    <div class="slide active">
      <img src="https://via.placeholder.com/1600x500?text=Slide+1" alt="Slide 1">
      <div class="overlay">Welcome to METAL GEAR</div>
    </div>
    <div class="slide">
      <img src="https://via.placeholder.com/1600x500?text=Slide+2" alt="Slide 2">
      <div class="overlay">Check out the latest releases</div>
    </div>
  </section>`,
  topics: `<section class="topics-grid">
    <article class="topic-card">
      <img src="https://via.placeholder.com/400x180?text=Topic+1" alt="Topic 1">
      <h3>METAL GEAR SOLID Δ: SNAKE EATER</h3>
      <p>Online mode "FOX HUNT" released!</p>
      <a href="#">Details</a>
    </article>
    <article class="topic-card">
      <img src="https://via.placeholder.com/400x180?text=Topic+2" alt="Topic 2">
      <h3>Trailer Released</h3>
      <p>Watch on official YouTube</p>
      <a href="#">Details</a>
    </article>
  </section>`,
  news: `<section class="topics-grid"><p>Latest news will appear here</p></section>`,
  history: `<section class="topics-grid"><p>Game history content</p></section>`,
  goods: `<section class="topics-grid"><p>Merchandise and goods</p></section>`
};

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e=>{
    e.preventDefault();
    const key = link.dataset.section;
    document.getElementById('main-content').innerHTML = sectionsContent[key];
  });
});
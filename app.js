// Header scroll/shrink
const header = document.getElementById('header');
window.addEventListener('scroll', ()=>{
  header.classList.toggle('scrolled', window.scrollY>50);
  header.classList.toggle('shrink', window.scrollY>50);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', ()=> navMenu.classList.toggle('active'));
document.addEventListener('click', e=>{
  if(!navMenu.contains(e.target) && !hamburger.contains(e.target)){
    navMenu.classList.remove('active');
  }
});

// Hero slider
let slides = document.querySelectorAll('.slide, .slide-video');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  const bg = slides[n].querySelector('.parallax-bg');
  if(bg) bg.style.transform = 'translateY(-20px)';
  currentSlide = n;
}
document.querySelector('.next').addEventListener('click', ()=> showSlide((currentSlide+1)%slides.length));
document.querySelector('.prev').addEventListener('click', ()=> showSlide((currentSlide-1+slides.length)%slides.length));
dots.forEach(dot=>dot.addEventListener('click', ()=> showSlide(parseInt(dot.dataset.slide))));
setInterval(()=> showSlide((currentSlide+1)%slides.length), 6000);

// Swipe support for mobile
let startX=0, endX=0;
const heroSlider = document.querySelector('.hero-slider.full');
heroSlider.addEventListener('touchstart', e=> startX = e.touches[0].clientX);
heroSlider.addEventListener('touchmove', e=> endX = e.touches[0].clientX);
heroSlider.addEventListener('touchend', ()=>{
  const diff = startX - endX;
  if(diff>50) showSlide((currentSlide+1)%slides.length);
  else if(diff<-50) showSlide((currentSlide-1+slides.length)%slides.length);
});

// Scroll-triggered section animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.2});
sections.forEach(section=>observer.observe(section));

// Dynamic content navigation
const mainContent = document.getElementById('main-content');
const sectionsContent = {
  top: `<section class="hero-slider full visible"> ... </section>`,
  topics: `<section class="topics-grid visible">
    <article class="topic-card">
      <img src="https://upload.wikimedia.org/wikipedia/en/8/82/Metal_Gear_Solid_3_Snake_Eater_Cover.jpg" alt="Topic 1">
      <h3>METAL GEAR SOLID Δ: SNAKE EATER</h3>
      <p>Online mode "FOX HUNT" released!</p>
      <a href="#">Details</a>
    </article>
    <article class="topic-card">
      <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/Metal_Gear_Solid_Cover.png" alt="Topic 2">
      <h3>Trailer Released</h3>
      <p>Watch on official YouTube</p>
      <a href="#">Details</a>
    </article>
  </section>`,
  news: `<section class="topics-grid visible"><p>Latest news will appear here</p></section>`,
  history: `<section class="topics-grid visible"><p>Game history content</p></section>`,
  goods: `<section class="topics-grid visible"><p>Merchandise and goods</p></section>`
};

document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const key = link.dataset.section;
    mainContent.style.opacity = 0;
    setTimeout(()=>{
      mainContent.innerHTML = sectionsContent[key] || `<section class="topics-grid visible"><p>Coming soon</p></section>`;
      mainContent.style.opacity = 1;
      // Re-observe new sections for scroll animations
      const newSections = mainContent.querySelectorAll('section');
      newSections.forEach(section=>observer.observe(section));
    },400);
  });
});
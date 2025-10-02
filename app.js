// Animate bullet points on hover
document.querySelectorAll('.entry').forEach(entry => {
  const bullets = entry.querySelectorAll('ul li');

  entry.addEventListener('mouseenter', () => {
    bullets.forEach((li, idx) => {
      li.style.opacity = '0';
      li.style.transform = 'translateX(-20px)';
      li.style.transition = `opacity 0.4s ${idx*0.1}s ease, transform 0.4s ${idx*0.1}s ease`;
      requestAnimationFrame(() => {
        li.style.opacity = '1';
        li.style.transform = 'translateX(0)';
      });
    });
  });

  entry.addEventListener('mouseleave', () => {
    bullets.forEach(li => {
      li.style.opacity = '';
      li.style.transform = '';
      li.style.transition = '';
    });
  });
});
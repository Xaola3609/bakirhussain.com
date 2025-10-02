document.querySelectorAll('.timeline-entry').forEach(entry => {
  entry.addEventListener('mouseenter', () => {
    const extra = entry.dataset.extra;
    if(extra){
      const tooltip = document.createElement('div');
      tooltip.className = 'timeline-tooltip';
      tooltip.innerText = extra;
      entry.appendChild(tooltip);
      setTimeout(()=>tooltip.classList.add('show'), 10);
    }
  });
  entry.addEventListener('mouseleave', () => {
    const tooltip = entry.querySelector('.timeline-tooltip');
    if(tooltip) tooltip.remove();
  });
});
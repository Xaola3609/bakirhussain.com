const panels = document.querySelectorAll(".panel");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

panels.forEach(panel => observer.observe(panel));
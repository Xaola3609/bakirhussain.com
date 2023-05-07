const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.Controls');
const sectBtn = document.querySelectorAll('.control-button');
const allSections = Array.from(document.querySelectorAll('.main-content'));

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-button');
      currentBtn[0].className = currentBtn[0].className.replace('active-button', '');
      this.className += ' active-button';
    });
  }
  // sections active
  allSections.forEach((section) => {
    section.addEventListener('click', (e) => {
      const id = e.target.parentNode.dataset.id;
      if (id) {
        sectBtns.forEach((btn) => {
          btn.classList.remove('active');
        });
        e.target.parentNode.classList.add('active');
        sections.forEach((section) => {
          section.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
      }
    });
  });
}

PageTransitions();
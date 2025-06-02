const arr = document.querySelectorAll('.faq-card');

for (const elem of arr) {
  const button = elem.querySelector('button');
  button.addEventListener('click', () => {
    const p = elem.querySelector('p');
    if (p.classList.contains('hidden')) {
      p.classList.remove('hidden');
    } else {
      p.classList.add('hidden');
    }
  })
  
}

document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in-section');
    const appearOptions = {
        threshold: 0.15
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
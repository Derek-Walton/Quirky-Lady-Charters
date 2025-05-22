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

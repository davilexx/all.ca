// textarea placeholder SAFARI SURRORT

const ta = document.querySelector('textarea');
const pp = document.querySelector('.dt-main__placeholder');
console.log(ta);
ta.addEventListener('input', () => {
  pp.classList.toggle('hidden', ta.value !== '');
});
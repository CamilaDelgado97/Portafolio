const nav = document.querySelector('nav ul');
const toggleBtn = document.createElement('div');
toggleBtn.classList.add('toggle-btn');
toggleBtn.innerHTML = '&#9776;';
document.querySelector('nav').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
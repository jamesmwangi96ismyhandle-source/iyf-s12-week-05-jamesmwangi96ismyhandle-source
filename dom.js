// Task 9.1 - Selection methods
const header = document.getElementById('main-header');
console.log('getElementById:', header);

const contents = document.getElementsByClassName('content');
console.log('getElementsByClassName:', contents);

const paragraphs = document.getElementsByTagName('p');
console.log('getElementsByTagName:', paragraphs);

const firstLink = document.querySelector('.nav-link');
console.log('querySelector:', firstLink);

const allLinks = document.querySelectorAll('.nav-link');
console.log('querySelectorAll:', allLinks);

const h1 = document.querySelector('h1');
const form = document.querySelector('#contact-form');
const emailInput = document.querySelector('#email');
const navItems = document.querySelectorAll('#nav-list li');
console.log('Practice selects:', h1, form, emailInput, navItems);

// Task 9.2 - Traversal
const nav = header.parentElement.querySelector('nav');
console.log('Header -> nav:', nav);
console.log('First link parent li:', firstLink.parentElement);
console.log('Article next sibling:', document.querySelector('article').nextElementSibling);
console.log('UL children:', document.querySelector('#nav-list').children);
console.log('Footer up to body:', document.querySelector('footer').parentElement.tagName);

// Task 9.3 - Text, HTML, attributes, styles
console.log('h1 textContent:', h1.textContent);
document.querySelector('article h2').textContent = 'Updated via textContent';

// Safe vs unsafe demo (commented to avoid wiping page)
// const userInput = `<img src="x" onerror="alert('hacked!')">`;
// document.querySelector('article').textContent = userInput; // safe

const container = document.querySelector('.container');
container.classList.add('highlight');

// Task 9.4 - Create, remove, clone
function addNavItem(text) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.className = 'nav-link';
  a.href = '#';
  a.textContent = text;
  li.appendChild(a);
  document.querySelector('#nav-list').appendChild(li);
}
addNavItem('Blog');

// Task 10.1 - Click counter
let count = 0;
const countSpan = document.getElementById('count');
document.getElementById('inc-btn').addEventListener('click', () => {
  count++;
  countSpan.textContent = count;
});
document.getElementById('dec-btn').addEventListener('click', () => {
  if (count > 0) count--;
  countSpan.textContent = count;
});
document.getElementById('reset-btn').addEventListener('click', () => {
  count = 0;
  countSpan.textContent = count;
});

// Task 10.2 - Event properties + keyboard
document.addEventListener('click', (event) => {
  console.log('Clicked:', event.target.tagName, event.type);
});
document.addEventListener('keydown', (event) => {
  console.log('Key:', event.key, event.code);
  if (event.key === 'Escape') form.reset();
});

// Task 10.3 - Delegation demo on nav
document.querySelector('#nav-list').addEventListener('click', (event) => {
  const li = event.target.closest('li');
  if (!li) return;
  console.log('Delegated nav click:', li.textContent.trim());
  event.preventDefault();
});

// Task 10.4 - Form validation
const nameInput = document.getElementById('name');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nameInput.value.trim().length < 2) {
    nameInput.classList.add('error');
    console.log('Name must be at least 2 characters');
    return;
  }
  nameInput.classList.remove('error');
  const data = Object.fromEntries(new FormData(form));
  console.log('Form data:', data);
  form.reset();
});

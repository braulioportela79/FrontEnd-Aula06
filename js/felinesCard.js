import { felines } from '../data/felines.js';

export default felines.forEach(e => {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    container.appendChild(card);
    card.classList.add('item');
    card.innerHTML = `
    <img src="./images/${e.image}" />
    <h2>${e.title}</h2>
    <p>${e.desc}</p>
    `;
});
const addBtn = document.querySelector('[data-modal-button]'); 
const closeBtn = document.querySelector('[data-modal-close]')
const modal = document.querySelector('[data-modal]');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');

// Showing Modal Window
addBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

// Closing Modal Window
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
})

// Closing Modal Window after clicking on space
modal.addEventListener('click', () => {
    modal.classList.add('hidden')
})

// Fix Problem when Modal Window will close even after clicking on window 
modal.querySelector('.modal-window').addEventListener('click', (event) => {
    event.stopPropagation();
})

// addBtn.addEventListener('click', () => {
//     console.log('click!');
    
// })
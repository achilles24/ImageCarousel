const container = document.querySelector('.card-content');
const cards = Array.from(document.querySelectorAll('.card'));

// cards.forEach(card => {
//     const clone = card.cloneNode(true);
//     container.appendChild(clone);
// });

container.addEventListener('mouseover', () => {
    document.querySelectorAll('.card').forEach(card => {
        card.style.animationPlayState = 'paused';
    })
    container.style.animationPlayState = 'paused';
})

container.addEventListener('mouseleave', () => {
    document.querySelectorAll('.card').forEach(card => {
        card.style.animationPlayState = 'running';
    })
    container.style.animationPlayState = 'running';
})

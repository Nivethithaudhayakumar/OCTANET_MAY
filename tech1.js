document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const newElement = document.createElement('button');
    newElement.textContent = 'Click me!';
    newElement.addEventListener('click', () => {
        mainContent.querySelector('p').textContent = 'You clicked the button!';
    });
    mainContent.appendChild(newElement);
});

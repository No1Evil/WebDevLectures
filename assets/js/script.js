// script.js

document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('animate');
    let position = 0;
    const interval = setInterval(frame, 1);

    function frame() {
        if (position >= 350) {
            clearInterval(interval);
            box.style.backgroundColor = 'red'
        } else {
            position++;
            box.style.top = position + 'px';
            box.style.left = position + 'px';
        }
    }
});

let clickCount = 0;

function onClick(event) {
    clickCount++;
    const button = event.target;
    button.textContent = `Clicked ${clickCount} times!`;
    let value = Math.random() < 0.5 ? 0 : 1;
    if (value == 1) {
        button.style.backgroundColor = 'red';
    } else {
        button.style.backgroundColor = 'blue';
    }
}

document.getElementById('button').addEventListener('click', onClick);
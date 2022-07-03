const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
    console.log('Button Clicked.');
    const randomColor = `rgb( ${random(255)}, ${random(255)}, ${random(255)})`;
    console.log('Random Color is: ' + randomColor);
    document.body.style.backgroundColor = randomColor;
})
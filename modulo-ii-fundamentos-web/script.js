'use strict'

const input = document.getElementById('input');
const btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function(e) {
    console.log('works');
});

input.addEventListener('input', function(e) {
    e.preventDefault();
    // if(input.textContent.length === 0) {
    //     console.log('works');
    // }
    console.log('works');
    btn.disabled = false;
    btn.style.backgroundColor = 'hsla(208, 83%, 73%, 0.965)';
});

input.addEventListener('emptied', function(e) {
console.log('w');
})
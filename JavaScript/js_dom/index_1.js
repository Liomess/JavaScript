
// THE EVENT OBJECT
// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(babbar) {
//     console.log(babbar);
// })







// PREVENT DEFAULT ACTION
// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('maza aaya, accha laga');
// });







// AN OPTIMISED EXAMPLE
// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para ' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);






// AN OPTIMISED EXAMPLE
let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});
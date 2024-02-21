// ADDING 100 PARA
// const t1 = performance.now();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took " + (t2-t1) + " ms");     // 100 REFLOW + 100 REPAINT











// OPTIMISING THE ABOVE CODE 
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is Para ' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took " + (t4-t3) + " ms");











// DOCUMENT FRAGMENT
// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); // 1 Reflow + 1 Repaint


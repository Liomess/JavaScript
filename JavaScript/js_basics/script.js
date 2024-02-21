
// an array of objects
let courses=[
    {no:1, naam:'ayush'},
    {no:2, naam:'simmu'}
];
console.log(courses);



// callback function
let a= courses.find(function(n) {
    return n.naam === 'simmu';
});
console.log(a)





// Arrow function
// (makes callback function concise)

//   let a= courses.find(n => n.naam === 'simmu');    





// filter
// let numbers = [1,2,-1,-4];
// let filtered = numbers.filter(value => value >= 0);
// console.log(filtered);







// map
// let numbers = [7,8,9,10];
// console.log(numbers);
// let items = numbers.map (value => 'student_no' + value);
// console.log(items);



let numbers = [1,2,-6,-9];
let filtered = numbers.filter(value => value >= 0);
let items = filtered.map(function(num) {
    let obj = {value: num};
    return obj;
    });
console.log(items);



//equivalent to above
// let items = numbers
//                 .filter(value => value >= 0)
//                 .map (num => {value: num});






// arguments
function sum(a, b) {
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}


let ans = sum (1,2,3,4,5,6);
console.log(ans);





// Getter and setter
// getter and setter must get defined inside an object.
let person = {
    fName: 'Love',
    lName: 'Babbar',


    // get is a keyword for getter
    // set is a keyword for setter
    // fullName here is not a function


    get fullName() {
        return `${person.fName} ${person.lName}`;
    },

    set fullName (value) {
        let parts = value.split(' ');
        this.fName = parts [0];
        this.lName = parts [1];
    }
};

// not person.fullName() as it was not declared as a function
console.log(person.fullName)

person.fullName = 'rahul kumar';
console.log(person.fullName)








// Error Handling

// let person = {
//     fName: 'Love',
//     lName: 'Babbar',

//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName (value) {

//         if (typeof(value) !== String){
//             throw new Error('another custom error message');
//         }

//         let parts = value.split(' ');
//         this.fName = parts [0];
//         this.lName = parts [1];
//     }
// };


// try{
//     person.fullName = 1;
// }

// catch(e){
//     // alert('custom error message');
//     alert(e);
// }








// Reducing an array

// let arr = [1,2,3,4];


// sum of an array

// let total = 0;
// for(let value of arr)
//      total = total + value;
// console.log(total);


// using reduce method

// let totalSum = arr. reduce ( (accumulator, currentValue) => accumulator + currentValue,0);
// console.log("PRINTING TOTAL SUM: ")
// console.log(totalSum);
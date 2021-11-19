// function runProgram(input) {
//   let inp = input.trim().split("\n");
//   let Mainstr = inp[0].trim();
//   let str = inp[1].trim();

//   let sum = 0;
//   let x = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < Mainstr.length; j++) {
//       if (str[i] === Mainstr[j]) {
//         sum = sum + Math.abs(x - j);
//         x = j;
//       }
//     }
//   }
//   console.log(sum);
// }
// if (process.env.USERNAME === "Asus") {
//   runProgram(`pqrstuvwxyzabcdefghijklmno
//       hello`);
// }
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });

// process.on("SIGINT", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
//   process.exit(0);
// });




// var a = 10 , b = 15 ,cf = 0

// while(b!=0){
//   cf=b;
//   b=a%b;
//   a=cf;
// }

// console.log(cf)

// let f1=[]
// let count = 0
// for(let i=0;i<a;i++){

//     if(a%i===0){
//       if(b%i===0){
//         count++
//         console.log(i)
//       }
//     }
// }

// console.log(count)


// let multiply = function (x, y) {
//     console.log(x * y);
// }

//It will behave  exactly as line no 77 
// let multiplyby2 = function (y) {
//     let x = 2;
//     console.log(x * y);
// }

// let multiplyby2 = multiply.bind(this, 2)
// multiplyby2(5)

// let multiplyby3 = multiply.bind(this, 3)
// multiplyby3(8)



// let sum = (a)=> {
//     return (b)=> {
//        return b?sum(a+b):a
//     }
// }


// console.log(sum(10)(2)(3)(4)())



//currying happens in first class function 
// function multiply(a, b) {
//     return a * b;
// }


// function currying(fn) {
//     return function (a) {
//         return function (b) {
//             return fn(a, b);
//         }
//     }
// }

// var curriedMultiply = currying(multiply);

// console.log(multiply(4, 3)); // Returns 12



//console.log(curriedMultiply(4)(3))


// function outer() {
//     var x = 45;

//   function inner() {
//         return x+1
//     }
// return inner()
   
// }


//console.log(x)

// console.log(outer())


// var a = 56;
// var a = 78;



// let b = 34;
//  b = 37;


// const a = 45;

// const a = 78;

// console.log(c)
// console.log(b)

// console.log(a)

//Javascript oops concept 

/*
const s1 = "Hello";


console.log(typeof(s1));//String

const s2 = new String("Hello")


console.log(typeof (s2))// object;


//Object literals : -------

const book1 = {
    title: "Book one",
    author: "john Doe",
    year: "2013",
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: "Book two",
    author: "king Doe",
    year: "2015",
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};


console.log(book1.getSummary())
console.log(book2.getSummary())

//How we extract the all values of the object : ---------

console.log(Object.values(book2))  // [ 'Book two', 'king Doe', '2015', [Function: getSummary] ]


//How we extract the all  key in object : -------

console.log(Object.keys(book2)) // [ 'title', 'author', 'year', 'getSummary' ]


//Constructor function to create an object: -------

function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary= function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}


const book1 = new Book("Book one","Jhon Doe","2013")
const book2 = new Book("Book two", "Jane Doe", "2016")


console.log(book1.getSummary()) // we are calling get summary here;



//Prototypes:----

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    }


//getSummary : ---

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}


//getAge 

Book.prototype.getAge = function () {
    const year = new Date().getFullYear() - this.year;
    return `${this.title} is ${year} years old`;
}

Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book("Book one", "Jhon Doe", "2013")
const book2 = new Book("Book two", "Jane Doe", "2016")


console.log(book1.getSummary()) //  Book one was written by Jhon Doe in 2013
console.log(book1)

//console.log(book2.getSummary())// Book two was written by Jane Doe in 2016


console.log(book2);

book2.revise("2019")

console.log(book2);





//Inheritance :-----

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}


//get summary-----------

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}



//We have another constructor function  to create object : -----

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);  // here this refers to book object : ----
    this.month = month;
}


//Inherit Prototype: ------

Magazine.prototype = Object.create(Book.prototype)


const mag1 = new Magazine("mag One", 'john Doe', '2018', 'jan');

//Use Magazine constructor: ---------

Magazine.prototype.constructor = Magazine;

console.log(mag1)
console.log(mag1.getSummary())



//Object.create Method() to create of object : ------- 

//Object of protos : -----

const bookProtos = {
    getSummary:  function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },

    getAge : function () {
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old`;
    }


}



//Create Object


const book1 = Object.create(bookProtos);
book1.title = 'Book one ';
book1.author = 'Jhon Doe';
book1.year = '2013';


console.log(book1)




//Classes in javascript : -----


class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old`;
    }

    getrevise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    //Above all the are instance Method : ----

    static topBookStore() {
        return 'kushwaha pustak bhandar';
    }
}

const book1 = new Book("book one ","john Doe","2013")

// console.log(book1)

// book1.getrevise('2020');

// console.log(book1);

//book1.topBookStore() //typeerror :---  book1.topBookStore is not a function


console.log(Book.topBookStore())



//Subclassess: -----------------



class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}


//Magazine subclass 


class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}



const mag1 = new Magazine("Mag1", "john Doe", "2019", "jan");


console.log(mag1.getSummary());

*/


// let Student = {
//     name: "Lisa",
//     age: 24,
//     marks: 78.9,
//     display() {
//         console.log("Name:", this.name,"marks",this.marks);
//     }
// };

// // create object from Student prototype
// let std1 = Object.create(Student);

// console.log(std1)

// std1.name = "Sheeran";

// std1.marks = 89.00;

// (std1.display())

// console.log(std1)
// // std1.display();

// Output: Name: Sheeran;



//Ojcet with same properties in both object when we merge using spread oprator we can get singal object as output 

// let obj1 = {
//     name: "Amit",
//     age:21
// }

// let obj2 = {
//     name: "Amit",
//     age: 21
// }


// let obj = { ...obj1, ...obj2 }
// console.log(obj) //{name:"Amit",age:21}



//Object destructuring  By using this  we can extract the value of the properties: ----

// let obj1 = {
//     name: "Amit",
//     age:21
// }

// let { name, age } = obj1   // here we can't pass any other key name   to extract the value 

// console.log(name, age)



// //Array destructuring 
// let arr = [1, 2, 3]

// let [a, b, c] = arr;

// console.log(a,b,c)



//If we merge object using spread operator: -------


//Key will not be the same in object if we  spreading two  object  in one : ---

// let obj1 = {
//     name: "Amit",
//     age:21
// }

// let obj2 = {
//     jobTitle: 'JavaScript Developer',
//     location: 'USA'
// }


// let obj = {...obj1,...obj2 }
// console.log(obj) //{name:"Amit",age:21}


// //Merging to object using Object.assign();
// let newobj = Object.assign(obj1, obj2);

// console.log(newobj);

//Both the spread operator(...) and Object.assign() method perform a shallow merge.

//Example of shallow merge:----

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     ssn: '123-456-2356',
//     contact: {
//         phone: '408-989-8745',
//         email: 'john.doe@example.com'
//     }
// };


// let job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'USA'
// };

// let employee = { ...person, ...job };

// console.log(employee.contact === person.contact);

//In this example, the person object has the contact property that references to an object. After merging, 
//the person and employee object have the contact property that reference to the same object.



// console.log("type of null is",typeof (null))
// console.log("type of undefined is ",typeof(undefined))
// console.log("type of nan is",typeof(NaN))
// console.log("type of function is", typeof (Object));



let arr = [1, 2, 3, [4, 5, [6, 7]], 8, [9, [10, 11]]];

// let flatArray = arr.reduce((acc, curVal) => {
//     return acc.concat(curVal)
// }, []);


// console.log(flatArray)


// console.log(arr.flat())


// function flatarr(arr) {
//     let flattenarr = [];

//     for (let i = 0; i < arr.length; i++){

//         console.log(arr[i])

//         if (typeof (arr[i]) === Number) {
//             flattenarr.push(arr[i])
//         }
//         else {
           
//            flattenarr.push(...flatarr(arr[i]))
//         }
//         return flattenarr
//     }
// }


// function flatten(arr) {
//     var flat = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] instanceof Array) {
//             flat.push(flatten(arr[i]));
//         }
//         flat.push(arr[i]);
//     }
//     return flat;
// }


// console.log(flatarr(arr))


// function flatten(arr) {
//     const flat = [];

//     arr.forEach(item => {

//         console.log(Array.isArray(item));

//         if (Array.isArray(item)) {
//             flat.push(...flatten(item));
//         } else {
//             flat.push(item);
//         }
//     });

//     return flat;
// }

// function flatten(arr) {
//     return arr.flatMap(el => {
//         if (Array.isArray(el)) {
//             return flatten(el);
//         } else {
//             return el;
//         }
//     });
// }

console.log(flatten(arr))
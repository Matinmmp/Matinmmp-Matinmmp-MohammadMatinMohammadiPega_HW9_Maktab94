// function test(num = 1) {
//     console.log(typeof num)
//     console.log(num);
// }

// test();             //number
// test(undefined);    //number
// test('');           //string
// test(null);         //object




//  2
// function PassbyReference(obj) {
//     let tmp = obj.a;
//     obj.a = obj.b;
//     obj.b = tmp;
//     console.log(`Inside Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);
// }

// let obj = { a: 10, b: 20 };

// console.log(`Before calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);

// PassbyReference(obj);

// console.log(`After calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);



// function PassbyReference(obj) {
//     let tmp = obj.a;
//     obj.a = obj.b;
//     obj.b = tmp;
//     console.log(`Inside Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);
// }

// let obj = { a: 10, b: 20 };

// console.log(`Before calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);

// PassbyReference({...obj});

// console.log(`After calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);




// 3


// function spy(func) {
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }
//     wrapper.calls = [];
//     return wrapper;
// }

// Example:
// function work(a, b) {
//     alert(a + b);
// }
// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//     alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }





// 4


// function delay(f,ms){
//     return function(x){
//         setTimeout(()=> f(x),ms)
//     }
// }

// function f(x) {
//     alert(x);
// }
// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 5500);

// f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 1500ms



// 5

/* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// const inArray = arr => item => arr.includes(item);

// const inBetween = (a, b) => item => item >= a && item <= b;

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
// alert(arr.filter(inArray([1, 2, 10]))); // 1,2





// 6
// function sum(a) {
//     return function (b){
//         return a + b;
//     }
// }

// console.log(sum(1)(2));
// console.log(sum(1)(6));


// const sum = a => b => a + b;
// console.log(sum(1)(2));
// console.log(sum(1)(6));

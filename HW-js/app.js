function test(num = 1) {
    console.log(typeof num)
    console.log(num);
}

test();             //number
test(undefined);    //number
test('');           //string
test(null);         //object
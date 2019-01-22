/**@file
 * @author wangxitong
*/

/* function foo() {
    let a = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}
let baz = foo();
baz(); */

/* function foo() {
    console.log(this.a);
}
function doFoo(fun) {
    fun();
}
var obj = {
    a: 2,
    foo: foo
};
var a = 'adsfadsfasdf';
doFoo(obj.foo); */

function run(input) {
    if (typeof input !== 'string') {
        return false;
    }
    return input.split('').reverse().join('') === input;
}
let aaa = 'wangxitong';
console.log(run(aaa));
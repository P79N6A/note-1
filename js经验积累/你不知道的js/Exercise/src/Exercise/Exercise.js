/**
 * @file Exercise
 * @author apple(apple@baidu.com)
 */

import './index.styl';
// 注意: template内section标签及其class请保留, 它用作namespace!!
export default {
    template: `
        <section class="Exercise">
            
        </section>
    `,
    attached() {
        // 闭包   当函数可以记住并访问当前词法作用域的时候就产生了闭包
        // bar() 依然持有对该作用的域的引用  这个引用就叫闭包
        /* function foo() {
            let a = 3;
            function bar() {
                console.log(a);
            }
            return bar;
        }
        let baz = foo();
        baz(); */

        // 无论用何种方式对函数类型的值进行传递，当函数在别处被调用时都可以观察到闭包
        /* function foo() {
            let a = 1;
            function bar() {
                console.log(a);
            }
            baz(bar);
        }
        function baz(fn) {
            fn();
        }
        foo(); */

        // wait 执行1000ms后 内部作用域并不会消失
        /* function wait(msg) {
            console.log(msg + '   first');
            setTimeout(() => {
                console.log(msg + '    second');
            }, 1000);
        }
        wait('hello'); */

        // 其实只有一个词法作用域
        /* for (var i = 1; i <= 5; i++) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        } */

        // 的确拥有更多的词法作用域  每个延迟函数都会讲IIFE在每次迭代中创建的作用域封闭起来
        // 但是作用域是空的  需要包含实质内容才能被利用
        /* for (var i = 1; i <= 5; i++) {
            (function () {
                setTimeout(() => {
                    console.log(i);
                }, i * 1000);
            })();
        } */

        /* for (var i = 1; i <= 5; i++) {
            (function (i) {
                var j = i;
                setTimeout(() => {
                    console.log(j);
                }, i * 1000);
            })(i);
        } */

        /* for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        } */

        // coolModule是一个独立的模块创建器 可以被任意调用多次  每次调用都会创建一个新的模块实例
        /* function coolModule(params) {
            let something = 'something cool';
            let another = [1, 2, 3];
            function doSomething(a) {
                console.log(something + a);
            }
            function doAnother() {
                console.log(another.join('!'));
            }
            return {
                doSomething: doSomething,
                doAnother: doAnother
            };
        }
        let foo = coolModule();
        foo.doAnother();
        foo.doSomething('this is something'); */

        // 单例模式
        /* let foo = (function coolModule() {
            let arr = [1, 2, 3];
            function doSomething(data) {
                console.log(data);
            }
            function another() {
                console.log(arr.join('~'));
            }
            return {
                doSomething: doSomething,
                another: another
            };
        })();
        foo.doSomething('asdfasdf');
        foo.another(); */

        /* function coolModule(data) {
            function doSomething() {
                console.log(data);
            }
            return {
                identify: doSomething
            };
        }
        let foo1 = coolModule('foo1');
        let foo2 = coolModule('foo2');
        foo1.identify();
        foo2.identify(); */

        // 在模块实例的内部保留对公共API对象的内部引用，可以从内部对模块实例进行修改，包括添加或删除方法和属性，以及修改对应值
        /* function coolModule(data) {
            let publicAPI;
            function change() {
                // 修改公共API
                publicAPI.identify = identify2;
            }
            function identify1() {
                console.log(data);
            }
            function identify2() {
                console.log(data.toUpperCase());
            }
            publicAPI = {
                identify: identify1,
                change: change
            };
            return publicAPI;
        }
        let foo = coolModule('foo first');
        foo.identify();
        foo.change();
        foo.identify(); */

        // 动态作用域 （js不具有动态作用域）
        /* function foo() {
            console.log(a);   // 2
        }
        function bar() {
            var a = 3;
            foo();
        }
        var a = 2;
        bar(); */
        // 如果js具有动态作用域的话理论上应该输出3
        // 因为当foo()无法找到a的变量引用时，会顺着调用栈在调用foo()的地方查找a  而不是在嵌套的词法作用域链中向上查找。
    }
};

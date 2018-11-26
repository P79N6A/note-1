/**
 * @file This
 * @author apple(apple@baidu.com)
 */

import './index.styl';
// 注意: template内section标签及其class请保留, 它用作namespace!!
export default {
    template: `
        <section class="This">
            <div class="grid-wrap">
                <div class="grid-item" s-for="item,index in gridArr">{{item.name}}</div>
            </div>
        </section>
    `,
    initData() {
        return {
            gridArr: [
                {
                    name: '1',
                    age: 11
                },
                {
                    name: '2',
                    age: 22
                },
                {
                    name: '3',
                    age: 33
                },
                {
                    name: '4',
                    age: 44
                },
                {
                    name: '5',
                    age: 11
                },
                {
                    name: '6',
                    age: 22
                },
                {
                    name: '7',
                    age: 33
                },
                {
                    name: '8',
                    age: 44
                },
                {
                    name: '9',
                    age: 44
                }
            ]
        };
    },
    attached() {
        // this
        /* function identify() {
            return this.name.toUpperCase();
        }
        function speak() {
            let greeting = 'hello, I am ' + identify.call(this);
            console.log(greeting);
        }
        let me = {
            name: 'wxt'
        };
        let you = {
            name: 'aaaaaa'
        };
        identify.call(me);
        identify.call(you);
        speak.call(me);
        speak.call(you); */

        // 调用栈  this实际上是在函数被调用时发生的绑定，他指向什么完全取决于函数在哪里被调用
        /* function bar() {
            console.log('bar');
            baz();
        }
        function baz() {
            console.log('baz');
            foo();
        }
        function foo() {
            console.log('foo');
        }
        bar(); */

        // 隐式丢失
        /* function foo() {
            console.log(this.a);
        }
        function doFoo(fn) {
            fn();
        }
        var obj = {
            a: 2,
            foo: foo
        };
        var a = 'adsfadsfasdf';
        doFoo(obj.foo); */

        // 显示绑定  call  apply
        /* function foo() {
            console.log(this.a);
        }
        let obj = {
            a: 222
        };
        foo.call(obj); */

        // 硬绑定
        /* function foo() {
            console.log(this.a);
        }
        let obj = {
            a: 2
        };
        function bar() {
            foo.call(obj);
        }
        bar();
        setTimeout(() => {
            bar();
        }, 1000); */

        /* function foo(something) {
            console.log(this.a, something);
            return this.a + something;
        }
        let obj = {
            a: 2
        };
        let bar = function () {
            return foo.apply(obj, arguments);
        };
        let b = bar(3);
        console.log(b); */

        /* function foo(something) {
            console.log(this.a, something);
        }
        let obj = {
            a: 2
        };
        let bar = foo.bind(obj);
        let b = bar(3);
        console.log(b); */
    }
};

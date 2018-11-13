/**
 * @file Exercise
 * @author apple(apple@baidu.com)
 */

import './index.styl';
// 注意: template内section标签及其class请保留, 它用作namespace!!
export default {
    template: `
        <section class="Exercise">
            <div
                class="btn"
                s-for="item, index in divList"
                on-click="btnClick('master', index+1)">
                {{index}}--{{item.text}}
            </div>
        </section>
    `,
    initData() {
        return {
            configList: [],
            configListTwo: [],
            configListThree: [],
            configListFour: [],
            divList: [
                {
                    name: 'a',
                    age: '1',
                    text: 't1'
                },
                {
                    name: 'b',
                    age: '2',
                    text: 't2'
                },
                {
                    name: 'c',
                    age: '3',
                    text: 't3'
                },
                {
                    name: 'd',
                    age: '4',
                    text: 't4'
                },
                {
                    name: 'e',
                    age: '5',
                    text: 't5'
                },
                {
                    name: 'f',
                    age: '6',
                    text: 't6'
                },
                {
                    name: 'f',
                    age: '6',
                    text: 't6'
                },
                {
                    name: 'f',
                    age: '6',
                    text: 't6'
                },
                {
                    name: 'f',
                    age: '6',
                    text: 't6'
                },
                {
                    name: 'f',
                    age: '6',
                    text: 't6'
                },
                {
                    name: 'f',
                    age: '6',
                    text: 't6'
                },
                {
                    name: 'f',
                    age: '6',
                    text: 't6'
                },
            ]
        };
    },
    attached() {
        const configList = new Map([
            [1, ['oneLog', 'onePage']],
            [2, ['twoLog', 'twoPage']],
            [3, ['twoLog', 'twoPage']],
            [4, ['threeLog', 'threePage']],
            [5, ['fourLog', 'fourPage']],
            ['default', ['defaultLog', 'defaultPage']]
        ]);
        const configListTwo = new Map([
            ['guest_1', () => { console.log(1); }],

            ['guest_2', () => { console.log(2); }],

            ['guest_3', () => { console.log(3); }],

            ['guest_4', () => { console.log(5); }],

            ['guest_5', () => { console.log(5); }],

            ['master_1', () => { console.log('a'); }],

            ['master_2', () => { console.log('b'); }],

            ['master_3', () => { console.log('c'); }],

            ['master_4', () => { console.log('d'); }],

            ['master_5', () => { console.log('e'); }],

            ['default', () => { console.log('default'); }]
        ]);
        const configListThree = new Map([

            [{

                identity: 'master',

                status: 1

            }, () => { console.log(1); }],

            [{

                identity: 'master',

                status: 2

            }, () => { console.log(2); }]

        ]);
        const configListFour = new Map([

            [/^master_[1-4]$/, this.functionA],

            [/^master_5$/, this.functionB],

            [/^master_[6-9]|([1-9]\d+)$/, this.functionC]

        ]);
        this.data.set('configList', configList);
        this.data.set('configListTwo', configListTwo);
        this.data.set('configListThree', configListThree);
        this.data.set('configListFour', configListFour);
    },
    btnClick(identity, index) {
        // const configList = this.data.get('configList');
        // let action = configList.get(index) || configList.get('default');
        // this.sendLog(action[0]);
        // this.jumpTo(action[1]);

        // const configListTwo = this.data.get('configListTwo');
        // let action = configListTwo.get(`${identity}_${index}`) || configListTwo.get('default');
        // action.call(this);

        // const configListThree = this.data.get('configListThree');
        // let action = [...configListThree].filter(([key, value]) => (key.identity == identity && key.status == index));
        // action.forEach(([key, value]) => value.call(this));

        const configListFour = this.data.get('configListFour');
        let action = [...configListFour].filter(([key, value]) => (key.test(`${identity}_${index}`)));
        action.forEach(([key, value]) => value.call(this));
    },
    sendLog(msg) {
        console.log(msg);
    },
    jumpTo(url) {
        console.log('will jump to ' + url);
    },
    functionA() {
        console.log('aaa');
    },
    functionB() {
        console.log('bbb');
    },
    functionC() {
        console.log('default');
    }
};

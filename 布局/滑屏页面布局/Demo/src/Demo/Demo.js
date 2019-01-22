/**
 * @file Demo
 * @author apple(apple@baidu.com)
 */

import './index.styl';
// 注意: template内section标签及其class请保留, 它用作namespace!!
export default {
    template: `
        <section class="Demo">
            <div class="wrap">
                <div class="container">
                    <div class="page" s-for="item, index in divList">{{item.name}}</div>
                </div>
            </div>
            <div class="wrap2"></div>
        </section>
    `,
    initData() {
        return {
            divList: [
                {
                    name: 'page1'
                },
                {
                    name: 'page2'
                },
                {
                    name: 'page3'
                },
                {
                    name: 'page4'
                }
            ]
        }
    }
};

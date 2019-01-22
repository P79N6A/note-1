/**
 * @file 预览入口文件
 * @author X-Jray(z.xuanjian@gmail.com)
*/

/* eslint-disable */
import oapAppEntry from '@baidu/oap-app-entry';
import Demo from 'SRC_COMPONENT/Demo';

export default oapAppEntry({
    template: `
        <section>
            <san-demo widgetId="w1" props="{{widgetProps.w1}}"></san-demo>
        </section>
    `,
    initData() {
/* TO BE REPLACED */
        return {"widgetStatus":{"w1":true},"widgetLogs":{"w1":{}},"widgetEvents":{"w1":{}},"widgetDatas":{"w1":{}},"widgetProps":{"w1":{}}};
/* TO BE REPLACED */
    },
    components: {
        'san-demo': Demo.widget
    }
}, san, false);

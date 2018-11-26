/**
 * @file 预览入口文件
 * @author X-Jray(z.xuanjian@gmail.com)
*/

/* eslint-disable */
import oapAppEntry from '@baidu/oap-app-entry';
import This from 'SRC_COMPONENT/This';

export default oapAppEntry({
    template: `
        <section>
            <san-this widgetId="w1" props="{{widgetProps.w1}}"></san-this>
        </section>
    `,
    initData() {
/* TO BE REPLACED */
        return {"widgetStatus":{"w1":true},"widgetLogs":{"w1":{}},"widgetEvents":{"w1":{}},"widgetDatas":{"w1":{}},"widgetProps":{"w1":{}}};
/* TO BE REPLACED */
    },
    components: {
        'san-this': This.widget
    }
}, san, false);

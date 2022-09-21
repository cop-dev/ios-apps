import {createApp} from 'vue';
import App from './App.vue';
import './style/common.less'
import {router} from './router';
import stream from './http';
import VueMixin from './mixins/VueMixin';

const app = createApp(App);
app.use(router);
app.mixin(VueMixin);
app.config.globalProperties.$http = stream;
app.mount('#app');

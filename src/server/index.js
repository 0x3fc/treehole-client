import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

/* the backend address */
Vue.http.options.root = 'http://localhost:8000'; /* local dev */

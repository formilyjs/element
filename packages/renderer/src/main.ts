import './styles.less'
import Vue from 'vue'
import App from './app.vue'

import VueCompositionAPI from '@vue/composition-api'
import WidgetsInstaller from './widgets'

Vue.config.silent = true

Vue.use(VueCompositionAPI)
Vue.use(WidgetsInstaller)

new Vue({
  render: (h) => h(App),
}).$mount('#root')

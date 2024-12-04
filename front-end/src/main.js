import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'semantic-ui-css/semantic.css'

Vue.config.productionTip = false

new Vue({ // create app vue instance
  router, // use router for the app
  render: h => h(App), // render app view
}).$mount('#app')

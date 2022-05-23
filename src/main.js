import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'flag-icons/sass/flag-icons.scss' // Country Icons

/* Fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* Icons */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
/* Icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faMagnifyingGlass)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

import LangFlag from 'vue-lang-code-flags'
Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
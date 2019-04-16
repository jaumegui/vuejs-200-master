import Vue from 'vue'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
import 'vue-material/dist/vue-material.css'

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'grey',
  warn: 'red'
})

new Vue({
  el: "#app",
  data: {
    name: "Guillaume"
  }
})
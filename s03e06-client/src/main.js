require("./main.css")

const Vue = require("vue")
const VueMaterial = require("vue-material")

Vue.use(VueMaterial) 

Vue.component("cad-pessoas", require("./components/pessoas.vue"))
Vue.component("cad-eventos", require("./components/eventos.vue"))

new Vue({
  el:"#app",
  render: r => r(require("./features/cadastro.vue"))
})
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import CharacterVue from './components/Character.vue'
import CharacterFormVue from './components/CharacterForm.vue'
import ClickToEdit from './components/ClickToEdit.vue'
import LiveEdit from './components/LiveEdit.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.component('clickToEdit', ClickToEdit);
Vue.component('characterFormVue', CharacterFormVue, {props: ['character','newAspect','newStuntPower','newSkill']});
Vue.component('liveEdit', LiveEdit);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HelloWorld, name: "Home"},
    { path: '/character',
      component: CharacterVue,
      name: "Character"
    }
  ]
})

new Vue({
  router: router,
  //template: App
  render: h => h(App),
}).$mount('#app')

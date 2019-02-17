import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomeVue from './components/Home.vue'
import CharacterVue from './components/Character.vue'
import CharacterFormVue from './components/CharacterForm.vue'
import CharacterListVue from './components/CharacterList.vue'
import ClickToEdit from './components/ClickToEdit.vue'
import LiveEdit from './components/LiveEdit.vue'
import PowerLevels from './components/PowerLevels.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.component('home', HomeVue);
Vue.component('clickToEdit', ClickToEdit);
Vue.component('characterFormVue', CharacterFormVue, {props: ['character','newAspect','newStuntPower','newSkill']});
Vue.component('characterList', CharacterListVue);
Vue.component('liveEdit', LiveEdit);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HomeVue, name: "Home"},
    { path: '/character',
      component: CharacterVue,
      name: "Character", props: true
    },
    { path: '/CharacterForm', component: CharacterFormVue, name: "CharacterEdit", props: true}
  ]
})

new Vue({
  router: router,
  //template: App
  render: h => h(App),
}).$mount('#app')

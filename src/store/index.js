import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage:window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    token : '',
    member : 'false',
    conversation : [],
    connecter : 'false'
  },
  mutations: {
    setToken(state, token){
      state.token = token
    },
    setMember(state, member){
      state.member = member
    },
    setConver(state, conversation){
      state.conversation = conversation;
    }
  },
  actions: {
  },
  modules: {
  }
})

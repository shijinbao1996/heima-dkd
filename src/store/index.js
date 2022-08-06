import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import common from './modules/common'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)
const store = new Vuex.Store({ 
  modules: {
    app,
    settings,
    user,
    common
  },
  getters, 
  plugins:[
    createVuexPersisted({
      reducer(state){
        return {
          common:{
            token:state.common.token
          }
        }
      }
    })
  ]
})

export default store

import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    currentRequest:[],
  },
  mutations: {
    setCurrentRequest(state,payload){
      state.currentRequest = payload
    }
  },
  actions: {
    async getCurrentRequest({commit}){


      try{
   
       
       const response = await fetch('http://localhost:8000/api/reserves',{
         headers: {
           Accept: 'application/json',
           'Content-type': 'application/json',
           
       }
       })
       const data = await response.json()
       commit('setCurrentRequest', data)
      
       
       
   
      }
         catch(err) {
           //  this.$router.replace({ path: 'Login' })
           console.error(err)
         }
   
       },
  },
  modules: {
  }
})

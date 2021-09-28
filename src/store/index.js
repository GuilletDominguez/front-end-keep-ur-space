import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    currentRequest:[],
    currentUser:[],
  },
  mutations: {
    setCurrentRequest(state,payload){
      state.currentRequest = payload
    },
    setCurrentUser(state,payload){
      state.currentUser = payload
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
       async login ({commit},data){


        try{
     
         
         const response = await fetch('http://localhost:8000/api/login',{
           method: 'POST',
           body: JSON.stringify(data),
           headers: {
             Accept: 'application/json',
             'Content-type': 'application/json',
             
         }
         })
         const res = await response.json()
         console.log(res)

        localStorage.setItem("user",res.user.name);
        localStorage.setItem("token",res.token)





         commit('setCurrentUser', res)
        
          window.location.assign("/")
         
     
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

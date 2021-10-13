import { createStore } from 'vuex'
import axios from 'axios'




export default createStore({
  state: {
    currentRequest:[],
    currentUser:[],
    requestFilter:[],
    rooms:[]
    
  },
  mutations: {
    setCurrentRequest(state,payload){
      state.currentRequest = payload
    },
    setCurrentUser(state,payload){
      state.currentUser = payload
    },
    setRequestFilter(state,payload){
      state.requestFilter = payload
    },
    
    setRooms(state,payload){
      state.rooms = payload;
    }

  },
  actions: {
    async getCurrentRequest({commit}){


      try{
   
        const token = localStorage.getItem('token')
       const response = await fetch('http://localhost:8000/api/reserves',{
         headers: {
           Accept: 'application/json',
           'Content-type': 'application/json',
           "Authorization" : `Bearer ${token}`
           
       }
       })
       const data = await response.json()
       commit('setCurrentRequest', data)
       commit('setRequestFilter',data)
      
       
       
   
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
        localStorage.setItem('user_id',res.user.id)
        localStorage.setItem("token",res.token)





         commit('setCurrentUser', res)
        
          window.location.assign("/")
         
     
        }
           catch(err) {
            
             console.error(err)
           }
     
         },
    filterByStatus({commit,state},status){

      const results = state.currentRequest.filter((request)=>{
        
        return request.status.includes(status)
      })

      commit('setRequestFilter', results)

    },

    filterByName({commit,state},name){
      const formatName = name.toLowerCase()
      const results = state.currentRequest.filter((request) => {
        const requestName = request.user.name.toLowerCase()
        const requestStatus = request.room.name.toLowerCase()

        if(requestName.includes(formatName) || requestStatus.includes(formatName)){
          return request
        }

      
      })

      commit('setRequestFilter', results)


    },

    async createRequest({commit,state},data){
      try{

        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:8000/api/reserves',{
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
        })
        const res = await response.json()
        commit('setCurrentRequest', res)
       
        
    
       }
          catch(err) {
            //  this.$router.replace({ path: 'Login' })
            console.error(err)
          }
    },

    async getRooms({commit}){
      try{
   
        const token = localStorage.getItem('token')
       const response = await fetch('http://localhost:8000/api/rooms',{
         headers: {
           Accept: 'application/json',
           'Content-type': 'application/json',
           "Authorization" : `Bearer ${token}`
           
       }
       })
       const data = await response.json()
     
       commit('setRooms',data)
      
       
       
   
      }
         catch(err) {
           //  this.$router.replace({ path: 'Login' })
           console.error(err)
         }
    },
    async getCurrentHistorico({commit },id){
      try{
   
        const token = localStorage.getItem('token')
       const response = await fetch('http://localhost:8000/api/reserves/search/user/'+id,
       {
         headers: {
           Accept: 'application/json',
           'Content-type': 'application/json',
           "Authorization" : `Bearer ${token}`
           
       }
       })
       const data = await response.json()
     
       commit('setCurrentRequest',data)
      
       
       
   
      }
         catch(err) {
    
           console.error(err)
         }
    },

    async register({commit},data){
      try{

        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:8000/api/register',{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
        })
        const res = await response.json()
        commit('setCurrentUser', res)
       
        
    
       }
          catch(err) {
            console.error(err)
          }



    }



  },
  modules: {
  }
})

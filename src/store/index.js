


import { createStore } from 'vuex'
import router from '../router';

export default createStore({
  state: {
    currentRequest: [],
    currentUser: [],
    requestFilter: [],
    rooms: [],
    listUser: [],
    oneRequest: [],
    pagination: [],
    oneUser: [],
    oneRoom: [],
    stats: [],
    reserves:[]
  },
  mutations: {
    setCurrentRequest(state, payload) {
      state.currentRequest = payload;
    },
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    setRequestFilter(state, payload) {
      state.requestFilter = payload;
    },
    setRooms(state, payload) {
      state.rooms = payload;
    },
    setReserves(state, payload) {
      state.reserves = payload;
    },
    setlistUser(state, payload) {
      state.listUser = payload;
    },

    setPagination(state, payload) {
      state.pagination = payload;
    },
    setStats(state, payload) {
      state.stats = payload;
    },

    setOneRequest(state, payload) {
      state.oneRequest = payload;
    },

    setOneUser(state, payload) {
      state.oneUser = payload;
    },

    setOneRoom(state, payload) {
      state.oneRoom = payload;
    },
  },
  actions: {
    async getCurrentRequest({ commit }, page) {
      if (page == undefined) {
        page = 1;
      }

      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/api/reserves?page=" + page,
          {
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        const data = await response.json();
        if(data.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        commit("setCurrentRequest", data.reserves.data);
        commit("setRequestFilter", data.reserves.data);
        commit("setPagination", data.paginate);
      } catch (err) {
        //  this.$router.replace({ path: 'Login' })
        console.log(err.message);
      }
    },


    async login({ commit }, data) {
      try {
        const response = await fetch("http://localhost:8000/api/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        });
        const res = await response.json();
        

        localStorage.setItem("user", res.user.name);
        localStorage.setItem("user_id", res.user.id);
        localStorage.setItem("token", res.token);
        localStorage.setItem("rol",res.user.is_admin)

        commit("setCurrentUser", res);
        
       
        setTimeout(function(){
          
        
          router.push({name : 'Home'}); }, 2000);
       
        
      } catch (err) {
        console.error(err);
      }
    },
    filterByStatus({ commit, state }, status) {
      const results = state.currentRequest.filter((request) => {
        return request.status.includes(status);
      });

      commit("setRequestFilter", results);
    },

    filterByName({ commit, state }, name) { 
      const formatName = name.toLowerCase();
      const results = state.currentRequest.filter((request) => {
        const requestName = request.user.name.toLowerCase();

        if (requestName.includes(formatName)) {
          return request;
        }
      });

      commit("setRequestFilter", results);
    },

    async createRequest({ commit, state }, data) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/reserves", {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        commit("setCurrentRequest", res);
      } catch (err) {
        //  this.$router.replace({ path: 'Login' })
        console.error(err);
      }
    },

    async getRooms({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/rooms", {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if(data.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        commit("setRooms", data);
      } catch (err) {
        //  this.$router.replace({ path: 'Login' })
        console.error(err);
      }
    },

    async register({ commit }, data) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/register", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await response.json();
        commit("setCurrentUser", res);
        return new Promise((resolve, reject) => {
          if (res.status == 200) {
            resolve(res.status);
          } else {
            reject(res.status);
          }
        });
      } catch (err) {
        console.error(err);
      }
    },

    ///////   LLAMAR al PERFIL de un usuario ////////////////////
    async vueProfile({ commit }, id) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/users/" + id, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        commit("setCurrentUser", res);
      } catch (err) {
        console.error(err);
      }
    },

    async getCurrentHistorico({ commit }, id) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/api/reserves/search/user/" + id,
          {
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        commit("setCurrentRequest", data);
      } catch (err) {
        console.error(err);
      }
    },
    async getlistUser({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/users", {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if(data.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        else if(data.message == 'No tienes permisos de administrador'){

          alert(data.message)
          router.push({name:'Home'})
        }
        commit("setlistUser", data);
      } catch (err) {
        //  this.$router.replace({ path: 'Login' })
        console.error(err);
      }
    },
    /////////// Fin llamada PERFIL de un usuario///////////////////

    /////////// EDITAR PERFIL ////////////////////

    async update({ commit }, data) {
      try {
        console.log(data);
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/api/users/" + data.id,
          {
            //data  dentro de body y en formato json
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        else if(res.message == 'No tienes permisos de administrador'){

          alert(res.message)
          router.push({name:'Home'})
        }
        commit("setCurrentUser", res);
      } catch (err) {
        console.error(err);
      }
    },

    async getOneRequest({ commit }, id) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/api/reserves/search/" + id,
          {
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        else if(res.message == 'No tienes permisos de administrador'){

          alert(res.message)
          router.push({name:'Home'})
        }
        localStorage.removeItem("user-request");
        localStorage.setItem("user-request", res.user.name);

        commit("setOneRequest", res);
        commit("setOneUser", res.user.name);
        commit("setOneRoom", res.room.name);
      } catch (err) {
        console.error(err);
      }
    },

    async getStats({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/api/reserves/getstats",
          {
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
          
        const res = await response.json();
      
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        commit("setStats", res);
      } catch (err) {
        console.error(err);
      }
    },

    ///////    BORRAR PERFIL ///////
    async delete({ commit }, id) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/users/" + id, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        else if(res.message == 'No tienes permisos de administrador'){

          alert(res.message)
          router.push({name:'Home'})
        }
        commit("setCurrentUser", res);
      } catch (err) {
        console.error(err);
      }
    },

    ////////////////// CAMBIAR CONTRASE??A /////////////////
    async changePassword({ commit }, data) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/api/profile/security/" + data.id,
          {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        else if(res.message == 'No tienes permisos de administrador'){

          alert(res.message)
          router.push({name:'Home'})
        }
        commit("setCurrentUser", res);
      } catch (err) {
        console.error(err);
      }
    },
    async pendingReserves({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/pending", {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        else if(res.message == 'No tienes permisos de administrador'){

          alert(res.message)
          router.push({name:'Home'})
        }
        commit("setRequestFilter", res);
      } catch (err) {
        console.error(err);
      }
    },

    async logOut({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/logout", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.removeItem("user");
        localStorage.removeItem("user_id");
        localStorage.removeItem("token");
        localStorage.removeItem('rol')
        const res = await response.json();
        commit("setCurrentUser", res);
        router.push({name : 'Login'})
      } catch (err) {
        console.error(err);
      }
    },

    async updateRequest({commit}, data){

      try {
        console.log(data);
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/reserves/" + data.id, {
          //data  dentro de body y en formato json
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
        else if(res.message == 'No tienes permisos de administrador'){

          alert(res.message)
          router.push({name:'Home'})
        }
        commit("setCurrentRequest", res);
      } catch (err) {
        console.error(err);
      }



    },

    async getReserves({commit}){

      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/getreserves/", {
      
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await response.json();
        if(res.message == 'Unauthenticated.'){

          router.push({name: 'Login'})

        }
       
          commit("setReserves", res);

      
      
        
      } catch (err) {
        console.error(err);
      }


    }

  },

  

  modules: {},
});

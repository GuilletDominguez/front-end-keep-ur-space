<template>
  <div class="app">
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <div class="row g-3 mb-4 align-items-center justify-content-between">
            <h1 class="app-page-title mb-0">LISTA USUARIOS</h1>

            <div class="col-auto">
              <div class="page-utilities">
                <div
                  class="
                    row
                    g-2
                    justify-content-start justify-content-md-end
                    align-items-center
                  "
                >
                  <div class="col-auto">
                    <form class="docs-search-form row gx-1 align-items-center">
                      <div class="col-auto">
                        <input
                          type="text"
                          id="search-docs"
                          name="searchdocs"
                          class="form-control search-docs"
                          placeholder="Buscar"
                        />
                      </div>
                    </form>
                  </div>
                  <!--//col-->
                </div>
                <!--//row-->
              </div>
              <!--//table-utilities-->
            </div>
            <!--//col-auto-->
          </div>
          <!--//row-->

          <div class="row g-4">
            <div class="col-6 col-md-4 col-xl-3 col-xxl-2" v-for="user in users" :key="user.id">
              <div class="app-card app-card-doc shadow-sm h-100" >
                <div class="app-card-thumb-holder p-3">
             
<svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>

               
              
                  <router-link class="app-card-link-mask"   
                  :to="{
                    name:'Perfil',
                    params: {id: user.id}
                  
                    }">
                    
                    
                   </router-link>
                </div>
                <div class="app-card-body p-3 has-card-actions">
            
                  <div class="app-doc-meta" >
                    <ul class="list-unstyled mb-0">
                      <li><span class="text-muted">Nombre:</span> {{user.name}}</li>
                      <li>
                        <span class="text-muted">Email:</span> {{user.email}}
                      </li>
                        <li>
                        <span class="text-muted">Permiso:</span> {{user.rol.name}}
                      </li>
                
                    </ul>
                  </div>
            

                
                  <!--//app-card-actions-->
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
            </div>
            <!--//col-->

       

            <!--//col-->

           
            <!--//col-->
          </div>
          <!--//row-->
        </div>
        <!--//container-fluid-->
      </div>
      <!--//app-content-->
    </div>


  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {

    const store = useStore()
    const users = computed(() =>{
      return store.state.listUser
    })
    onMounted(() => {
      store.dispatch('getlistUser')
    })   

    return {
      users

    }
  }
};

</script>

<style>
</style>
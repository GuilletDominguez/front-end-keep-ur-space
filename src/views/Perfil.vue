<template>
  <div class="app">   

    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title">Perfil Usuario</h1>
          <div class="row gy-4">
            <div class="col-12 col-lg-6">
              <div
                class="
                  app-card app-card-account
                  shadow-sm
                  d-flex
                  flex-column
                  align-items-start
                ">
                <div class="app-card-header p-3 border-bottom-0">
                  <div class="row align-items-center gx-3">
                    <div class="col-auto">
                      <div class="app-icon-holder">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                         <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                      </div>
                      <!--//icon-holder-->
                    </div>
                    <!--//col-->
                    <div class="col-auto">
                      <h4 class="app-card-title">Perfil</h4>
                    </div>
                    <!--//col-->
                  </div>
                  <!--//row-->
                </div>
                <!--//app-card-header-->                
                <div class="app-card-body px-4 w-100">
                  <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <!-- <div class="item-label mb-2">
                          <strong>Foto</strong>
                        </div>                        
                        <div class="item-data">
                          <img
                            class="profile-image"
                            src="../assets/images/user.png" alt=""/>
                        </div> -->
                      </div>
                      <!--//col-->
                      <!-- <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" href="#">Cambiar</a>
                      </div> -->
                      <!--//col-->
                    </div>
                    <!--//row-->
                  </div>
                  <!--//item-->
                  <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <div class="item-label"><strong>Nombre</strong></div>

                        <input v-model="user.name"  id="name" class="item-data" type="text" placeholder="Nombre">
                      </div>
                      <!--//col-->
                      <!-- <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" href="#">Cambiar</a>
                      </div> -->
                      <!--//col-->
                    </div>
                    <!--//row-->
                  </div>
                  <!--//item-->
                  <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <div class="item-label"><strong>Email</strong></div>
                        <input v-model="user.email" id="email" class="item-data" type="text" placeholder="Correo">
                      </div>
                      <!--//col-->
                      <!-- <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" href="#">Cambiar</a>
                      </div> -->
                      <!--//col-->
                    </div>
                    <!--//row-->
                  </div>
                  
                  <!--//item-->
                  
                  
                  <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <div class="item-label"><strong>Antigüa Contraseña</strong></div>
                        <input v-model="user.password" id="password" class="item-data" type="text" placeholder="Contraseña">
                      </div>                                                            
                      <!--//col-->
                      <!-- <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" >Cambiar</a>
                      </div> -->
                      <!--//col-->
                    </div>                  
                    <!--//row-->
                  </div>
                <!-- <div>
                  <button >Abrir</button>
                  
                </div> -->

                  <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">

                   


                    <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Modificar Contraseña
                  </button>

                  <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">MODIFICAR CONTRASEÑA</h5>
                      <button id="modificar" type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form name="formName" action="" >
                       <p> <label>Password Actual: </label> <input v-model="data1.current_password" type="password" name="passwordActual"></p><hr>
                        <label>Nueva Password:  </label> <input v-model="data1.password" type="password" name="nuevaPassword"><br><br>
                        <label>Repite Password: </label> <input v-model="data1.password_confirmation" type="password" name="password_confirmation"> <br>                        
                      </form>
                    </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button @click.prevent="changePassword()" type="submit" class="btn btn-primary">Salvar cambios</button>
                    </div>
    </div>
  </div>
</div>

                        <!-- <div class="item-label"><strong> Nueva Contraseña</strong></div>
                        <input v-model="user.password" id="password" class="item-data" type="text" placeholder="Contraseña"> -->
                  </div>                                  
                      <!--//col-->
                      <!-- <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" >Cambiar</a>
                      </div> -->
                      <!--//col-->
                    </div>
                    <!--//row-->
                  </div>

<!-- OCULTACION INPUP PERMISOS -->
                  <!--//item-->
                  <div class="item border-bottom py-3" v-if="is_admin = 1 ">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <div class="item-label"><strong>Permisos</strong></div>

                        <input v-model="user.is_admin" id="rol_id" class="item-data" type="text" placeholder="Permisos">
                      </div>
                      <!--//col-->
                      <!-- <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" href="#">Cambiar</a>
                      </div> -->
                      <!--//col-->
                    </div> 
                    <!--//row-->
                  </div>
                  <!--//item-->
                </div>
                <!--//app-card-body-->
                <div class="app-card-footer p-4 mt-auto">
                  <button class="btn app-btn-secondary mx-1" @click="updateUser()">Modificar Perfil</button>
                  <button class="btn app-btn-secondary mx-4" id="borrar" @click.prevent="deleteUser()">Borrar</button>
                  
                </div>
                <!--//app-card-footer-->
              </div>
              <!--//app-card-->
            </div>
            <!--//col-->          
            <!--//col-->           
          </div>
          <!--//row-->
        </div>
        <!--//container-fluid-->
      </div>
      <!--//app-content-->  
      <!--//app-footer-->
    </div>
    <!--//app-wrapper-->
  </div>
</template>   

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'


export default {
  props:['id'],
  setup(id) { 
   const userId = id.id;
   const store = useStore();
   const user = computed(() => {
    
      return store.state.currentUser
   }) 
  onMounted(() => { 
      store.dispatch('vueProfile', userId)
         })  
  const data = user
  const updateUser = (() => { 
        const currentUser = {
          id: data.value.id,
          name: data.value.name,
          email: data.value.email,
          
          phone_number: 'none',
          is_admin: data.value.is_admin,          
        }    
        console.log(currentUser)   
        store.dispatch('update', currentUser)    
  }) 
//////////// Borrar Perfil /////////
  const deleteUser = (() => { 
    
    store.dispatch('delete', userId)
  })

/////////// CAMBIAR CONTRASEÑA /////////
  const data1 = { 
    is_admin: 2,
    password:'',
    current_password:'',
    id: userId,
    password_confirmation:'',
    
    
  }
  const changePassword = (() => {
    console.log(data1)
      store.dispatch ('changePassword', data1)
  })

  return{
    user,
    updateUser, 
    deleteUser,
    changePassword,
    data1    
    }
  },
  
} 



</script>

<style scoped> 

.btn-primary{
color: white !important; 
background-color :#dc001b !important;
}
.btn-primary:hover{ 
color: white !important;
}
.app-btn-secondary{
color: black !important; 
background-color :#c4c4c4 !important;
border-bottom: #c4c4c4 !important;
}
.app-btn-secondary:hover{ 
  border: black solid 1px !important;
}
.app-card .app-icon-holder{
  color: #dc001b;
  background: #c4c4c4;
}

</style>



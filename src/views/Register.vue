
<template>
  <div class="app app-signup p-0">
    <div class="row g-0 app-auth-wrapper">
      <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
        <div class="d-flex flex-column align-content-end">
          <div class="app-auth-body mx-auto">
            <div class="app-auth-branding mb-4">
              <a class="app-logo" href="index.html"
                ><img
                  class="logo-icon me-2"
                  src="../assets/images/icon/background-2.jpg"
                  alt="logo"
              /></a>
            </div>
            <h2 class="auth-heading text-center mb-4">
              Registro Nuevo Usuario
            </h2>

            <div class="auth-form-container text-start mx-auto" >
              <!-- CREACION DE LA ALERTA ///////////////////////////////////////////////////////////-->
              <div id="mensajeAlerta"></div>                           
              
              <form
                @submit.prevent="register"
                class="auth-form auth-signup-form"
              >              

                <div class="email mb-3">
                  <label class="sr-only" for="name"> <b> Nombre </b></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    v-model="data.name"
                    class="form-control name"

                    placeholder="Nombre y apellidos"

                    required="required"
                  />
                </div>
                <div class="email mb-3">
                  <label class="sr-only" for="email"> <b> Email</b></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    v-model="data.email"
                    class="form-control email"
                    placeholder="Email"
                    required="required"
                  />
                </div>
                <div class="password mb-3">
                  <label class="sr-only" for="password">
                    <b>Contraseña</b>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    v-model="data.password"
                    class="form-control password"
                    placeholder="Crear contraseña"
                    required="required"
                  />
                </div>
                <div class="password mb-3">
                  <label class="sr-only" for="confirm_password">
                    <b>Confirmar Contraseña</b>
                  </label>
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    v-model="data.password_confirmation"
                    class="form-control password"
                    placeholder="Volver a escribir la contraseña"
                    required="required"
                  />
                </div>
                <div class="extra mb-3">
                  <!-- <div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="RememberPassword">
									<label class="form-check-label" for="RememberPassword">
									I agree to Portal's <a href="#" class="app-link">Terms of Service</a> and <a href="#" class="app-link">Privacy Policy</a>.
									</label>
								</div> -->
                </div>

                <!--//extra-->
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn app-btn-primary w-100 theme-btn mx-auto"
                  >
                    Crear Usuario
                  </button>
                </div>                
              </form>
              <!--//auth-form-->

              

              <!-- <div class="auth-option text-center pt-5">Already have an account? <a class="text-link" href="login.html" >Log in</a></div> -->
            </div>
            <!--//auth-form-container-->
          </div>
          <!--//auth-body-->

          <footer class="app-auth-footer">
            <div class="container text-center py-3">
              <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
              <!-- <small class="copyright">Designed with <i class="fas fa-heart" style="color: #fb866a;"></i> by <a class="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small> -->
            </div>
          </footer>
          <!--//app-auth-footer-->
        </div>
        <!--//flex-column-->
      </div>
      <!--//auth-main-col-->
      <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div class="auth-background-holder"></div>
        <div class="auth-background-mask"></div>
        <div class="auth-background-overlay p-3 p-lg-5">
          <div class="d-flex flex-column align-content-end h-100">
            <div class="h-100"></div>
            <!-- <div class="overlay-content p-3 p-lg-4 rounded">
					    <h5 class="mb-3 overlay-title">Explore Portal Admin Template</h5>
					    <div>Portal is a free Bootstrap 5 admin dashboard template. You can download and view the template license <a href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">here</a>.</div>
				    </div> -->
          </div>
        </div>
        <!--//auth-background-overlay-->
      </div>
      <!--//auth-background-col-->
    </div>
    <!--//row-->
  </div>
</template>

<script>

import '../assets/js/app.js'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex' 
export default {
setup(){

  const store = useStore();
  const data = {
    name: '',
    email:'',
    password:'',
    password_confirmation: '',
    status:''
           
  }
  const res = computed(() =>{

  return store.state.currentUser
})
  const register = ((a)=>{   
       
          store.dispatch('register',data).then(response => {
          if(response == 200) { 
          document.getElementById('mensajeAlerta').innerHTML += `
           <div class="alert alert-success text-center " role="alert" v-if="data.status === true">
             <b> ¡El usuario ha sido creado!</b>
           </div>`
          setTimeout(function(){
            document.getElementById('mensajeAlerta').innerHTML = ''
          },4000)
          }

          },
          error =>{
            //alert(error)
            document.getElementById('mensajeAlerta').innerHTML += `
            <div class="alert alert-danger text-center" role="alert">
             <b> Ha ocurrido un error </b>
            </div>`
          setTimeout(function(){
            document.getElementById('mensajeAlerta').innerHTML = ''
          },4000)
         
          })                
    });
 
return {
  data,
  register,           

    }
  }
}


</script>

<style scoped>
.app-signup .auth-background-holder {
  background-size: 80%;
}
.mx-auto {
  margin-right: 8% !important;
  margin-top: 10% !important;
}
.app-btn-primary {
  background-color: #dc001b;
  border-color: #dc001b;
  border-radius: 50px;
}
.app-btn-primary:hover{
  color: black !important;
  background-color: #c4c4c4;
  border-bottom: black solid 3px;
}
.form-control {
  border-radius: 50px;
  border-color: black !important;
}
.app-auth-wrapper .app-logo .logo-icon {
  width: 101px;
  height: 67px;
}

</style>
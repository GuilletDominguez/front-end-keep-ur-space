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
                "
              >
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
                        <div class="item-label mb-2">
                          <strong>Foto</strong>
                        </div>
                        <div class="item-data">
                          <img
                            class="profile-image"
                            src="../assets/images/user.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <!--//col-->
                      <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" href="#">Cambiar</a>
                      </div>
                      <!--//col-->
                    </div>
                    <!--//row-->
                  </div>
                  <!--//item-->
                  <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <div class="item-label"><strong>Nombre</strong></div>
                        <div class="item-data">James Doe</div>
                      </div>
                      <!--//col-->
                      <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" href="#">Cambiar</a>
                      </div>
                      <!--//col-->
                    </div>
                    <!--//row-->
                  </div>
                  <!--//item-->
                  <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <div class="item-label"><strong>Email</strong></div>
                        <div class="item-data">james.doe@website.com</div>
                      </div>
                      <!--//col-->
                      <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" href="#">Cambiar</a>
                      </div>
                      <!--//col-->
                    </div>
                    <!--//row-->
                  </div>
                  <!--//item-->
                  <div class="item border-bottom py-3">
                    <div class="row justify-content-between align-items-center">
                      <div class="col-auto">
                        <div class="item-label"><strong>Contraseña</strong></div>
                        <div class="item-data">https://johndoewebsite.com</div>
                      </div>
                      <!--//col-->
                      <div class="col text-end">
                        <a class="btn-sm app-btn-secondary" href="#">Cambiar</a>
                      </div>
                      <!--//col-->
                    </div>
                    <!--//row-->
                  </div>
                  <!--//item-->
                  <div class="item border-bottom py-3">
                    
                    <!--//row-->
                  </div>
                  <!--//item-->
                </div>
                <!--//app-card-body-->
                <div class="app-card-footer p-4 mt-auto">
                  <a class="btn app-btn-secondary" href="#">Administrar perfil</a>
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
import "../assets/js/app.js";

export default {


    
};
</script>

<style>
</style>
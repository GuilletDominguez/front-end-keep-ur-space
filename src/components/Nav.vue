<template>
  <!--//app-header-->

  <div class="app-header fixed-top">	   	            
        <div class="app-header-inner">  
	        <div class="container-fluid py-2">
		        <div class="app-header-content"> 
		            <div class="row justify-content-between align-items-center">
			        
				    <div class="col-auto">
					    <a id="sidepanel-toggler" class="sidepanel-toggler d-inline-block d-xl-none" href="#">
						    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
					    </a>
				    </div><!--//col-->
		            <div class="search-mobile-trigger d-sm-none col">
			            <i class="search-mobile-trigger-icon fas fa-search"></i>
			        </div><!--//col-->
		        
		            
		            <div class="app-utilities col-auto">
			         
			            <div class="app-utility-item app-user-dropdown dropdown">
				            <a class="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">											<svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></a>
	
		
				            <ul class="dropdown-menu" aria-labelledby="user-dropdown-toggle">

								  <li>
                    <router-link class="dropdown-item"  :to="{
                    name:'Perfil',
                    params: {id: userId}
                  
                    }">Cuenta </router-link>
                  </li>
								
								<li><hr class="dropdown-divider"></li>
							

                

                  <li>
                    <!-- <a class="dropdown-item" href="login.html">Cerrar sesión</a> -->
                    <button
                      type="button"
                      class="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Cerrar sesion
                    </button>
                  </li>
                </ul>
              </div>
              <!--//app-user-dropdown-->
            </div>
            <!--//app-utilities-->
     
          <!--//row-->
       
        <!--//app-header-content-->
      
      <!--//container-fluid-->
   
    <!--//app-header-inner-->
    <div id="app-sidepanel" class="app-sidepanel">
      <div id="sidepanel-drop" class="sidepanel-drop"></div>
      <div class="sidepanel-inner d-flex flex-column">
        <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none"
          >&times;</a
        >
        <div class="app-branding">
          <router-link class="app-logo" :to="{ name: 'Home' }"
            ><img
              class="logo-icon me-2"
              src="../assets/images/background/fundacion-don-bosco.jpg"
              alt="logo"
            /><span class="logo-text">PORTAL</span></router-link
          >
        </div>
        <!--//app-branding-->

        <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
          <ul class="app-menu list-unstyled accordion" id="menu-accordion">
            <li class="nav-item">

              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <router-link
                class="nav-link"
                :to="{ name: 'Home' }"
                exact-active-class="active"
              >
                <span class="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-house-door"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </span>
                <span class="nav-link-text">Inicio </span> </router-link
              ><!--//nav-link-->
            </li>
            <!--//nav-item-->

            <li class="nav-item">
              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <router-link
                class="nav-link"
                :to="{ name: 'Calendar' }"
                exact-active-class="active"
              >
                <span class="nav-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                    />
                    <path
                      d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
                    />
                  </svg>
                </span>
                <span class="nav-link-text">Calendario </span> </router-link
              ><!--//nav-link-->
            </li>

            <li class="nav-item">
              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <router-link
                class="nav-link"
                :to="{ name: 'Request' }"
                exact-active-class="active"
              >
                <span class="nav-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-inbox-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"
                    />
                  </svg>
                </span>
                <span class="nav-link-text">Peticiones </span> </router-link
              ><!--//nav-link-->
            </li>

            <li class="nav-item">
              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <router-link
                class="nav-link"
                :to="{ name: 'Reserve' }"
                exact-active-class="active"
              >
                <span class="nav-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-inbox-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"
                    />
                  </svg>
                </span>

                <span class="nav-link-text">Reservar sala </span> </router-link
              ><!--//nav-link-->
            </li>
            <!--//nav-item-->

            <li class="nav-item">
              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <router-link
                class="nav-link"
                :to="{ name: 'Historico' }"
                exact-active-class="active"
              >
                <span class="nav-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-journals"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"
                    />
                    <path
                      d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"
                    />
                  </svg>
                </span>
                <span class="nav-link-text"
                  >Peticiones enviadas
                </span> </router-link
              ><!--//nav-link-->
            </li>
            <!--//nav-item-->

            <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->

            <!--//////////////// NUEVO USUARIO ////////////////-->
            <li class="nav-item">
              <router-link
                :to="{ name: 'Register' }"
                exact-active-class="active"
                class="nav-link"
              >
                <span class="nav-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    />
                  </svg>
                </span>
                <span class="nav-link-text">Nuevo Usuario</span>
              </router-link>
			</li>
				<!-- ///////////////// PERFIL /////////////////// -->
				<li class="nav-item">

                <a
                  class="nav-link"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span class="nav-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-box-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Cerrar sesión</span></a
                ><!--//nav-link-->
              </li>
              <!--//nav-item-->
            </ul>
            <!--//footer-menu-->
          </nav>
        </div>
        <!--//app-sidepanel-footer-->
      </div>
      <!--//sidepanel-inner-->
    </div>
    <!--//app-sidepanel-->
  </div>
  <!--//app-header-->
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {

setup() {
	const store = useStore();
  const userId = localStorage.getItem('user_id')
	const logOut = (()=>{

		store.dispatch('logOut')
	})

	return {
		logOut,
    userId
	}
}



};

</script>

<style scoped>
.app-user-dropdow img {
  width: 70px;
  height: 200px;
}
.app-branding .logo-icon {
  width: 70px;
  height: 60px;
}
.app-nav .nav-link.active {
  color: #dc001b !important;
  border-left: 3px solid #dc001b !important;
  background: #dc001a17 !important;
}
.app-sidepanel {
  border-right: 1px solid #dc001a8f !important;
}
.app-header {
  border-bottom: 1px solid #dc001a8f !important;
}
.nav-link:hover {
  color: #dc001b !important;
}
.dropdown-menu {
  border: 1px solid #dc001a7c !important;
}
hr {
  background: #dc001a7c !important;
}
#sidepanel-toggler {
  color: #dc001b !important;
}
</style>
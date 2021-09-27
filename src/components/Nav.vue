<template>
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
				            <a class="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><img src="../assets/images/background/background-4.png" alt="Pedro"></a>
				            <ul class="dropdown-menu" aria-labelledby="user-dropdown-toggle">
								<li><a class="dropdown-item" href="account.html">Account</a></li>
								
								<li><hr class="dropdown-divider"></li>
								<li><a class="dropdown-item" href="login.html">Log Out</a></li>
							</ul>
			            </div><!--//app-user-dropdown--> 
		            </div><!--//app-utilities-->
		        </div><!--//row-->
	            </div><!--//app-header-content-->
	        </div><!--//container-fluid-->
        </div><!--//app-header-inner-->
        <div id="app-sidepanel" class="app-sidepanel"> 
	        <div id="sidepanel-drop" class="sidepanel-drop"></div>
	        <div class="sidepanel-inner d-flex flex-column">
		        <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
		        <div class="app-branding">
		            <a class="app-logo" href="index.html"><img class="logo-icon me-2" src="../assets/images/background/fundacion-don-bosco.jpg" alt="logo"><span class="logo-text">PORTAL</span></a>
	
		        </div><!--//app-branding-->  
		        
			    <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
				    <ul class="app-menu list-unstyled accordion" id="menu-accordion">
					    <li class="nav-item">
					        <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
					        <a class="nav-link active" href="#" >
						        <span class="nav-icon">
						        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		  <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
		  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
		</svg>
						         </span>
		                         <span class="nav-link-text">Inicio

								 </span>
					        </a><!--//nav-link-->
					    </li><!--//nav-item-->
					 				    
				    </ul><!--//app-menu-->
			    </nav><!--//app-nav-->
			    <div class="app-sidepanel-footer">
				    <nav class="app-nav app-nav-footer">
					    <ul class="app-menu footer-menu list-unstyled">
						   
						   
						    <li class="nav-item">
						        <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
						        <a class="nav-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
							        <span class="nav-icon">
							            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	  <path fill-rule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
	  <path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
	</svg>
							        </span>
			                        <span class="nav-link-text">Log out</span>
						        </a><!--//nav-link-->
						    </li><!--//nav-item-->
					    </ul><!--//footer-menu-->
				    </nav>
			    </div><!--//app-sidepanel-footer-->
		       
	        </div><!--//sidepanel-inner-->
	    </div><!--//app-sidepanel-->
    </div><!--//app-header-->
</template>

<script>
export default {

}
</script>

<style scoped>


.app-user-dropdow img {
 
 width: 70px; 
 height: 200px;
}
.app-branding .logo-icon{

	width: 70px;
	height: 60px;
}



.app-nav .nav-link.active {
	color: #dc001b!important;
	border-left: 3px solid #dc001b!important;
	background: #dc001a17!important;
}

.app-sidepanel{
	border-right: 1px solid #dc001a8f!important;
}

.app-header {
	border-bottom: 1px solid #dc001a8f!important;
}

.nav-link:hover{
	color: #dc001b!important;
}

.dropdown-menu {
	border: 1px solid  #dc001a7c!important;
}

hr {
	background:  #dc001a7c!important;
}

#sidepanel-toggler{
	color: #dc001b!important;
}
</style>
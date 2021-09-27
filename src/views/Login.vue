<template>
<div class="app app-login p-0">    	
    <div class="row g-0 app-auth-wrapper">
	    <div style="background-color: ; url(../assets/images/background/background-2.jpg);" class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div class="d-flex flex-column align-content-end">
			    <div class="app-auth-body mx-auto">	
				    <div class="app-auth-branding mb-4"><a class="app-logo" href="index.html"><img class="logo-icon me-2" src="../assets/images/background/fundacion-don-bosco.jpg" alt="logo"></a></div>
					<h2 class="auth-heading text-center mb-5">RESERVA DE SALAS </h2>
			        <div class="auth-form-container text-start">
						<form class="auth-form login-form">         
							<div class="email mb-3">
								<label class="sr-only" for="email">Email</label>
								<input id="email" name="email" type="email" class="form-control email" placeholder="Email " required="required">
							</div><!--//form-group-->
							<div class="password mb-3">
								<label class="sr-only" for="signin-password">Contraseña</label>
								<input id="password" name="password" type="password" class="form-control password" placeholder="contraseña" required="required">
								<div class="extra mt-3 row justify-content-between">
									<div class="col-6">
									
									</div><!--//col-6-->
									
								</div><!--//extra-->
							</div><!--//form-group-->
							<div class="text-center">
								<button style="background-color: red;" type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto">Entrar</button>
							</div>
						</form>
						
						<div class="auth-option text-center pt-5">No Account? Sign up <a class="text-link" href="signup.html" >here</a>.</div>
					</div><!--//auth-form-container-->	

			    </div><!--//auth-body-->
		    
			    <footer class="app-auth-footer">
				    <div class="container text-center py-3">
				         <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
			        <small class="copyright">Designed with <i class="fas fa-heart" style="color: #fb866a;"></i> by <a class="app-link" href="" target="_blank">Xiaoying Riley</a> for developers</small>
				       
				    </div>
			    </footer><!--//app-auth-footer-->	
		    </div><!--//flex-column-->   
	    </div><!--//auth-main-col-->
	    <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
		    <div class="auth-background-holder">
		    </div>
		    <div class="auth-background-mask"></div>
		    <div class="auth-background-overlay p-3 p-lg-5">
			    <div class="d-flex flex-column align-content-end h-100">
				    
				</div>
		    </div><!--//auth-background-overlay-->
	    </div><!--//auth-background-col-->
    
    </div><!--//row-->


</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.app-signup .auth-background-holder{
    background-size: 80%;
}

.app-auth-wrapper .app-logo .logo-icon {
    width: 150px ;
    height: 150px;
    border-radius: 50% ;
    box-shadow: 1px 1px 4px black;
    
}
.app-login .auth-background-holder{
    width: 800px !important;
    height: 80px !important;
    background-color: white !important;
	 
}
.form-control {
	border : 1px solid black;
}




</style>
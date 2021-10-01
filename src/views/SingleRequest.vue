<template>
  <div class="app">   	
    
    <div class="app-wrapper">
	    
	    <div class="app-content pt-3 p-md-3 p-lg-4">
		    <div class="container-xl">			    
			    <h1 class="app-page-title">Petición de fecha de {{request.dateStart}} hasta {{request.dateEnd}}</h1>
			    <hr class="mb-4">
                <div class="row g-4 settings-section">
	                <div class="col-12 col-md-4">
		                <h3 class="section-title">Datos generales</h3>
		                <div class="section-intro">Modifica los datos de la petición</div>
	                </div>
	                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings shadow-sm p-4">
						    
						    <div class="app-card-body">
							    <form class="settings-form">
								    <div class="mb-3">
									    <label for="setting-input-1" class="form-label">Nombre del solicitante</label>
									    <input type="text" class="form-control" id="setting-input-1" :value="user" disabled>
									</div>
									<div class="mb-3">
									    <label for="setting-input-2" class="form-label">Descripción</label>
									    <input type="text" class="form-control" id="setting-input-2" value="Steve Doe">
									</div>
								    <div class="mb-3">
									    <label for="setting-input-3" class="form-label">Sala solicitada</label>
									    <input type="email" class="form-control" id="setting-input-3" value="hello@companywebsite.com">
									</div>
									<button type="submit" class="btn app-btn-primary" >Save Changes</button>
							    </form>
						    </div><!--//app-card-body-->
						    
						</div><!--//app-card-->
	                </div>
                </div><!--//row-->
                <hr class="my-4">
                <div class="row g-4 settings-section">
	                <div class="col-12 col-md-4">
		                <h3 class="section-title">Plan</h3>
		                <div class="section-intro">Settings section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="help.html">Learn more</a></div>
	                </div>
	                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings shadow-sm p-4">
						    
						    <div class="app-card-body">
							    <div class="mb-2"><strong>Current Plan:</strong> Pro</div>
							    <div class="mb-2"><strong>Status:</strong> <span class="badge bg-success">Active</span></div>
							    <div class="mb-2"><strong>Expires:</strong> 2030-09-24</div>
							    <div class="mb-4"><strong>Invoices:</strong> <a href="#">view</a></div>
							    <div class="row justify-content-between">
								    <div class="col-auto">
								        <a class="btn app-btn-primary" href="#">Upgrade Plan</a>
								    </div>
								    <div class="col-auto">
								        <a class="btn app-btn-secondary" href="#">Cancel Plan</a>
								    </div>
							    </div>
								    
						    </div><!--//app-card-body-->
						    
						</div><!--//app-card-->
	                </div>
                </div><!--//row-->
                <hr class="my-4">
                <div class="row g-4 settings-section">
	                <div class="col-12 col-md-4">
		                <h3 class="section-title">Data &amp; Privacy</h3>
		                <div class="section-intro">Settings section intro goes here. Morbi vehicula, est eget fermentum ornare. </div>
	                </div>
	                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings shadow-sm p-4">						    
						    <div class="app-card-body">
							    <form class="settings-form">
								    <div class="form-check mb-3">
										<input class="form-check-input" type="checkbox" value="" id="settings-checkbox-1" checked>
										<label class="form-check-label" for="settings-checkbox-1">
										    Keep user app activity history
										</label>
									</div><!--//form-check-->
									<div class="form-check mb-3">
									    <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-2" checked>
										<label class="form-check-label" for="settings-checkbox-2">
										    Keep user app preferences
										</label>
									</div>
									<div class="form-check mb-3">
									    <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-3">
										<label class="form-check-label" for="settings-checkbox-3">
										    Keep user app search history
										</label>
									</div>
									<div class="form-check mb-3">
									    <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-4">
										<label class="form-check-label" for="settings-checkbox-4">
										    Lorem ipsum dolor sit amet
										</label>
									</div>
									<div class="form-check mb-3">
									    <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-5">
										<label class="form-check-label" for="settings-checkbox-5">
										    Aenean quis pharetra metus
										</label>
									</div>
									<div class="mt-3">
									    <button type="submit" class="btn app-btn-primary" >Save Changes</button>
									</div>
							    </form>
						    </div><!--//app-card-body-->						    
						</div><!--//app-card-->
	                </div>
                </div><!--//row-->
                <hr class="my-4">
                <div class="row g-4 settings-section">
	                <div class="col-12 col-md-4">
		                <h3 class="section-title">Notifications</h3>
		                <div class="section-intro">Settings section intro goes here. Duis velit massa, faucibus non hendrerit eget.</div>
	                </div>
	                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings shadow-sm p-4">						    
						    <div class="app-card-body">
							    <form class="settings-form">
								    <div class="form-check form-switch mb-3">
										<input class="form-check-input" type="checkbox" id="settings-switch-1" checked>
										<label class="form-check-label" for="settings-switch-1">Project notifications</label>
									</div>
									<div class="form-check form-switch mb-3">
										<input class="form-check-input" type="checkbox" id="settings-switch-2">
										<label class="form-check-label" for="settings-switch-2">Web browser push notifications</label>
									</div>
									<div class="form-check form-switch mb-3">
										<input class="form-check-input" type="checkbox" id="settings-switch-3" checked>
										<label class="form-check-label" for="settings-switch-3">Mobile push notifications</label>
									</div>
									<div class="form-check form-switch mb-3">
										<input class="form-check-input" type="checkbox" id="settings-switch-4">
										<label class="form-check-label" for="settings-switch-4">Lorem ipsum notifications</label>
									</div>
									<div class="form-check form-switch mb-3">
										<input class="form-check-input" type="checkbox" id="settings-switch-5">
										<label class="form-check-label" for="settings-switch-5">Lorem ipsum notifications</label>
									</div>
									<div class="mt-3">
									    <button type="submit" class="btn app-btn-primary" >Save Changes</button>
									</div>
							    </form>
						    </div><!--//app-card-body-->						    
						</div><!--//app-card-->
	                </div>
                </div><!--//row-->
			    <hr class="my-4">
		    </div><!--//container-fluid-->
	    </div><!--//app-content-->
	    

	    
    </div><!--//app-wrapper-->    					

 
 

</div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
props:['id'],
 setup(id) {
     
    const request_id = id.id
    const store = useStore()

    const request = computed(() =>{
        
      return store.state.oneRequest

    })

     const user = computed(() =>{

    return localStorage.getItem('user-request')
    
    })

    onMounted(() => {
        localStorage.removeItem('user-request')
      store.dispatch('getOneRequest',request_id)
    })

    return {

      request,
      user

    }


  }
}
</script>

<style>

</style>
<template>
  <div class="app">   	
    
    <div class="app-wrapper">
	    
	    <div class="app-content pt-3 p-md-3 p-lg-4">
		    <div class="container-xl">			    
			    <h1 class="app-page-title">Petición realizada</h1>
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
									    <input type="text" class="form-control" id="setting-input-2" :value="request.description">
									</div>
								    <div class="mb-3">
									    <label for="setting-input-3" class="form-label">Aula solicitada</label>
									    <input type="text" class="form-control" id="setting-input-3" :value="room">
									</div>
									<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Hora inicial solicitada</label>
									    <input type="time" class="form-control" id="setting-input-3" :value="request.hourStart">
									</div>
									<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Hora final solicitada</label>
									    <input type="time" class="form-control" id="setting-input-3" :value="request.hourEnd">
									</div>
									<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Dia inicial solicitado</label>
									    <input type="date" class="form-control" id="setting-input-3" :value="request.dateStart">
									</div>
									<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Dia final solicitado</label>
									    <input type="date" class="form-control" id="setting-input-3" :value="request.dateEnd">
									</div>
										<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Número de asistentes</label>
									    <input type="number" class="form-control" id="setting-input-3" :value="request.dateEnd">
									</div>
									<button type="submit" class="btn btn-warning" >Guardar cambios</button>
							    </form>
						    </div><!--//app-card-body-->
						    
						</div><!--//app-card-->
	                </div>
                </div><!--//row-->
                <hr class="my-4">
                <div class="row g-4 settings-section">
	                <div class="col-12 col-md-4">
		                <h3 class="section-title">Estado</h3>
		                <div class="section-intro"><span class="badge bg-success" v-if="request.status == 'Accepted'">Aceptada</span>
													<span class="badge bg-warning" v-else>Pendiente</span></div>
	                </div>
	                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings shadow-sm p-4">
						    
						    <div class="app-card-body">
							    
							   
							 
							    <div class="row justify-content-between">
								    <div class="col-auto">
								        <a class="btn app-btn-primary" href="#">Aprobar solicitud</a>
								    </div>
									
								    <div class="col-auto">
								        <a class="btn btn-danger" href="#">Cancelar solicitud</a>
								    </div>
							    </div>
								    
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
        
      return store.state.oneUser

    })

    const room = computed(()=>{

		return store.state.oneRoom
	})

    onMounted(() => {
    
      store.dispatch('getOneRequest',request_id)
	  
    })

    return {

      request,
	  user,
	  room
      

    }


  }
}
</script>

<style>

</style>
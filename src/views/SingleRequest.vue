

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
							    <form class="settings-form" >
								    <div class="mb-3">
									    <label for="setting-input-1" class="form-label">Nombre del solicitante</label>
									    <p type="text" class="form-control" id="setting-input-1"> {{user}} </p>
									</div>
									<div class="mb-3">
									    <label for="setting-input-2" class="form-label">Descripción</label>
									    <input type="text" class="form-control" id="setting-input-2" v-model="data.description" v-bind:placeholder="request.description">
									</div>
									
								    <div class="mb-3">
										<label for="floatingSelect">¿Qué sala quieres reservar?</label>
									    <select v-model="selected" @change="onChange(selected)"  class="form-select" id="floatingSelect">
                                    <option :value="room" selected >{{room}}</option>
                                    <option v-for="room in rooms" :key="room.id" :value="room.id">{{room.name}}</option>
                                   
                                </select>
                                
									</div>
									<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Hora inicial solicitada</label>
									    <input type="time" class="form-control" id="setting-input-3" v-model="data.hourStart" v-bind:placeholder="request.hourStart">
									</div>
									<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Hora final solicitada</label>
									    <input type="time" class="form-control" id="setting-input-3" v-model="data.hourEnd" v-bind:placeholder="request.hourEnd">
									</div>
									<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Dia inicial solicitado</label>
									    <input type="date" class="form-control" id="setting-input-3" v-model="data.dateStart" v-bind:placeholder="request.dateStart">
									</div>
									<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Dia final solicitado</label>
									    <input type="date" class="form-control" id="setting-input-3" v-model="data.dateEnd" v-bind:placeholder="request.dateEnd">
									</div>
										<div class="mb-3">
									    <label for="setting-input-3" class="form-label">Número de asistentes</label>
									    <input type="number" class="form-control" id="setting-input-3" >
									</div>
									<button type="submit" @click.prevent="update()" class="btn btn-warning" >Guardar cambios</button>
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
													<span class="badge bg-warning" v-if="request.status == 'Pending'">Pendiente</span>
													<span class="badge bg-danger" v-if="request.status == 'Cancelled'">Cancelada</span>
													</div>
	                </div>
	                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings shadow-sm p-4">
						    
						    <div class="app-card-body">
							    
							   
							 
							    <div class="row justify-content-between">
								    <div class="col-auto">
								        <a class="btn app-btn-primary" @click="accept()">Aprobar solicitud</a>
								    </div>
									
								    <div class="col-auto">
								        <a class="btn btn-danger" @click.prevent="cancel()">Cancelar solicitud</a>
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
	const onChange = ((value) =>{
            data.room_id = value            
        })

	const update = (()=>{
		console.log(data)
		store.dispatch('updateRequest',data)
	})

	const accept = (()=>{
		data.status = 'Accepted'
		store.dispatch('updateRequest',data)
		console.log(data)

	})
		const cancel = (()=>{
		data.status = 'Cancelled'
		store.dispatch('updateRequest',data)
		

	})

    const room = computed(()=>{
		
		return store.state.oneRoom 
	})

	const rooms = computed(()=>{
		return store.state.rooms
	})

    onMounted(() => {
    
    store.dispatch('getOneRequest',request_id)
	store.dispatch('getRooms')
	
	  
    })
  	const data = {
		id : request_id,
        dateStart : request.value.dateStart,
        dateEnd : request.value.dateEnd,
        hourStart : request.value.hourStart,
        hourEnd : request.value.hourEnd,
        room_id: request.value.room_id,
        description : request.value.description,
		status : request.value.status
	}

    return {
	  accept,
      request,
	  user,
	  room,
	  data,
	  onChange,
	  rooms,
	  update,
	  cancel
      

    }


  }
}
</script>



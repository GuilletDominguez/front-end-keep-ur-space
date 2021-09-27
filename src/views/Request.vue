<template>
  <div class="app">   	
  
    
    <div class="app-wrapper">
	    
	    <div class="app-content pt-3 p-md-3 p-lg-4">
		    <div class="container-xl">
			    
			    <div class="row g-3 mb-4 align-items-center justify-content-between">
				    <div class="col-auto">
			            <h1 class="app-page-title mb-0">Peticiones</h1>
				    </div>
				    <div class="col-auto">
					     <div class="page-utilities">
						    <div class="row g-2 justify-content-start justify-content-md-end align-items-center">
							    <div class="col-auto">
								    <form class="table-search-form row gx-1 align-items-center">
					                    <div class="col-auto">
					                        <input type="text" id="search-orders" name="searchorders" class="form-control search-orders" placeholder="Buscar">
					                    </div>
					                  
					                </form>
					                
							    </div><!--//col-->
						
							    
						    </div><!--//row-->
					    </div><!--//table-utilities-->
				    </div><!--//col-auto-->
			    </div><!--//row-->
			   
			    
			    <nav id="orders-table-tab" class="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
				    <a class="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" href="#orders-all" role="tab" aria-controls="orders-all" aria-selected="true">Todas</a>
				    <a class="flex-sm-fill text-sm-center nav-link"  id="orders-paid-tab" data-bs-toggle="tab" href="#orders-paid" role="tab" aria-controls="orders-paid" aria-selected="false">Aceptadas</a>
				    <a class="flex-sm-fill text-sm-center nav-link" id="orders-pending-tab" data-bs-toggle="tab" href="#orders-pending" role="tab" aria-controls="orders-pending" aria-selected="false">Pendientes</a>
				    <a class="flex-sm-fill text-sm-center nav-link" id="orders-cancelled-tab" data-bs-toggle="tab" href="#orders-cancelled" role="tab" aria-controls="orders-cancelled" aria-selected="false">Canceladas</a>
				</nav>
				
				
				<div class="tab-content" id="orders-table-tab-content">
			        <div class="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
					    <div class="app-card app-card-orders-table shadow-sm mb-5">
						    <div class="app-card-body">
							    <div class="table-responsive">
							        <table class="table app-table-hover mb-0 text-left">
										<thead>
											<tr>
												<th class="cell">Id</th>
												<th class="cell">Descripción</th>
												<th class="cell">Usuario</th>
												<th class="cell">Fecha</th>
                                                <th class="cell">Hora</th>
												<th class="cell">Estado</th>
												<th class="cell">Sala</th>
												<th class="cell"></th>
											</tr>
										</thead>
										<tbody>
										<tr v-for="request in requests" :key="request.id">
												<td class="cell">{{request.id}}</td>
												<td class="cell"><span class="truncate">{{request.description}}</span></td>
												<td class="cell">{{request.user.name}}</td>
												<td class="cell"><span><b>Inicio:</b> {{request.dateStart}} <br> <b>Final:</b> {{request.dateEnd}}</span></td>
                                                <td class="cell"><span><b>Inicio:</b> {{request.hourStart}} <br> <b>Final:</b> {{request.hourEnd}}</span></td>
												<td class="cell"><span class="badge bg-success">{{request.status}}</span></td>
												<td class="cell">{{request.room.name}}</td>
												<td class="cell"><a class="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
								
										</tbody>
									</table>
						        </div><!--//table-responsive-->
						       
						    </div><!--//app-card-body-->		
						</div><!--//app-card-->
					
						
			        </div><!--//tab-pane-->
			        
			      
			    
				</div><!--//tab-content-->
				
				
			    
		    </div><!--//container-fluid-->
	    </div><!--//app-content-->
	 
    </div><!--//app-wrapper-->    					

 
</div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
setup() {

    const store = useStore()

    const requests = computed(() =>{

      return store.state.currentRequest

    })

    onMounted(() => {
      store.dispatch('getCurrentRequest')
    })

    

    return {

      requests

    }


  }


};


</script>

<style>
.app-nav-tabs .nav-link.active {
 color: #dc001b!important;
	border-bottom: 3px solid #dc001b!important;
	background: #dc001a17!important;
}
.app-nav-tabs .nav-link:hover {
 color: #dc001b!important;
	
	background: #dc001a17!important;
}
</style>
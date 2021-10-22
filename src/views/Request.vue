
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
					                  <FilterByName/>
					                </form>
					                
							    </div><!--//col-->
						
							    
						    </div><!--//row-->
					    </div><!--//table-utilities-->
				    </div><!--//col-auto-->
			    </div><!--//row-->
			   
			    
		
				<FilterByStatus/>
				
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
												<td class="cell">
													<span class="badge bg-success" v-if="request.status == 'Accepted'">Aceptada</span>
													<span class="badge bg-warning" v-if="request.status == 'Pending'">Pendiente</span>
													<span class="badge bg-danger" v-if="request.status == 'Cancelled'">Cancelada</span>
												</td>
												<td class="cell">{{request.room.name}}</td>
												<td class="cell"><router-link class="btn-sm app-btn-secondary" :to="{
													name: 'SingleRequest',
													params: {id: request.id}
												}">Ver</router-link></td>
											</tr>
								
										</tbody>
									</table>
						        </div><!--//table-responsive-->
						       
						    </div><!--//app-card-body-->		
						</div><!--//app-card-->
					<nav class="app-pagination">
							<ul class="pagination justify-content-center">
								<li class="page-item ">
									<a class="page-link" href="#" v-if="pages.current > 1" @click.prevent="changePage(pages.current - 1)">Anterior</a>
							    </li>
								
								<li class="page-item " exact-active-class="active" v-for="page in pagesNumber" :key="page.to"  @click.prevent="changePage(page)"><a class="page-link" href="#"  >{{page}}</a></li>
								
								<li class="page-item">
								    <a class="page-link" href="#" v-if="pages.current <  pages.last_page" @click.prevent="changePage(pages.current + 1)">Siguiente</a>
								</li>
							</ul>
						</nav><!--//app-pagination-->
						
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
import FilterByStatus from '@/components/FilterByStatus.vue'
import FilterByName from '@/components/FilterByName.vue'
export default {
	components:{
		FilterByStatus,
		FilterByName
	},
setup() {

    const store = useStore()

    const requests = computed(() =>{
		
      return store.state.requestFilter

    })

	const pages = computed(() =>{
		
		
		return store.state.pagination
	})
	
	const pagesNumber = computed (() =>{
		let page = store.state.pagination
		let offset = 2;
		
		
		let from = page.current - offset;
		
		if(from < 1){
			from = 1;

		}

		let to = from + (offset * 2)

		if(to >= page.last_page){

			to = page.last_page
		}

		let pagesArray = [];

		while(from <= to){
			pagesArray.push(from);
			from++;
		}
		
		return pagesArray		
	})

    onMounted(() => {
      store.dispatch('getCurrentRequest')
    })
	
    const changePage = ((page)=>{
		
		pages.current = page;
		store.dispatch('getCurrentRequest',page)
	})

    return {

      requests,
	  changePage,
	  pages,
	  pagesNumber

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
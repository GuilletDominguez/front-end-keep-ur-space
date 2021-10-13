<template>
  	    <nav id="orders-table-tab" class="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
				    <a class="flex-sm-fill text-sm-center nav-link active item" id="orders-all-tab" data-bs-toggle="tab" role="tab" aria-controls="orders-all"   aria-selected="true" @click="filter('')">Todas</a>
				    <a class="flex-sm-fill text-sm-center nav-link item"  id="orders-paid-tab" data-bs-toggle="tab"  role="tab" aria-controls="orders-paid" aria-selected="false" @click="filter('Accepted')">Aceptadas</a>
				    <a class="flex-sm-fill text-sm-center nav-link item" id="orders-pending-tab" data-bs-toggle="tab"  role="tab" @click="filter('Pending')">Pendientes</a>
				    <a class="flex-sm-fill text-sm-center nav-link item" id="orders-pending-tab" data-bs-toggle="tab"  role="tab" @click="filter('Cancelled')">Cancelar</a>
				</nav>
</template>

<script>
import { useStore} from 'vuex'
export default {
setup(){

    const store = useStore();
    const filter = ((status)=>{
        
        store.dispatch('filterByStatus',status)
    })

    return{
        filter
    }



}
}
</script>

<style>
    /* .item{
        padding: 1rem 0.5rem;
        background-color: var(--background-card);
        text-align: center;
        cursor: pointer;
        &:hover{
            color: var(--text-orange);
        }
        
    } */
</style>
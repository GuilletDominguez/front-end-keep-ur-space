<template>

  <Nav/>
  <router-view/>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Nav from '@/components/Nav.vue'
export default {
components:{
    Nav
},
setup() {
  const store = useStore()
 
}



}


</script>

<style>

</style>
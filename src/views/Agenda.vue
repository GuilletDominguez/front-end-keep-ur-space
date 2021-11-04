
<template>
  <div class="app">
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <FullCalendar
            :options="calendarOptions"
            :buttontext="{
              today: 'Hoy',
              month: 'Mes',
              week: 'Semana',
              day: 'Día',
              list: 'Listado',
            }"
            :weekends="false"
            :selectable="true"
            :events="EVENTS"
          />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  created() {
    const store = useStore();
 
store.dispatch("getReserves")
 
 this.reserves = store.state.reserves 

   for(let i = 0; i < this.reserves.length ; i++){

    let event = {
         title: this.reserves[i].room.name, // a property!
      start: this.reserves[i].dateStart, // a property!
      end: this.reserves[i].dateEnd // a property! ** see important note below about 'end' **
     }
    this.calendarOptions.events.push(event)
   }

 
  },
  data() {
    return {
      reserves:[],
      calendarOptions: {
        locale:'es',
        buttonText:{
              today: 'Hoy',
              month: 'Mes',
              week: 'Semana',
              day: 'Día',
              list: 'Listado',
            },
        plugins: [dayGridPlugin, interactionPlugin],
        headerToolbar: {
          center: "dayGridWeek", // buttons for switching between views
        },
        initialView: "dayGridWeek",
        weekends: false,
        events: [
         
        ],
      },
    };
  },
};
</script>

<style>
</style>
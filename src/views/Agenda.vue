
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

import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        headerToolbar: {
          center: "dayGridMonth, dayGridWeek, dayGridDay", // buttons for switching between views
        },
        initialView: "dayGridWeek",
        weekends: false,
         events: [
          { title: 'event 1', date: '2021-10-27' },
          { title: 'event 2', date: '2021-10-28' }
        ]
      },
    };
  },
};
</script>

<style>
</style>
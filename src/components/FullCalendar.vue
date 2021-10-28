<template>
  <div style="background-color: white; padding: 25px;">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>


import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth'
      }
    }
  }
   
}
</script>

<style>

</style>
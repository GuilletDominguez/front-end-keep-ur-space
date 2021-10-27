<template>

<Fullcalendar 
    locale="es"
    :plugins="calendarPlugins"
    :header="{ //posicion del titulo, año
        left: 'title',
        center:'dayGridMonth, timeGridWeek, timeGridDay, ListWeek',
        right:'prev today next'
    }"
    :buttontext="{
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        list: 'Listado'
    }"
        :weekends="true" 
        :selectable= "true"
        :events="EVENTS"
     />
</template>

<script>
require('@fullcalendar/core/main.min.css')
require('@fullcalendar/daygrid/main.min.css')
require('@fullcalendar/timegrid/main.min.css')

import Fullcalendar from '@fullcalendar/vue'
import DayGridPlugin from '@fullcalendar/daygrid'
import TimeGridPlugin from '@fullcalendar/timegrid'
import InteractionPlugin from '@fullcalendar/interaction'
import ListPlugin from '@fullcalendar/list'

import {mapGetters} from 'vuex'

export default {
    data: () => ({ 
    calendarPlugins: [ 
        DayGridPlugin,
        TimeGridPlugin,
        InteractionPlugin,
        ListPlugin
    ] 
    }),   
    components: {Fullcalendar},
    // computed: { 
    //     // ...mapGetters("EVENTS")
    // }    
    }

</script>

<style>

</style>
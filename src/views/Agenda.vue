<template>

    <div class="app">


        <div class="app-wrapper">

            <div class="app-content pt-3 p-md-3 p-lg-4">
                <div class="container-xl">
                    <FullCalendar />
                </div>
            </div>
        </div>
    </div>

        <!-- <Fullcalendar
    id="FullCalendar"
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
     /> -->
        <!-- Importante -->
</template>

<script>
    /* require('@fullcalendar/core/main.min.css')
require('@fullcalendar/daygrid/main.min.css')
require('@fullcalendar/timegrid/main.min.css') */

    /* window.fullcalendar = require('@fullcalendar/core/vdom.js')
    window.fullcalendar = require('@fullcalendar/common/main.min.css')
    window.fullcalendar = require('@fullcalendar/daygrid/main.min.css')
    window.fullcalendar = require('@fullcalendar/timegrid/main.min.css') */
    /* Importante */

    /* import "../../node_modules/@fullcalendar/common/main.min.css";
    import "../../node_modules/@fullcalendar/daygrid/main.min.css";
    import "../../node_modules/@fullcalendar/timegrid/main.min.css"; */

    /* import FullCalendar from '../components/FullCalendar.vue'
    import '@fullcalendar/core/vdom'
    import Fullcalendar from '@fullcalendar/vue3'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import interactionPlugin from '@fullcalendar/interaction'
    import listPlugin from '@fullcalendar/list' */
    /* Importante */

    import {
        mapGetters
    } from 'vuex'

    import FullCalendar from '../components/FullCalendar.vue'
    export default {
        /* data: () => ({ 
        calendarPlugins: [ 
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin
        ] 
        }),    */
        /* Importante */
        components: {
            /* Fullcalendar,  */
            FullCalendar
        },
        // computed: { 
        //     // ...mapGetters("EVENTS")
        // }    

        /*     components: {
                FullCalendar
            } */
    }
</script>

<style>
    #FullCalendar {
        margin: 25%;
    }
</style>
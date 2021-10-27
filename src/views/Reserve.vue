<template>
    <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
            <div class="card-body">
                <!-- <h6 class="card-title mb-3">This appointment is for</h6> -->
                <div class="d-flex flex-row"></div>
                <h6 class="information mt-4">
                    Rellene los siguientes campos para reservar una sala
                </h6>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-floating mb-3">
                            <input type="text" disabled class="form-control" id="floatingInput" placeholder="name@example.com" :value="user">
                            <label for="floatingInput">Nombre del solicitante</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="form-floating">
                                <select v-model="selected" @change="onChange(selected)" class="form-select" id="floatingSelect">
                                    <option disabled value="">----</option>
                                    <option v-for="room in rooms" :key="room.id" :value="room.id">{{room.name}}</option>
                                   
                                </select>
                                <label for="floatingSelect">¿Qué sala quieres reservar?</label>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <br>
                            <div id="date">
                                <label for="">Desde el día:</label>
                                <input v-model="data.dateStart" type="date" name="" id="" >
                                <br>
                                <label for="">Hasta el día:</label>
                                <input v-model="data.dateEnd" type="date" name="" id="" >
                            </div>
                              <div id="date">
                                <label for="">Desde la hora:</label>
                                <input v-model="data.hourStart" type="time" name="" id="">
                                <br>
                                <label for="">Hasta la hora:</label>
                                <input v-model="data.hourEnd" type="time" name="" id="" >
                            </div>
                            <br>
                            <br>
                           
                            
                            <div class="input-group">
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <br>
                            <div class="input-group">
                                <textarea id="textarea" cols="50" rows="3"
                                    placeholder="¿Para qué quieres reservar esta sala?" v-model="data.description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <button class="btn btn-danger btn-block confirm-button" @click.prevent="request">
                    Confirmar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
setup() {

    const store = useStore()
    const user = computed(() =>{
    return localStorage.getItem('user')
    
    })

   const selected = '';
    const data = {
        user_id: JSON.parse(localStorage.getItem('user_id')),
        dateStart : '',
        dateEnd : '',
        hourStart : '',
        hourEnd : '',
        room_id: '',
        description : '',
    }

    const rooms = computed(() =>{
      return store.state.rooms
    })
    
    const request = ((a)=>{      
        console.log(data)
         store.dispatch('createRequest',data)
    })
  
     onMounted(() => {
      store.dispatch('getRooms')
    })

    const onChange = ((value) =>{
            data.room_id = value            
        })
    return {

    user,
    rooms,
    request,
    data,
    selected,
    onChange
    }
  },
    methods:{
 
        }
    }
</script>

<style scopped>
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");

    #fecha {
        width: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
    }

    body {
        background: url("../assets/images/background/desk-593327.jpg") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    textarea {
        max-width: 100%;
    }

    @media (min-width: 1200px) {
        .card {
            margin-top: 1rem;
            margin-left: 13rem;
        }
    }
</style>
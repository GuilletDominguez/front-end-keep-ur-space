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
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Nombre del solicitante</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="form-floating">
                                <select class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option selected>----</option>
                                    <option value="1">Sala 1</option>
                                    <option value="2">Sala 2</option>
                                    <option value="3">Sala 3</option>
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
                                <input type="date" name="" id="" :disabled="disabled" v-model="checked">
                                <br>
                                <label for="">Hasta el día:</label>
                                <input type="date" name="" id="" :disabled="disabled" v-model="checked">
                            </div>
                            <br>
                            <br>
                            <input class="form-check-input me-1 primary" type="checkbox" name="" id="" @change="checked">Quiero reservar esta sala a fecha de hoy
                            
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
                                    placeholder="¿Para qué quieres reservar esta sala?"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" d-flex flex-column text-center px-5 mt-3 mb-3">
                    <small class="agree-text">By Booking this appointment you agree to the</small>
                    <a href="#" class="terms">Terms & Conditions</a>
                </div>
                <button class="btn btn-danger btn-block confirm-button">
                    Confirm
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    const data = {
    data: {
        checked : false
    }}
    export default {

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
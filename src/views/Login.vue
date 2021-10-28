
<template>
  <div class="app app-login p-0">
    <div class="row g-0 app-auth-wrapper">

      <div
        style="background-color: ; url(../assets/images/background/background-2.jpg);"
        class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5"
      >
        <div class="d-flex flex-column align-content-end">
          <div class="app-auth-body mx-auto">
            <div class="app-auth-branding mb-4">
              <a class="app-logo" href="index.html"
                ><img
                  class="logo-icon me-2"
                  src="../assets/images/background/Imagotipo_Vertical_CMYK.svg"
                  alt="logo"
              /></a>
            </div>
            <h2 class="auth-heading text-center mb-5">RESERVA DE SALAS</h2>
            <div class="auth-form-container text-start">

              <form @submit.prevent="login" class="auth-form login-form">
                <div class="email mb-3">
                  <label class="sr-only" for="email">Email</label>
                  <input
                    v-model="user.email"
                    id="email"
                    name="email"
                    type="email"
                    class="form-control email"
                    placeholder="Email "
                    required="required"
                  />
                </div>
                <!--//form-group-->
                <div class="password mb-3">
                  <label class="sr-only" for="signin-password"
                    >Contraseña</label
                  >
                  <input
                    v-model="user.password"
                    id="password"
                    name="password"
                    type="password"
                    class="form-control password"
                    placeholder="contraseña"
                    required="required"
                  />
                  <div class="extra mt-3 row justify-content-between">
                    <div class="col-6"></div>
                    <!--//col-6-->
                  </div>
                  <!--//extra-->
                </div>
                <!--//form-group-->
                <div class="text-center">
                  <button
                    style="background-color: red"
                    type="submit"
                    class="btn app-btn-primary w-100 theme-btn mx-auto"
                  >
                    Entrar
                  </button>
                </div>
              </form>

            </div>
            <!--//auth-form-container-->
          </div>
          <!--//auth-body-->

          <footer class="app-auth-footer">

            <div class="container text-center py-3">
              <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
            </div>

          </footer>
          <!--//app-auth-footer-->
        </div>
        <!--//flex-column-->
      </div>
      <!--//auth-main-col-->
      <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div class="auth-background-holder"></div>


      </div>
    </div>
  </div>
</template>

<script>


import { useStore } from 'vuex'
import router from '../router';
export default {

  setup() {
    const user = {
      email: "",
      password: "",
    };

    const store = useStore();

    const login = (a) => {
      console.log(user);
      store.dispatch("login", user);
      router.push({name: 'Home'})
    };

    return {
      login,
      user,
    };
  },
};
</script>

<style scoped>
.app-login .auth-background-holder[data-v-26084dc2] {
  background: url(../assets/images/background/background-0.jpg) no-repeat center
    center !important;
width: 100% !important;
}

.app-auth-wrapper .app-logo .logo-icon {
  width: 150px;
  height: 150px;
}
.app-login .auth-background-holder {
  width: 800px !important;
  height: 80px !important;
  background-color: white !important;


.form-control {
  border: 1px solid black;
}
input,
button,
select,
optgroup,
textarea {
  border-radius: 15px;
}

.app-auth-wrapper {
  height: 115vh;
}

</style>
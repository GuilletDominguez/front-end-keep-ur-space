<template>
   <div class="row g-4" v-for="user in users" :key="user.id">
            <div class="col-6 col-md-4 col-xl-3 col-xxl-2">
              <div class="app-card app-card-doc shadow-sm h-100" >
                <div class="app-card-thumb-holder p-3">
             
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>

               
                  <!-- <span class="badge bg-success">Nuevo </span> -->
                  <!-- <router-link class="app-card-link-mask" :to="{name:'Perfil'}"> </router-link> -->
                </div>
                <div class="app-card-body p-3 has-card-actions">
                  <!-- <h4 class="app-doc-title truncate mb-0"><a href="#file-link">Doc lorem ipsum dolor sit amet</a></h4> -->
                  <div class="app-doc-meta" >
                    <ul class="list-unstyled mb-0">
                      <li><span class="text-muted">Nombre:</span> {{user.name}}</li>
                      <li>
                        <span class="text-muted">Email:</span> {{user.email}}
                      </li>
                        <li>
                        <span class="text-muted">Permiso:</span> {{user.rol.name}}
                      </li>
                
                    </ul>
                  </div>
                  <!--//app-doc-meta-->

                  <div class="app-card-actions">
                    <div class="dropdown">
                      <div
                        class="dropdown-toggle no-toggle-arrow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-three-dots-vertical"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                          />
                        </svg>
                      </div>
                      <!--//dropdown-toggle-->
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#"
                            ><svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              class="bi bi-pencil me-2"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                              /></svg
                            >Edit</a
                          >
                        </li>
                      </ul>
                    </div>
                    <!--//dropdown-->
                  </div>
                  <!--//app-card-actions-->
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
            </div>
            <!--//col-->

       

            <!--//col-->

           
            <!--//col-->
          </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
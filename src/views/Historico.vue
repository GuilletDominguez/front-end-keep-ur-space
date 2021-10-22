<template>
  <div class="app">
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <div class="row g-3 mb-4 align-items-center justify-content-between">
            <div class="col-auto">
              <h1 class="app-page-title mb-0">Historico</h1>
            </div>
            <div class="col-auto">
              <div class="page-utilities">
                <div
                  class="
                    row
                    g-2
                    justify-content-start justify-content-md-end
                    align-items-center
                  "
                >
                  <div class="col-auto">
                    <form class="table-search-form row gx-1 align-items-center">
                      <div class="col-auto"></div>
                      <div class="col-auto"></div>
                    </form>
                  </div>

                  <div class="col-auto"></div>
                </div>
              </div>
            </div>
          </div>
	<FilterByStatus/>
          <div class="tab-content" id="orders-table-tab-content">
            <div
              class="tab-pane fade show active"
              id="orders-all"
              role="tabpanel"
              aria-labelledby="orders-all-tab"
            >
              <div class="app-card app-card-orders-table shadow-sm mb-5">
                <div class="app-card-body">
                  <div class="table-responsive">
                    <table class="table app-table-hover mb-0 text-left">
                      <thead>
                        <tr>
                          <th class="cell">id</th>
                          <th class="cell">Descripción</th>
                          <th class="cell">Fecha</th>
                          <th class="cell">Hora</th>
                          <th class="cell">Estado</th>
                          <th class="cell">Sala</th>
                          <th class="cell"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="request in requests" :key="request.id">
                          <td class="cell">{{ request.id }}</td>
                          <td class="cell">
                            <span class="truncate">{{
                              request.description
                            }}</span>
                          </td>

                          <td class="cell">
                            <span
                              ><b>Inicio:</b> {{ request.dateStart }} <br />
                              <b>Final:</b> {{ request.dateEnd }}</span
                            >
                          </td>
                          <td class="cell">
                            <span
                              ><b>Inicio:</b> {{ request.hourStart }} <br />
                              <b>Final:</b> {{ request.hourEnd }}</span
                            >
                          </td>
                          <td class="cell">
                            <span
                              class="badge bg-success"
                              v-if="request.status == 'Accepted'"
                              >Aceptada</span
                            >
                            <span class="badge bg-warning" v-else
                              >Pendiente</span
                            >
                          </td>
                          <td class="cell">{{ request.room.name }}</td>
                          <td class="cell">
                            <router-link
                              class="btn-sm app-btn-secondary"
                              :to="{
                                name: 'SingleRequest',
                                params: { id: request.id },
                              }"
                              >Ver
                            </router-link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--//table-responsive-->
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
            </div>

            <div
              class="tab-pane fade"
              id="orders-paid"
              role="tabpanel"
              aria-labelledby="orders-paid-tab"
            >
              <div class="app-card app-card-orders-table mb-5">
                <div class="app-card-body">
                  <div class="table-responsive">
                    <table class="table mb-0 text-left">
                      <thead>
                        <tr>
                          <th class="cell">Order</th>
                          <th class="cell">Product</th>
                          <th class="cell">Customer</th>
                          <th class="cell">Date</th>
                          <th class="cell">Status</th>
                          <th class="cell">Total</th>
                          <th class="cell"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="cell">#15346</td>
                          <td class="cell">
                            <span class="truncate"
                              >Lorem ipsum dolor sit amet eget volutpat
                              erat</span
                            >
                          </td>
                          <td class="cell">John Sanders</td>
                          <td class="cell">
                            <span>17 Oct</span><span class="note">2:16 PM</span>
                          </td>
                          <td class="cell">
                            <span class="badge bg-success">Paid</span>
                          </td>
                          <td class="cell">$259.35</td>
                          <td class="cell">
                            <a class="btn-sm app-btn-secondary" href="#"
                              >View</a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--//table-responsive-->
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
            </div>
            <!--//tab-pane-->

            <div
              class="tab-pane fade"
              id="orders-pending"
              role="tabpanel"
              aria-labelledby="orders-pending-tab"
            >
              <div class="app-card app-card-orders-table mb-5">
                <div class="app-card-body">
                  <div class="table-responsive"></div>
                  <!--//table-responsive-->
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
            </div>
            <!--//tab-pane-->
            <!-- <div class="tab-pane fade" id="orders-cancelled" role="tabpanel" aria-labelledby="orders-cancelled-tab">

					    <div class="app-card app-card-orders-table mb-5">
						    <div class="app-card-body">
							    <div class="table-responsive">
							        <table class="table mb-0 text-left">
									
										<tbody>
											
										
											
										</tbody>
									</table>
						        </div>
						    </div>	
						</div>
			        </div> -->
          </div>
          <!--//tab-content-->
        </div>
        <!--//container-fluid-->
      </div>
      <!--//app-content-->
    </div>
    <!--//app-wrapper-->
  </div>
</template>

<script>
import FilterByStatus from "@/components/FilterByStatus.vue";

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    FilterByStatus
  
  },

  setup() {
    const store = useStore();

    const requests = computed(() => {
      return store.state.requestFilter;
    });

    onMounted(() => {
      const id = localStorage.getItem("user_id");
      store.dispatch("getCurrentHistorico", id);
    });
    return {
      requests,
    };
  },
};
</script>

<style>
.app-nav-tabs .nav-link.active {
 color: #dc001b!important;
	border-bottom: 3px solid #dc001b!important;
	background: #dc001a17!important;
}
.app-nav-tabs .nav-link:hover {
 color: #dc001b!important;
	
	background: #dc001a17!important;
}
</style>
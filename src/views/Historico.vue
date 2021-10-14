<template>
  <div class="app">
    <div class="app-header-inner">
      <div class="container-fluid py-2">
        <div class="app-header-content">
          <div class="row justify-content-between align-items-center">
            <div class="col-auto">
              <a
                id="sidepanel-toggler"
                class="sidepanel-toggler d-inline-block d-xl-none"
                href="#"
              >
              </a>
            </div>
            <div class="search-mobile-trigger d-sm-none col">
              <i class="search-mobile-trigger-icon fas fa-search"></i>
            </div>
            <div class="app-search-box col">
              <form class="app-search-form">
                <!-- <input type="text" placeholder="Search..." name="search" class="form-control search-input"> -->
                <button
                  type="submit"
                  class="btn search-btn btn-primary"
                  value="Search"
                >
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>

            <div class="app-utilities col-auto">
              <div class="app-utility-item app-notifications-dropdown dropdown">
                <a
                  class="dropdown-toggle no-toggle-arrow"
                  id="notifications-dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  title="Notifications"
                >
                </a>

                <div
                  class="dropdown-menu p-0"
                  aria-labelledby="notifications-dropdown-toggle"
                >
                  <div class="dropdown-menu-header p-3">
                    <h5 class="dropdown-menu-title mb-0">Notifications</h5>
                  </div>
                  <div class="dropdown-menu-content">
                    <div class="item p-3">
                      <div
                        class="
                          row
                          gx-2
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div class="col-auto">
                          <img
                            class="profile-image"
                            src="assets/images/profiles/profile-1.png"
                            alt=""
                          />
                        </div>
                        <div class="col">
                          <div class="info">
                            <div class="desc">
                              Amy shared a file with you. Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit.
                            </div>
                            <div class="meta">2 hrs ago</div>
                          </div>
                        </div>
                      </div>
                      <a class="link-mask" href="notifications.html"></a>
                    </div>
                    <div class="item p-3">
                      <div
                        class="
                          row
                          gx-2
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div class="col-auto">
                          <div class="app-icon-holder"></div>
                        </div>
                        <div class="col">
                          <div class="info">
                            <div class="desc">
                              You have a new invoice. Proin venenatis interdum
                              est.
                            </div>
                            <div class="meta">1 day ago</div>
                          </div>
                        </div>
                      </div>
                      <a class="link-mask" href="notifications.html"></a>
                    </div>
                    <div class="item p-3">
                      <div
                        class="
                          row
                          gx-2
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div class="col-auto">
                          <div class="app-icon-holder icon-holder-mono"></div>
                        </div>
                        <div class="col">
                          <div class="info">
                            <div class="desc">
                              Your report is ready. Proin venenatis interdum
                              est.
                            </div>
                            <div class="meta">3 days ago</div>
                          </div>
                        </div>
                      </div>
                      <a class="link-mask" href="notifications.html"></a>
                    </div>
                    <div class="item p-3">
                      <div
                        class="
                          row
                          gx-2
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div class="col-auto">
                          <img
                            class="profile-image"
                            src="assets/images/profiles/profile-2.png"
                            alt=""
                          />
                        </div>
                        <div class="col">
                          <div class="info">
                            <div class="desc">
                              James sent you a new message.
                            </div>
                            <div class="meta">7 days ago</div>
                          </div>
                        </div>
                      </div>
                      <a class="link-mask" href="notifications.html"></a>
                    </div>
                  </div>

                  <div class="dropdown-menu-footer p-2 text-center">
                    <a href="notifications.html">View all</a>
                  </div>
                </div>
              </div>
              <div class="app-utility-item">
                <a href="settings.html" title="Settings"> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="app-sidepanel" class="app-sidepanel sidepanel-hidden">
      <div id="sidepanel-drop" class="sidepanel-drop"></div>
      <div class="sidepanel-inner d-flex flex-column">
        <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none"
          >&times;</a
        >
        <div class="app-branding">
          <a class="app-logo" href="index.html"
            ><img
              class="logo-icon me-2"
              src="assets/images/app-logo.svg"
              alt="logo"
            /><span class="logo-text">PORTAL</span></a
          >
        </div>

        <div class="app-sidepanel-footer">
          <nav class="app-nav app-nav-footer">
            <ul class="app-menu footer-menu list-unstyled">
              <li class="nav-item">
                <a class="nav-link" href="settings.html">
                  <span class="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-gear"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Settings</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/"
                >
                  <span class="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-download"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Download</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/"
                >
                  <span class="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-file-person"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">License</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

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
												<td class="cell">{{request.id}}</td>
												<td class="cell"><span class="truncate">{{request.description}}</span></td>
								

              
												<td class="cell"><span><b>Inicio:</b> {{request.dateStart}} <br> <b>Final:</b> {{request.dateEnd}}</span></td>
                                                <td class="cell"><span><b>Inicio:</b> {{request.hourStart}} <br> <b>Final:</b> {{request.hourEnd}}</span></td>
												<td class="cell">
													<span class="badge bg-success" v-if="request.status == 'Accepted'">Aceptada</span>
													<span class="badge bg-warning" v-else>Pendiente</span>
												</td>
												<td class="cell">{{request.room.name}}</td>
												<td class="cell">
                          <router-link class="btn-sm app-btn-secondary"
                           :to="{
													name: 'SingleRequest',
													params: {id: request.id}
												}">View
                        </router-link></td>
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
import FilterByName from "@/components/FilterByName.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    FilterByStatus,
    FilterByName,
  },

  setup() {
    const store = useStore();

    const requests = computed(() => {
      return store.state.currentRequest;
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
</style>
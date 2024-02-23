import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import EntreePage from "../views/EntreePage.vue";
import SortiePage from "../views/SortiePage.vue";
import HistoriquePage from "../views/HistoriquePage.vue";
import StockPage from "../views/StockPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sortie",
    name: "sortie",
    component: SortiePage,
  },
  {
    path: "/entree",
    name: "entree",
    component: EntreePage,
  },
  {
    path: "/stock",
    name: "stock",
    component: StockPage,
  },
  {
    path: "/historique",
    name: "historique",
    component: HistoriquePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

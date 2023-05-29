import { createRouter, createWebHistory } from "vue-router";
import Card from "@/views/Card.vue";
import Reg from "@/views/Reg.vue";

const routes = [{
        path: "card",
        name: "card",
        component: Card,
    },
    {
        path: "reg",
        name: "reg",
        component: Reg,
    },
];

const router = createRouter({
    mode: "history",
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
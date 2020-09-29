import Vue from 'vue'
import Router from 'vue-router'
import EachQuestion from './components/EachQuestion'
import Questions from "@/components/Questions";


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/Questions',
            name: 'Questions',
            component: Questions
        },
        {
            path:'/EachQuestion',
            name: 'EachQuestion',
            component: EachQuestion
        }

    ]
})
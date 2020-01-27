// components
import About from '../views/About'
import Home from '../views/Home'
import Users from '../views/users/Users'
import Dev from '../views/Dev'
import Contacts from '../views/Contacts'
import Portfolio from '../views/Portfolio'
import NotFoundComponent from '../views/NotFoundComponent'


export default  [
    { path: '*', component: NotFoundComponent },
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/about',
        name: 'about',
        component: About,
        beforeRouteLeave (to, from, next) {
            const answer = window.confirm('Вы хотите уйти? У вас есть несохранённые изменения!')
            next(false)
            if (answer) {
                // next()
            } else {
                // next(false)
            }
        }
    },{
        path: '/users',
        name: 'users',
        component: Users,
    },{
        path: '/user/:id',
        name: 'user',
        component: Users,
        props:true
    },{
        path: '/dev',
        name: 'dev',
        component: Dev,
        props:true
    },{
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
        props:true
    },{
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio,
        props:true
    },
];


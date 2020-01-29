import Login from '../views/Login'
import Register from '../views/Register'
import Swiper from '../views/Swiper'
import Content from '../views/Content'
import Details from '../views/Details'

const routerConfig = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/swiper',
        component:Swiper
    },
    {
        path:'/content',
        component:Content
    },
    {
        path:'/details',
        component:Details
    },
    {
        from:'/',
        to:'/login'
    }
]

export default routerConfig
import Home from '~/pages/Home';
import Admin from '~/components/AdminForm';

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/admin', component: Admin}
]

const privateRoutes = []

export {publicRoutes, privateRoutes}
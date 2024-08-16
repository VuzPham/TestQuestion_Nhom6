import Home from '~/pages/Home';

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/admin', component: Home}
]

const privateRoutes = []

export {publicRoutes, privateRoutes}
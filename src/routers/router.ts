import { lazy } from 'react';

const UsersPage = lazy(() => import('../pages/Users.page'));
const HomePage = lazy(() => import('../pages/Home.page'));

const routersMain = [
    { title: 'Users', path: '/users', component: UsersPage },
    { title: 'Home', path: '/', component: HomePage },
];

const routes = [...routersMain];

export default routes;

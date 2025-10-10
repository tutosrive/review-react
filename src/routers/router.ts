import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home.page'));
const UsersPage = lazy(() => import('../pages/Users.page'));
const LinksPage = lazy(() => import('../pages/Links.page'));
const AboutPage = lazy(() => import('../pages/About.page'));

const configs = [
    { title: 'Home', path: '/', component: HomePage },
    { title: 'Users', path: '/users', component: UsersPage },
    { title: 'Links', path: '/links', component: LinksPage },
    { title: 'About', path: '/about', component: AboutPage },
];

const routes = [...configs];

export default routes;

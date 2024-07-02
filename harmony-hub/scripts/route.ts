/*
Name: Soham Patel, Salvi Patel
Date: April 13, 2024
Group: 7
Course Code : INFT-2202-02
Assignment 4: EJS Templating and MongoDB Atlas Integration
*/

// route.ts

interface Route {
    path: string;
    component: string;
}

const routes: Route[] = [
    { path: '/', component: 'home.ejs' },
    { path: '/blog', component: 'blog.ejs' },
    { path: '/contact', component: 'contact.ejs' },
    { path: '/event', component: 'event.ejs' },
    { path: '/gallery', component: 'gallery.ejs' },
    { path: '/home', component: 'home.ejs' },
    { path: '/login', component: 'login.ejs' },
    { path: '/portfolio', component: 'portfolio.ejs' },
    { path: '/privacy-policy', component: 'privacy-policy.ejs' },
    { path: '/register', component: 'register.ejs' },
    { path: '/services', component: 'services.ejs' },
    { path: '/statistics', component: 'statistics.ejs' },
    { path: '/team-page', component: 'team-page.ejs' },
    { path: '/terms-of-service', component: 'terms-of-service.ejs' }
];

export default routes;

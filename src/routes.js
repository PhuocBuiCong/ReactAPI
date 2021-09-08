import React from 'react';
import Homepage from './pages/HomePage/Homepage';
import NotFound from './pages/NotFound/NotFound';
import ProductListPage from './pages/ProductListPage/ProductListPage';

    const routes=[
        {
            path : '/',
            exact: true,
            main : ()=> <Homepage />
        },
        {
            path: '',
            exact: false,
            main : ()=> <NotFound />
        },
        {
            path: '/product-list',
            exact: false,
            main : ()=> <ProductListPage />
        }

    ];

export default routes;
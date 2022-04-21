import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Paths from '@src/consts/Paths';
import {IPublicRoute, IRequireAuth} from '@src/types/routes';
import PublicLayout from '@src/layouts/PublicLayout';
import AppLayout from '@src/layouts/AppLayout';
import {Home, LoginPage, RegisterPage} from '@src/pages';


export const Router: FC = () => {
    return (
        <Routes>
            <Route path={Paths.genialno} element={
                <RequireAuth layout={AppLayout} component={Home} redirectTo='/login'/>
            }/>
            <Route path={Paths.account.login} element={
                <PublicRoute layout={PublicLayout} component={LoginPage}/>
            }/>
            <Route path={Paths.account.register} element={
                <PublicRoute layout={PublicLayout} component={RegisterPage}/>
            }/>
        </Routes>
    );
};

const RequireAuth: FC<IRequireAuth> = ({ component: Component, layout: Layout, redirectTo = '/login' }) => {
    const isAuthenticated = true;

    if(!isAuthenticated) {
        return <Navigate to={redirectTo}/>;
    }

    return <Layout>
        <Component/>
    </Layout>;
};

const PublicRoute: FC<IPublicRoute> = ({ component: Component, layout: Layout}) => {
    return <Layout>
        <Component/>
    </Layout>;
};
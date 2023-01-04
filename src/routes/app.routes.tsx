import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Conversor from '../pages/Conversor';
import Layout from '../components/Layout';

const AppRoutes: React.FC = () =>(
    <Layout>
        <Switch>
            <Route path="/" exact component={Conversor}/>
        </Switch>
    </Layout>
);

export default AppRoutes;
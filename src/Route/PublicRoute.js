import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utilities/Index';

function PublicRoute({component:Component, restricted = false, ...rest}) {
    return (
        <div>
            <Route {...rest} render = {props =>(
                isLogin() && restricted ?
                <Redirect to={"/"}/>
                :
                <Component {...props}/>
            )}
            />

        </div>
    );
}

export default PublicRoute;
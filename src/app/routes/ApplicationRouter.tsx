import React, { memo, Suspense } from "react";

import FullscreenLoader from "../components/fullscreenLoader";
import routeNames from "./routeNames";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../components/navigation";

const ApplicationRouter = (): JSX.Element => {
    return (
        <Router>
            <Navigation />
            <Suspense fallback={<FullscreenLoader />}>
                <Switch>
                    {routes.map(route => (
                        <Route key={route.name} {...route} />
                    ))}
                    <Route exact path="/">
                        <Redirect to={routeNames.INVENTORY} />
                    </Route>
                    <Route path="/">
                        <Redirect to={routeNames.ERROR_NOT_FOUND} />
                    </Route>
                </Switch>
            </Suspense>
        </ Router>
    );
};

export default memo(ApplicationRouter);

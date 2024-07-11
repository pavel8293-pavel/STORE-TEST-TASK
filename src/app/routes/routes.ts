import { lazy } from "react";
import RouteValue from "./interfaces";
import routeNames from "./routeNames";

const Inventory = lazy(() => import("../pages/inventory"));
const NewProduct = lazy(() => import("../pages/newProduct"));

const routes: RouteValue[] = [
    {
        name: routeNames.INVENTORY,
        path: routeNames.INVENTORY,
        exact: true,
        component: Inventory,
    },
    {
        name: routeNames.NEW_PRODUCT,
        path: routeNames.NEW_PRODUCT,
        exact: true,
        component: NewProduct,
    },
];

export default routes;

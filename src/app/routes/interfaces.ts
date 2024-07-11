import { RouteProps } from "react-router";

export default interface RouteValue {
    component: NonNullable<RouteProps["component"]>;
    name: string;
    path: string;
    exact?: boolean;
}

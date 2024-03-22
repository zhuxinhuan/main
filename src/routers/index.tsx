import { lazy, Suspense, ReactNode } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import LoadingComponent from "@/components/Loading";
import LayoutPage from "@/views/main";
import { MainContent } from "@/components";
const Introduction = lazy(() => import("@/views/introduction"));
const Error404 = lazy(() => import("@/views/error/404"));
const load = (children: ReactNode): ReactNode => (
    <Suspense fallback={<LoadingComponent />}>{children}</Suspense>
);
//定义路由数据
export const routes: RouteObject[] = [
    {
        path: "/",
        element: load(<LayoutPage />),
        children: [
            { path: "/", element: <MainContent /> },
            {
                path: "/cooperation",
                element: load(<Introduction />),
            },
        ]
    },
    {
        path: '*',
        element: load(<Error404 />)
    },
];
export default createBrowserRouter(routes);
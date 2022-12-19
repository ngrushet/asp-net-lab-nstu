import Auth from "./pages/Auth"
import Shop from './pages/Shop'
import DevicePage from './pages/ProductPage'
import AdminPanel from './pages/AdminPanel'
import { ADMIN_PANEL_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, ADMIN_ADD_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_PANEL_ROUTE,
        Component: AdminPanel
    },
    {
        path: ADMIN_ADD_ROUTE,
        Component: Auth
    },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
];
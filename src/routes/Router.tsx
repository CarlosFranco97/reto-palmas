import { createBrowserRouter } from "react-router-dom";
import RetoPalmas from "../pages/home/RetoPalmas";
import MenClothing from "../pages/clothing/MenClothing";
import WomenClothing from "../pages/clothing/WomenClothing";
import ReproPerformance from "../pages/service-pages/ReproPerformance";
import StarCeiling from "../pages/service-pages/StarCeiling";
import LedLights from "../pages/service-pages/LedLights";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RetoPalmas />
    }, 
    {
        path: '/clothing/menclothing', 
        element: <MenClothing />
    }, 
    {
        path: '/clothing/womenclothing', 
        element: <WomenClothing />
    }, 
    {
        path: '/services/reproperformance', 
        element: <ReproPerformance />
    }, 
    {
        path: '/services/starceiling',
        element: <StarCeiling />
    }, 
    {
        path: '/services/ledlights',
        element: <LedLights />
    }
]); 

export default router; 
import { createBrowserRouter } from 'react-router-dom';
import RetoPalmas from '../pages/home/RetoPalmas';
import MenClothing from '../pages/clothing/MenClothing';
import WomenClothing from '../pages/clothing/WomenClothing';
import ReproPerformance from '../pages/service-pages/ReproPerformance';
import StarCeiling from '../pages/service-pages/StarCeiling';
import LedLights from '../pages/service-pages/LedLights';
import Thermos from '../pages/product/Thermos';
import Keychains from '../pages/product/Keychains';
import Performance from '../pages/product/Performance';
import Tunning from '../pages/product/Tunning';

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
    },
    {
        path: '/products/thermos', 
        element: <Thermos />
    }, 
    {
        path: '/products/keychains',
        element: <Keychains />
    }, 
    {
        path: '/products/performance', 
        element: <Performance />
    }, 
    {
        path: '/products/tunning', 
        element: <Tunning />
    }

]); 

export default router; 
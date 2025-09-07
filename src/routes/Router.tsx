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
import OrderSummary from '../pages/orderSummary/OrderSummary';
import InsuranceQuoteForm from '../pages/insuranceQuoteForm/InsuranceQuoteForm';
import AddressForm from '../pages/addressFormModal/AddressForm';

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
    }, 
    {
        path: '/addressformm', 
        element: <AddressForm />
    }, 
    {
        path: '/ordersummary', 
        element: <OrderSummary />
    }, 
    {
        path: '/insurancequoteform', 
        element: <InsuranceQuoteForm />
    }
]); 

export default router; 
import { createBrowserRouter } from "react-router-dom";
import RetoPalmas from "../pages/home/RetoPalmas";
import MenClothing from "../pages/clothing/MenClothing";
import WomenClothing from "../pages/clothing/WomenClothing";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RetoPalmas />
    }, 
    {
        path: '/menclothing', 
        element: <MenClothing />
    }, 
    {
        path: '/womenclothing', 
        element: <WomenClothing />
    }
]); 

export default router; 
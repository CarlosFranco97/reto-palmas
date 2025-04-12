import { createBrowserRouter } from "react-router-dom";
import RetoPalmas from "../pages/home/RetoPalmas";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RetoPalmas />
    }
]); 

export default router; 
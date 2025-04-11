import { createBrowserRouter } from "react-router-dom";
import RetoPalmas from "../RetoPalmas";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RetoPalmas />
    }
]); 

export default router; 
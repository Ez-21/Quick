import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import routes from './router/router.jsx'
import WindowBar from '@/components/windowBar'

document.addEventListener('contextmenu', (e) => {
    // return  e.preventDefault()
})
ReactDOM.createRoot(document.getElementById("root")).render(
    <WindowBar>
        <React.Suspense fallback={<div>请稍后。。</div>}>
            <RouterProvider router={routes}></RouterProvider>
        </React.Suspense>
    </WindowBar>
);

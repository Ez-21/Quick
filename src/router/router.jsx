import  {lazy,Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
const Index  = lazy(()=>import('@/pages/index'))
const Login = lazy(()=>import('@/pages/login'))
const Home = lazy(()=>import('@/pages/home'))
const Gpt = lazy(()=>import('@/pages/gpt'))
const Setting = lazy(()=>import('@/pages/setting'))
const Step1FrameNumber = lazy(()=>import('@/pages/Step1_frameNumber'))
// const Mine = lazy(()=>import('@/pages/Mine'))
export  default  createBrowserRouter([
    {
        path:'/',
        element:<Login index></Login>
    },
    {
        path:'/index',
        element:<Index></Index>,
        children:[
            {
                path:'/index/home',
                element:<Home index></Home>
            },
            {
                path:'/index/gpt',
                element:<Gpt></Gpt>
            },
            {
                path:'/index/setting',
                element:<Setting></Setting>
            },
        ]
    },
    // 视频抽帧
    {
        path:'/Step1FrameNumber',
        element:<Step1FrameNumber></Step1FrameNumber>
    }
])
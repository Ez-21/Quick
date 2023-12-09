import style from './index.module.less'
import min from '@/assets/min.png'
import max from '@/assets/max.png'
import close from '@/assets/closeWindow.png'
import {Modal} from 'antd';
// 导入窗口自定义功能
import {
    minWindow,
    maxWindow,
    closeWindow
} from '@/func'
import {useEffect, useLayoutEffect, useState} from "react";

const App = ({children}) => {
    const [closeStatus, SetCloseStatus] = useState(false)
    const [color, SetColor] = useState('black')
    useLayoutEffect(() => {
        changeBarBackGround()
    }, [window.location.pathname])
    useEffect(() => {
        changeBarBackGround()
    }, []);
    function changeBarBackGround() {
        console.log(location.pathname)
        if (location.pathname === '/') {
            SetColor(val => ' #1F1F1F')
        } else if (location.pathname.includes('/index')) {
            SetColor(val => '#141318');
        } else {
            SetColor(val => 'black')
        }

    }

    return (
        <div className={style.box} style={{
            background: color
        }} draggable>
            <div className={style.set}>
                <div onClick={minWindow}>
                    <img src={min} alt=""/>
                </div>
                <div onClick={() => location.pathname === '/' ? undefined : maxWindow}>
                    <img src={max} alt=""/>
                </div>
                <div onClick={() => SetCloseStatus(true)}>
                    <img src={close} alt=""/>
                </div>
            </div>
            <div className={style.content}>
                {children}
            </div>
            <Modal title="提示" cancelText={'取消'} okText={'退出'} open={closeStatus} onOk={closeWindow}
                   onCancel={() => SetCloseStatus(false)}>
                <p>确认退出吗？</p>
            </Modal>
        </div>
    )
}
export default App
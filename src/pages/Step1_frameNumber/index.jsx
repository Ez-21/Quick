import style from './index.module.less'
import ImgUrl from '@/assets/twelve.jpeg'
import Next from '@/assets/next.png'
import {Checkbox, Progress} from "antd";
import BackBar from "@/components/backBar"
import {useNavigate,useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export default function () {
    const [checkAllStatus, setCheckAllStatus] = useState(false)

    const state = useLocation()
    const goPage = useNavigate()
    const pushPicture = () => {
        goPage('/Step2PushPicture')
    }
    useEffect(()=>{
        console.log(state,'location');
    },[])
    const checkAll = () => {

        setCheckAllStatus(!checkAllStatus)
        content.forEach(item => {
            item.checked = !checkAllStatus
        })

        setContent([...content])
    }
    const [content, setContent] = useState([{
        // img:ImgUrl,
        name: '草稿任务',
        percent: Math.floor(Math.random() * 100),
        checked: false
    }, {
        // img:ImgUrl,
        name: '草稿任务',
        percent: Math.floor(Math.random() * 100),
        checked: false
    }, {
        // img:ImgUrl,
        name: '草稿任务',
        percent: Math.floor(Math.random() * 100),
        checked: false
    }, {
        // img:ImgUrl,
        name: '草稿任务',
        percent: Math.floor(Math.random() * 100),
        checked: false
    },
        {
            // img:ImgUrl,
            name: '草稿任务',
            percent: Math.floor(Math.random() * 100),
            checked: false
        },
        {
            // img:ImgUrl,
            name: '草稿任务',
            percent: Math.floor(Math.random() * 100),
            checked: false
        }])
    return (
        <div className={style.box}>
            <BackBar></BackBar>
            {/*<div className={style.talkBook}>*/}
            {/*    <div>*/}
            {/*        <img src="" alt=""/>*/}
            {/*        教程*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={style.titleBox}>
                <div className={style.step}>
                    <div>视频抽帧</div>
                    <img src={Next} alt=""/>
                    <div className={style.stepKey}>反应生图</div>
                    <img src={Next} alt=""/>
                    <div>合成视频</div>
                </div>
                <div className={style.frame} onClick={pushPicture}>
                    一键抽帧
                </div>
            </div>
            <div className={style.checkAll}>
                <Checkbox onChange={checkAll}></Checkbox>
                <span>全选</span>
            </div>
            <div className={style.contentBox}>

                {
                    content.map(item => (
                        <div className={style.contentItem}>
                            <img src={ImgUrl} alt=""/>
                            <div className={style.mask}>
                                <Progress percent={item.percent} type="circle"></Progress>
                            </div>
                            <div className={style.itemBottom}>
                                <div>{item.name}</div>
                                <Checkbox checked={item.checked}></Checkbox>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

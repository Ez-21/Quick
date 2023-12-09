import style from './index.module.less'
import girl from '/src/assets/girl.jpeg'
import close from '@/assets/close.png'
import backGround from '@/assets/loginBack.png'
import password from '@/assets/password.png'
import phone from '@/assets/phone.png'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {setWindowSize} from "@/func/index.js";
// "width": 987,
//     "height": 572,
const Index = () => {
    const [type,setType] = useState([{name:'手机账号登录',key:1,meta:true},{name:'微信扫码登录',key:2,meta: false}])
    const [show,setShow] = useState(true)
    const GoPage = useNavigate()
    useEffect(() => {
        setWindowSize(987,572)
    }, []);
    const login = ()=>{
        GoPage('/index/home',{
            state:{

            }
        })
    }
    return (
        <div className={style.Box}>
            <div className={style.left} style={{
                background: `url(${backGround})`
            }}>
                <div className={style.titleBox}>
                    <img src={girl} alt=""/>
                    <div className={style.title}>
                        绘唐创作平台
                    </div>
                </div>
            </div>
            <div className={style.right}>
                {/*<img src={close} alt="" className={style.close}/>*/}
                <div className={style.formBox}>
                    <div className={style.loginText} >
                        登录
                    </div>
                    <div className={style.loginTypeChange}>
                        <div className={style.loginStaus}>
                            {
                                type.map((item,index)=>(
                                    <div onClick={()=>setShow(item.meta)} key={item.key} style={(item.meta===show)?{color:'white',fontSize:'17px'}:null}>
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>
                        {
                            show?(
                                <div className={style.formContent}>
                                    <div className={style.userName}>
                                        <img src={phone} alt=""/>
                                        <input type="text" placeholder={'请输入账号'}/>
                                    </div>
                                    <div className={style.codeBox}>
                                        <div className={style.passWord}>
                                            <img src={password} alt=""/>
                                            <input type="password" placeholder={'请输入密码'}/>
                                        </div>
                                        <div className={style.code}>
                                            发送验证码
                                        </div>
                                    </div>
                                    <div className={style.agreeMsg}>
                                        <input type="checkbox"/>
                                        <div
                                            className={style.agreeMsgTetxt}>阅读并同意<span>《用户服务协议》</span>及<span>《隐私政策》</span>
                                        </div>
                                    </div>
                                    <div className={style.btn} onClick={login}>登录</div>
                                </div>
                            ):(
                                <div>
                                    <div>
                                        扫码登录
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index
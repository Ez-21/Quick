import style from './index.module.less'
import book from '@/assets/book.png'
import girl from '@/assets/girl.jpeg'
import Close from '@/assets/closeWindow.png'
import WX from '@/assets/wx.png'
import ZFB from '@/assets/zfb.png'
import Chong from '@/assets/chongzhi.png'
import PushMoney from '@/assets/pushMoney.png'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { getImageUrl } from '../../func'
const App = () => {
    const goPage = useNavigate()
    const [payModalShow, SetPayModalShow] = useState(false)
    const [getModalShow, SetGetModalShow] = useState(false)
    const openPay = () => {
        SetPayModalShow(true)
    }
    const closePay = () => {
        SetPayModalShow(false)
    }
    const closeGet = (status) => {
        if (status) {

        }
        SetGetModalShow(false)

    }
    const gologin = ()=>{
        goPage('/')
    }
    const openGet = () => {
        SetGetModalShow(true)
    }
    return (
        <div className={style.box}>
            {/*支付订单弹窗*/}
            {
                payModalShow && (
                    <div className={style.payModal}>
                        <div className={style.titleTop}>
                            <div>
                                支付订单
                            </div>
                            <img src={getImageUrl('closeWindow')} onClick={closePay} alt=""/>
                        </div>
                        <div className={style.payConent}>
                            <div className={style.one}>
                                <div>购买详情：</div>
                                <div>算球12</div>
                            </div>
                            <div className={style.two}>
                                <div>实付金额：</div>
                                <div><span>￥</span>2000</div>
                            </div>
                            <div className={style.three}>
                                <div style={{
                                    whiteSpace: 'nowrap'
                                }}>
                                    支付方式：
                                </div>
                                <div className={style.payWay}>
                                    <div style={{
                                        marginRight: '16px'
                                    }}>
                                        <div>
                                            <img src={getImageUrl('zfb')} alt=""/>
                                        </div>
                                        <div className={style.payBtn1}>去支付宝支付</div>
                                    </div>
                                    <div>
                                        <div>
                                            <img src={getImageUrl('wx')} alt=""/>
                                        </div>
                                        <div className={style.payBtn2}>生成微信二维码</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {/*立即激活弹窗*/}
            {
                getModalShow && (
                    <div className={style.getModal}>
                        <div className={style.titleTop}>
                            <div>
                                输入激活码激活产品
                            </div>
                            <img src={getImageUrl('closeWindow')} alt="" onClick={() => closeGet()}/>
                        </div>
                        <div className={style.getContent}>
                            <input type="text"/>
                            <div className={style.getBtn} onClick={() => closeGet(true)}>
                                立即激活
                            </div>
                        </div>
                    </div>
                )
            }

            <div className={style.titleBar}>
                <img src={getImageUrl('book')} alt=""/>
                <div>
                    教程
                </div>
            </div>
            <div className={style.content}>
                <div className={style.userInfo}>
                    <div className={style.user}>
                        <img src={girl} alt=""/>
                        <div className={style.userMsg}>
                            <div>
                                林俊杰
                                <div className={style.userStatus} onClick={()=>openGet(true)}>
                                    未激活
                                </div>
                            </div>
                            <div>
                                userId:123123123131211111111
                            </div>
                        </div>

                    </div>
                    {/*<div className={style.get} onClick={openGet}>*/}
                    {/*    立即激活*/}
                    {/*</div>*/}
                    <div className={style.goLogin} onClick={gologin}>
                        立即登录
                    </div>
                </div>
                <div className={style.balance}>
                    <img src={PushMoney} alt=""/>
                    <div className={style.lostMone}>
                        <div>积分余额</div>
                        <div>
                            0.00
                        </div>
                    </div>
                </div>
                <div className={style.recharge}>
                    <div className={style.recharTitle}>
                        <img src={Chong} alt=""/>充值
                    </div>
                    <div className={style.moneyItem}>
                        <div className={style.itemBox} onClick={openPay}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>
                        <div className={style.itemBox}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>
                        <div className={style.itemBox}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>
                        <div className={style.itemBox}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>
                        <div className={style.itemBox}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>
                        <div className={style.itemBox}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>
                        <div className={style.itemBox}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>
                        <div className={style.itemBox}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>

                        <div className={style.itemBox}>
                            <div className={style.itemNumber}>
                                200积分
                            </div>
                            <div>
                                ￥ <span>200</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default App
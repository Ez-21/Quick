import Back from '@/assets/back.png'
import Hot from '@/assets/hot.png'
import Book from '@/assets/book.png'
import style from './index.module.less'
import {useNavigate} from "react-router-dom";

export  default ()=>{
        return(
            <div className={style.box}>
               <div>
                   <img src={Back} alt="" className={style.back}/>
                   <div>
                       <img src="" alt=""/>
                       <img src={Hot} alt=""/>
                   </div>
               </div>
                <div>
                    <img src={Book} alt=""/>
                        教程
                </div>
            </div>
        )
}
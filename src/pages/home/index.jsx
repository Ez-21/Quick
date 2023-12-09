import {Progress} from 'antd';
import style from './index.module.less'
import Add from '@/assets/add.png'
import {  message, Upload } from 'antd';
import {useNavigate} from "react-router-dom";
const App = () => {
    const go = useNavigate()
    const  frameNumber = ()=>{
        go('/Step1FrameNumber')
    }
    return (
        <div className={style.box}>
            <div className={style.content}>
                <div className={style.title}>
                    我的草稿
                    <div className={style.circle}>
                        5
                    </div>
                </div>
                <div className={style.listBox}>
                    <div className={style.createBox} onClick={frameNumber}>
                        <Upload style={{width:'100%',height:'100%'}} multiple>
                             <img src={Add} alt=""/>
                        </Upload>
                        创建任务
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>
                    <div className={style.taskBox}>
                        <div className={style.titleBox}>
                            <div >剪辑任务1</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.createTime}>
                            创建时间：2021-12-22
                        </div>
                        <div>
                            <Progress  strokeLinecap={'round'}  percent={45} size={'small'} strokeColor={'#49AA19'}></Progress>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default App
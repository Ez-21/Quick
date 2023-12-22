import style from './index.module.less'
import ModelSet from '@/assets/modelSet.png'
import Ques from '@/assets/ques.png'
import {Select, Slider, InputNumber} from "antd";
import {useState} from "react";
import {ConfigProvider} from 'antd'

const App = () => {
    const options =
        [
            {value: 'V1', label: 'V1'},
            {value: 'V2', label: 'V2'},
            {value: 'V3', label: 'V3'},
            {value: 'V4', label: 'V4'},
            {value: 'V5', label: 'V5'},

        ]

    const [stepValue, setStepValue] = useState(20);
    const [likeValue, setLikeValue] = useState(0.75);
    const onChangeStep = (newValue) => {
        setStepValue(newValue);
    };
    const onChangeLike = (newValue) => {
        setLikeValue(newValue);
    };
    return (
        <ConfigProvider theme={{
            components: {
                Slider: {
                    railBg: 'rgba(255, 255, 255, 0.08)',
                    algorithm: true,
                    handleColor: '#1755FF',
                    handleActiveColor: '#1755FF',
                    trackBg: '#1755FF',
                },
                Select: {
                    // selectorBg: "#1E1E1E",
                },
                InputNumber: {}
            }
        }}>

            <div className={style.box}>
                <div>
                    <div className={style.title}>
                        <img src={ModelSet} alt=""/>
                        模型配置
                    </div>
                    <div className={style.setItem1}>
                        <span>
                            模型
                        </span>
                        <div>
                            <Select
                                size={'middle'}
                                placeholder="Please select"
                                defaultValue={['a10', 'c12']}
                                style={{
                                    width: '100%',
                                }}
                                options={options}
                            />
                        </div>
                    </div>
                    <div className={style.setItem2}>
                        <div className={style.title}>
                            迭代步数
                            <img src={Ques} alt=""/>
                        </div>
                        <div className={style.slider}>
                            <Slider onChange={onChangeStep} value={stepValue} min={20} max={40}
                                    defaultValue={stepValue}></Slider>
                            <InputNumber min={20}
                                         max={40}
                                         defaultValue={20}
                                         style={{
                                             margin: '0 16px',
                                         }}
                                         step={0.01}
                                         value={stepValue}
                                         onChange={onChangeStep}></InputNumber>
                        </div>
                    </div>
                    <div className={style.setItem2}>
                        <div className={style.title}>
                            图生图相似度
                            <img src={Ques} alt=""/>
                        </div>
                        <div className={style.slider}>
                            <Slider onChange={onChangeLike} step={0.01} value={likeValue} min={0} max={1}
                                    defaultValue={likeValue}></Slider>
                            <InputNumber min={0}
                                         max={1}
                                         style={{
                                             margin: '0 16px',
                                         }}
                                         defaultValue={likeValue}
                                         step={0.01}
                                         value={likeValue}
                                         onChange={onChangeLike}></InputNumber>
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>

    )
}
export default App
import BackBar from "@/components/backBar";
import style from "./index.module.less";
import Next from "@/assets/next.png";
import ClearTye from "@/assets/clearEye.png";
import creatRight from "@/assets/createRight.png";
import createDown from "@/assets/createDown.png";
import createSet from "@/assets/createSet.png";
import {
    Tabs,
    Collapse,
    Checkbox,
    Progress,
    Table,
    ConfigProvider,
    Select,
    Slider,
    InputNumber,
} from "antd";
// one组件
import TabOne from "@/components/tabOne";
// two组件
import TabTwo from "@/components/tabTwo";
// 提示词编辑器组件
import CallWord from '@/components/callWordEd'
// 擦除组件
import WipeCom from '@/components/wipe'
import Wipe from "@/assets/wipe.png";
import { useState, useCallback, useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import { getImageUrl } from "../../func";
export default () => {
    const [CallWorded, setCallWorded] = useState(false)
    const go = useNavigate();
    const [showComp, setShowComp] = useState(1);
    const [picModal, setPicModal] = useState(false);
    const [wipeStatus,setWipeStatus] = useState(false)
    const picSets = (e) => {
        setPicModal(true);
        e.stopPropagation();
    };
    const push = () => {
        setCallWorded(!CallWorded)
    }
    const columns = [
        {
            title: "编号",
            dataIndex: "id",
            width: 110,
            render: (val, record) => {
                return (
                    <div className={style.codeNumer}>
                        <div>{record.id}</div>
                    </div>
                );
            },
        },
        {
            title: "原图",
            dataIndex: "age",
            width: 180,
            render: (val, record) => {
                return <img src={record.age} alt='' className={style.tableImg} />;
            },
        },
        {
            title: "原文",
            dataIndex: "address",
            width: 180,
            render: (data) => {
                return <div className={style.TableBox}>123</div>;
            },
        },
        {
            title: "重写",
            dataIndex: "address",
            width: 180,
            render: (data) => {
                return <div className={style.TableBox}>456</div>;
            },
        },
        {
            title: "反推词",
            dataIndex: "address",
            width: 180,
            render: (data) => {
                return <div className={style.TableBox} onClick={push}>789</div>;
            },
        },
        {
            title: "仿图",
            dataIndex: "address",
            width: 180,
            render: (val, record) => {
                return (
                    <div className={style.TableBoxFang}>
                        <div className={style.indexBox}>
                            {showComp==2&& <div className={style.topBox}>
                                {[1, 2, 3, 4].map((item, index) => {
                                    return (
                                      <div
                                            className={style.indexBoxItem}
                                            style={
                                                item === 1
                                                    ? {
                                                        background: "rgba(255, 255, 255, 0.2)",
                                                        color: "white",
                                                    }
                                                    : undefined
                                            }
                                            key={index}>
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>}
                            <div className={style.bottomBox}></div>
                        </div>
                        <div className={style.black}></div>
                        <img src={record.age} alt='' />
                        <div className={style.wipe} onClick={()=>setWipeStatus(!wipeStatus)} style={
                            showComp!=2?{top:0}:{}
                       }>
                            <img src={Wipe} alt='' />
                            擦除
                        </div>
                        {
                            wipeStatus&&<WipeCom setWipeStatus={setWipeStatus}></WipeCom>
                        }
                        <div className={style.handleBottom}>
                            <div>重新生成</div>
                            <div>重新反推</div>
                        </div>
                    </div>
                );
            },
        },
        {
            title: "历史记录",
            dataIndex: "address",
            width: 90,
            render: (data) => {
                return <div className={style.TableBox} onClick={push}>789</div>;
            },
        },
    ];
    const data = [
        {
            key: 1,
            id: 1,
            name: "Joe Black",
            address: "London No. 1 Lake Park",
            age: "https://img1.baidu.com/it/u=1890390320,3399874998&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1702659600&t=810e04efc22f6305a0f33167ec8ec268",
        },
        {
            key: 2,
            id: 1,
            name: "Joe Black",
            address: "London No. 1 Lake Park",
            age: "https://img1.baidu.com/it/u=3712997108,442011921&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702400400&t=84d7c9831793a4c0e807fd8f947c17b0",
        },
    ];
    const items = [
        {
            key: "1",
            label: (
                <div className={style.tableHead}>
                    <div className={style.headOne}>
                        <div>
                            <div>
                                <Checkbox></Checkbox>
                            </div>
                            <img src={true ? creatRight : createDown} alt='' />
                            <div>庄周梦蝶</div>
                        </div>
                    </div>
                    <div className={style.headTwo}>
                        <Progress
                            strokeColor={"#49AA19"}
                            trailColor={"rgba(255, 255, 255, 0.08)"}
                            percent={10}
                            style={{
                                width: "332px",
                            }}></Progress>
                        <div onClick={picSets}>
                            <img src={createSet} alt='' />
                            出图配置
                        </div>
                    </div>
                </div>
            ),
            children: <Table dataSource={data} columns={columns}></Table>,
        },
    ];
    const onChange = (key) => {
    };
    // 下一步
    const goNextStep = () => {
        go("/Step3SyncVideo", { state: {} });
    };
    // 上一步
    const goBeforeStep = () => {
        go("/Step1FrameNumber", { state: {} });
    };
    // 切换头部tabs
    const editTabs = (data) => {
        console.log(data);
        setShowComp(val => data);
    };
    const ShowLeft = useCallback(() => {
        if (showComp === 1) {
            return <TabOne></TabOne>;
        }
        if (showComp === 2) {
            return <TabTwo />;
        }
    }, [showComp]);
    const [tabsItem, setTabsItem] = useState([
        {
            label: "Stable Diffusion",
            key: "1",
        },
        {
            label: "Midjourney",
            key: "2",
        },
        {
            label: "Dalle3",
            key: "3",
        },
    ]);
    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        itemSelectedColor: "white",
                        itemColor: "rgba(255, 255, 255, 0.45)",
                    },
                    Table: {
                        bodySortBg: "#181818 !important",
                        headerBg: "#212121!important",
                        headerColor: "white",
                        headerSplitColor: "#2A2A2A",
                        colorBgContainer: "#181818",
                        lineType: "transparent",
                    },
                },
            }}>
            <div className={style.box}>
                <BackBar></BackBar>

                <div className={style.titleBox}>
                    <div className={style.step}>
                        <div>视频抽帧</div>
                        <img src={Next} alt='' />
                        <div className={style.stepKey}>反应生图</div>
                        <img src={Next} alt='' />
                        <div>合成视频</div>
                    </div>
                    <div className={style.stepHandle}>
                        <div className={style.frame} onClick={goBeforeStep}>
                            上一步
                        </div>
                        <div className={style.frame} onClick={goNextStep}>
                            下一步
                        </div>
                    </div>
                </div>
                {/* 提示词编辑器 */}
                {
                    CallWorded && (
                        <CallWord setCallWorded={setCallWorded}></CallWord>
                    )
                }
                <div className={style.tabBox}>
                    <div className={style.tabContent}>
                        <Tabs
                            style={{
                                background: "#1A1A1A",
                                color: "white !important",
                            }}
                            centered
                            items={tabsItem}
                            onChange={editTabs}
                            defaultkey={"1"}></Tabs>
                        <div className={style.bottomContent}>
                            {
                                showComp !== 3 && (
                                    <div className={style.left} style={showComp == 3 ? { display: 'none' } : {}}>
                                        {
                                            showComp == 1 && <TabOne></TabOne>
                                        }
                                        {
                                            showComp == 2 && <TabTwo></TabTwo>
                                        }
                                    </div>
                                )
                            }
                            <div className={style.right}>
                                <div className={style.options}>
                                    <div className={style.optionsL}>
                                        <div>反推队列</div>
                                        <div className={style.circle}>15</div>
                                    </div>
                                    <div className={style.optionsR}>
                                        <div>
                                            <img src={ClearTye} alt='' />
                                            一键高清
                                        </div>
                                        <div>一键反推提示词</div>
                                        <div>一键生图</div>
                                    </div>
                                </div>

                                <div
                                    className={style.Collapse}
                                    style={{
                                        marginTop: "28px",
                                    }}>
                                    {picModal && (
                                        <div className={style.picModal}>
                                            <div className={style.title}>出图配置</div>
                                            <div className={style.solon}>配置</div>
                                            <div className={style.content}>
                                                <div className={style.contentTop}>
                                                    <div>风格LORA</div>
                                                    <img src={getImageUrl("pirAdd")} alt='' />
                                                </div>
                                                <div className={style.contentBottom}>
                                                    <Select style={{ width: "100%" }}></Select>
                                                </div>
                                            </div>
                                            <div className={style.content}>
                                                <div className={style.contentTop}>
                                                    <div>迭代步数</div>
                                                </div>
                                                <div className={style.contentBottom}>
                                                    <div className={style.contentSlider}>
                                                        <Slider min={20} max={40}></Slider>
                                                        <InputNumber
                                                            min={20}
                                                            max={40}
                                                            defaultValue={20}
                                                            style={{
                                                                margin: "0 16px",
                                                            }}
                                                            step={0.01}></InputNumber>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.content}>
                                                <div className={style.wordContent}>
                                                    <Tabs
                                                        centered
                                                        items={[
                                                            { label: "反向提示词", key: 1 },
                                                            { label: "敏感词", key: 2 },
                                                        ]}></Tabs>
                                                    <div className={style.wordBox}>
                                                        <div className={style.word}>
                                                            关键词
                                                            <img src={getImageUrl("closeWindow")} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className={style.inpVal}>
                                                        <input type='text' placeholder='请输入' />
                                                        <div>保存</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.footer}>
                                                <div onClick={() => setPicModal(false)}>取消</div>
                                                <div onClick={() => setPicModal(false)}>保存</div>
                                            </div>
                                        </div>
                                    )}
                                    <Collapse
                                        expandIcon={() => null}
                                        showArrow={false}
                                        style={{
                                            color: "white",
                                        }}
                                        items={items}
                                        defaultActiveKey={["1"]}
                                    />
                                    ;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

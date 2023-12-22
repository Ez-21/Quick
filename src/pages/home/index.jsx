import { Progress, Modal, Upload, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import BackBar from "@/components/backBar";
import { useState } from "react";
import style from "./index.module.less";
import Add from "@/assets/add.png";
import Delete from "@/assets/delete.png";
import Close from "@/assets/closeWindow.png";
import Book from "@/assets/book.png";

import { ConfigProvider } from "antd";
const App = () => {
  // 文件限制
  const allowedVideoTypes = 'video/mp4,video/mpeg,video/quicktime'
  const [show, setShow] = useState(false);
  const [fileShow, setFileShow] = useState(false);
  const [fileList, setFileList] = useState([]);
  const go = useNavigate();
  const frameNumber = () => {
    // setFileShow(true)
    // go('/Step1FrameNumber')
  };
  const deleteTask = (val) => {
    setShow(true);
  };
  const modalDel = () => {
    setShow(false);
  };
  const modalCel = () => {
    setShow(false);
  };
  // fileModal 操作
  const fileHandle = (val) => {
    if (val) {
    } else {
      setFileShow(false);
    }
  };
  const changeFile = (e) => {
    // 上传文件
    console.log(e);
    if (e.fileList.length != 0) {
      setFileList(e.fileList);
      setFileShow(true);
    }
  };
  // 点击创建
  const createTask = () => {
    go("/Step1FrameNumber", {
      state: {
        fileList
      }
    })
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            remainingColor: "#282828",
          },
        },
      }}>
      <div className={style.box}>
        <div className={style.readContent}>
          <img src={Book} alt='' />
          <div>教程</div>
        </div>
        <Modal
          title={"提示"}
          okText={"删除"}
          onOk={modalDel}
          onCancel={modalCel}
          cancelText={"取消"}
          open={show}>
          <p>是否要删除该任务？</p>
        </Modal>
        {fileShow && (
          <div className={style.creatModalBox}>
            <div className={style.createTaskBox}>
              <div className={style.taskBoxTitle}>
                <div>创建反推任务</div>
                <img src={Close} onClick={() => fileHandle(false)} alt='' />
              </div>
              <div className={style.changeName}>
                任务名称：
                <input type='text' />
              </div>
              <div className={style.fileListTitle}>
                <div>创建反推视频</div>
                <div>
                  <div>没有视频？</div>
                  <div className={style.setPath}>配置草稿路径</div>
                </div>
              </div>

              <div className={style.fileList} >
                <div className={style.fileItem}>
                  {fileList.map((item) => {
                    return (
                      <div className={style.fileBox} key={item.uid}>
                        <Checkbox></Checkbox>
                        <div>{item.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={style.footer}>
                <div>
                  <div
                    className={style.cancel}
                    onClick={() => fileHandle(false)}>
                    取消
                  </div>
                  <div
                    className={style.create}
                    onClick={createTask}>
                    创建
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={style.content}>
          <div className={style.title}>
            我的草稿
            <div className={style.circle}>5</div>
          </div>
          <div className={style.listBox}>
            <div className={style.createBox} onClick={frameNumber}>
              <Upload
                accept={allowedVideoTypes}
                showUploadList={false}
                style={{ width: "100%", height: "100%" }}
                multiple
                onChange={changeFile}>
                <img src={Add} alt='' />
              </Upload>
              创建任务
            </div>
            {[
              new Array(30)
                .fill()
                .map(() => Math.floor(Math.random() * 101))
                .map((item, index) => (
                  <div className={style.taskBox} key={index}>
                    <div className={style.titleBox}>
                      <div>剪辑任务1</div>
                      <img src={Delete} alt='' onClick={() => deleteTask()} />
                    </div>
                    <div className={style.createTime}>创建时间：2021-12-22</div>
                    <div>
                      <Progress
                        strokeLinecap={"round"}
                        percent={item}
                        size={"small"}
                        strokeColor={"#49AA19"}></Progress>
                    </div>
                  </div>
                )),
            ]}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};
export default App;

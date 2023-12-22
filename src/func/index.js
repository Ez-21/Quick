import {appWindow, LogicalSize,LogicalPosition} from "@tauri-apps/api/window";
import { readDir } from '@tauri-apps/api/fs';
// import { playSound } from '@tauri-apps/api/tauri';
/*
* @ des 播放提示音
* */
// async function playNotificationSound() {
//   try {
//     await playSound({
//       path: '/path/to/sound.wav', // 提示音文件的路径
//       volume: 0.5, // 音量值介于 0.0 到 1.0 之间
//     });
//     console.log('提示音已播放');
//   } catch (error) {
//     console.error('播放提示音时出错:', error);
//   }
// }


/*
* @ des 读取文件目录
* */
async function readDirectory(path) {
  try {
    const directoryContents = await readDir(path);
    console.log('目录内容:', directoryContents);
  } catch (error) {
    console.error('读取目录时出错:', error);
  }
}

/*
* @ des 设置应用窗口尺寸
* */
async function setWindowSize(width, height) {
    console.log('已修改窗口尺寸')
   await appWindow?.setSize(new LogicalSize(width,height))
}
/*
* @desc vite 引用图片
* */
function getImageUrl(name) {
    return new URL(`/src/assets/${name}.png`, import.meta.url).href;
  }
/*
* desc关闭窗口
* */

function  closeWindow(){
     appWindow.close()
}
/*
@des 最小化窗口
* */

function  minWindow(){
    appWindow.minimize()
}

/*
@des 最大化窗口
* */

function  maxWindow(){
    appWindow.maximize()
}

/*
@des 最大化窗口
* */

function  setPosition(x,y){
    //     appWindow.setPosition(new LogicalPosition(x,y))

}
// 设置视频封面
function setVideoCover(file){
    const url = URL.createObjectURL(file)
    let dataURL = ''
    const video = document.createElement("video")
    video.setAttribute('crossOrigin', 'anonymous')
    video.setAttribute('src', url)
    video.setAttribute('width', 0)
    video.setAttribute('height', 0)
    video.setAttribute('height', 'auto')
    video.setAttribute('preload', 'auto')
    video.addEventListener('loadeddata', ()=> {
      const canvas = document.createElement("canvas")
      const width = video.videoWidth 
      const height = video.videoHeight
      canvas.width = width
      canvas.height = height
      canvas.getContext("2d").drawImage(video, 0, 0, width, height) 
      dataURL = canvas.toDataURL('image/jpeg')
      const blob = that.base64ToBlob(dataURL)
      const coverUrl = blob ? URL.createObjectURL(blob) : ''
      console.log("coverUrl",coverUrl )
      })
}
//
function setWindowCenter(){
    appWindow.center()
}
export {
    setWindowSize,
    minWindow,
    maxWindow,
    closeWindow,
    setPosition,
    setWindowCenter,
    getImageUrl,
    setVideoCover,
    readDirectory,
    // playNotificationSound
}
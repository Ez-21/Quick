import {appWindow, LogicalSize} from "@tauri-apps/api/window";

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
function imgRequire(val){
    return new URL(`@/assets/${val}`,import.meta.url).href
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

export {
    setWindowSize,
    imgRequire,
    minWindow,
    maxWindow,
    closeWindow
}
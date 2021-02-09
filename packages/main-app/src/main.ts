// import 'zone.js'; // for angular subapp
import { addGlobalUncaughtErrorHandler, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import qiankunApp from 'qiankunApp'


type Apps = typeof qiankunApp

let exitApps: Apps | null = null

let micrApps = localStorage.getItem('micrApps')

if (micrApps) {
  try {
    exitApps = JSON.parse(micrApps)
  } catch (error) {
    exitApps = qiankunApp
  }
} else {
  exitApps = qiankunApp
  localStorage.setItem('micrApps', JSON.stringify(qiankunApp))
}



const apps = (exitApps || (exitApps = qiankunApp)).map(i => {
  return {
    name: i.name,
    entry: i.entry,
    container: i.container,
    activeRule: (location: Location) => location.hash.startsWith(i.url) // 资源激活的,
  }
})
registerMicroApps(apps);

start()

const {pathname} = location
setDefaultMountApp(pathname + exitApps[0].url);

// 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
runAfterFirstMounted(() => {
  console.log('第一个微应用  mounted');
});


// 添加全局的未捕获异常处理器。
addGlobalUncaughtErrorHandler(event => {
  console.log(event)
});
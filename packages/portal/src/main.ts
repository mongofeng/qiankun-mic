// import 'zone.js'; // for angular subapp
import { addGlobalUncaughtErrorHandler, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import qiankunApp from 'qiankunApp'

const apps = qiankunApp.map(i => {
  return {
    name: i.name,
    entry: i.entry,
    container: i.container,
    // activeRule: (location: Location) => location.hash.startsWith(i.url) // 资源激活的,
    activeRule: i.url // 资源激活的,
  }
})
registerMicroApps(apps);

console.log(apps)

start()

// const {pathname} = location
// setDefaultMountApp(pathname + qiankunApp[0].url);

// 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
runAfterFirstMounted(() => {
  console.log('第一个微应用  mounted');
});


// 添加全局的未捕获异常处理器。
addGlobalUncaughtErrorHandler(event => {
  console.log(event)
});
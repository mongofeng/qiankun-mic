// import 'zone.js'; // for angular subapp
import { addGlobalUncaughtErrorHandler, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
registerMicroApps([
  {
    name: 'yangjin-app',
    entry: '//localhost:3000',
    container: '#sub',
    activeRule: location => location.hash.startsWith('#/yangjin-min') // 资源激活的,
  },
  {
    name: 'yangjin-pro',
    entry: '//localhost:8002',
    container: '#sub',
    activeRule: location => location.hash.startsWith('#/yangjin-pro') // 资源激活的,
  }
]);
start()

setDefaultMountApp('/#/yangjin-pro');

// 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
runAfterFirstMounted(() => {
  console.log('第一个微应用  mounted');
});


// 添加全局的未捕获异常处理器。
addGlobalUncaughtErrorHandler(event => {
  console.log(event)
});
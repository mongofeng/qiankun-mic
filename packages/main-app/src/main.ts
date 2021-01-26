import 'zone.js'; // for angular subapp
import { registerMicroApps, runAfterFirstMounted, start } from 'qiankun';
registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:8002',
    container: '#sub',
    activeRule: '/app1',
  },
  {
    name: 'ng app',
    entry: '//localhost:4203',
    container: '#sub',
    activeRule: '/ng-app',
  },
]);
start()

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
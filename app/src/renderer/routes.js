export default [
  {
    path: '/',
    name: 'connect-device',
    component: require('components/ConnectDeviceView')
  },
  {
    path: '*',
    redirect: '/'
  }
]

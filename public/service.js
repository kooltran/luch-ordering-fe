/* eslint-disable no-restricted-globals */
console.log('Service Worker Loaded')

self.addEventListener('push', e => {
  const data = e.data.json()
  const curDate = new Date()
  const year = curDate.getFullYear()
  const month = curDate.getMonth()
  const day = curDate.getDate()
  console.log('Push Received...')
  const currentTime = curDate.getTime()
  const notificationTime = new Date(year, month, day, 17, 40, 0, 0).getTime()
  console.log(currentTime, 'curtime')
  console.log(notificationTime, 'notificationTime')
  // setInterval(() => {
  //   console.log(currentTime >= notificationTime)
  // }, 1000)
  // self.registration.showNotification(data.title, {
  //   body: 'Notified by kool',
  //   icon: 'http://image.ibb.co/feYOFd/tmlogo.png'
  // })
  if (currentTime >= notificationTime) {
    self.registration.showNotification(data.title, {
      body: 'Notified by kool'
    })
  }
})

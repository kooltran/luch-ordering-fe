/* eslint-disable no-restricted-globals */
console.log('service workder loaded')
const curDate = new Date()
const year = curDate.getFullYear()
const month = curDate.getMonth()
const day = curDate.getDate()

const targetTime = new Date(year, month, day, 14, 28, 0, 0).getTime()
const secondTargetTime = new Date(year, month, day, 14, 7, 0, 0).getTime()

const A_DAY_PERIOD = 60 * 60 * 60 * 24
const TEST_TIME = 1000 * 5

function scheduleJob(jobCb, data) {
  let intervalSchedule = null

  if (intervalSchedule) return
  const currentTime = new Date().getTime()

  setTimeout(() => {
    // Do job first time
    jobCb && jobCb(data)

    // Init schedule job
    intervalSchedule = setInterval(() => {
      jobCb && jobCb(data)
    }, A_DAY_PERIOD)
  }, targetTime - currentTime)

  return intervalSchedule
}

const listenNoti = (data) => {
  return self.registration.showNotification(data.title, {
    body: 'Đặt cơm đê!!!!!!!',
    icon: './food_icon.png',
  })
}

self.addEventListener('push', (e) => {
  const data = e.data.json()

  if (data) {
    scheduleJob(listenNoti, data)
  }
})

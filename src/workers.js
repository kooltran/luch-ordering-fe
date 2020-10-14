/* eslint-disable no-restricted-globals */
console.log('service workder loaded')
const curDate = new Date()
const year = curDate.getFullYear()
const month = curDate.getMonth()
const day = curDate.getDate()

const targetTime = new Date(year, month, day, 13, 59, 0, 0).getTime()

const A_DAY_PERIOD = 60 * 60 * 60 * 24

function scheduleJob(startTime, jobCb, data) {
  let intervalSchedule = null

  if (intervalSchedule) return
  const currentTime = new Date().getTime()

  setTimeout(() => {
    console.log('kaka')
    // Do job first time
    jobCb && jobCb(data)

    // Init schedule job
    intervalSchedule = setInterval(() => {
      jobCb && jobCb()
    }, A_DAY_PERIOD)
  }, startTime - currentTime)

  // Return interval to remove
  return intervalSchedule
}

const listenNoti = data => {
  return self.registration.showNotification(data.title, {
    body: 'Notified by kool',
    icon:
      'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg',
  })
}

self.addEventListener('push', e => {
  const data = e.data.json()

  if (data) {
    scheduleJob(targetTime, listenNoti, data)
  }
})

const monthsName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const convertSecondToHours = seconds => {
  var h = Math.floor(Number(seconds) / 3600)
  var m = Math.floor((Number(seconds) % 3600) / 60)
  var s = Math.floor((Number(seconds) % 3600) % 60)

  var hDisplay = h > 0 ? `${h}h` : ''
  var mDisplay = m > 0 ? `${m}m` : ''
  return hDisplay + mDisplay + s
}

export const convertToLongDate = dateString => {
  if (!dateString) {
    return undefined
  }

  const d = new Date(dateString)

  const day = d.getDate()
  const month = d.getMonth()
  const monthName = monthsName[month]
  const year = d.getFullYear()

  return `${day} ${monthName} ${year}`
}

export const millisToMinutesAndSeconds = millis => {
  var minutes = Math.floor(millis / 60000)
  var seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

const countDown = setInterval((year, month, day) => {
  const endTime = new Date(year, month, day, 13, 45, 0, 0).getTime()
  const curTime = new Date().getTime()

  const remainingTime = endTime - curTime

  // If the count down is over, write some text
  if (remainingTime < 0) {
    clearInterval(countDown)
  }
}, 1000)

export const groupByNTotal = (array, key, subKey = 'null') => {
  return array.reduce((acc, item) => {
    const sortkey = item[key]
    if (typeof sortkey === 'object') {
      acc[sortkey[subKey]] = acc[sortkey[subKey]] || []
      acc[sortkey[subKey]].push(item)
    } else {
      acc[sortkey] = acc[sortkey] || []
      acc[sortkey].push(item)
    }
    return acc
  }, {})
}

export const urlBase64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export const getDateOfWeek = (w, y) => {
  var d = (w - 1) * 7 - 1 // 1st of January + 7 days for each week

  return new Date(y, 0, d)
}

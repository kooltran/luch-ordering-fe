import React, { useEffect } from 'react'

const SimpleNotification = () => {
  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification')
    } else {
      Notification.requestPermission()
    }

    const curDate = new Date()
    const year = curDate.getFullYear()
    const month = curDate.getMonth()
    const day = curDate.getDate()
    const currentTime = new Date().getTime()
    const timeShowNoti = new Date(year, month, day, 17, 14, 0, 0).getTime()

    lunchNotification()
  }, [])

  const check = () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('No Service Worker support!')
    }
    if (!('PushManager' in window)) {
      throw new Error('No Push API Support!')
    }
  }

  const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register(
      '../../serviceWorker.js'
    ) //notice the file name
    return swRegistration
  }

  const lunchNotification = async () => {
    check()
    const swRegistration = await registerServiceWorker()
  }

  return <></>
}

export default SimpleNotification

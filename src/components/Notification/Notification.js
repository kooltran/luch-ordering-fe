import React, { useEffect } from 'react'
import { urlBase64ToUint8Array } from '../../helpers'
import { subscribeNotification } from '../../api/subscribeNotification'

const SimpleNotification = () => {
  const publicVapidKey =
    'BHAKxU6iUAw82ir5KZIzAjYUzxcj81h5r2HZu6VViXibueksOwHdWur69HV7Ze6Xssxr1j_3dY5L_2SlJ7-ekh8'

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

    if ('serviceWorker' in navigator) {
      send().catch(err => console.log(err))
    }
  }, [])

  // const check = () => {
  //   if (!('serviceWorker' in navigator)) {
  //     throw new Error('No Service Worker support!')
  //   }
  //   if (!('PushManager' in window)) {
  //     throw new Error('No Push API Support!')
  //   }
  // }

  const send = async () => {
    console.log('Registering service worker...')
    const register = await navigator.serviceWorker.register(
      `${process.env.PUBLIC_URL}/service.js`
    )

    console.log('Service worker Registered')

    //Register Push
    console.log('Registering Push...')
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })

    console.log('Push Registerd')

    // Send Push Notification
    console.log('Sending Push...')
    subscribeNotification(subscription)
  }

  return <></>
}

export default SimpleNotification

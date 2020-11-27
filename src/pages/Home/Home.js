import React, { useEffect, useState } from 'react'
import MenuList from '../../components/Menu/Menu'
import OrderCart from '../../components/Order/OrderCart'

import TimerCountDown from '../../components/TimerCountDown/TimerCountDown'
import { useAppContext } from '../../AppContext'

import Congrats from '../../assets/congrats.svg'
import OrderList from '../../assets/checklist.svg'
import { useHistory } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'

import { urlBase64ToUint8Array } from '../../helpers'
import { DOMAIN } from '../../constants'

import { Modal, Button } from 'antd'

import './Home.scss'

const Home = () => {
  const [{ submitOrder }] = useAppContext()
  const { createOrderSuccess } = submitOrder
  const [show, setOpen] = useState(createOrderSuccess)
  let history = useHistory()

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      sendNotification()
    }

    if (createOrderSuccess) {
      setOpen(createOrderSuccess)
    }
  }, [createOrderSuccess])

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleGotoOrder = () => {
    history.push('/orders')
  }

  const sendNotification = async () => {
    // Register Service Worker
    console.log('Registering service worker...')

    const register = await navigator.serviceWorker.register(
      ` ${process.env.PUBLIC_URL}/service.js`
    )
    console.log(register, 'register')
    console.log('Service Worker Registered...')

    // Register Push
    const vapidPublicKey = process.env.REACT_APP_FCM_PUBLIC_KEY
    const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)
    setTimeout(async () => {
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey,
      })
      console.log(subscription, 'subscription')
      console.log('Push Registered...')

      // Send Push notification
      console.log('Sending Push Notification')

      await fetch(`${DOMAIN}/subscribe`, {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'content-type': 'application/json',
        },
      })
      // await pushNotification(subscription)
      console.log('Push sent...')
    }, 500)
  }

  return (
    <div className='page'>
      <h1 className='text-uppercase text-center'>SP Team Lunch Ordering</h1>
      {!isAdmin && <TimerCountDown />}
      <a href='/lunch-ordering-fe/#/orders' className='icon-orders'>
        <img src={OrderList} alt='checklist' />
      </a>
      <OrderCart />
      <MenuList />

      <Modal
        className='congrats-modal'
        visible={show}
        onCancel={handleCloseModal}
        width={'60vw'}
        height={'60vh'}
        footer={[
          <Button size='large' key='back' onClick={handleCloseModal}>
            Đóng
          </Button>,
          <Button
            key='submit'
            size='large'
            type='primary'
            onClick={handleGotoOrder}
          >
            Xem Order
          </Button>,
        ]}
      >
        <img className='modal-icon' src={Congrats} alt='forbiden-order' />
        <div className='congrats-message'>
          Thank you! Bạn đã order thành công!!
          <p>Chúc Ngon miệng</p>
        </div>
      </Modal>
    </div>
  )
}

export default Home

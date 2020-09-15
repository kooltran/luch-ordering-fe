import { useAppContext } from '../../AppContext'
import {
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderFail,
  getAllOrdersSuccess
} from '../../actions/orderAction'
import { deleteOrder } from '../../api/order'
import { useCallback } from 'react'

export const useDeleteOrder = () => {
  const [
    {
      allOrders: { allOrderList }
    },
    dispatch
  ] = useAppContext()

  const removeOrder = useCallback(
    async order => {
      dispatch(deleteOrderRequest())
      try {
        const res = await deleteOrder(order)
        dispatch(deleteOrderSuccess(res))
        // const remainingOrders = allOrderList.map(item => {
        //   const orders = item.orders.filter(order => order._id !== res._id)
        //   return {
        //     ...item,
        //     orders
        //   }
        // })
        // console.log(remainingOrders, 'remainingOrders')
        // dispatch(getAllOrdersSuccess(remainingOrders))
      } catch (error) {
        dispatch(deleteOrderFail(error))
      }
    },
    [dispatch]
  )

  return removeOrder
}

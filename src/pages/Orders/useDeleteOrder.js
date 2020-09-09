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
      allOrders: { orderList }
    },
    dispatch
  ] = useAppContext()

  const removeOrder = useCallback(
    async order => {
      dispatch(deleteOrderRequest())
      try {
        const res = await deleteOrder(order)
        dispatch(deleteOrderSuccess(res))
        const remainingOrders = orderList.filter(
          order => order._id !== res.data._id
        )
        dispatch(getAllOrdersSuccess(remainingOrders))
      } catch (error) {
        dispatch(deleteOrderFail(error))
      }
    },
    [dispatch, orderList]
  )

  return removeOrder
}

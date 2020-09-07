import { useAppContext } from '../../AppContext'
import {
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderFail
} from '../../actions/orderAction'
import { deleteOrder } from '../../api/order'
import { useCallback } from 'react'

export const useDeleteOrder = () => {
  const [, dispatch] = useAppContext()

  const removeOrder = useCallback(
    async order => {
      dispatch(deleteOrderRequest())
      try {
        const res = await deleteOrder(order)
        dispatch(deleteOrderSuccess(res))
      } catch (error) {
        dispatch(deleteOrderFail(error))
      }
    },
    [dispatch]
  )

  return removeOrder
}

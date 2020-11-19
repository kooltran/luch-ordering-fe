import { useAppContext } from '../../AppContext'
import {
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderFail
} from '../../actions/orderAction'
import { updateOrder } from '../../api/order'
import { useCallback } from 'react'

export const useEditOrder = () => {
  const [, dispatch] = useAppContext()

  const editOrder = useCallback(
    async params => {
      dispatch(updateOrderRequest())
      try {
        const res = await updateOrder(params)
        dispatch(updateOrderSuccess(res))
      } catch (error) {
        dispatch(updateOrderFail(error))
      }
    },
    [dispatch]
  )

  return editOrder
}

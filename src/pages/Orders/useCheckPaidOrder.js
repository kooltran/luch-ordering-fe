import { useAppContext } from '../../AppContext'
import {
  checkProviderPaidRequest,
  checkProviderPaidSuccess,
  checkProviderPaidFail,
  checkPaidAllWeekRequest,
  checkPaidAllWeekSuccess,
  checkPaidAllWeekFail,
  checkPaidOrderItemRequest,
  checkPaidOrderItemSuccess,
  checkPaidOrderItemFail
} from '../../actions/checkPaidAction'
import { checkPaid, checkProviderPaid, checkPaidAllWeek } from '../../api/order'
import { useCallback } from 'react'

export const useCheckPaidOrder = () => {
  const [, dispatch] = useAppContext()

  const checkPaidOrderItem = useCallback(
    async order => {
      dispatch(checkPaidOrderItemRequest())
      try {
        const res = await checkPaid(order)
        dispatch(checkPaidOrderItemSuccess(res))
      } catch (error) {
        dispatch(checkPaidOrderItemFail(error))
      }
    },
    [dispatch]
  )

  const checkProviderPaidOrder = useCallback(
    async order => {
      dispatch(checkProviderPaidRequest())
      try {
        const res = await checkProviderPaid(order)
        dispatch(checkProviderPaidSuccess(res))
      } catch (error) {
        dispatch(checkProviderPaidFail(error))
      }
    },
    [dispatch]
  )

  const checkPaidOrderAllWeek = useCallback(
    async order => {
      dispatch(checkPaidAllWeekRequest())
      try {
        const res = await checkPaidAllWeek(order)
        dispatch(checkPaidAllWeekSuccess(res))
      } catch (error) {
        dispatch(checkPaidAllWeekFail(error))
      }
    },
    [dispatch]
  )

  return {
    checkPaidOrderItem,
    checkProviderPaidOrder,
    checkPaidOrderAllWeek
  }
}

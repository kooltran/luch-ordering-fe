import { useAppContext } from '../../AppContext'
import {
  checkPaidRequest,
  checkPaidSuccess,
  checkPaidFail,
  checkProviderPaidRequest,
  checkProviderPaidSuccess,
  checkProviderPaidFail,
  checkPaidAllWeekRequest,
  checkPaidAllWeekSuccess,
  checkPaidAllWeekFail
} from '../../actions/checkPaidAction'
import { checkPaid, checkProviderPaid, checkPaidAllWeek } from '../../api/order'
import { useCallback } from 'react'

export const useCheckPaidOrder = () => {
  const [, dispatch] = useAppContext()
  const checkPaidOrder = useCallback(
    async order => {
      dispatch(checkPaidRequest())
      try {
        await checkPaid(order)
        dispatch(checkPaidSuccess())
      } catch (error) {
        dispatch(checkPaidFail(error))
      }
    },
    [dispatch]
  )

  const checkProviderPaidOrder = useCallback(
    async order => {
      dispatch(checkProviderPaidRequest())
      try {
        await checkProviderPaid(order)
        dispatch(checkProviderPaidSuccess())
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
        await checkPaidAllWeek(order)
        dispatch(checkPaidAllWeekSuccess())
      } catch (error) {
        dispatch(checkPaidAllWeekFail(error))
      }
    },
    [dispatch]
  )

  return { checkPaidOrder, checkProviderPaidOrder, checkPaidOrderAllWeek }
}

import { useAppContext } from '../../AppContext'
import {
  checkPaidRequest,
  checkPaidSuccess,
  checkPaidFail,
  checkProviderPaidRequest,
  checkProviderPaidSuccess,
  checkProviderPaidFail
} from '../../actions/checkPaidAction'
import { checkPaid, checkProviderPaid } from '../../api/order'
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

  return { checkPaidOrder, checkProviderPaidOrder }
}

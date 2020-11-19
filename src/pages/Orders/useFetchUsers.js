import { useAppContext } from '../../AppContext'
import { getUsersSuccess, getUsersFail } from '../../actions/usersAction'
import { fetchUsers } from '../../api/user'
import { useCallback } from 'react'

export const useFetchUsers = () => {
  const [, dispatch] = useAppContext()

  const fetchUsersList = useCallback(async () => {
    try {
      const res = await fetchUsers()
      dispatch(getUsersSuccess(res))
    } catch (error) {
      dispatch(getUsersFail(error))
    }
  }, [dispatch])

  return fetchUsersList
}

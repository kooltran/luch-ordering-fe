import React, { useEffect } from 'react'
import { useFetchMenu } from './useFetchMenu'
import { useAppContext } from '../../AppContext'
import { fetchCurrentUser } from '../../api/user'
import { getCurrentuserSuccess } from '../../actions/usersAction'
import IconLoading from '../../assets/loading.svg'
import './Menu.scss'

import MenuItem from './MenuItem'

const MenuList = () => {
  const [{ menu }, dispatch] = useAppContext()
  const fetchMenuList = useFetchMenu()
  const { isLoading, menuList } = menu

  useEffect(() => {
    const getCurrentUser = async () => {
      const curUser = await fetchCurrentUser()
      localStorage.setItem('roles', curUser.roles)
      dispatch(getCurrentuserSuccess(curUser))
    }
    getCurrentUser()
    fetchMenuList()
  }, [dispatch, fetchMenuList])

  return (
    <div className='menu-wrapper'>
      {isLoading && (
        <img className='icon-loading' src={IconLoading} alt='loading-spinner' />
      )}
      {menuList.map(item => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  )
}

export default MenuList

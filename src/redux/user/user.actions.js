/* eslint-disable no-unused-vars */
import { userActionTypes } from './user.types'
import { useSelector } from 'react-redux'
import { currentUserData } from './user.selectors'

// const currentUser = useSelector(currentUserData);

export const setCurrentUserData = (data) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: data,
})

// export const updateCurrentUserData=(field,value)=>({
//     payload:{...useSelector(currentUserData),[field]:value}
// })

export const setSideBarVal = (data) => ({
  type: userActionTypes.SET_SIDEBAR_VAL,
  payload: data,
})

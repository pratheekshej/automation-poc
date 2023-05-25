import { APIS } from 'src/core/utils/api'
import { wpAppInstance } from 'src/core/axios/wp-axios'
import { setLoader, setToaster } from 'src/redux/app/app.actions'
import { setCurrentUserData } from 'src/redux/user/user.actions'
export const handleUpdateProfile = (dispatch, user, handleEditMode) => {
  dispatch(setLoader(true, 'Updating your profile'))

  wpAppInstance
    .patch(APIS.PATCH.UPDATE_PROFILE, {
      name: user?.name,
    })
    .then(({ data }) => {
      dispatch(
        setToaster({
          title: 'Update Profile',
          content: data?.message || 'successfully update your profile.',
          type: 'SUCCESS',
        }),
      )
      dispatch(setLoader(false))
      getCurrentUser(dispatch)
      handleEditMode()
    })
    .catch(({ response }) => {
      dispatch(setLoader(false))
      dispatch(
        setToaster({
          title: 'Error',
          content: response?.data?.message || 'Profile update faild',
          type: 'DANGER',
        }),
      )
    })
}
export const getCurrentUser = (dispatch) => {
  dispatch(setLoader(true, 'Updating '))
  wpAppInstance.get(APIS.GET.USER).then((res) => {
    dispatch(setLoader(false))
    dispatch(setCurrentUserData(res.data))
    return true
  })
}

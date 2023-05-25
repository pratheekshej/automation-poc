import { APIS } from 'src/core/utils/api'
import { wpAppInstance } from 'src/core/axios/wp-axios'
import { setLoader, setToaster } from 'src/redux/app/app.actions'
export const type = [
  {
    id: 'https',
    value: 'https',
  },
  {
    id: 'ssh',
    value: 'ssh',
  },
]
export const site_traffic = [
  {
    id: 'less',
    value: 'less',
  },
  {
    id: 'medium',
    value: 'medium',
  },
  {
    id: 'high',
    value: 'high',
  },
]

//===============handle form submit=================
export const handleSubmitForm = (dispatch, formData) => {
  dispatch(setLoader(true, 'Updating your profile'))
  wpAppInstance
    .post(APIS.POST.DEPLOY, formData)
    .then(({ data }) => {
      dispatch(
        setToaster({
          title: 'Success',
          content: data?.message || 'successfully deployed your changes',
          type: 'SUCCESS',
        }),
      )
      dispatch(setLoader(false))
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


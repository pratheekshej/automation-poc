import { APIS } from "src/core/utils/api";
import { wpAuthInstance } from 'src/core/axios/wp-axios'
import { setLoader, setToaster } from 'src/redux/app/app.actions'

// =============== check the password inputs are valid or not==================
const validatePassword = (formData, dispatch) => {
  if (formData.password !== formData.password_confirmation) {
    dispatch(setLoader(false));
    dispatch(setToaster({
      title: 'Error',
      content: 'Passwords are not matching',
      type: 'DANGER'
    }));
    return false
  }
  else if (formData.password.lenght <= 8) {
    dispatch(setLoader(false));
    dispatch(setToaster({
      title: 'Error',
      content: 'Password lenght should be greater than 8',
      type: 'DANGER'
    }));
    return false
  }
  else {
    return true
  }
}
// ----------------------------------------------------------------------------
// ====================== handle password reset functionality==================

export const handleResetPassword = (formData, dispatch, nav) => {
  if (formData && formData.email && formData.password && formData.password_confirmation) {
    if (validatePassword(formData, dispatch)) {
      wpAuthInstance.post(APIS.POST.RESET_PASSWORD, formData).then(({ data }) => {
        dispatch(setToaster({
          title: 'Reset Password',
          content: data?.message || 'Reset your password successfully.',
          type: 'SUCCESS'
        }));
        dispatch(setLoader(false));
        nav('/login');

      }).catch(({ response }) => {
        dispatch(setLoader(false));
        dispatch(setToaster({
          title: 'Error',
          content: response?.data?.message || 'Password reset faild',
          type: 'DANGER'
        }));
      });
    }

  } else {
    dispatch(setLoader(false));
    dispatch(setToaster({
      title: 'Error',
      content: 'Fields are missing',
      type: 'DANGER'
    }));
  }
}
// ----------------------------------------------------------------------------
// ====================== handle forgot password functionality=================

export const handleForgotPassword = (formData, dispatch, nav) => {
  if (formData && formData.email) {
    wpAuthInstance.post(APIS.POST.FORGOT_PASSWORD, {
      email: formData.email,
    }).then(({ data }) => {
      dispatch(setToaster({
        title: 'Send Reset Link Successfuly',
        content: data?.message || 'You have been logged in successfully.',
        type: 'SUCCESS'
      }));
      nav('/');
      dispatch(setLoader(false));

    }).catch(({ response }) => {
      dispatch(setLoader(false));
      dispatch(setToaster({
        title: 'Error',
        content: response?.data?.message || 'Error while senging reset link',
        type: 'DANGER'
      }));
    });
  } else {
    dispatch(setLoader(false));
  }
}

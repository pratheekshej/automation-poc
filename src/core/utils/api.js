export const APIS = {
  POST: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    CHANGE_PASSWORD: '/users/me/change-password',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    DEPLOY: '/websites/deploy',
  },
  GET: {
    LOGOUT: '/auth/logout',
    USER: '/auth/user',
    MY_PROFILE: '/users/me',
    GET_SSH: '/websites/ssh-key',
  },
  PATCH: {
    UPDATE_PROFILE: '/users/me',
  },
  PUT: {},
}

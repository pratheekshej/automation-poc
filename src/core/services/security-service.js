const SECURITY_KEY = '__context__'
const REFRESH_KEY = '__refresh__'
const APP_ID = 'appId'

const SecurityService = {
  setAppId: (appID) => {
    window.localStorage.setItem(APP_ID, appID)
  },
  // get application id
  getAppId: () => {
    return window.localStorage.getItem(APP_ID)
  },
  // get security token from local storage
  getSecurityToken: () => {
    return window.localStorage.getItem(SECURITY_KEY)
  },
  // set security token to local storaage
  setSecurityToken: (token) => {
    window.localStorage.setItem(SECURITY_KEY, token)
  },
  // get refresh token from local storage
  getRefreshToken: () => {
    return window.localStorage.getItem(REFRESH_KEY)
  },
  // set refresh token to local storaage
  setRefreshToken: (token) => {
    window.localStorage.setItem(REFRESH_KEY, token)
  },
  // remove all data from local storage
  logout: () => {
    window.sessionStorage.clear()
    window.localStorage.clear()
  },
  // remove username from local storage
  forget: () => {
    window.localStorage.removeItem('userName')
  },
}

export default SecurityService

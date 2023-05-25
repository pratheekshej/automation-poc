/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { wpAppInstance, wpAuthInstance } from 'src/core/axios/wp-axios'
import { APIS } from 'src/core/utils/api'
import { useDispatch } from 'react-redux'
import { setLoader, setToaster } from 'src/redux/app/app.actions'
import { setCurrentUserData } from 'src/redux/user/user.actions'
import SecurityService from 'src/core/services/security-service'
import { logoWP } from 'src/assets/brand/wp'

const Login = () => {
  const [formData, setFormData] = useState({})
  const nav = useNavigate()
  const dispatch = useDispatch()

  const handleInputChangeHandler = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleLogin = () => {
    if (formData && formData.email && formData.password) {
      wpAuthInstance
        .post(APIS.POST.LOGIN, formData)
        .then(({ data }) => {
          SecurityService.setSecurityToken(data.data.token)
          dispatch(
            setToaster({
              title: 'Login Successful',
              content: data?.message || 'You have been logged in successfully.',
              type: 'SUCCESS',
            }),
          )
          dispatch(setLoader(true, 'Logging you in'))
          wpAppInstance.get(APIS.GET.USER).then((res) => {
            dispatch(setLoader(false))
            dispatch(setCurrentUserData(res.data))
            nav('/dashboard')
          })
        })
        .catch(({ response }) => {
          dispatch(setCurrentUserData(null))
          dispatch(setLoader(false))
          dispatch(
            setToaster({
              title: 'Error',
              content: response?.data?.message || 'Login Error! Please try again',
              type: 'DANGER',
            }),
          )
          nav('/')
        })
    } else {
      dispatch(setLoader(false))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setLoader(true, 'Please wait'))
    handleLogin()
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center bg-col">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        name="email"
                        placeholder="Username"
                        autoComplete="email"
                        value={formData['email'] || ''}
                        onChange={handleInputChangeHandler}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="password"
                        value={formData['password'] || ''}
                        onChange={handleInputChangeHandler}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4 new-btn">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" onClick={() => nav('/forgot-password')} className="px-0 new-link">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 su-card" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>
                      <CIcon title="WP Automation" className="login-wp" icon={logoWP} />
                      <label>WP Automation</label>
                    </h2>
                    <p>
                      POC for automating the deployment of wordpress based websites. This will be
                      used for deployment of property websites maintained by us for Bozzuto and for
                      showcasing our capabilities on Infrastructure as Code.
                    </p>
                    {/* <Link to="/register">
                      <CButton color="primary" className="mt-3 new-btn" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

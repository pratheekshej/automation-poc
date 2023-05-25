/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
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
import { APIS } from 'src/core/utils/api'
import { useDispatch } from 'react-redux'
import { setLoader, setToaster } from 'src/redux/app/app.actions'
import { setCurrentUserData } from 'src/redux/user/user.actions'
import SecurityService from 'src/core/services/security-service'
import { logoWP } from 'src/assets/brand/wp'
import { FieldValidation, handleForgotPassword, handleResetPassword } from './Utils'

const ForgotPassword = () => {
  const queryParameters = new URLSearchParams(window.location.search)

  const [formData, setFormData] = useState({
    token: queryParameters?.get('token') || null,
    email: queryParameters.get('email') || null,
  })
  const nav = useNavigate()
  const dispatch = useDispatch()

  const handleInputChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setLoader(true, 'Please wait'))
    formData.token
      ? handleResetPassword(formData, dispatch, nav)
      : handleForgotPassword(formData, dispatch, nav)
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
                    <h1>Reset Password</h1>
                    <p className="text-medium-emphasis">Reset your password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        disabled={formData.token && formData.email}
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        value={formData?.email || ''}
                        onChange={(e) => handleInputChangeHandler(e)}
                      />
                    </CInputGroup>
                    {formData.token && formData.email && (
                      <div>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>

                          <CFormInput
                            type="password"
                            placeholder="Password"
                            autoComplete="password"
                            name="password"
                            value={formData?.password || ''}
                            onChange={(e) => handleInputChangeHandler(e)}
                          />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm"
                            autoComplete="password"
                            value={formData?.password_confirmation || ''}
                            onChange={(e) => handleInputChangeHandler(e)}
                          />
                        </CInputGroup>
                      </div>
                    )}
                    <CRow>
                      <CCol xs={12}>
                        <div className="d-flex gap-3 justify-content-end">
                          <CButton type="submit" color="primary" className="px-4 new-btn">
                            Submit
                          </CButton>
                          <CButton
                            onClick={() => {
                              nav('/login')
                            }}
                            color="primary"
                            className="px-4 new-btn"
                          >
                            Cancel
                          </CButton>
                        </div>
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

export default ForgotPassword

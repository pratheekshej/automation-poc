/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar2 from './../../assets/images/avatars/2.jpg'
import userAva from './../../assets/images/avatars/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { wpAppInstance } from 'src/core/axios/wp-axios'
import { APIS } from 'src/core/utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserData } from 'src/redux/user/user.actions'
import { setLoader, setToaster } from 'src/redux/app/app.actions'
import { currentUserData } from 'src/redux/user/user.selectors'
import SecurityService from 'src/core/services/security-service'

const AppHeaderDropdown = () => {
  const nav = useNavigate()
  const currentUser = useSelector(currentUserData)
  const dispatch = useDispatch()

  const handleLockAccount = () => {
    dispatch(setLoader(true, 'Logging you out'))
    wpAppInstance
      .get(APIS.GET.LOGOUT)
      .then((res) => {
        SecurityService.logout()
        dispatch(setLoader(false))
        dispatch(setCurrentUserData(null))
        dispatch(
          setToaster({
            title: 'Success!',
            content: res.message || 'You have been logged out!',
            type: 'SUCCESS',
          }),
        )
        nav('/login')
      })
      .catch((err) => {
        dispatch(setLoader(false))
        dispatch(
          setToaster({
            title: 'Error!',
            content: 'Something went wrong!',
            type: 'DANGER',
          }),
        )
      })
  }

  const DROPDOWN_ELE = (
    <Fragment>
      <CDropdownItem href="#">
        <CIcon icon={cilBell} className="me-2" />
        Updates
        <CBadge color="info" className="ms-2">
          42
        </CBadge>
      </CDropdownItem>
      <CDropdownItem href="#">
        <CIcon icon={cilEnvelopeOpen} className="me-2" />
        Messages
        <CBadge color="success" className="ms-2">
          42
        </CBadge>
      </CDropdownItem>
      <CDropdownItem href="#">
        <CIcon icon={cilTask} className="me-2" />
        Tasks
        <CBadge color="danger" className="ms-2">
          42
        </CBadge>
      </CDropdownItem>
      <CDropdownItem href="#">
        <CIcon icon={cilCommentSquare} className="me-2" />
        Comments
        <CBadge color="warning" className="ms-2">
          42
        </CBadge>
      </CDropdownItem>
      <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
      <CDropdownItem href="#">
        <CIcon icon={cilUser} className="me-2" />
        Profile
      </CDropdownItem>
      <CDropdownItem href="#">
        <CIcon icon={cilSettings} className="me-2" />
        Settings
      </CDropdownItem>
      <CDropdownItem href="#">
        <CIcon icon={cilCreditCard} className="me-2" />
        Payments
        <CBadge color="secondary" className="ms-2">
          42
        </CBadge>
      </CDropdownItem>
      <CDropdownItem href="#">
        <CIcon icon={cilFile} className="me-2" />
        Projects
        <CBadge color="primary" className="ms-2">
          42
        </CBadge>
      </CDropdownItem>
      <CDropdownDivider />
    </Fragment>
  );

  const handleRoutes = (route) => {
    nav(route);
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={userAva} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Hi {currentUser.name}
        </CDropdownHeader>
        {/* {DROPDOWN_ELE} */}
        <CDropdownItem className='routes' onClick={() => handleRoutes('/profile')}>
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem className='routes' onClick={() => handleRoutes('/settings')}>
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={handleLockAccount} className="lock-account">
          {/* <CIcon icon={cilLockLocked} className="me-2" /> */}
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

// import { logoNegative } from 'src/assets/brand/logo-negative'
// import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
// import WPIcon from '../assets/brand/svgs/wp.svg'

// sidebar nav config
import navigation from '../_nav'
import { logoWP } from 'src/assets/brand/wp'
import { sideBarUnfoldable, sideBarVal } from 'src/redux/user/user.selectors'
import { setSideBarVal } from 'src/redux/user/user.actions'
import { loaderData } from 'src/redux/app/app.selectors'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector(sideBarUnfoldable)
  const sidebarShow = useSelector(sideBarVal)
  const loaderInfo = useSelector(loaderData)
  const isLoading = loaderInfo.val;

  return (
    <CSidebar
      position="fixed"
      className={`${isLoading ? ' is-loading' : ''}`}
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(setSideBarVal({ sidebarShow: visible }))
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <div className="sidebar-brand-full">
          <CIcon title="WP Automation" className="logo-wp" icon={logoWP} />
          <label>WP Automation</label>
        </div>
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} /> */}
        <div className="sidebar-brand-narrow">
          <CIcon title="WP Automation" className="logo-wp" icon={logoWP} />
        </div>
        {/* <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(setSideBarVal({ sidebarUnfoldable: !unfoldable }))}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

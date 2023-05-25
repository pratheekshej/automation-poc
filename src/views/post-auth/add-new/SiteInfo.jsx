import { CCol, CRow } from '@coreui/react'
import React from 'react'
import InputField from 'src/components/commom/Input'
import PropTypes from 'prop-types'
import Option from 'src/components/commom/Option'
import { site_traffic } from './utils'

const SiteInfo = ({ handleInputChangeHandler, siteData }) => {
  return (
    <CRow>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol sm="4" className="label_container">
            Site name
          </CCol>
          <CCol sm="8">
            <InputField
              name="name"
              type="text"
              value={siteData?.name}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol sm="4" className="label_container">
            Site traffic
          </CCol>
          <CCol sm="8">
            <Option
              options={site_traffic}
              callBack={handleInputChangeHandler}
              name="traffic"
              value={siteData?.traffic}
            />
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}
SiteInfo.propTypes = {
  handleInputChangeHandler: PropTypes.func.isRequired,
  siteData: PropTypes.any,
}
export default SiteInfo

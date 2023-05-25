import { CCol, CRow } from '@coreui/react'
import React from 'react'
import InputField from 'src/components/commom/Input'
import PropTypes from 'prop-types'

const Others = ({ handleInputChangeHandler, siteData }) => {
  return (
    <CRow>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Domain name
          </CCol>
          <CCol sm="8">
            <InputField
              name="domain_name"
              type="text"
              value={siteData?.domain_name}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Path
          </CCol>
          <CCol sm="8">
            <InputField
              name="path"
              type="text"
              value={siteData?.path}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Certificate
          </CCol>
          <CCol sm="8">
            <InputField
              name="tls_certificate"
              type="text"
              value={siteData.tls_certificate}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Private key
          </CCol>
          <CCol sm="8">
            <InputField
              name="tls_private_key"
              type="text"
              value={siteData?.tls_private_key}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}
Others.propTypes = {
  handleInputChangeHandler: PropTypes.func.isRequired,
  siteData: PropTypes.any,
}
export default Others

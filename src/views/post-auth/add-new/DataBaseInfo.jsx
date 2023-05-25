import { CCol, CFormInput, CRow } from '@coreui/react'
import React from 'react'
import InputField from 'src/components/commom/Input'
import PropTypes from 'prop-types'

const DataBaseInfo = ({ handleInputChangeHandler, siteData, handleUpdateFile }) => {
  return (
    <CRow>
      {/* <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Host
          </CCol>
          <CCol sm="8">
            <InputField
              name="db_host"
              type="text"
              value={siteData?.db_host}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol> */}
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Name
          </CCol>
          <CCol sm="8">
            <InputField
              name="db_name"
              type="text"
              value={siteData?.db_name}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            User name
          </CCol>
          <CCol sm="8">
            <InputField
              name="db_username"
              type="text"
              value={siteData?.db_username}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Password
          </CCol>
          <CCol sm="8">
            <InputField
              name="db_password"
              type="text"
              value={siteData?.db_password}
              callBack={handleInputChangeHandler}
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Root user password
          </CCol>
          <CCol sm="8">
            <InputField
              name="db_root_user_password"
              type="text"
              value={siteData?.db_root_user_password}
              callBack={(e) => {
                handleInputChangeHandler(e)
              }}
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Data
          </CCol>
          <CCol sm="8">
            <CFormInput
              className="px-1 py-0"
              type="file"
              accept=".sql"
              onChange={(e) => handleUpdateFile(e)}
              name="db_data"
            ></CFormInput>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}
DataBaseInfo.propTypes = {
  handleInputChangeHandler: PropTypes.func.isRequired,
  siteData: PropTypes.any,
  handleUpdateFile: PropTypes.func.isRequired,
}
export default DataBaseInfo

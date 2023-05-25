import { CCol, CRow } from '@coreui/react'
import React from 'react'
import InputField from 'src/components/commom/Input'
import PropTypes from 'prop-types'
import Option from 'src/components/commom/Option'
import { type } from './utils'

const Repository = ({ handleInputChangeHandler, siteData, handleUpdateRepoType }) => {
  return (
    <CRow>
      <CCol sm="12">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="2">
            Repo url
          </CCol>
          <CCol sm="2">
            <Option
              options={type}
              callBack={(e) => {
                handleUpdateRepoType(e.target.value)
              }}
              name="type"
              value={siteData?.type}
            />
          </CCol>
          <CCol sm="8">
            <InputField
              name="repo_url_https"
              type="text"
              value={siteData?.type === 'ssh' ? siteData?.repo_url_ssh : siteData?.repo_url_https}
              callBack={(e) => {
                handleInputChangeHandler(
                  siteData?.type === 'ssh'
                    ? {
                        target: {
                          name: 'repo_url_ssh',
                          value: e.target.value,
                        },
                      }
                    : {
                        target: {
                          name: 'repo_url_https',
                          value: e.target.value,
                        },
                      },
                )
              }}
            />
          </CCol>
        </CRow>
      </CCol>
      {/* <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            SSH keys
          </CCol>
          <CCol sm="8">
            <InputField
              name="ssh_keys"
              type="text"
              disable={siteData?.type === 'https'}
              value={siteData?.ssh_keys}
              callBack={(e) => {
                handleInputChangeHandler(e)
              }}
            />
          </CCol>
        </CRow>
      </CCol> */}
      <CCol sm="6">
        <CRow className="field_spacing">
          <CCol className="label_container" sm="4">
            Branch name
          </CCol>
          <CCol sm="8">
            <InputField
              name="repo_branch_name"
              type="text"
              value={siteData?.repo_branch_name}
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
            User name
          </CCol>
          <CCol sm="8">
            <InputField
              name="repo_username"
              type="text"
              disable={siteData?.type === 'ssh'}
              value={siteData?.repo_username}
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
            Password
          </CCol>
          <CCol sm="8">
            <InputField
              disable={siteData?.type === 'ssh'}
              name="repo_password"
              type="text"
              value={siteData?.repo_password}
              callBack={(e) => {
                handleInputChangeHandler(e)
              }}
            />
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}
Repository.propTypes = {
  handleInputChangeHandler: PropTypes.func.isRequired,
  siteData: PropTypes.any,
  handleUpdateRepoType: PropTypes.func.isRequired,
}
export default Repository

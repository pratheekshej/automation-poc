import { CForm, CContainer } from '@coreui/react'
import './addNew.scss'
import React, { useState } from 'react'
import SiteInfo from './SiteInfo'
import DataBaseInfo from './DataBaseInfo'
import Others from './Others'
import Repository from './Repository'
import { useDispatch } from 'react-redux'
import { handleSubmitForm } from './utils'

// GLOBAL CONSTANTS ----------------------------------
const formData = new FormData();

const AddNewSite = () => {
  const [siteData, setSiteData] = useState({ type: 'https', traffic: 'less' })
  const dispatch = useDispatch()

  const handleInputChangeHandler = (e) => {
    // formData.append('sasd', 'sreee')
    setSiteData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  // ===================handle update repo type===========
  const handleUpdateRepoType = (type) => {
    type === 'ssh'
      ? setSiteData({
          ...siteData,
          repo_url_https: '',
          repo_user_name: '',
          repo_password: '',
          type: type,
        })
      : setSiteData({ ...siteData, repo_url_ssh: '', ssh_keys: '', type: type })
  }


  // ===================handle site data submit===========
  const handleSubmit = () => {
    Object.keys(siteData)?.forEach((key, value) => {
      formData.append(`${key}`, siteData[key])
    })
    handleSubmitForm(dispatch, formData)
  }

  // ==================== add file details===============
  const handleUpdateFile = (e) => {
    setSiteData((prevState) => {
      return { ...prevState, db_data: e.target.files[0] }
    })
  }

  return (
    <CContainer>
      <h5>Webiste Deployment</h5>
      <CForm>
        <span className="sub_header">Site info</span>
        <SiteInfo handleInputChangeHandler={handleInputChangeHandler} siteData={siteData} opti />
      </CForm>
      <CForm>
        <span className="sub_header">Database info</span>
        <DataBaseInfo
          handleInputChangeHandler={handleInputChangeHandler}
          siteData={siteData}
          handleUpdateFile={handleUpdateFile}
        />
      </CForm>
      <CForm>
        <span className="sub_header">Repo</span>
        <Repository
          handleInputChangeHandler={handleInputChangeHandler}
          siteData={siteData}
          handleUpdateRepoType={handleUpdateRepoType}
        />
      </CForm>
      <CForm>
        <span className="sub_header">Domain</span>
        <Others handleInputChangeHandler={handleInputChangeHandler} siteData={siteData} />
      </CForm>

      <div className="button_container">
        <button className="submit_button" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </CContainer>
  )
}

export default AddNewSite

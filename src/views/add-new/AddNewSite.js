import { cilLink } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react';
import React, { useState } from 'react';

const AddNewSite = () => {
    const [siteData, setSiteData] = useState({});

    const handleInputChangeHandler = (e, key) => {
        setSiteData((prevState) => {
            return { ...prevState, [key]: e.target.value }
        });
    }

    const handleSubmit = () => {
        console.log(siteData);
    }

    return (
        <CCard className="mb-4">
            <CCardHeader>Add new site info</CCardHeader>
            <CCardBody>
                <CForm>
                    <h1>Add Site Info</h1>
                    <p className="text-medium-emphasis">Please provide your link in the field and upload the application zip</p>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CIcon icon={cilLink} />
                        </CInputGroupText>
                        <CFormInput
                            placeholder="Add new site link"
                            autoComplete="siteLink"
                            onChange={(e) => handleInputChangeHandler(e, 'userName')}
                        />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        <CFormInput
                            type='file'
                            placeholder="Upload zip"
                            autoComplete="zipupload"
                            onChange={(e) => handleInputChangeHandler(e, 'zipUpload')}
                        />
                    </CInputGroup>
                    <CRow>
                        <CCol xs={6}>
                            <CButton color="primary" className="px-4 new-btn" onClick={handleSubmit}>
                                CREATE
                            </CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CCardBody>
        </CCard>
    )
}

export default AddNewSite

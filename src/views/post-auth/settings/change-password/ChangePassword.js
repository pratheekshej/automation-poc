/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { cilLockLocked } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { wpAppInstance } from 'src/core/axios/wp-axios';
import { APIS } from 'src/core/utils/api';
import { setLoader, setToaster } from 'src/redux/app/app.actions';

const ChangePassword = () => {
    // REDUX HOOKS ---------------------------------
    const dispatch = useDispatch();

    // STATE HOOKS ---------------------------------
    const [formData, setFormData] = useState({});

    const handleInputChangeHandler = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit_ASYNC_BK = async (e) => {
        await e.preventDefault();
        await dispatch(setLoader(true, 'Your password is being changed'));
        try {
            let passwordChangedStatus = await wpAppInstance.post(APIS.POST.CHANGE_PASSWORD, formData);
            await dispatch(setLoader(false));
            await dispatch(setToaster({
                title: 'Success!',
                content: passwordChangedStatus?.message || 'Your password has been changed successfully! Please login using your new password.',
                type: 'SUCCESS'
            }));
        } catch (error) {
            await dispatch(setLoader(false));
            await dispatch(setToaster({
                title: 'ERROR!',
                content: error?.response?.data?.message || 'Error in resetting password. Please try again.',
                type: 'DANGER'
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoader(true, 'Your password is being changed'));
        wpAppInstance.post(APIS.POST.CHANGE_PASSWORD, formData).then(res => {
            dispatch(setLoader(false));
            dispatch(setToaster({
                title: 'Success!',
                content: res?.message || 'Your password has been changed successfully! Please login using your new password.',
                type: 'SUCCESS'
            }));
        }).catch(error => {
            dispatch(setLoader(false));
            dispatch(setToaster({
                title: 'ERROR!',
                content: error?.response?.data?.message || 'Error in resetting password. Please try again.',
                type: 'DANGER'
            }));
        });
    }

    return (
        <CCard className='pwd-card border-top-info border-top-4' color={'light'}>
            <CCardHeader style={{ fontWeight: 'bold' }}>Change Password</CCardHeader>
            <CCardBody>
                <CForm onSubmit={handleSubmit}>
                    <p className="text-medium-emphasis">Enter your details</p>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                            type="password"
                            name="current_password"
                            placeholder="Current Password"
                            autoComplete="password"
                            value={formData['current_password'] || ''}
                            onChange={handleInputChangeHandler}
                        />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                            type="password"
                            name="new_password"
                            placeholder="New Password"
                            autoComplete="password"
                            value={formData['new_password'] || ''}
                            onChange={handleInputChangeHandler}
                        />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                            type="password"
                            name="new_password_confirmation"
                            placeholder="Re enter password"
                            autoComplete="password"
                            value={formData['new_password_confirmation'] || ''}
                            onChange={handleInputChangeHandler}
                        />
                    </CInputGroup>
                    <CRow>
                        <CCol xs={6}>
                            <CButton type='submit' color="primary" className="px-4 new-btn">
                                Submit
                            </CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CCardBody>
        </CCard>
    )
}

export default ChangePassword;
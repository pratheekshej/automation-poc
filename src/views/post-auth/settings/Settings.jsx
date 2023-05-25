/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoader } from 'src/redux/app/app.actions';
import ChangePassword from './change-password/ChangePassword';

const Settings = () => {
    // REDUX HOOKS ---------------------------------
    const dispatch = useDispatch();

    // INIT HOOKS ----------------------------------
    useEffect(() => {
        dispatch(setLoader(false));
    }, []);

    return (
        <CCard className='border-top-dark border-top-4'>
            <CCardHeader>
                <h2>Settings</h2>
            </CCardHeader>
            <CCardBody className='settings-body pb-5 pt-4'>
                <ChangePassword />
            </CCardBody>
        </CCard>
    )
}

export default Settings;
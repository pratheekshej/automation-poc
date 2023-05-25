/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { toastData } from 'src/redux/app/app.selectors';

const TOAST = (toastContent = null) => {
    const TYPE = {
        SUCCESS: 'green',
        DANGER: 'red',
        INFO: '#007aff'
    }
    if (toastContent) {
        const { content, type, title } = toastContent;
        return (
            <CToast animation={true} autohide={true} visible={true}>
                <CToastHeader closeButton>
                    <svg
                        className="rounded me-2"
                        width="20"
                        height="20"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                    >
                        <rect width="100%" height="100%" fill={TYPE[type]}></rect>
                    </svg>
                    <div className="fw-bold me-auto">{title}</div>
                    <small>Updated just now</small>
                </CToastHeader>
                <CToastBody>{content}</CToastBody>
            </CToast>
        );
    }
    return null;
}

const AppToaster = () => {
    const [toast, addToast] = useState(0);
    const toastInfo = useSelector(toastData);
    const toaster = useRef();

    useEffect(() => {
        if (toastInfo && toastInfo.title && toastInfo.content) {
            addToast(TOAST(toastInfo));
        }
        return () => {
            addToast(0);
        }
    }, [toastInfo]);

    return <CToaster ref={toaster} push={toast} placement="top-end" />;
}

export default AppToaster;
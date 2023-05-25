import { appActionTypes } from "./app.types";

export const setLoader = (value, text = '') => ({
    type: appActionTypes.SET_LOADER,
    payload: { val: value, text }
});

export const setToaster = ({ content, title, type = 'INFO' }) => ({
    type: appActionTypes.SET_TOAST_INFO,
    payload: { content, title, type }
});
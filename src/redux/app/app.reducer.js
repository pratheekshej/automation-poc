import { appActionTypes } from "./app.types";

const INITIAL_STATE = {
    loaderData: { val: false, text: '' },
    toastInfo: { title: '', type: 'INFO', content: '' }
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appActionTypes.SET_LOADER:
            return { ...state, loaderData: action.payload };
        case appActionTypes.SET_TOAST_INFO:
            return { ...state, toastInfo: action.payload };
        default:
            return state;
    }
}

export default appReducer;


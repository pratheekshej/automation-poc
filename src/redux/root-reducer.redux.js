import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./app/app.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer
});

export default persistReducer(persistConfig, rootReducer);
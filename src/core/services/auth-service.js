import SecurityService from "./security-service";

const AuthService = {
    isAuthenticated: () => {
        const token = SecurityService.getSecurityToken();
        if (token) { return true; }
        return false;
    },
    _setStorageData: (key, data, stringify = false) => {
        if (stringify) {
            window.localStorage.setItem(key, JSON.stringify(data));
        } else {
            window.localStorage.setItem(key, data);
        }
    },
    _getStorageData: (key, parse = false) => {
        let storageData = window.localStorage.getItem(key);
        if (!parse) {
            return storageData;
        } else {
            return JSON.parse(storageData);
        }
    },
    _removeStorageData: (key) => {
        window.localStorage.removeItem(key);
    },
    _setUser: (userData) => {
        window.localStorage.setItem('user', JSON.stringify(userData));
    },
    _getUser: () => {
        const userDataString = window.localStorage.getItem('user');
        return JSON.parse(userDataString);
    },
};

export default AuthService;
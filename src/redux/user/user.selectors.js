
export const currentUserData = ({ user }) => {
    return user?.currentUser;
}

export const sideBarVal = ({ user }) => {
    return user?.sidebarShow;
}

export const sideBarUnfoldable = ({ user }) => {
    return user?.sidebarUnfoldable;
}
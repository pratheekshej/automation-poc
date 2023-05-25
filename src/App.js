/* eslint-disable no-unused-vars */
import React, { Fragment, Suspense } from 'react'
// import { HashRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Router, Routes, useLocation } from 'react-router-dom'
import './scss/style.scss'
import GuardedRoute from './components/guarded-route/guarded-route.component'
import PageLoader from './components/loaders/page-loader/page-loader.component'
import AppToaster from './components/app-toast/app-toast.component'
import { useSelector } from 'react-redux'
import { currentUserData } from './redux/user/user.selectors'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pre-auth/login/Login'))
const Register = React.lazy(() => import('./views/pre-auth/register/Register'))
const Page404 = React.lazy(() => import('./views/pre-auth/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pre-auth/page500/Page500'))
const ForgotPassword = React.lazy(() => import('./views/pre-auth/resetPassword/ForgotPassword'))


// HOC
const GUARD = (component, isPreAuth = false) => {
  const currentUser = useSelector(currentUserData);
  if (isPreAuth && currentUser) {
    return (
      <Navigate to="/dashboard" replace />
    );
  }
  return (
    <GuardedRoute>
      {component}
    </GuardedRoute>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      {/* <HashRouter> */}
      <Suspense fallback={loading}>
        <Routes>
          {/* <Route path="" name="Login Page" element={<Login />} /> */}
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/forgot-password" name="Register Page" element={<ForgotPassword />} />
          <Route exact path="/reset-password" name="Register Page" element={<ForgotPassword />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="/" name="Dashboard" element={GUARD(<DefaultLayout />)} />
          <Route path="*" name="Home" element={GUARD(<DefaultLayout />)} />
        </Routes>
      </Suspense>
      <PageLoader />
      <AppToaster />
      {/* </HashRouter> */}
    </BrowserRouter>
  );
}

export default App;

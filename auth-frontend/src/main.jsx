import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import './pages/auth/index.js';
import { AuthLayout, ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage } from './pages/auth/index.js'
import { ThemeConfig } from "flowbite-react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeConfig dark={false} />
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<App />} />
      </Route>
      <Route element={<AuthLayout />} >
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

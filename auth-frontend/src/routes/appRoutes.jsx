import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import {
  AdminDashboard,
  AdminProfile,
  AuthLayout,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  PageNotFound,
  RegisterPage,
  ResetPasswordPage,
  UserLayout,
  UserProfile,
  VerifyOTPPage,
} from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="verify-otp" element={<VerifyOTPPage />} />
        </Route>

        {/* User Private Routes */}
        <Route element={<UserLayout />}>
          <Route path="user-profile" element={<UserProfile />} />
        </Route>

        {/* Admin Private Routes */}
        <Route element={<UserLayout />}>
          <Route path="admin-profile" element={<AdminProfile />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

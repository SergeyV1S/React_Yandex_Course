import { IndexLayout } from "@pages/layouts/main-layout";
import { ProfileLayout } from "@pages/layouts/profile-layout";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "@components/protected-route";

import {
  CurrentIngredientPage,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  OrderHistoryPage,
  OrderListPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage
} from "./pages";

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<IndexLayout />}>
      <Route index element={<HomePage />} />
      <Route path='ingredients/:id' element={<CurrentIngredientPage />} />
      <Route path='order-list' element={<OrderListPage />} />
      <Route path='profile' element={<ProtectedRoute element={<ProfileLayout />} />}>
        <Route index element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path='order-history' element={<ProtectedRoute element={<OrderHistoryPage />} />} />
      </Route>
      <Route path='reset-password' element={<ResetPasswordPage />} />
      <Route path='forgot-password' element={<ForgotPasswordPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
);

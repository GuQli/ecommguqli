import { Routes, Route } from "react-router-dom";

import React from "react";
import {
  HomePage,
  Login,
  ProductDetail,
  ProductsList,
  Register,
  OrderPage,
  DashboardPage,
  PageNotFound,
} from "../pages";
import { CartPage } from "../pages/Cart/CartPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="order-summary" element={<OrderPage />} />

        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

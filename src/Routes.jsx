import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import CustomerHomePage from "./CustomerHomePage";
import CartPage from "./CartPage";
import OrderPage from "./OrderPage";
import WishlistPage from "./WishlistPage";
import AboutUs from "./pages/AboutUs2";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminLogin from "./AdminLogin"; 
import AdminDashboard from "./AdminDashboard";

/**
 * PageWrapper component sets the document.title dynamically
 * based on the title prop.
 */
const PageWrapper = ({ title, children }) => {
  useEffect(() => {
    document.title = title || "Ominix App";
  }, [title]);

  return children;
};

/**
 * AppRoutes component defines all routes and assigns dynamic titles
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper title="Ominix - Login">
            <LoginPage />
          </PageWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <PageWrapper title="Ominix - Registration">
            <RegistrationPage />
          </PageWrapper>
        }
      />
      <Route
        path="/customerhome"
        element={
          <PageWrapper title="Ominix - Home">
            <CustomerHomePage />
          </PageWrapper>
        }
      />
      <Route
        path="/UserCartPage"
        element={
          <PageWrapper title="Ominix - Cart">
            <CartPage />
          </PageWrapper>
        }
      />
      <Route
        path="/orders"
        element={
          <PageWrapper title="Ominix - Orders">
            <OrderPage />
          </PageWrapper>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PageWrapper title="Ominix - Wishlist">
            <WishlistPage />
          </PageWrapper>
        }
      />
      <Route
        path="/about"
        element={
          <PageWrapper title="Ominix - About Us">
            <AboutUs />
          </PageWrapper>
        }
      />
      <Route
        path="/contact"
        element={
          <PageWrapper title="Ominix - Contact">
            <Contact />
          </PageWrapper>
        }
      />
      <Route
        path="/terms"
        element={
          <PageWrapper title="Ominix - Terms of Service">
            <TermsOfService />
          </PageWrapper>
        }
      />
      <Route
        path="/privacy"
        element={
          <PageWrapper title="Ominix - Privacy Policy">
            <PrivacyPolicy />
          </PageWrapper>
        }
      />
      <Route
        path="/admin"
        element={
          <PageWrapper title="Ominix - Admin Login">
            <AdminLogin />
          </PageWrapper>
        }
      />
      <Route
        path="/admindashboard"
        element={
          <PageWrapper title="Ominix - Admin Dashboard">
            <AdminDashboard />
          </PageWrapper>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

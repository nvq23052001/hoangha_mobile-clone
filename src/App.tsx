import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import AdminLayout from "./components/layout/AdminLayout";
import ClientLayout from "./components/layout/ClientLayout";
import AdminHomePage from "./components/admin/AdminHomePage";
import ProductsAdmin from "./components/admin/product/ProductsAdmin";
import ProductForm from "./components/admin/product/ProductForm";
import ProductAdmin from "./components/admin/product/ProductAdmin";

import CategoryAdmin from "./components/admin/category/CategoryAdmin";
import CategoryForm from "./components/admin/category/CategoryForm";
import Login from "./components/user/Login";
import HomePage from "./components/user/HomePage";
import ProductDetail from "./components/user/ProductDetail";
import NotFound from "./components/UI/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="/phone/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path="product">
            <Route index element={<ProductsAdmin />} />
            <Route path="add" element={<ProductForm />} />
            <Route path=":id">
              <Route index element={<ProductAdmin />} />
              <Route path="edit" element={<ProductForm />} />
            </Route>
          </Route>

          <Route path="category">
            <Route index element={<CategoryAdmin />} />
            <Route path="add" element={<CategoryForm />} />
            <Route path=":id">
              <Route index element={<ProductAdmin />} />
              <Route path="edit" element={<CategoryForm />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

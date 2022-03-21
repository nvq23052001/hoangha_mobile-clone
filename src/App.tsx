import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/page/login";
import AdminLayout from "./components/layout/AdminLayout";
import ClientLayout from "./components/layout/ClientLayout";
import AdminHomePage from "./components/admin/AdminHomePage";
import ProductsAdmin from "./components/admin/product/ProductsAdmin";
import ProductForm from "./components/admin/product/ProductForm";
import ProductAdmin from "./components/admin/product/ProductAdmin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />} />
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;

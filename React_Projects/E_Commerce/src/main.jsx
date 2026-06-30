import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import {
  Hero,
  Categories,
  BestDeals,
  ProductDetail,
  Products,
  Cart,
  Wishlist,
} from "./Components/index.js";
import { CartProvider } from "./context/CartContext.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={
          <>
            <Hero />
            <Categories />
            <BestDeals />
          </>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products" element={<Products />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#111827",
            color: "#fff",
            borderRadius: "12px",
            padding: "14px 18px",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
        }}
      />
    </CartProvider>
  </StrictMode>,
);

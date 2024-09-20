import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./Contexts/CitiesContext.jsx";
import { AuthProvider } from "./Contexts/FakeAuthContext.jsx";

import CityList from "./Components/CityList";
import City from "./Components/City.jsx";
import CountryList from "./Components/CountryList.jsx";
import Form from "./Components/Form";
import SpinnerFullPage from "./Components/SpinnerFullPage";

import "leaflet/dist/leaflet.css";

// import PricingPage from "./pages/Pricing";
// import HomePage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Login from "./pages/AnimateLogin.jsx";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";
// import Map from "./Components/Map";
// import { jwtDecode } from "jwt-decode";


const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/AnimateLogin"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
               <Route path="app" element={<AppLayout />}>
              {/* <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              > */}
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;

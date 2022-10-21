import './App.css';
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import BaseScreen from "./../src/screens/baseScreen/baseScreen";
import HomeScreen from "./../src/screens/homeScreen/homeScreen";
import CategoryListScreen from "./../src/screens/categoryListScreen/categoryListScreen";
import ProductListScreen from "./../src/screens/productListScreen/productListScreen";
import ProductScreen from "./../src/screens/productScreen/productScreen";
import PanierScreen from "./../src/screens/panierScreen/panierScreen";
import LoginScreen from "./../src/screens/loginScreen/loginScreen";

// const CategoryListScreen = React.lazy(()=> 
//   import('./screens/categoryListScreen/categoryListScreen')
// )

// const ProductListScreen = React.lazy(()=> 
//   import('./screens/productListScreen/productListScreen')
// )
// const ProductScreen = React.lazy(()=> 
//   import('./screens/productScreen/productScreen')
// )

// const PanierScreen = React.lazy(()=> 
//   import('./screens/panierScreen/panierScreen')
// )
// const LoginScreen = React.lazy(()=> 
//   import('./screens/loginScreen/loginScreen')
// )

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route
            index
            element={
              <Suspense fallback={<span>Loading</span>}>
                <HomeScreen />
              </Suspense>
            }
          />
          <Route
            path="/category_list"
            element={
              <Suspense fallback={<span>Loading</span>}>
                <CategoryListScreen />
              </Suspense>
            }
          />
          <Route
            path="/product_list"
            element={
              <Suspense fallback={<span>Loading</span>}>
                <ProductListScreen />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<span>Loading</span>}>
                <ProductScreen />
              </Suspense>
            }
          />
          <Route
            path="/panier"
            element={
              <Suspense fallback={<span>Loading</span>}>
                <PanierScreen />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<span>Loading</span>}>
                <LoginScreen />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

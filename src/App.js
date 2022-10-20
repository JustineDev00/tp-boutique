import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BaseScreen from './Screens/BaseScreen';
import HomeScreen from './Screens/HomeScreen';
import CategoriesListScreen from './Screens/CategoriesListScreen';
import CategoryScreen from './Screens/CategoryScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<BaseScreen />}>
          <Route index element={<HomeScreen />}></Route>
          <Route path='/categorylist' element={<CategoriesListScreen />}></Route>
          <Route path='/category/:id' element={<CategoryScreen />}></Route>
          <Route path='/product/:id' element={<ProductScreen />}></Route>
          <Route path='/:userName/cart' element={<CartScreen />}></Route>
        </Route>
        <Route path='*' element="Page d'erreur"></Route>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;

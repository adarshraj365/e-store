import './App.css';
import Navbar from './component/navbar/Navbar';
import productContext from './context/Context';
import products from './data';
import Product from './component/product/Product';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Cart from './component/cart/Cart';
import NotFound from './component/notFound/NotFound';
import CartContextProvider from './context/CartProvider';

function App() {
  return (
    <div className="App">
      <productContext.Provider value = {products}>
      <CartContextProvider>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component = {Product} />
          <Route path = '/cart' exact component = {Cart} />
          <Route component = {NotFound} />
        </Switch>
      </Router>
      </CartContextProvider>
      </productContext.Provider>
    </div>
  );
}

export default App;

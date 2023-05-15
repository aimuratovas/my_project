import Navbar from './components/Navbar';
import Home from './components/Home';
import AllProductsPage from './components/AllProductsPage';
import ProductsByBrand from './components/ProductsByBrand';
import ProductsByType from './components/ProductsByType';
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={AllProductsPage}/>
        <Route path='/product/:name' component={ProductPage}/>
        <Route path='/brand/:id' component={ProductsByBrand}/>
        <Route path='/type/:id' component={ProductsByType}/>
        <Route path='/cart' component={ShoppingCart}/>
        <Route path='/login' component={LoginForm}/>
        <Route path='/signup' component={SignupForm}/>
      </Switch>
    </Router>
  );
}
 
export default App;

import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { getToken } from "./components/CsrfToken";


function App() {
  
  getToken()

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={ProductPage}/>
      </Switch>
    </Router>
  );
}
 
export default App;

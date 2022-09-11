import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Pallazo from './components/Pallazo';
import Lehenga from './components/Lehenga';
import Sarees from './components/Sarees';
import Anarkali from './components/Anarkali';
import Ssuits from './components/Ssuits';
import Kurti from './components/Kurti';
import KurtiDetail from './components/KurtiDetail';
import SuitDetail from './components/SuitDetail';
import SareeDetail from './components/SareeDetail';
import AnarkaliDetail from './components/AnarkaliDetail';
import LehengaDetail from './components/LehengaDetail';
import Gown from './components/Gown';
import Cartshop from './components/Cartshop';
import Checkout from './components/Checkout';
import Products from './components/Products';
import GownDetail from './components/GownDetail';

import DandiyaProduct from './components/DandiyaProduct';
import DandiyaDetail from './components/DandiyaDetail';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/about" component={About}/>  
        <Route exact path="/contact" component={Contact}/>  
        <Route exact path="/gown" component={Gown}/>  
        <Route exact path="/gown/:id" component={GownDetail}/>  
        <Route exact path="/pallazo" component={Pallazo}/>  
        <Route exact path="/pallazo/:id" component={ProductDetail}/> 
        <Route exact path="/lehenga" component={Lehenga}/>  
        <Route exact path="/lehenga/:id" component={LehengaDetail}/>  
        <Route exact path="/saree" component={Sarees}/>  
        <Route exact path="/saree/:id" component={SareeDetail}/>  
        <Route exact path="/anarkali" component={Anarkali}/>  
        <Route exact path="/anarkali/:id" component={AnarkaliDetail}/>  
        <Route exact path="/salwaar" component={Ssuits}/>  
        <Route exact path="/salwaar/:id" component={SuitDetail}/>  
        <Route exact path="/kurti" component={Kurti}/>
        <Route exact path="/kurti/:id" component={KurtiDetail}/>   
        <Route exact path="/dandiya" component={DandiyaProduct}/>   
        <Route exact path="/dandiya/:id" component={DandiyaDetail}/>   
        <Route exact path="/cart" component={Cartshop}/>   
        <Route exact path="/checkout" component={Checkout}/>   
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Contacto } from './components/ItemListContainer/Contacto'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom'
import { CartContainer } from './components/CartContent/CartContainer'
import { CartProvider } from './context/CartContext'
import { Checkout } from './components/Checkout/Checkout'
import { UIProvider } from './context/UIContext'
import NoMatch from 'react-router-nomatch'


function App() {

  return (
    <>
      <UIProvider>
        <CartProvider>

          <BrowserRouter>

            <NavBar />

            <NoMatch render={ match => (match ? null : <ItemListContainer />) } alwaysRender={ true }>
              
              <Route exact path="/home">
                <ItemListContainer />
              </Route>
              <Route exact path="/contacto">
                <Contacto />
              </Route>
              <Route exact path="/productos/:categoryId">
                <ItemListContainer />
              </Route>
              <Route exact path="/detail/:itemId">
                <ItemDetailContainer  />
              </Route>
              <Route exact path="/cart">
                <CartContainer />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route path="*">
                <Redirect to="/home" />
              </Route>

            </NoMatch>

          </BrowserRouter>

        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;

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
            {/* en caso de ingresarse una URL no definida, se redirecciona al Home */}
            <NoMatch render={ match => (match ? null : <ItemListContainer />) } alwaysRender={ true }>
              
              <Route exact path="/home">
                <ItemListContainer />
              </Route>
              <Route exact path="/contacto">
                <Contacto />
              </Route>
              <Route exact path="/productos/:categoryId"> {/* filtramos por categoria (fruta/verdura) */}
                <ItemListContainer />
              </Route>
              <Route exact path="/detail/:itemId"> {/* llevamos al detalle del producto, a través del id automático de la base de datos (Firebase/firestore) */}
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

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Contacto } from './components/ItemListContainer/Contacto'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartContainer } from './components/CartContent/CartContainer'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <CartProvider>

        <BrowserRouter>

          <NavBar />

          <Switch>
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
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <CartContainer />
            </Route>
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>

        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;

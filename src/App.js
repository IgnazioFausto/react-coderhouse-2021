import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { HomeView } from './components/ItemListContainer/HomeView'
import { Contacto } from './components/ItemListContainer/Contacto'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Cart } from './components/NavBar/Cart'


function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Switch>
          <Route exact path="/home">
            <HomeView />
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
            <Cart />
          </Route>
          <Route>
            <Redirect to="/home" />
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;

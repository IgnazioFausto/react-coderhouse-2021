import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './ItemListContainer'

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer proximamente="CATÁLOGO DISPONIBLE PRÓXIMAMENTE" />
      
    </>
  );
}

export default App;

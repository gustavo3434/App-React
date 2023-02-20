import './App.css';
import NavBar from './components/NavBar';
import Carousel  from "./components/Carousel";
import Destacados from './components/Destacados';
import Recomendados from './components/Recomendados';
import Promo from './components/Promo';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<div> <Carousel/> <Recomendados/> <Destacados/> <ItemListContainer/> </div>}/>
          <Route path={"/category/:id"} element={ <div><ItemListContainer/></div> }/>
          <Route path={`/item/:id`} element={<ItemDetailContainer/>}/>
        </Routes>
        <Promo/>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

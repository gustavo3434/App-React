import './App.css';
import NavBar from './components/NavBar';
import Carousel  from "./components/Carousel";
import Destacados from './components/Destacados';
import Recomendados from './components/Recomendados';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Carousel/>
      <Recomendados/>
      <Destacados/>
      <ItemListContainer promo={{mensaje:"Recibí todas nuestras ofertas",registro:"¿Querés recibir nuestras ofertas? ¡Registrate ahora y comenza a recibirlas!"}}/>
      <Footer/>
    </div>
  );
}

export default App;

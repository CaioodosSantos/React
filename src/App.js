import './App.css';
import Menu from './componets/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina01 from './componets/pages/Pagina01';
import Carros from './componets/pages/Carros';
import Array from './componets/pages/Array';
import Objeto from './componets/pages/Objeto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contador from './componets/pages/Contador';
import FilmesPopulares from './componets/pages/filmes/FilmesPopulares';
import FilmesDetalhes from './componets/pages/filmes/FilmesDetalhes';
import FilmesLancamentos from './componets/pages/filmes/FilmesLancamentos';
import FilmesCartaz from './componets/pages/filmes/FilmesCartaz';
import AtoresDetalhes from './componets/pages/atores/AtoresDetalhes';

function App() {
  return (
    <div className="App">
      <header style={{padding:'15px' }} className="App-header">
  
  

 
  <BrowserRouter>
  
  <Menu/>
    
      <Routes>
        <Route path="" element={<Pagina01 />}/>
        <Route path="/carros" element={<Carros />}/>
        <Route path="/array" element={<Array />}/>
        <Route path="/objeto" element={<Objeto />}/>
        <Route path="/contador" element={<Contador />}/>
         <Route path="/componets/pages/filmes/FilmesLancamentos" element={<FilmesLancamentos />}/>
         <Route path="/componets/pages/filmes/FilmesCartaz" element={<FilmesCartaz />}/>
         <Route path="/componets/pages/filmes/FilmesPopulares" element={<FilmesPopulares />}/>
         <Route path="/componets/pages/filmes/:id" element={<FilmesDetalhes />}/>
         <Route path="/componets/pages/atores/:id" element={<AtoresDetalhes />}/>
      </Routes>
      
  </BrowserRouter>
    
      </header>
    </div>
  );
}

export default App;

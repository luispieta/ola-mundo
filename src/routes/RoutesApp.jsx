import { BrowserRouter, Route, Routes } from 'react-router';
import Menu from '../componentes/Menu/index.jsx';
import Inicio from '../paginas/Inicio/index.jsx';
import SobreMim from '../paginas/SobreMim/index.jsx';
import Rodape from '../componentes/Rodape/index.jsx';
import './RoutesApp.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/sobremim' element={<SobreMim />}/>
          <Route path='*' element={<div>Página não encontrada</div>}/>
        </Routes>

        <Rodape/>
      </BrowserRouter>
    </>
  )
}
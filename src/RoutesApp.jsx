import { BrowserRouter, Routes, Route } from 'react-router';
import Inicio from './paginas/Inicio/index.jsx';
import SobreMim from './paginas/SobreMim/index.jsx';
import Menu from './componentes/Menu/index.jsx';
import './RoutesApp.css'

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
      </BrowserRouter>
    </>
  )
}
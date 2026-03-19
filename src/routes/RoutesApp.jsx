import { BrowserRouter, Route, Routes } from 'react-router';
import Menu from '../componentes/Menu/index.jsx';
import Inicio from '../paginas/Inicio/index.jsx';
import SobreMim from '../paginas/SobreMim/index.jsx';
import Rodape from '../componentes/Rodape/index.jsx';
import PaginaPadrao from '../componentes/PaginaPadrao/index.jsx';
import Post from '../paginas/Post/index.jsx';
import NaoEncontrada from '../paginas/NaoEncontrada/index.jsx';
import ScrollTotop from "../componentes/ScrollToTop"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTotop/>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />}/>
            <Route path='sobremim' element={<SobreMim />}/>
          </Route>

          <Route path="posts/:id/*" element={<Post />}/>
          <Route path='*' element={ <NaoEncontrada/> } />
        </Routes>

        <Rodape/>
      </BrowserRouter>
    </>
  )
}
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

import Sobre from './components/pages/Sobre.tsx'
import Programacao from './components/pages/Programacao.tsx'
import Minicursos from './components/pages/Minicursos.tsx'
//import Palestras from './components/pages/Palestras.tsx'

function App() {
  return (
    <div>
      <Navbar/>

      <Main/>
      <Sobre/>
      <Programacao/>
      <Minicursos/>
    </div>
  )
}

export default App
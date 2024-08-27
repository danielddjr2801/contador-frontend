import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Intro from "./pagina1/intro.jsx";
import Register from './registro/register.jsx';
import Informativo from './informativo/informativo.jsx';
import Panel from './panel/panel.jsx';

function App() {

  return (
    <div className="container mt-3">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/informativo" element={<Informativo />}></Route>
          <Route path="/panel" element={<Panel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App

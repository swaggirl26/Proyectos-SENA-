import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Servicios from "./paginas/Servicios";
import SobreNosotros from "./paginas/SobreNosotros";
import Contactanos from "./paginas/Contactanos";
import Login from "./paginas/Login";
import Register from "./paginas/Register";
import Navegacion from "./Navegacion";
import Footer from "./componentes/footer";

function App() {
  return (
    <BrowserRouter> <Navegacion />
   
    <Routes>
      <Route path="/"element= {<Inicio />}></Route>
      <Route path="/Productos"element= {<Productos />}></Route>
      <Route path="/Servicios"element= {<Servicios />}></Route>
      <Route path="/SobreNosotros"element= {<SobreNosotros />}></Route>
      <Route path="/Contactanos"element= {<Contactanos />}></Route>
      <Route path="/Login"element= {<Login />}></Route>
      <Route path="/Register"element= {<Register />}></Route>
    </Routes> <Footer/>
    </BrowserRouter>  
  );
 
}
  
export default App;

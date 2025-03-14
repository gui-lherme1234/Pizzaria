import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import SecaoCapa from "./components/SecaoCapa";
import Produtos from "./components/Produtos";
import SecaoSobre from "./components/Sobre";
import Comprar from "./components/Comprar"; // Certifique-se que o arquivo existe
import Create from "./components/createcheck"; // Certifique-se que o arquivo existe
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Rota principal */}
          <Route
            path="/"
            element={
              <>
                <SecaoCapa />
                <Produtos />
                <SecaoSobre />
                <Footer />
              </>
            }
          />
          
          {/* Rota para criar conta */}
          <Route path="/createcheck" element={<Create />} />
          
          {/* Rota para comprar */}
          <Route path="/Comprar" element={<Comprar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

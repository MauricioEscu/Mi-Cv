import { Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';

// 1. IMPORTAR LAS PÁGINAS (Asegurate de que esté la de ContactPage)
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; 
import SkillBadge from './components/SkillBadge';

function App() {
  const [tema, setTema] = useLocalStorage('tema', 'light');

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  console.log("El valor de tema en App.jsx es:", tema);

  return (
    <div className={`min-vh-100 ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      
      <Navbar tema={tema} toggleTema={toggleTema} />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* 2. AGREGÁ ESTA RUTA PARA EL CONTACTO: */}
          <Route path="/contact" element={<ContactPage />} />
          
        </Routes>
      </main>

    </div>
  );
}
export default App;
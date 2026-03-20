import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import ProjetosPage from '../pages/ProjetosPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projetos" element={<ProjetosPage />} />
        </Routes>
    );
}

export default AppRoutes;

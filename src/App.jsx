import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './css/app.css';
import Menu from "./components/Menu";
import CategorieAdd from "./pages/CategorieAdd";
import ProduitAdd from "./pages/ProduitAdd";

function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/cat-add" element={ <CategorieAdd /> } />
                <Route path="/pro-add" element={ <ProduitAdd /> } />
            </Routes>
        </>
    );
}

export default App;

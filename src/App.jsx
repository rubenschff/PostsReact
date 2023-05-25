import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Container from "./components/layout/Container.jsx";


function App() {

    return (
        <Router>
            <NavBar/>
            <Container>
                <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="/register" element={<Register/>}/>
                    <Route  path="/login" element={<Login/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    )
}

export default App

// ROUTER V6 CONFIG
// function App() {
//
//     return (
//         <Router>
//             <ul>
//                 <li>
//                     <Link exec to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/empresa">Empresa</Link>
//                 </li>
//                 <li>
//                     <Link to="/contato">Contato</Link>
//                 </li>
//             </ul>
//             <Routes>
//                 <Route  path="/" element={<Home/>}/>
//                 <Route  path="/empresa" element={<Empresa/>}/>
//                 <Route  path="/contato" element={<Contato/>}/>
//                 <Route  path="/todosContatos" element={<Navigate to="/contato"/>}/>
//             </Routes>
//         </Router>
//     )
// }



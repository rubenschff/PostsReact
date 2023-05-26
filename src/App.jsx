import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Container from "./components/layout/Container.jsx";
import Message from "./components/layout/Message.jsx";

/*Context*/
import {UserProvider} from "./context/UserContext.jsx";
import Profile from "./pages/User/Profile.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import AddPost from "./pages/Posts/AddPost.jsx";
import ListPost from "./pages/Posts/ListPost.jsx";
import EditPost from "./pages/Posts/EditPost.jsx";

function App() {

    return (
        <Router>
            <UserProvider>
            <NavBar/>
                <Message/>
            <Container>
                <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="register" element={<Register/>}/>
                    <Route  path="login" element={<Login/>}/>
                    <Route path="user/profile" element={<Profile/>}/>
                    <Route path="edit/:id" element={<EditPost/>}/>
                    <Route path="posts" element={<Posts/>}>
                        <Route path="list" element={<ListPost/>}/>
                        <Route path="add" element={<AddPost/>}/>
                    </Route>

                </Routes>
            </Container>
            <Footer/>
            </UserProvider>
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



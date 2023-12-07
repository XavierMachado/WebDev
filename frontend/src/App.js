import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import Header from "./Components/Header"
//import Inventory from "./Inventory/inventory.jsx";
import InventoryManager from "./Inventory/inventory.jsx";
//import NavBar from "./Components/NavBar.js";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
        {/* <NavBar title='Inventory Manager'/> */}
        <Header/>
            <div>
        <Routes>
            <Route exact path = '/' element = {
                <>
                <LoginPage/>
                </>
            }>
            </Route>
            <Route path="/RegistrationPage" element= {<RegistrationPage/>}></Route>
            <Route path = '/inventory' element= {<InventoryManager/>}></Route>
            <Route path="/LoginPage" element= {<LoginPage/>}></Route>
        </Routes>
            </div>
        </Router>
    )
}

export default App
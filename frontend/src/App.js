import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
//import Header from "./Components/Header"
import Inventory from "./Inventory/inventory.jsx";
//import InventoryManager from "./Inventory/inventory.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
        <Routes>
            <Route exact path = '/' element = {
                <>
                <LoginPage/>
                </>
            }>
            </Route>
            <Route path="/RegistrationPage" element= {<RegistrationPage/>}></Route>
            <Route path = '/inventory' element= {<Inventory/>} isLoggedIn={true}></Route>
            <Route path="/LoginPage" element= {<LoginPage/>}></Route>
        </Routes>
            </div>
        </Router>
    )
}

export default App
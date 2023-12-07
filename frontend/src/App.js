import Feedback from "./Components/Feedback"
import Header from "./Components/Header"
import Inventory from "./Pages/inventory";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
        <Header/>
            <div>
        <Routes>
            <Route exact path = '/' element = {
                <>
                <Feedback/>
                </>
            }>
            </Route>
            <Route path = '/inventory' element= {<Inventory/>}></Route>
        </Routes>
            </div>
        </Router>
    )
}

export default App
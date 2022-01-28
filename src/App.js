
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Contacts} from "./views/Contacts";
import {AddContact} from "./views/AddContact";
import injectContext from "./store/appContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Contacts />}/>
          <Route path="/contacts" element={<Contacts />} />
					<Route path="/add" element={<AddContact />} />
					<Route path="/edit" element={<AddContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default injectContext(App);

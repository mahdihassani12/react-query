import './App.css';
import HomePage from './components/Home';
import SuperherosPage from './components/Superheros';
import RQSuperherosPage from './components/RQSuperheros';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/SuperherosPage" element={<SuperherosPage></SuperherosPage>}></Route>
          <Route path="/RQSuperherosPage" element={<RQSuperherosPage></RQSuperherosPage>}></Route>
        </Routes>
      </div>
  );
}

export default App;

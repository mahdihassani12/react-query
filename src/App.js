import './App.css';
import HomePage from './components/Home';
import SuperherosPage from './components/Superheros';
import RQSuperherosPage from './components/RQSuperheros';
import RQSuperHero from './components/RQSuperHero';
import ParallelQueries from './components/ParallelQueries'; 
import DynamicParrallelQueries from './components/DynamicParrallelQueries';
import DependentQueries from './components/DependentQueries';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import { PaginatedQueries } from './components/PaginatedQueries';
import { InfiniteQueries } from './components/InfiniteQueries';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/SuperherosPage" element={<SuperherosPage></SuperherosPage>}></Route>
          <Route path="/RQSuperherosPage" element={<RQSuperherosPage></RQSuperherosPage>}></Route>
          <Route path="/ParallelQueries" element={<ParallelQueries></ParallelQueries>}></Route>
          <Route path="/RQSuperHero/:id" element={<RQSuperHero></RQSuperHero>}></Route>
          <Route path="/DynamicParrallelQueries" element={<DynamicParrallelQueries heroIds={[1, 3]} />}></Route>
          <Route path='/DependentQueries' element={<DependentQueries email="mahdi@gmail.com" />}></Route>
          <Route path='/PaginatedQueries' element={<PaginatedQueries />}></Route>
          <Route path='/InfiniteQueries' element={<InfiniteQueries />}></Route>
        </Routes>
      </div>
  );
}

export default App;

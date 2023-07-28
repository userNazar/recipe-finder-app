import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ListRecipe from './pages/ListRecipe';
import OwnRecipe from './pages/OwnRecipe';


function App() {



  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/list' element={<ListRecipe />}/>
        <Route path='/own' element={<OwnRecipe />}/>
      </Routes>
    </div>
  );
}

export default App;

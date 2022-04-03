
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'

import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About'
import './App.css';
import Errorpage from './Components/Errorpage/Errorpage';
import Dashboard from './Components/Dashboard/Dashboard';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={ <LoadingScreen/> } />
        <Route path="reviews" element={ <Reviews/> } />
        <Route path="dashboard" element={ <Dashboard/> } />
        
        <Route path="blogs" element={ <Blogs/>  } />
        <Route path="contact" element={ <About/> } />
        <Route path="*" element={ <Errorpage/> } />
      </Routes>
    </div>
  );
}

export default App;

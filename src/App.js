
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'

import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About'
import './App.css';
import Errorpage from './Components/Errorpage/Errorpage';
import Dashboard from './Components/Dashboard/Dashboard';
import Reviews from './Components/Reviews/Reviews';
import DetailsBlogPage from './Components/Blogs/DetailsBlogPage';
import useBlogs from './hooks/useBlogs';
import Footer from './Components/Footer/Footer';

function App() {
  const [blogs ,setblogs] = useBlogs()
  return (
    <div className="App ">
     <div className='max-w-7xl mx-auto'>
     <Header></Header>
      
      <Routes>
        <Route path="/" element={ <LoadingScreen/> } />
        <Route path="reviews" element={ <Reviews/> } />
        <Route path="dashboard" element={ <Dashboard/> } />
        
        <Route path="blogs" element={ <Blogs/>  } />
        <Route path="/blogs/:idea" element={ <DetailsBlogPage blogs={blogs}/>  } />
        <Route path="contact" element={ <About/> } />
        <Route path="*" element={ <Errorpage/> } />
      </Routes>
     </div>
      <Footer></Footer>
    </div>

  );
}

export default App;

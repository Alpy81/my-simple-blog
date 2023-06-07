import Blog from './pages/Blog';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />  
        <Route path='/blog' element={<Blog/>} />     
        
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
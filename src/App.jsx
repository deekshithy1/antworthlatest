
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomeScreen from './pages/HomeScreen'
import Footer from './components/Footer'
import Products from './components/Products'
import WhyChoose from './components/WhyChoose'




const Layout=()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}> 
        <Route index element={<HomeScreen/>}/>
          <Route path='/products' element={<WhyChoose/>}/>
            <Route path='/services' element={<Products/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

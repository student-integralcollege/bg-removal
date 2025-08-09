import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Result from './pages/result'
import BuyCredits from './pages/buycredits'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credits" element={<BuyCredits />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App

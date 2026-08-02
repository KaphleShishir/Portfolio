import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MoreAboutMe from './pages/MoreAboutMe'

const App = () => {

  return (
   <main className='bg-[#e4e2e2] min-h-screen px-12 py-8 overflow-x-hidden'>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/more-about-me' element={<MoreAboutMe />} />
     </Routes>
   </main>
  )
}

export default App

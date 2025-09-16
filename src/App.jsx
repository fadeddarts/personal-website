import Star from './components/StarParticles'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog'
import Homepage from './components/Home/Homepage'

function App() {
  return (
    <>
      <Router>
        <Star />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/blog" element={<><Blog /></>} />
        </Routes>
      </Router>
    </>
  )
}


export default App

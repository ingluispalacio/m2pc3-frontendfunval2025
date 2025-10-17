import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import MasterLayout from './layouts/MasterLayout'
import Service from './pages/Service'
import Features from './pages/Features'
import OursProjects from './pages/OursProjects'


function App() {
  return (
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/features" element={<Features />} />
          <Route path="/ours_projects" element={<OursProjects />} />
        </Route>
      </Routes>
  )
}

export default App


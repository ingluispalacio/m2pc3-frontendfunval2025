import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import MasterLayout from './layouts/MasterLayout'
import Service from './pages/Service'


function App() {
  return (
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
        </Route>
      </Routes>
  )
}

export default App


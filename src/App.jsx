import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import MasterLayout from './layouts/MasterLayout'


function App() {
  return (
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App


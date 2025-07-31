import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/main/MainLayout';
import { ProjectPage } from './pages/projects/project-page/ProjectPage';
import { HousePage } from './pages/services/modals/House';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
          </Route>
          <Route path='/proyecto/:id' element={<ProjectPage />} />
          <Route path='/servicios/casas-financiadas' element={<HousePage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

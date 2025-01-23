import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/main/MainLayout';
import { ProjectPage } from './pages/projects/project-page/ProjectPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
          </Route>
          <Route path='/proyecto/:id' element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

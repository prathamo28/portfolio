import { useState } from 'react'
import './App.css'
import TopNav from './components/TopNav.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Certifications from './pages/Certifications.jsx'
import Experience from './pages/Experience.jsx'

const PAGES = {
  home: Home,
  skills: Skills,
  projects: Projects,
  certifications: Certifications,
  experience: Experience,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => setCurrentPage(page)

  const PageComponent = PAGES[currentPage] || Home
  const showSidebar = currentPage !== 'home'

  return (
    <div className="app-shell">
      <TopNav navigate={navigate} currentPage={currentPage} />
      <div className="app-body">
        {showSidebar && (
          <Sidebar currentPage={currentPage} navigate={navigate} />
        )}
        <main className="app-content">
          <PageComponent navigate={navigate} currentPage={currentPage} />
        </main>
      </div>
    </div>
  )
}

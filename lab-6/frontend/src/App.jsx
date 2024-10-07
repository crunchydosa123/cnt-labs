import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import StudentLogin from './pages/StudentLoginPage'
import TeacherLogin from './pages/TeacherLoginPage'
import CataloguePage from './pages/CataloguePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/catalogue" element={<CataloguePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

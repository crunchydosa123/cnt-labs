import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import StudentLogin from './pages/StudentLoginPage'
import TeacherLogin from './pages/TeacherLoginPage'
import CataloguePage from './pages/CataloguePage'
import SingleBook from './pages/SingleBook'
import StudentSignup from './pages/StudentSignupPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/book/:id" element={<SingleBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

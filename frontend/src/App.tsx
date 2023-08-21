

import { BrowserRouter ,Routes, Route} from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
// import HomePage from './Pages/HomePage'


function App() {

  return (
    <div>
      <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <BrowserRouter>
        <Routes>
        {/* <Route path ='/' element={<HomePage/>}></Route> */}
        <Route path ='/' element={<LoginPage />}></Route>
        <Route path ='/sign-up' element={<RegisterPage />}></Route>

        </Routes>
        </BrowserRouter>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
         <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/> 
      </div>
    </div >

    </div>
    

    
    
    
  )
}

export default App


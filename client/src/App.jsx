import { Routes , Route } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ToasterComponent from './Components/ToasterComponent';
import HomeScreen from './Screens/HomeScreen';
import PrivateRoutes from './Components/PrivateRoutes';


function App() {

  return (
    <>
    <ToasterComponent />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route element={<PrivateRoutes/>}>
          <Route path='/home' element={<HomeScreen/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App

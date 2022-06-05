
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import RequireAuth from './hoc/RequireAuth';
import Posts from './pages/Posts';
import Feeds from "./pages/Feeds";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route 
        path="feeds" 
        element={
      <RequireAuth>
        <Feeds/>
      </RequireAuth>
      }
     />
     <Route 
        path="posts" 
        element={
      <RequireAuth>
        <Posts/>
      </RequireAuth>
      }
     />
      </Routes>
    </div>
  );
}

export default App;

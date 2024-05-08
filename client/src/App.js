import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context)
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/register" element={user ? <Home /> : <Register />} ></Route>
          <Route path="/login" element={user ? <Home /> : <Login />} ></Route>  
          <Route path="/write" element={user ? <Write /> : <Login />} ></Route>
          <Route path="/settings" element={user ? <Settings /> : <Login/>} ></Route>
          <Route path="/post/:postId" element={<Single />} ></Route> 
            
          
        
        </Routes>




      </Router>
    </div>
  );
}

export default App;

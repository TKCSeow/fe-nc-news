import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { Route, Routes } from 'react-router';
import Login from './components/SignIn';
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/User";

function App() {
  const {setUser} = useContext(UserContext);

  // This is to check for logged in user after page reload
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <div className="App">    
      <Routes>
        <Route path="/*" element={[<Header key={"header"}/>, <MainContainer key="mainContainer"/>]}/>
        <Route path="/login" element={<Login/>}/>
      </Routes> 
            
          
    </div>
  );
}

export default App;

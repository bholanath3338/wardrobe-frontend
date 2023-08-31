import "./App.css";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./Components/Main";
function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="Login" element={<Login />} />
          <Route path="Sign-up" element={<Signup />} />
          {/* </Route> */}

          <Route path="*" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

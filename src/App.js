import Card from "./components/Card";
import Complaints from "./pages/Complaints";
import "./App.css";
import Signin from "./pages/sign-in";
import {Routes,Route,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Complaints /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/complaints" element={<Complaints />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

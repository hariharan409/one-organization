import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import "./scss/App.scss";


function App() {
  return(
    <div className="app-root-element">
      <Routes>
        <Route path="/" Component={Dashboard} />
      </Routes>
    </div>
  )
}

export default App;

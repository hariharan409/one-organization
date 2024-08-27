import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import "./scss/app.scss";
import AppHeader from "./pages/app-header/AppHeader";


function App() {
  return(
    <div className="app-root-component">
      <AppHeader />
      <Routes>
        <Route path="/" Component={Dashboard} />
      </Routes>
    </div>
  )
}

export default App;

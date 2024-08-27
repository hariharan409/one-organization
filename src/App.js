import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import "./scss/app.scss";
import AppHeader from "./pages/app-header/AppHeader";


function App() {
  return(
    <div className="app-root-component">
      <AppHeader />
      <div className="app-body-element">
        <Routes>
          <Route path="/" Component={Dashboard} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

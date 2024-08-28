import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import AppHeaderTwo from "./pages/app-header/AppHeaderTwo";
import AppHeaderOne from "./pages/app-header/AppHeaderOne";
import "./scss/app.scss";


function App() {
  return(
    <div className="app-root-component">
      <AppHeaderOne />
      <AppHeaderTwo />
      <div className="app-body-element">
        <Routes>
          <Route path="/" Component={Dashboard} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

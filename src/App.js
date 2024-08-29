import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import AppHeaderTwo from "./pages/app-header/AppHeaderTwo";
import AppHeaderOne from "./pages/app-header/AppHeaderOne";
import "./scss/app.scss";
import { SearchProvider } from "./contexts/SearchContext";


function App() {
  const currentYear = new Date().getFullYear();

  return(
    <SearchProvider>
      <div className="app-root-component">
        <AppHeaderOne />
        <AppHeaderTwo />
        <div className="app-body-element">
          <Routes>
            <Route path="/" Component={Dashboard} />
          </Routes>
        </div>
        <div className="app-footer">
          <span className="app-footer-content">
            © {currentYear} 
            <a href="https://seatrium.com" target="_blank" rel="noreferrer" style={{color: "blue",fontSize: "14px",paddingInline: "3px"}}>Seatrium.</a>
            all rights reserved. | terms of use | 
            <a href="https://seatrium.com/assets/privacy-policy/seatrium_Privacy_Policy.pdf" target="_blank" rel="noreferrer" style={{color: "blue",fontSize: "14px",paddingInline: "3px"}}>privacy policy</a> 
          </span>
        </div>
      </div>
    </SearchProvider>
  )
}

export default App;

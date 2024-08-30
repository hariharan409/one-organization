import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import AppHeaderTwo from "./pages/app-header/AppHeaderTwo";
import AppHeaderOne from "./pages/app-header/AppHeaderOne";
import { SearchContext } from "./contexts/SearchContext";
import { useContext } from "react";
import AppsSearch from "./pages/apps-search/AppsSearch";
import "./scss/app.scss";


function App() {
  const {searchText} = useContext(SearchContext);
  const currentYear = new Date().getFullYear();

  return(
    <div className="app-root-component">
      <AppHeaderOne />
      <AppHeaderTwo />
      <div className="app-body-element">
        <Routes>
          <Route path="/" Component={searchText ? AppsSearch : Dashboard} />
        </Routes>
      </div>
      <div className="app-footer">
        <span className="app-footer-content">
          copyright © {currentYear} 
          <a href="https://seatrium.com" target="_blank" rel="noreferrer" style={{color: "blue",fontSize: "14px",paddingInline: "3px"}}>Seatrium.</a>
          all rights reserved. | 
          <a href="https://seatrium.com/assets/privacy-policy/seatrium_Privacy_Policy.pdf" target="_blank" rel="noreferrer" style={{color: "blue",fontSize: "14px",paddingInline: "3px"}}>privacy policy</a> 
          | app version - {process.env.REACT_APP_VERSION}
        </span>
      </div>
    </div>
  )
}

export default App;

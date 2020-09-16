import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/app.scss";

const pages = [{ path: "/", pathName: "Home", Component: Home }];

function App() {
  return (
    <>
      <div className="pages">
        {pages.map(({ path, pathName, Component }) => (
          <Route path={path} exact key={pathName}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;

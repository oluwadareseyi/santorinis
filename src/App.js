import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/app.scss";

const pages = [{ path: "/", pathName: "Home", Component: Home }];

function App() {
  return (
    <>
      {window.innerWidth > 1000 ? (
        <div className="pages">
          <DndProvider backend={HTML5Backend}>
            {pages.map(({ path, pathName, Component }) => (
              <Route path={path} exact key={pathName}>
                <Component />
              </Route>
            ))}
          </DndProvider>
        </div>
      ) : (
        <div className="no-laptop">Please, view on a PC or Mac.</div>
      )}
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Films from "./Pages/Films";
import { useEffect } from "react";
import auth from "./services/auth";
import Pagination from "./component/Pagination";

function App() {
  useEffect(() => {
    auth.setAxiosToken();
  });

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<Accueil />} path={"/"} />
          <Route element={<Films />} path={"/films"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

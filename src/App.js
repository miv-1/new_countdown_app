import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelloThere from "./Pages/HelloThere";
import ErrorPage from "./Pages/404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/HelloThere" element={<HelloThere />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

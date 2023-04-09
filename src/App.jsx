import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./Context/GlobalContext";
import Footer from "./Components/Layout/Footer/Footer"
import Navbar from "./Components/Layout/Navbar/Navbar";
import ContactForm from "./Components/Pages/Contact/ContactForm";
import Dentist from "./Components/Pages/Dentists/Dentist"
import Detail from "./Components/Pages/Detail/Detail" 
import Favorites from "./Components/Pages/Favorites/Favorites"
import Home from "./Components/Pages/Home/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider>
          <Routes>
            <Route element={<Footer />}>
              <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/dentists" element={<Dentist />} />
                <Route path="/dentist/:id" element={<Detail />} />
                <Route path="/favs" element={<Favorites />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </ GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

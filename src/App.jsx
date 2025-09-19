import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row mb-1">
            <div className="col-12">
              <Header />
            </div>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="row">
                    <div className="col-12">
                      <Slider />
                    </div>
                  </div>

                  
                 
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>

          <div className="row">
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
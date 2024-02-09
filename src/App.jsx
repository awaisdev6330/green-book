import Home from "./Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./error/404";
import SignIn from "./components/SignIn";
import BlogSection from "./components/BlogSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<PageNotFound />} />
        <Route exact path="about" element={<AboutSection />} />
        <Route exact path="user/login" element={<SignIn />} />
        <Route exact path="blogs" element={<BlogSection />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;

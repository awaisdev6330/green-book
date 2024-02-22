import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Footer from "./shared-components/Footer";
import Header from "./shared-components/Header";
import NotFound from "./error/404";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";
import ForgetPassword from "./user/ForgetPassword";
import AboutUs from "./pages/aboutPage/AboutUs";
import Album from "./pages/album/Album";
import ReviewSection from "./pages/review/Rewies";
import ConfirmOrderForm from "./pages/placeorderPage/PlaceOrder";

let App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="user/signin" element={<SignIn />} />
        <Route exact path="album" element={<Album />} />
        <Route exact path="user/signup" element={<SignUp />} />
        <Route exact path="user/forget-password" element={<ForgetPassword />} />
        <Route exact path="about-us" element={<AboutUs />} />
        <Route exact path="rewies" element={<ReviewSection />} />
        <Route exact path="place-order" element={<ConfirmOrderForm />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

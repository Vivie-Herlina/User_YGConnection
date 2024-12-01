import { Routes, Route, useLocation } from "react-router-dom"; // Hapus Router di sini
import NavbarLogged from "./components/NavbarLogged";
import NavbarLogin from "./components/NavbarLogin";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AboutusLogged from "./pages/AboutusLogged";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import ResetNext from "./pages/ResetNext";
import Regis from "./pages/Regis";
import RegisNext from "./pages/RegisNext";
import VerifikasiEmail from "./pages/VerifikasiEmail";
import HomeLogged from "./pages/HomeLogged";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import Payment from "./pages/Payment";
import Payment2 from "./pages/Payment2";
import Tracking from "./pages/Tracking";
import Transaction from "./pages/Transaction";
import Review from "./pages/Review";
import DetailsItem from "./pages/DetailsItem";
import Concert from "./pages/Concert";
import ConcertLogged from "./pages/ConcertLogged";
import ArtistDetail from "./pages/ArtistDetail";
import ArtistDetailLogged from "./pages/ArtistDetailLogged";
import DetailConcert from "./pages/DetailConcert";
import DetailConcertLogged from "./pages/DetailConcertLogged";
import ProductMiniAlbum from "./pages/ProductMiniAlbum";
import ProductDetail from "./pages/ProductDetail";
import NewsDetailLogged from "./pages/NewsDetailLogged";
import AccountSetting from "./pages/AccountSetting";
import Point from "./pages/Point";
import Checkout from "./pages/Checkout";
import Community from "./pages/Community";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/AboutusLogged" element={<AboutusLogged />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/ResetNext" element={<ResetNext />} />
        <Route path="/Regis" element={<Regis />} />
        <Route path="/RegisNext" element={<RegisNext />} />
        <Route path="/VerifikasiEmail" element={<VerifikasiEmail />} />
        <Route path="/HomeLogged" element={<HomeLogged />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CookiesPolicy" element={<CookiesPolicy />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Payment2" element={<Payment2 />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/DetailsItem" element={<DetailsItem />} />
        <Route path="/Concert" element={<Concert />} />
        <Route path="/ConcertLogged" element={<ConcertLogged />} />
        <Route path="/ArtistDetail" element={<ArtistDetail />} />
        <Route path="/ArtistDetailLogged" element={<ArtistDetailLogged />} />
        <Route path="/DetailConcert" element={<DetailConcert />} />
        <Route path="/DetailConcertLogged" element={<DetailConcertLogged />} />
        <Route path="/ProductMiniAlbum" element={<ProductMiniAlbum />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/NewsDetailLogged" element={<NewsDetailLogged />} />
        <Route path="/AccountSetting" element={<AccountSetting />} />
        <Route path="/Point" element={<Point />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
    </div>
  );
}

export default App;

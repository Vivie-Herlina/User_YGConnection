import { Routes, Route, useLocation } from "react-router-dom"; // Hapus Router di sini
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AboutusLogged from "./pages/AboutUsLogged";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import ResetNext from "./pages/ResetNext";
import Card from "./pages/Cart";
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
import Product from "./pages/Product";
import Community from "./pages/Community";
import store from "./services/store";
import { Provider } from "react-redux";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/AboutusLogged" element={<AboutusLogged />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/RegisNext" element={<RegisNext />} />
          <Route path="/Regis" element={<Regis />} />
          <Route path="/RegisNext" element={<RegisNext />} />
          <Route path="/VerifikasiEmail" element={<VerifikasiEmail />} />
          <Route
            path="/HomeLogged"
            element={
              <ProtectedRoute>
                <HomeLogged />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />

          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/CookiesPolicy" element={<CookiesPolicy />} />
          <Route
            path="/Payment/:transactionId/:orderId"
            element={<Payment />}
          />
          <Route path="/Payment-success" element={<Payment2 />} />
          <Route path="/Tracking" element={<Tracking />} />
          <Route path="/Cart" element={<Card />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/DetailsItem" element={<DetailsItem />} />
          <Route path="/Concert" element={<Concert />} />
          <Route path="/ConcertLogged" element={<ConcertLogged />} />
          <Route path="/artist/:name" element={<ArtistDetail />} />
          <Route path="/ArtistDetailLogged" element={<ArtistDetailLogged />} />
          <Route path="/DetailConcert/:id" element={<DetailConcert />} />
          <Route
            path="/DetailConcertLogged"
            element={<DetailConcertLogged />}
          />
          <Route path="/ProductMiniAlbum" element={<ProductMiniAlbum />} />
          <Route
            path="/ProductDetail/:id"
            element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            }
          />
          <Route path="/NewsDetailLogged" element={<NewsDetailLogged />} />
          <Route path="/AccountSetting" element={<AccountSetting />} />
          <Route path="/Point" element={<Point />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

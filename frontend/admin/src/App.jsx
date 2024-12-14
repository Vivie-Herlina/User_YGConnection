import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Productpage from "./pages/Product";
import Artistpage from "./pages/Artist";
import AddArtist from "./pages/AddArtist";
import AddConcerts from "./pages/AddConcerts";
import LoginForm from "./components/AdminLogin";
import Concerts from "./pages/Concerts/Index";
import ConcertDetail from "./pages/DetailConcerts";
import ArtistProfile from "./pages/ArtistProfile";
import ProductDetail from "./pages/ProductDetail"; // Tambahkan halaman detail produk
import AddProduct from "./pages/AddProduct"; // Import AddProduct
import Adminsettings from "./pages/adminsettings";
import DeliveryHistory from "./pages/DeliveryHistory";
import PrivateRoute from "./components/PrivateRoute";
import Regis from "./pages/Regist";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Login Terbuka */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Regis />} />

        {/* Semua Halaman Lainnya Dilindungi */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Productpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/productdetail/:productId"
          element={
            <PrivateRoute>
              <ProductDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/artist"
          element={
            <PrivateRoute>
              <Artistpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/addproduct"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/addartist"
          element={
            <PrivateRoute>
              <AddArtist />
            </PrivateRoute>
          }
        />
        <Route
          path="/addconcerts"
          element={
            <PrivateRoute>
              <AddConcerts />
            </PrivateRoute>
          }
        />
        <Route
          path="/concerts"
          element={
            <PrivateRoute>
              <Concerts />
            </PrivateRoute>
          }
        />
        <Route
          path="/concerts/:id"
          element={
            <PrivateRoute>
              <ConcertDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/artist/:artistName"
          element={
            <PrivateRoute>
              <ArtistProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/adminsettings"
          element={
            <PrivateRoute>
              <Adminsettings />
            </PrivateRoute>
          }
        />
        <Route
          path="/deliveryhistory"
          element={
            <PrivateRoute>
              <DeliveryHistory />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

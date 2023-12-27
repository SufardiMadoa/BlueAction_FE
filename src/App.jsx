
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Admin
import Login from "./components/Login";
import HalamanUtama from "./components/HalamanUtama";

import HalamanNewsAdmin from "./components/HalamanNewsAdmin";

import EventUpdate from "./components/EventUpdate";
import EventContent from "./components/EventContent";
import EventDocumentation from "./components/EventDocumentation";
// import HalamanDonation from "./user/HalamanDonation";

// import Nyobak from './components/Nyobak'
import UploadContentNews from "./components/UploadContentNews";
import EditeContentNews from "./components/EditeContentNews";
import DonationUpdate from "./components/DonationUpdate";
import Eventinput from "./components/Eventinput";
import HalamanEducation from "./components/HalamanEducation";

import RegisterDonation from "./user/RegisterDonation";
// import Edukasi2 from "./components/EdukasiContent";
// import DonasiUser from "./users/UserDonation";
import FormDonasi from "./components/FormDonasi";
import Pembayaran from "./user/Pembayaran";
import KonfirmasiPembayaran from "./components/KonfirmasiPembayaran";

import AdminDonasi from "./components/AdminDonasi";


// User
import HalamanNews from "./components/HalamanNews";
import UserDonasi from "./user/UserDonasi";
import EdukasiContent from "./user/EdukasiContent";
import HalamanEvent from "./user/HalamanEvent";
// import RegisterDonation from "./user/RegisterDonation";
// import AdminDonasi1 from "./components/AdminDonasi1";
// import { BrowserRouter } from "react-router-dom";
// import Coba from './components/coba'
// import Login1 from "./user/Login1"
export default function App() {
  return (
    <>
      <NavBar />
{/* Admin */}
      <Routes>

        <Route path="/" element={<HalamanUtama />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/admin" element={<HalamanUtama />} />
        <Route path="/admin/news/newsadmin" element={<HalamanNewsAdmin />} /> 
        <Route path="/admin/uploadadminnews" element={<UploadContentNews />} />
        <Route path="/admin/editeadminnews" element={<EditeContentNews />} />
        <Route path="/admin/Event/update" element={<EventUpdate />} />
        <Route path="/admin/Event/Input" element={<Eventinput />} />
        <Route path="/admin/Event/EventContent" element={<EventContent />} />
        <Route
          path="/admin/Event/EventContent/EventDocumentation"
          element={<EventDocumentation />}
        />
        <Route path="/admin/Education" element={<HalamanEducation />} />
        <Route path="/admin/Education/newseducate" element={<EdukasiContent />} />
        <Route path="/admin/Donation" element={<AdminDonasi />} />
        <Route path="/admin/Donation/update" element={<DonationUpdate />} />
        <Route path="/admin/Donation/Update" element={<DonationUpdate />} />
  
  

{/* User */}
      </Routes>
      {/* </BrowserRouter> */}
       <Routes>
        <Route path="/User" element={<HalamanUtama />} />
        <Route path="/User/news" element={<HalamanNews />} />
        <Route path="/Event" element={<HalamanEvent />} />
        <Route path="/User/Event/update" element={<EventUpdate />} />
        <Route path="/Event/EventContent" element={<EventContent />} />
        <Route
          path="/Event/EventContent/EventDocumentation"
          element={<EventDocumentation />}
        />
        <Route path="/Education" element={<HalamanEducation />} />
        <Route path="/Education/news" element={<EdukasiContent />} />
        <Route path="/Donation" element={<UserDonasi />} />
        <Route path="/Donation/Register" element={<RegisterDonation />} />
        <Route path="/Donation/Register/Form" element={<FormDonasi />} />
        <Route path="/Donation/Register/Form/bayar" element={<Pembayaran />} />
        <Route path="/Donation/Register/Form/bayar/confir" element={<KonfirmasiPembayaran/>} />
        <Route path="/Donation/Update" element={<DonationUpdate />} />
        <Route path="/uploadadminnews" element={<UploadContentNews />} />
        <Route path="/editeadminnews" element={<EditeContentNews />} />

      </Routes> 
      <Footer />
    </>
  );
}

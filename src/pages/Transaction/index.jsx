
import React from 'react';
import NavbarLogged from "../../components/NavbarLogged";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import '../../style/Transaction.css';

const Transaction = () => {
  return (
    <>
      <NavbarLogged />  {/* Use Navbar component */}
      
      <button className="user-button">
        <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
      </button>

      <Dropdown />  {/* Use Dropdown component */}

      <h1 className="isi">Transaction</h1>

      <main>
        <section className="transaction">
          <h3>Order & Status</h3>
          <div className="filter">
            <p>Filter</p>
            <button className="filter-icon">
              <img src="/images/img/filter.png" alt="Filter Icon" />
            </button>
          </div>
          <div className="order-status">
            <OrderItem 
              image="/images/img/BLIK MEMBERSHIP.png" 
              title="BLINK MEMBERSHIP [MEMBERSHIP CARD]" 
              quantity="1" 
              price="350.000" 
              status="Packed" 
              link="/DetailsItem" 
            />
            <OrderItem 
              image="/images/img/lalisa_album.png" 
              title="LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]" 
              quantity="1" 
              price="615.000" 
              status="Shipping" 
              link="/Tracking" 
            />
            <OrderItem 
              image="/images/img/jisso_album.png" 
              title="JISOO FIRST SINGLE ALBUM [ME] KIT ALBUM" 
              quantity="1" 
              price="270.000" 
              status="Cancelled" 
              link="/DetailItems" 
            />
            <OrderItem 
              image="/images/img/bp_album.png" 
              title="BLACKPINK 2nd ALBUM [BORN PINK] DIGIPACK ver. SET" 
              quantity="1" 
              price="645.000" 
              status="Complete" 
              link="/DetailItems" 
            />
          </div>
        </section>
      </main>

      <Footer />  {/* Use Footer component */}
    </>
  );
};

export default Transaction;
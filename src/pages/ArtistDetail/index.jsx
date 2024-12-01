import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../style/ArtistDetail.css';

const ArtisDetail = () => {
    return (
        <>
            <Navbar />

            <h1 className="isi">BABYMONSTER</h1>
            <main>
                <section className="banner">
                    <img src="/images/img/detail_BM.png" alt="BABYMONSTER" />
                    <button>Artist Info</button>
                </section>

                <section className="members">
                    <h2>Members</h2>
                    <div className="member-list">
                        <div className="member-item">
                            <img src="/images/img/asa.jpg" alt="Asa" />
                            <p className="member-name">Asa</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/pharita_bm.jpg" alt="Pharita" />
                            <p className="member-name">Pharita</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/ruka_bm.jpg" alt="Yuka" />
                            <p className="member-name">Ruka</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/rami_bm.jpg" alt="Rami" />
                            <p className="member-name">Rami</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/rora_bm.jpg" alt="Rora" />
                            <p className="member-name">Rora</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/ahyeon_bm.jpg" alt="Ahyeon" />
                            <p className="member-name">Ahyeon</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/chita_bm.jpg" alt="Chiquita" />
                            <p className="member-name">Chiquita</p>
                        </div>
                    </div>
                </section>

                <section className="merch">
                    <h2>Merch</h2>
                    <div className="merch-list">
                        <div className="item">
                            <img src="/images/img/keyring.png" alt="Keyring" />
                            <p>Keyring<br/><span>100 Points</span></p>
                        </div>
                        <div className="item">
                            <img src="/images/img/Signature Ring.png" alt="Signature Ring" />
                            <p>Signature Ring<br/><span>200 Points</span></p>
                        </div>
                        <div className="item">
                            <img src="/images/img/Brooch.png" alt="Brooch" />
                            <p>Brooch<br/><span>150 Points</span></p>
                        </div>
                        <div className="item">
                            <img src="/images/img/necklace.png" alt="Room Slipper" />
                            <p>Necklace<br/><span>250 Points</span></p>
                        </div>
                        <div className="item">
                            <img src="/images/img/Ballcap.png" alt="Ballcap" />
                            <p>Ballcap<br/><span>250 Points</span></p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default ArtisDetail;
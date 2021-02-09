import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg">
                </img>
                <div className="home_row">
                    < Product
                        id='1'
                        title="shashwat"
                        price={50}
                        imageSrc="https://m.media-amazon.com/images/I/410vdswIRnL._AC_SL260_.jpg"
                        rating={5}
                    />
                    < Product
                        id='1'
                        title="shashwat"
                        price={50}
                        imageSrc="https://m.media-amazon.com/images/I/410vdswIRnL._AC_SL260_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    < Product
                        id='1'
                        title="shashwat"
                        price={50}
                        imageSrc="https://m.media-amazon.com/images/I/410vdswIRnL._AC_SL260_.jpg"
                        rating={5}
                    />
                    < Product
                        id='1'
                        title="shashwat"
                        price={50}
                        imageSrc="https://m.media-amazon.com/images/I/410vdswIRnL._AC_SL260_.jpg"
                        rating={5}
                    />
                    < Product
                        id='1'
                        title="shashwat"
                        price={50}
                        imageSrc="https://m.media-amazon.com/images/I/410vdswIRnL._AC_SL260_.jpg"
                        rating={5}
                    />
                    < Product
                        id='1'
                        title="shashwat"
                        price={50}
                        imageSrc="https://m.media-amazon.com/images/I/410vdswIRnL._AC_SL260_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    < Product
                        id='1'
                        title="shashwat"
                        price={50}
                        imageSrc="https://m.media-amazon.com/images/I/410vdswIRnL._AC_SL260_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

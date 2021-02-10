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
                        rating={3}
                    />
                    < Product
                        id='1'
                        title="Computers & Accessories"
                        price={50000}
                        imageSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
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
                        title="Products for every room in your home"
                        price={25000}
                        imageSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                        rating={5}
                    />
                    < Product
                        id='1'
                        title="Get fit at home"
                        price={5000}
                        imageSrc="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
                        rating={5}
                    />
                    < Product
                        id='1'
                        title="hello every one this looks ccool"
                        price={50}
                        imageSrc="https://m.media-amazon.com/images/I/91nHu1NmPbL._AC_UL320_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    < Product
                        id='1'
                        title="Amazon Basics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
                        price={6852}
                        imageSrc="https://m.media-amazon.com/images/I/41gT9mzRM8L._AC_SY200_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

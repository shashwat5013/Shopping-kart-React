import React from 'react'
import './Home.css'
import Product from './Product'
import FlipMove from 'react-flip-move'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg">
                </img>
                <div className="home_row">
                    < Product
                        id='B'
                        title="shashwat"
                        price={20}
                        imageSrc="https://i.pinimg.com/236x/a2/26/39/a22639ab7161122e40f045efd6737415.jpg"
                        rating={3}
                    />
                    < Product
                        id='C'
                        title="Computers & Accessories"
                        price={50}
                        imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6f/Cimage.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    < Product
                        id='A'
                        title="shashwat"
                        price={30}
                        imageSrc="https://media.gettyimages.com/photos/heart-letter-a-picture-id171572940?s=612x612"
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
                        id='D'
                        title="Amazon Basics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
                        price={15}
                        imageSrc="https://static8.depositphotos.com/1010782/858/i/600/depositphotos_8581584-stock-photo-fire-alphabets-d.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

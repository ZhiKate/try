import React from 'react';
import MyCarousel from './HomePage/MyCarousel';
import AuctionIntroduction from './HomePage/AuctionIntroduction';
import SeriversSection from './HomePage/SerivesSection';


const images = [
  'https://via.placeholder.com/600x400',
  'https://via.placeholder.com/600x400',
  'https://via.placeholder.com/600x400',
];

const products =[
  {
    id:1,
    name:'apple',
    imageUrl:'https://via.placeholder.com/600x400'
  },
  {
    id:2,
    name:'banana',
    imageUrl:'https://via.placeholder.com/600x400'
  },
  {
    id:3,
    name:'origan',
    imageUrl:'https://via.placeholder.com/600x400'
  }

];

const id=1001;
const title= 'Auction 1001';

function Home() {
  return (
    <div className='home_page_content_body'>
        <div className='my_carousel'>
          <MyCarousel images={images} />
        </div>

          <AuctionIntroduction id={id} products={products} title={title}/>
          <SeriversSection/>
    </div>
  );
}

export default Home;
import React from 'react';
import ProductCard from '../utils/productCard';

const products=[
  {
    Lot:'111',
    item: 'apple',
    High_Bid:2,
    Bids:2,
    each_bid:1,
    imageURL:'./picture/test.png',
    deadline:'2d 21h 39s'
  },
  {
    Lot:'222',
    item: 'banana',
    High_Bid:1,
    Bids:1,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'333',
    item: 'apple',
    High_Bid:2,
    Bids:2,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'444',
    item: 'banana',
    High_Bid:1,
    Bids:1,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'555',
    item: 'apple',
    High_Bid:2,
    Bids:2,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'666',
    item: 'banana',
    High_Bid:1,
    Bids:1,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'777',
    item: 'apple',
    High_Bid:2,
    Bids:2,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'888',
    item: 'banana',
    High_Bid:1,
    Bids:1,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'777',
    item: 'apple',
    High_Bid:2,
    Bids:2,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'888',
    item: 'banana',
    High_Bid:1,
    Bids:1,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'777',
    item: 'apple',
    High_Bid:2,
    Bids:2,
    each_bid:1,
    deadline:'2d 21h 39s'
  },
  {
    Lot:'888',
    item: 'banana',
    High_Bid:1,
    Bids:1,
    each_bid:1,
    deadline:'2d 21h 39s'
  },

];
function AuctionDetailPage() {
  return (
    <div className='product_detail_content_body'>
        <div className='show_product'>
          {
            products.map((product)=>(
              <ProductCard product={product}/>
            ))
          }
        </div>
    </div>
  );
}

export default AuctionDetailPage;
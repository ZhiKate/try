import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  clickChange: {
    '&:hover': {
      boxShadow: '0px 1px 4px #000000'
    },
  },
});
function AuctionIntroduction(props){
  // 假设auction对象包含了当前拍卖场次的信息，包括图片和其他相关信息
  const { id, title,  products } = props;
  const muiClass=useStyles();

  return (
    // <div className="auction-introduction">
    //   <h2>{title}</h2>
    //   <div className="auction-images">
    //     {products.slice(0, 8).map(product => (
    //       <Link to={`/product/${product.id}`} key={product.id}>
    //         <img src={product.imageUrl} alt={product.name} />
    //       </Link>
    //     ))}
    //   </div>
    //   <div className="auction-details">
    //     <p>More products from this auction:</p>
    //     <ul>
    //       {products.map(product => (
    //         <li key={product.id}>
    //           <Link to={`/product/${product.id}`}>{product.name}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="auction-link">
    //     <Link to={`/auction/${id}`}>View all products from this auction</Link>
    //   </div>
    // </div>
    <div className="auction_introduction">
      <Link to={`/auction/1`}>
        <div className='title'>
            <h2>Auction # 1001</h2>
            <p>Open Time: May 13 to May 16 </p>
        </div>
      </Link>
      <p className='total'>TOTAL: </p>
      <div className="product_images">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
           <img key={product.id} src={product.imageUrl} alt={`Product ${product.id}`} className={muiClass.clickChange}/>
          </Link>
        ))}
      </div>
      <div className='view_more_button'>
        <Link  to={`/auction/1`}>
          <Button variant="contained"   sx={{
            backgroundColor: 'rgb(31, 31, 31)',
            color: '#fff',
            margin: '2rem',
            '&:hover': {
              backgroundColor: '#535252',
            },
          }}>
            View more products
          </Button>
        </Link>
      </div>
  </div>
  );
};

export default AuctionIntroduction;
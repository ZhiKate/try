import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { CardHeader } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import {IconButton,Box} from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
//   picture: {
//     boxShadow: '0px 1px 4px #000000'
//   },
  button: {
    width:'100%',
     backgroundColor:'black',
     color:'white',
     fontWeight:'bold',
     fontSize:'1.05rem',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #787af5, #b137f8)',
      color:'black'
    },
  },
});


function ProductCard(props) {
    const{product}=props;
    const muiClass=useStyles();
    const [wishClicked, setWishClicked] = useState(false);

    const handleButtonClick = () => {
      setWishClicked(!wishClicked);
    };
    return(
        // <div className='productCard_show_section'>
        //     {products.map(product=>(
        //         <Card sx={{ maxWidth: 345 }}>
        //         <CardHeader
        //             action={
        //             <IconButton 
        //                 aria-label="wish"
        //                 onClick={handleButtonClick}
        //                 sx={{ color: wishClicked ? 'red' : 'inherit' }}
        //             >
        //                 <FavoriteIcon />
        //             </IconButton>
        //             }
        //             title={product.Lot}
        //             subheader={product.item}
        //         />
        //       <CardMedia
        //         sx={{ height: 140 }}
        //         image="/static/images/cards/contemplative-reptile.jpg"
        //         title="green iguana"
        //       />
        //       <CardContent>
        //         <Typography gutterBottom variant="h5" component="div">
        //           Lizard
        //         </Typography>
        //         <Typography variant="body2" color="text.secondary">
        //           Lizards are a widespread group of squamate reptiles, with over 6,000
        //           species, ranging across all continents except Antarctica
        //         </Typography>
        //       </CardContent>
        //       <CardActions>
        //         <Button size="small">Share</Button>
        //         <Button size="small">Learn More</Button>
        //       </CardActions>
        //     </Card>
        //     ))}
        // </div>
        <Card sx={{ maxWidth: '20rem', width:'20rem',
        }}>
        <Link to={`/product/${product.Lot}`}>
        
            <CardHeader
                // action={
                // <IconButton 
                //     aria-label="wish"
                //     onClick={handleButtonClick}
                //     sx={{ color: wishClicked ? 'red' : 'inherit' }}
                // >
                //     <FavoriteIcon />
                // </IconButton>
                // }
                title={product.Lot}
                subheader={product.item}
                sx={
                    {
                        backgroundColor:'wheat'
                    }
                }
            />
        </Link>
        <CardContent sx={{height:'auto',padding:'0 0'}}>
            <IconButton 
                // color="transparent"
                aria-label="wish"
                onClick={handleButtonClick}
                // sx={{ color: wishClicked ? 'red' : 'inherit' }}
            >
              {wishClicked? <StarIcon sx={{color:'black'}}/> : <StarBorderIcon />}
            </IconButton>
        </CardContent>

        <CardMedia
            sx={{ 
                // paddingTop: '100%',
                width: '90%',
                height:'18rem',
                objectFit: 'fill',
                margin:'0% 5%'
            }}
            image="/picture/test.png"
            title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="body1">
          High Bid: {product.High_Bid} CAD
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {product.Bids} Bid
        </Typography>
        <Typography gutterBottom variant="body1">
          {product.deadline}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={muiClass.button}>
            BID {product.High_Bid+product.each_bid}
        </Button>
      </CardActions>
    </Card>
    

    )
  }

export default ProductCard;
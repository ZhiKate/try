import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyCarousel(){
  return (
    <Carousel showArrows autoPlay infiniteLoop>
      <div>
        <img className="slider_image" src="https://via.placeholder.com/600x400" alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img className="slider_image" src="https://via.placeholder.com/600x400" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img className="slider_image" src="https://via.placeholder.com/600x400" alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;

// import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
// import { Paper, Button } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   image: {
//     width: '100%',
//     height: 'auto',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// const items = [
//   {
//     imageUrl: 'https://via.placeholder.com/600x300',
//     caption: 'Slide 1',
//   },
//   {
//     imageUrl: 'https://via.placeholder.com/600x300',
//     caption: 'Slide 2',
//   },
//   {
//     imageUrl: 'https://via.placeholder.com/600x300',
//     caption: 'Slide 3',
//   },
// ];

// const MyCarousel = () => {
//   const classes = useStyles();
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   return (
//     <Carousel
//       animation="slide"
//       index={activeIndex}
//       autoPlay={false}
//       navButtonsAlwaysVisible
//       NextIcon={<Button onClick={handleNext}>Next</Button>}
//       PrevIcon={<Button onClick={handlePrev}>Prev</Button>}
//     >
//       {items.map((item, index) => (
//         <Paper key={index} className={classes.paper}>
//           <img src={item.imageUrl} alt={item.caption} className={classes.image} />
//           <p>{item.caption}</p>
//         </Paper>
//       ))}
//     </Carousel>
//   );
// };

// export default MyCarousel;
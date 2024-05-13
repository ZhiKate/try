import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselPart(props){
    const{pictures}=props;
    return (
        <Carousel showArrows autoPlay infiniteLoop>
            {
                pictures.map((picture)=>(
                    <div>
                        <img className="slider_image" src={picture} alt="Slide 1" />
                    </div>
                ))
            }
        </Carousel>
    );
};

export default CarouselPart;
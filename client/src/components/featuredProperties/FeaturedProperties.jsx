import React from 'react';
import './featuredProperties.css';

export default function FeaturedProperties() {
  return (
    <div class="fp">

    <div class="fpItem">
        <img 
         src="https://images.pexels.com/photos/2084291/pexels-photo-2084291.jpeg?cs=srgb&dl=pexels-david-rico-2084291.jpg&fm=jpg"
          alt=""
           className="fpImg"
           />
           <span className="fpName">Hotel Crowne Plaza</span>
           <span className="fpCity">Turkey</span>
           <span className="fpPrice">Starting from $120</span>
           <div className="fpRating">
               <button>8.9</button>
               <span className="fpreview">Excellent</span>
               <span className="fpReview">956 reviews</span>
           </div>
        </div>


        <div class="fpItem">
        <img 
         src="https://images.pexels.com/photos/2084291/pexels-photo-2084291.jpeg?cs=srgb&dl=pexels-david-rico-2084291.jpg&fm=jpg"
          alt=""
           className="fpImg"
           />
           <span className="fpName">Hotel Ellite Near The Sea View</span>
           <span className="fpCity">spain</span>
           <span className="fpPrice">Starting from $120</span>
           <div className="fpRating">
               <button>8.9</button>
               <span className="fpreview">Excellent</span>
               <span className="fpReview">456 reviews</span>
           </div>
        </div>


        <div class="fpItem">
        <img 
         src="https://images.pexels.com/photos/2084291/pexels-photo-2084291.jpeg?cs=srgb&dl=pexels-david-rico-2084291.jpg&fm=jpg"
          alt=""
           className="fpImg"
           />
           <span className="fpName">Hotel Wallflower Feel The Comfort</span>
           <span className="fpCity">Madrid</span>
           <span className="fpPrice">Starting from $120</span>
           <div className="fpRating">
               <button>8.9</button>
               <span className="fpreview">Excellent</span>
               <span className="fpReview">496 reviews</span>
           </div>
        </div>


        <div class="fpItem">
        <img 
         src="https://images.pexels.com/photos/2084291/pexels-photo-2084291.jpeg?cs=srgb&dl=pexels-david-rico-2084291.jpg&fm=jpg"
          alt=""
           className="fpImg"
           />
           <span className="fpName"> Hotel By Raddison Blue</span>
           <span className="fpCity">Madrid</span>
           <span className="fpPrice">Starting from $120</span>
           <div className="fpRating">
               <button>8.9</button>
               <span className="fpreview">Excellent</span>
               <span className="fpReview">956 reviews</span>
           </div>
        </div>
    </div>
  );
};

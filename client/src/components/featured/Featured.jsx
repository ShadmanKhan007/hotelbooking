import React from 'react';
import useFetch from "../../hooks/useFetch.js";
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");


  return (
    <div className="featured">
     { loading ? (
        "Loading please wait"
         ) :( 
         <> 
         <div className="featuredItem">
            <img 
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg"
              />
              <div className="featuredTitles">
                  <h1 className="">berlin</h1>
                  <h2 className="">{data[0]} properties</h2>
              </div>
        </div>

        <div className="featuredItem">
            <img 
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg"
              />
              <div className="featuredTitles">
                  <h1 className="">madrid</h1>
                  <h2 className="">{data[1]} properties</h2>
              </div>
        </div>

        <div className="featuredItem">
            <img 
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg"
              />
              <div className="featuredTitles">
                  <h1 className="">london</h1>
                  <h2 className="">{data[2]} properties</h2>
              </div>
        </div> </>  )}


    </div>
  )
}

export default Featured;
import React from 'react';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faPerson} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';


export default function Header({type}) {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate:new Date(),
      key: 'selection'
    }
  ]);


  const [openOptions, setOpenOptions] = useState(false);
   const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
  });

  const navigate = useNavigate();


  const handleOption = (name, operation) => {
    setOptions(prev=>{return {
      ...prev, [name]: operation === "i" ?  options[name] + 1 : options[name] - 1,
    };
  });
  };


  const handleSearch = () => {
       navigate("/hotels", {state: { destination, date, options } });
  }


  return (
    <div className="header">
    <div className="headerContainer">

      <div className="headerList">
        <div className="headerListItem">
         <FontAwesomeIcon icon={faBed} />
         <span>Stays</span>
        </div>

        <div className="headerListItem">
         <FontAwesomeIcon icon={faPlane} />
         <span>Flights</span>
        </div>

        <div className="headerListItem">
         <FontAwesomeIcon icon={faCar} />
         <span>Car rentals</span>
        </div>

        <div className="headerListItem">
         <FontAwesomeIcon icon={faBed} />
         <span>Attraction</span>
        </div>

        <div className="headerListItem">
         <FontAwesomeIcon icon={faTaxi} />
         <span>Airport taxis</span>
        </div>
      </div>
     
  


     { type !== "list" &&
       <>
       <div className="headerListItem-2">
        <h1 className="headerHeading">A Lifetime of discount? It's Genius.</h1>
      <p className="headerDesc">
        Get rewared for your travels-unlock instant saving of 10% or more with a free
        Booking.com account
      </p>

      <button className="headerbutton">sign in/ Register</button>
      </div>
  



      <div className="headerSearch">

        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed}  className="headerIcon" />
        <input type="text" className="headerSearchInput" 
         placeholder="where are you going"
         onChange={(e) => setDestination(e.target.value)}
          />
        </div>



        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon" />
        <span onClick={() =>setOpenDate(!openDate)}className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")}
         to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
        </div>

        {openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
          minDate={new Date()}
         />}
  


     
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson}  className="headerIcon" />
        <span onClick={()=>setOpenOptions(!openOptions)} 
           className="headerSearchText">
           {`${options.adult} adult ・ ${options.children} children ・ ${options.room} room`} </span>
           </div>


         {openOptions && <div className="options">
            <div className="optionItem">
               <span className="optionText">Adult</span>
               <div className="optionCounter">
               <button className="optionCounterButton"
                 disabled={options.adult <= 1} 
                 onClick={()=>handleOption("adult", "d")}>-</button>
               <span className="optionCounterNumber">{options.adult}</span>
              <button className="optionCounterButton"  onClick={()=>handleOption("adult", "i")}>+</button>
             </div>
            </div>


            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
              <button className="optionCounterButton" 
                disabled={options.children <= 0}
               onClick={()=>handleOption("children", "d")}>-</button>
               <span className="optionCounterNumber">{options.children}</span>
              <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
            </div>
            </div>


            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
              <button className="optionCounterButton" 
                  disabled={options.room <= 1}
               onClick={()=>handleOption("room", "d")}>-</button>
               <span className="optionCounterNumber">{options.room}</span>
              <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
            </div>
            </div>

           </div> }




 
        <div className="headerSearchItem">
         <button className="headerbutton-2" onClick={handleSearch} >Search</button>
        </div>

        </div> </>}
        </div>
        </div>

  );
};

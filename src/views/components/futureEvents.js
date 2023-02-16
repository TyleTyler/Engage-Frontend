import { useEffect, useState } from "react";

const FutureEvents = ({futureData}) => {
    const toDate = (date) =>{
        let nDate = new Date(date)
        return (nDate).toLocaleDateString()
    }



    const {futureEvents} = futureData //Throws error reading "null"  

    return ( 
    <div className="homebox">
        <div className="homeLabel">Up Coming Events</div>
        <ul className="futEvents">
        {futureData && futureData.futureEvents.map(events =>(
         <div className="hover"> 
            <li key ={events.eventName} className="homeRank upComing"> <span className="eventL">{ `${events.eventName}`} </span> </li>
            <span className="eventL eventDate"> {`${toDate(events.eventDate)}`}</span>
         </div> 
        ))}
        </ul>
    </div> );
}
 
export default FutureEvents;
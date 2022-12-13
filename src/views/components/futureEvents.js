import { useEffect, useState } from "react";

const FutureEvents = ({futureData}) => {
    const toDate = (date) =>{
        let nDate = new Date(date)
        return (nDate).toLocaleDateString()
    }



    const {futureEvents } = futureData //Throws error reading "null"  

    return ( 
    <div className="homebox">
        <div className="homeLabel">Up Coming Events</div>
        <ul className="futEvents">
        {futureData && futureData.futureEvents.map(events =>(
         <div className="hover"> <li key ={events.eventName} className="homeRank upComing"> <a href = {`http://localhost:4000/api/MERN/Events/${events._id}`}> <span className="eventL">{ `${events.eventName}`} </span> <span className="eventL eventDate"> {`${toDate(events.eventDate)}`}</span> </a></li></div> 
        ))}
        </ul>
    </div> );
}
 
export default FutureEvents;
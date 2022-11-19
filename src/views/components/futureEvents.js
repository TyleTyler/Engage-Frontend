import { useEffect, useState } from "react";

const FutureEvents = ({data}) => {
    const toDate = (date) =>{
        let nDate = new Date(date)
        return (nDate).toLocaleDateString()
    }
    
    return ( 
    <div className="homebox homeFut">
        <div className="homeLabel">Up Coming Events</div>
        <ul>
        {data.map(events =>(
         <div className="hover"> <li key ={events.eventName} className="homeRank upComing"> <a href = {`http://localhost:4000/api/MERN/Events/${events._id}`}> <span className="eventL">{ `${events.eventName}`} </span> <span className="eventL eventDate"> {`${toDate(events.eventDate)}`}</span> </a></li></div> 
        ))}
        </ul>
    </div> );
}
 
export default FutureEvents;
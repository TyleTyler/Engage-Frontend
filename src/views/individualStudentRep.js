import { useState, useEffect, useRef } from "react";

import useFetch from "../useFetch";

const StudentReportPage = ({student, activities}) => {

    
    const [searchSignal, setSignal] = useState(false);
    const [filter, setFilter] = useState([])
    const listReset = useRef([])
    
    const toDate = (date) =>{
        let nDate = new Date(date)
        return (nDate).toLocaleDateString()
    }

return ( 
<div className="individualStud">
    
       {student &&
       <div className="studInfo">
            <div className="basicInfo">
                <input type="text" readOnly className="input" placeholder="First Name" value={student.firstName} />
                <input type="text" readOnly className="input" placeholder="Last Name" value={student.lastName} />
                <span className="idNgrade"> 
                    <input type="text" readOnly className="input" placeholder="ID Number" value={`0${student.idNum}`} />
                    <input type="text" readOnly className="input" placeholder="Grade" value={student.grade} />
                </span>
                <input type="text" readOnly className="input" placeholder="Date of Birth" value={toDate(student .dob)} />
                <input type="text" readOnly className="input" placeholder="E-mail" value={student.email} />
            </div>
            <div className="studStats">
                <span className="generalFlex"> 
                    <section className="generalStats">
                        <div className="statrow">
                                <span className="stat"> 
                                    <div className="statLabel"> Rank </div>
                                    <div className="statLabel"> {`${student.rank} ${student.rank == 1 ? "st" : student.rank == 2 ? "nd" : student.rank == 3 ? "rd" : "th"}`}</div>
                                </span>
                        <hr className="statLine" />
                            <span className="stat"> 
                                <div className="statLabel"> Prizes Won </div>
                                <div className="statLabel"> WIP </div>
                            </span>
                        </div>
                        <span className="unStatLines"> <hr className="unStatLine"/> <hr className="unStatLine"/> </span>
                        <div className="statrow">
                                <span className="stat"> 
                                    <div className="statLabel"> Streak </div>
                                    <div className="statLabel"> WIP </div>
                                </span>
                        <hr className="statLine" />
                            <span className="stat"> 
                                <div className="statLabel"> Highest Streak </div>
                                <div className="statLabel"> WIP </div>
                            </span>
                        </div>
                    </section>
                    <section className="generalStats">

                    </section>
                </span>
                { activities && <div className="events indiEvents">
                        <nav  className="filter">
                                <div className="NameFilter filter type" data-state='descending' onClick={(e)=>{
                                  switch (e.target.dataset["state"]) {
                                        case "descending":
                                            setFilter(["eventName", "asc"])
                                            e.target.dataset["state"] = "ascending"
                                            break;
                                        case "ascending" :
                                            setFilter(["eventName", "desc"])
                                            e.target.dataset["state"] = "descending"
                                            break;
                                        default:
                                            console.log("Filter not working")
                                        break;
                                    } 
                                }}> Name </div>
                                <div className="filter type" data-state="descending" onClick={(e)=>{
                                     console.table(filter)
                                     switch (e.target.dataset["state"]) {
                                        case "descending":
                                            setFilter(["eventDate", "desc"])
                                            e.target.dataset["state"] = "ascending"
                                            break;
                                        case "ascending":
                                            setFilter("eventDate", "asc")
                                            e.target.dataset["state"] = "descending"
                                            break;
                                        default:
                                            console.log("Filter not working")
                                        break;
                                    }
                                }} > Date  <span><div className="up-arrow"/><div className="down-arrow"/></span></div>
                                <div className="filter type" data-state="descending"onClick={(e)=>{
                                     switch (e.target.dataset["state"]) {
                                        case "descending":
                                            setFilter(["pointWorth", "desc"])
                                            e.target.dataset["state"] = "ascending"
                                            break;
                                        case "ascending":
                                            setFilter("pointWorth", "asc")
                                            e.target.dataset["state"] = "descending"
                                            break;
                                        default:
                                            console.log("Filter not working")
                                        break;
                                    }
                                }}> Points  <span><div className="up-arrow"/><div className="down-arrow"/></span></div>
                                <div className="filter type" onClick={()=>{

                                }}> Type </div>

                            </nav>
                            <ul className="activities">
                            {activities.map( (activities, idx) =>(
                                <li key = {idx} ref={(el) => (listReset.current[idx] = el)} data-key={activities._id} data-name = {activities.eventName} >
                                <span className="actLi"> 
                                    <div className="act"> {activities.eventName} </div> 
                                    <div className="act"> {toDate(activities.eventDate)} </div>
                                    <div className="act ">{ activities.pointWorth} Points</div> 
                                    <div className="act sport"> {activities.eventType}</div> 
                                </span>
                                </li>
                            ))}
                            </ul>
                    </div> }
            </div>
        </div>
       }
    
    </div>);
}
 
export default StudentReportPage;
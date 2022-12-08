
import { useEffect, useState, useRef } from "react";




const UpdateReg = () => {
    
    
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [idNum, setIdNum] = useState('')
    const [grade, setGrade] = useState(0)
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [eventsAtt, setEventsAttended] = useState([])
    const [savedPopUp, setPopUp] = useState(false)
    const listReset = useRef([])
    let eventUrl;
    const [searchSignal, setSignal] = useState(false);
    const [filter, setFilter] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [activities, setActivities] = useState(null)
    
    useEffect(()=>{
         if(filter.length != 0 && searchTerm.length != 0){
           eventUrl = `/api/MERN/Events/filter/${filter},${searchTerm}`
         }else if(filter.length != 0){
            eventUrl = `/api/MERN/Events/filter/${filter}`;
         }else if(searchTerm){
            eventUrl = `/api/MERN/Events/name/${searchTerm}`
         }else{
            eventUrl = `/api/MERN/Events`
         } 
         console.log(eventUrl)
        fetch(eventUrl)
        .then(res =>{ return res.json()})
        .then(data => {
            setActivities(data)
        })
        
    }, [filter, searchTerm])

    useEffect(()=>{
        listReset.current.forEach(act =>{
            if(act !== null){
                if(eventsAtt.includes(act.dataset.key)){
                act.classList.add("activated")
            }
            else{
                act.classList.remove("activated")
            }
            }
        })
        
    }, [activities])
    

    const updateUrl = (name, order) =>{
        if(order === "remove"){
            setFilter(filter.splice(filter.indexOf(`[${name}]`), 1))
            if(filter.length === 0){setFilter([])}
        }
        else if (order === "asc"){
            setFilter(filter => [...filter, [`${name}`, "asc"]])
        }
        else if(order === "desc"){
            setFilter(filter.splice(filter.indexOf(`${name}`, "asc"), 1))
            if(filter.length === 0){
                setFilter([])
            }
            setFilter(filter => [...filter, [`${name}`, "desc"]])
        }

    }
    


    const toDate = (date) =>{
        let nDate = new Date(date)
        return (nDate).toLocaleDateString()
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setPopUp(true)
        let student;
        if(eventsAtt){
            student = {firstName , lastName , idNum, grade, dob, email, eventsAttended : eventsAtt}
        }
        else{
            student = {firstName , lastName , idNum, grade, dob, email}
        }   
        if(eventsAtt){
            listReset.current.forEach( e=>{
                if(e.classList == "activated"){
                    e.classList.toggle("activated")
                }
            })
        }
        setTimeout(()=>{
            setPopUp(false)
            setFirstname('')
            setLastname('')
            setIdNum('')
            setGrade(0)
            setDob('')
            setEmail('')}, 800)
        
        
        fetch('/api/MERN/Students/', {
            method : 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(student)
        }).then((data) =>{
            return data.json()
        }).catch( e=>{
        console.log('error saving student')
        })  
    }
        
    return (
        <form className="RegisterPage" onSubmit={handleSubmit}>
                {savedPopUp && 
                <div className="popUp">
                   Saved Student {firstName} {lastName}
                </div>
            }
                { activities && <h1 className="registerLabel"> Enter New Student Information</h1> } 
                { activities && <main className="registerField">
                <section className="inputField">       
                    <input required type="text" id="firstName" className="input" placeholder="First Name" value = {firstName} onChange={(e) =>{
                        setFirstname(e.target.value)
                        }}/>           
                    <input required type="text" id="lastName" className="input" placeholder="Last Name" value = {lastName} onChange={(e) =>{
                        setLastname(e.target.value)
                        }}/>       
                    <span className="idNgrade">
                        <input required type="text" id="idNumber" className="input" placeholder="ID Number" value = {idNum} onChange={(e) =>{
                        if(e.target.value.length >= 8){
                            return false;
                        }
                        else if(e.target.value === ""){
                            setIdNum("")
                        }
                        else if(e.target.value.match(/^[0-9]+$/) === null){
                            return false;
                        }
                        setIdNum(e.target.value)
                        }}/>
                        <select required id="grade" className="input" value = {grade} onChange={(e) =>{
                        setGrade(e.target.value)
                        }}>
                            <option value="" disabled selected hidden> Grade </option> 
                            <option value={6}> 6th </option>    
                            <option value={7}> 7th </option>  
                            <option value={8}> 8th </option>  
                            <option value={9}> 9th </option>  
                            <option value={10}> 10th </option>  
                            <option value={11}> 11th </option>  
                            <option value={12}> 12th </option>  
                        </select>
                    </span>
                    <input required type="date" id="dateOfBirth" className="input" placeholder="Date of Birth" value = {dob} onChange={(e) =>{
                        setDob(e.target.value)
                        }}/>
                    <input required type="text" id="email" className="input" placeholder="E-mail" value = {email} onChange={(e) =>{
                        
                        setEmail(e.target.value)
                        }}/>
                </section>
                <section className="eventsAttend">
                    <input type="text" id="eventSearch" placeholder="Search" onChange={ (e)=>{
                        if(e.target.value.length == 0){
                            setSearchTerm("")
                        }else{
                            setSearchTerm(e.target.value)
                        }


                    }}/>
                    <div className="events">
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
                                            setFilter(["eventDate", "asc"])
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
                                            console.log("Ascend")
                                            setFilter(["pointWorth", "asc"])
                                            e.target.dataset["state"] = "descending"
                                            break;
                                        default:
                                            console.log("Filter not working")
                                        break;
                                    }
                                }}> Points  <span><div className="up-arrow"/><div className="down-arrow"/></span></div>
                                <div className="filter type" onClick={()=>{
                                    console.log(eventsAtt)
                                }}> Type </div>

                            </nav>
                            <ul className="activities">
                            {activities.map( (activities, idx) =>(
                                <li key = {idx} ref={(el) => (listReset.current[idx] = el)} data-key={activities._id} data-name = {activities.eventName} onClick={(e) =>{ 
                                    e.target.classList.toggle("activated")                                 
                                    if(eventsAtt.includes(activities._id)){
                                        setEventsAttended(eventsAtt => eventsAtt.filter(word => word !== (activities._id)))
                                    }
                                    else{
                                        setEventsAttended( eventsAtt => [...eventsAtt, activities._id])
                                    }
                                    }}> 
                                <span className="actLi"> 
                                    <div className="act"> {activities.eventName} </div> 
                                    <div className="act"> {toDate(activities.eventDate)} </div>
                                    <div className="act ">{ activities.pointWorth} Points</div> 
                                    <div className="act sport"> {activities.eventType}</div> 
                                </span>
                                </li>
                            ))}
                            </ul>
                    </div>
                </section>
            </main> }
            { activities && <button className="registerBut"> Register </button>}
        </form> );
    }
        
export default UpdateReg;
    



    



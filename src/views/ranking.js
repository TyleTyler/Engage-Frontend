import StudentRanking from "./components/studRank";
import { useDetectScroll } from "@smakss/react-scroll-direction";
import useFetch from '../useFetch';
import { useEffect, useRef, useState } from "react";


const Ranking = () => {

    const [filter, setFilter] = useState([])
    let studUrl;
    const [prevY, setPrevY] = useState(0)
    const [scrollState, setScrollState] = useState("ScollingUp")
    const [filterBar, setFilterBar] = useState("rankVis")
    const [students, setStudents ] = useState(null)
    const [rankState, setRankState] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    useEffect( ()=>{ 
        if(filter.length != 0 && searchTerm.length != 0){
            studUrl = `/api/MERN/Students/filter/${filter},${searchTerm}`
          }else if(filter.length != 0){
             studUrl = `/api/MERN/Students/filter/${filter}`;
          }else if(searchTerm.length != 0){
             studUrl = `/api/MERN/Students/filter/points.-1,${searchTerm}`
          }else{
             studUrl = `/api/MERN/Students/filter/points.-1` 
          } 
        fetch(studUrl)
        .then( res =>{ return res.json()})
        .then( data =>{
            if(rankState.length == 0){
                data.forEach((stud, idx) =>{
                    setRankState(rankState => [...rankState, [stud.idNum , idx]])
                   stud["rank"] = idx
                })     
            }
            else{
                data.forEach(stud=>{
                    rankState.forEach(rank =>{
                        if(stud.idNum == rank[0]){
                            stud["rank"] = rank[1]
                        }
                    })
                })
            }
            setStudents(data)
        })   
        console.log(rankState)
    }, [filter, searchTerm])




    const handleY = (e)=>{
        setTimeout(()=>{
            setPrevY(e)
        }, 500)
    }
    
    useEffect(()=>{
        if(scrollState === "ScrollingUp"){
           setFilterBar("")
        }
        if(scrollState === "ScrollingDown"){
            setFilterBar("rankInvis")
        }
        console.log(scrollState)
    }, [scrollState])

    return ( <section className="rankSection">
     <nav className={`rankFilter ${filterBar}`} >
        <span className= {`rankName ${filterBar}`}> 
            <div> Rank</div>
            <div data-state="none" onClick={(e)=>{
                    switch(e.target.dataset["state"]) {
                        case "none" :
                         setFilter(["firstName.1"])
                         e.target.dataset["state"] = "ascending"
                        break;
                        case "ascending" : 
                         e.target.dataset["state"] = "descending"
                         setFilter(["firstName.-1"])
                        break;
                        default :
                         e.target.dataset["state"] = "none"
                         setFilter("")
                         
                        break;
                    }
            }} > Name </div>
        </span>
        <span className={`rankFilters ${filterBar}`} > 
            <div> Grade</div>
            <div data-state="descending" onClick={(e)=>{
                    switch(e.target.dataset["state"]) {
                        case "ascending" :
                         setFilter(["points.desc"])
                         e.target.dataset["state"] = "descending"
                        break;
                        default :
                         e.target.dataset["state"] = "ascending"
                         setFilter(["points.asc"])
                        break;
                    }
            }}>Points for Quarter</div>
            <div data-state="none" onClick={(e)=>{
                    switch(e.target.dataset["state"]) {
                        case "none" :
                         setFilter(["sumPoints","1"])
                         e.target.dataset["state"] = "ascending"
                        break;
                        case "ascending" : 
                         e.target.dataset["state"] = "descending"
                         setFilter(["sumPoints","-1"])
                        break;
                        default :
                         e.target.dataset["state"] = "none"
                         setFilter("")
                         
                        break;
                    }
            }}>Total Points</div>
        </span>
     </nav>     
     <input className="rankSearch" placeholder="Search by" onChange={(e)=>{
        if(e.target.value === ""){
            setSearchTerm("")
        }else{
            setSearchTerm(e.target.value)
        }
     }}/>
        { students && <div onScroll={(e)=>{
            handleY(e.target.scrollTop)
            if(prevY > e.target.scrollTop){
                if(scrollState !== "ScrollingUp"){
                    setScrollState("ScrollingUp")
                }
            }
            else{
                if(scrollState !== "ScrollingDown"){
                    setScrollState("ScrollingDown")
                }
            }
        }}className="rankInner"> 

            {students.map(e=>(
                <StudentRanking rank={e.rank} idNum = {e.idNum} name = {`${e.firstName} ${e.lastName}`} qPoints = {e.points} tPoints = {e.sumPoints} grade= {e.grade} />   
            ))}
        </div> }
    </section> );
}
 
export default Ranking;
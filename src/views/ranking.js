import StudentRanking from "./components/studRank";
import { useDetectScroll } from "@smakss/react-scroll-direction";
import useFetch from '../useFetch';
import { useEffect, useRef, useState } from "react";


const Ranking = () => {

    const [prevY, setPrevY] = useState(0)
    const [scrollState, setScrollState] = useState("ScollingUp")
    const [filterBar, setFilterBar] = useState("rankVis")
    const {data : students, isPending, error} = useFetch("/api/MERN/Students/filter/points.-1")
    
    
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
            <div> Name </div>
        </span>
        <span className={`rankFilters ${filterBar}`} > 
            <div> Grade</div>
            <div>Points for Quarter</div>
            <div>Total Points</div>
        </span>
     </nav>     
     <input className="rankSearch" placeholder="Search by"/>
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

            {students.map((e, idx)=>(
                 <StudentRanking rank={idx} name = {`${e.firstName} ${e.lastName}`} qPoints = {e.points} tPoints = {e.sumPoints} grade= {e.grade} />   
                 ))}
        </div> }
    </section> );
}
 
export default Ranking;
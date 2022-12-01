import StudentRanking from "./components/studRank";
import useFetch from '../useFetch';


const Ranking = () => {

    const {data : students, isPending, error} = useFetch("/api/MERN/Students/filter/points.-1")
    

    return ( <section className="rankSection"> 
     <input className="rankSearch" placeholder="Search by"/>
        { students && <div className="rankInner"> 
            <nav className="rankFilter">
                <span className="rankName"> 
                    <text> Rank</text>
                    <text> Name </text>
                </span>
                <span className="rankFilters"> 
                    <text> Grade</text>
                    <text>Points for Quarter</text>
                    <text>Total Points</text>
                </span>
            </nav>
            {students.map((e, idx)=>(
                 <StudentRanking rank={idx} name = {`${e.firstName} ${e.lastName}`} qPoints = {e.points} tPoints = {e.sumPoints} grade= {e.grade} />   
                 ))}
        </div> }
    </section> );
}
 
export default Ranking;
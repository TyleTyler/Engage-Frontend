import { Link } from "react-router-dom";
const StudentRanking = ({rank, name, qPoints, tPoints, grade, idNum}) => {
    return (
        <Link to={`/student/${idNum}`}>
            <div className="studRank">
              <span className="rankName"> 
                    <div> {rank + 1}</div>
                    <div  className="rName"> {name} </div>
                </span>
                <span className="rankFilters"> 
                    <div className="rGrade"> {grade}</div>
                    <div>{qPoints}</div>
                    <div>{tPoints}</div>
                </span>
            </div>
            <hr className="rankLine"/>
        </Link>
    );
}
 
export default StudentRanking;
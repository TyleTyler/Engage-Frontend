
const StudentRanking = ({rank, name, qPoints, tPoints, grade}) => {
    return (
        <div>
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
        </div>
    );
}
 
export default StudentRanking;
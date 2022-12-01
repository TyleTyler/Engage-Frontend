
const StudentRanking = ({rank, name, qPoints, tPoints, grade}) => {
    return (
        <div>
            <div className="studRank">
              <span className="rankName"> 
                    <text> {rank + 1}</text>
                    <text  className="rName"> {name} </text>
                </span>
                <span className="rankFilters"> 
                    <text className="rGrade"> {grade}</text>
                    <text>{qPoints}</text>
                    <text>{tPoints}</text>
                </span>
            </div>
            <hr className="rankLine"/>
        </div>
    );
}
 
export default StudentRanking;
import { useEffect, useState } from "react";
import  { Link } from 'react-router-dom';

const TopTen = ({top10}) => {
    return (
     <div className="homebox homeTop">
        <div className="homeLabel"> Top 10 Students </div>
        <ol>
        { top10.map(student => (
          <div className="hover" ><li key = {student.idNum} className="homeRank"><Link to={`/student/${student.idNum}`}> <span className="name">{  `${student.firstName} ${student.lastName} : ${student.sumPoints} Points`}</span> </Link> </li></div> 
        ))}
        </ol>
    </div>
     );
}
 
export default TopTen;
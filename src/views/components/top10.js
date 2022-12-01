import { useEffect, useState } from "react";
const TopTen = ({top10}) => {
    return (
     <div className="homebox homeTop">
        <div className="homeLabel"> Top 10 Students </div>
        <ol>
        { top10.map(student => (
          <div className="hover" ><li key = {student.idNum} className="homeRank"><a href={`http://localhost:4000/api/MERN/Students/${student._id}`}> <span className="name">{  `${student.firstName} ${student.lastName} : ${student.sumPoints} Points`}</span> </a> </li></div> 
        ))}
        </ol>
    </div>
     );
}
 
export default TopTen;
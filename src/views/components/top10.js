import { useEffect, useState } from "react";
const TopTen = () => {
    const [topTen, setTopTen] = useState([])

    useEffect(()=>{
        const getTen = async () =>{
            let res = await fetch("/api/MERN/Students/top10")
            let studs = await res.json()
            if(res.ok){setTopTen(studs)}
        }
        getTen()
    }, [])
   

    return (
     <div className="homebox homeTop">
        <div className="homeLabel"> Top 10 Students </div>
        <ol>
        { topTen.map(student => (
          <div className="hover" ><li key = {student.idNum} className="homeRank"><a href={`http://localhost:4000/api/MERN/Students/${student._id}`}> <span className="name">{  `${student.firstName} ${student.lastName} : ${student.sumPoints} Points`}</span> </a> </li></div> 
        ))}
        </ol>
    </div>
     );
}
 
export default TopTen;
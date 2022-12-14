import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

import PreStudentEvents from "./preStudentEvents";



const PreIndividualStud = () => {
    const {id} = useParams()  
    const {data} = useFetch(`/api/MERN/Students/${id}`)
    let run = 0;
    run++;
    console.log(data)
    console.log(run)   
    return (
      <div> 
        {data != null &&  <PreStudentEvents student={data}/> }  
      </div>
    );
}

export default PreIndividualStud;
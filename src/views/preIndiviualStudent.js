import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

import PreStudentEvents from "./preStudentEvents";



const PreIndividualStud = () => {
    const {id} = useParams()

    const { data } = useFetch(`/api/MERN/Students/${id}`)
    return (
         <div> 
            { data && <PreStudentEvents student={data}/> }  
         </div>
       );
}
 
export default PreIndividualStud;
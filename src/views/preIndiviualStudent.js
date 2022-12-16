import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

import PreStudentEvents from "./preStudentEvents";



const PreIndividualStud = () => {
    const {id} = useParams()  
    const [data, setData] = useState(null)
    useEffect(()=>{
      fetch((`https://long-nation-371823.uc.r.appspot.com//api/MERN/Students/${id}`)).then(e=>{return e.json()})
      .then(data =>{ 
         console.log(data)
         setData(data)})
    },[]) 
    return (
      <div> 
        {data &&  <PreStudentEvents student={data}/> }  
      </div>
    );
}

export default PreIndividualStud;
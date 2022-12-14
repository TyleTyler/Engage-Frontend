import StudentReportPage from "./individualStudentRep";
import useFetch from "../useFetch";
const PreStudentEvents = ({student}) => {
    const {data} = useFetch(`/api/MERN/Events/list/${student[0].eventsAttended.join(".")}`)
    // console.log(data)
    return ( <div>
         { data  && <StudentReportPage student={student} activities={data}/> }  
        </div>
        );
}
 
export default PreStudentEvents;
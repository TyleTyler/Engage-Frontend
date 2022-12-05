import StudentReportPage from "./individualStudentRep";
import useFetch from "../useFetch";
const PreStudentEvents = ({student}) => {
    const {data} = useFetch(`/api/MERN/Events/List/${student[0].eventsAttended.join(".")}`)

    return ( <div>
         { data  && <StudentReportPage student={student} activities={data}/> }  
        </div>
        );
}
 
export default PreStudentEvents;
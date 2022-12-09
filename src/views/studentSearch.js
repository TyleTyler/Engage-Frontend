import { useState } from "react";

const StudentSearchResult = () => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [idNum, setNumber] = useState('')
    
    
    const handleSumbit  = (e) =>{
        e.preventDefault()
        const student = {firstName, lastName, idNum}
        console.log(student)
    }

    return ( <section >
        <form className="searchBox" onSubmit={handleSumbit}>
            <div className="registerLabel"> Enter Information  </div>
            <input placeholder="First Name" value={firstName} className="input" onChange={(e)=>{
                setFirstName(e.target.value)
            }} />
            <input placeholder="Last Name" className="input" onChange={(e)=>{
                setLastName(e.target.value)
            }}/>
            <input placeholder="ID Number" className="input" onChange={(e)=>{
                setNumber(e.target.value)
            }}/>
            <button className="actionButton"> Search </button>
        </form> 
    </section> );
}
 
export default StudentSearchResult;
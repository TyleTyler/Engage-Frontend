
const Prize = ({ prize, prestige}) => {
    return ( <div className="prizeStack">
        <h1 className={`prizeHeader ${prestige}`}>{ prestige } </h1> 
        <div className = {`prize ${prestige}`}> </div>
    </div> );
}
 
export default Prize;
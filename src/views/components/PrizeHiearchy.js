import Prize  from "./prize";
import firstPlace from '../../cssRes/firstPlace.png'
const PrizeHiearchy = () => {
    return ( <div className="prizeStack">
    <Prize  prestige="Gold"></Prize>
    <div className="firstPlace"/>  
    <Prize  prestige="Silver"/>  
    <div className="secondPlace"/> 
    <Prize  prestige="Copper"/>    
    <div className="thirdPlace"/> 

    </div> );
}
 
export default PrizeHiearchy;
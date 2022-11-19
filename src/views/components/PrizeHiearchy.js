import Prize  from "./prize";

const PrizeHiearchy = () => {
    return ( <div className="prizeStack">
    <Prize  prestige="Gold"/>  
    <Prize  prestige="Silver"/>   
    <Prize  prestige="Copper"/>    
    </div> );
}
 
export default PrizeHiearchy;
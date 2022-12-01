import TopTen from "./components/top10";
import FutureEvents from "./components/futureEvents";
import PrizeHiearchy from "./components/PrizeHiearchy";


const HomePage = ({futureData, top10 }) => {

    return ( <div className="main">
        <TopTen top10={top10} />
        {futureData && <FutureEvents futureData={futureData}/>}
        <PrizeHiearchy />
    </div> );
}
 
            
export default HomePage;

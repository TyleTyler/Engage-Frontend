import TopTen from "./components/top10";
import FutureEvents from "./components/futureEvents";
import PrizeHiearchy from "./components/PrizeHiearchy";


const HomePage = () => {
    return ( <div className="main">
        <TopTen />
        <FutureEvents />
        <PrizeHiearchy />
    </div> );
}
 
export default HomePage;
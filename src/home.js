
import useFetch from "./useFetch";
import List from "./List";

const Home = () => {

   const {data, isPending, error} =useFetch(' http://localhost:8000/names');
    
    
        return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending&& <div> LOADING .... </div>}
            {data && <List names={data} title="BASIC INFO ! " desc=" of persons "  /> }
          
        </div>
    );
}
 
export default Home;
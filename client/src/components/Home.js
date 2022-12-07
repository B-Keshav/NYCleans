import Map from "../Map";
import About from "./About";

function Home ({user}){

    return (
        <>
        < About /> 
        < Map user={user}/>
        </>
    )
    

}

export default Home;
import React,{useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {


	const [ semaforoColor , setsemaforoColor ] = useState("semaforoRed");
	


	return (
		
		<div className=" container ">
			<div className="semaforo ">
				<div className="semaforoRed "  onClick={() => setsemaforoColor()} ></div>
			<div className="semaforoYellow "  onClick={() => setsemaforoColor()}></div>
			<div className="semaforoGreen " onClick={() => setsemaforoColor()}></div>
			</div>
			</div>

		
	);
};

export default Home;

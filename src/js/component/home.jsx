import React,{useState} from "react";


//include images into your bundle


const Home = () => {


	const [ semaforoColor , setsemaforoColor ] = useState();
	 
	


	return (
		
		<div className=" container text-center">
			<div className="semaforo ">
			     <div className={"semaforoRed "+((semaforoColor ==="semaforoRed")? "ligth":"") }  onClick={()=> setsemaforoColor("semaforoRed")} ></div>
				<div className={"semaforoYellow "+ ((semaforoColor ==="semaforoYellow")? "ligth":"") }  onClick={()=> setsemaforoColor("semaforoYellow")}></div>
				<div className={"semaforoGreen "+ ((semaforoColor ==="semaforoGreen") ? "ligth":"")}  onClick={()=> setsemaforoColor("semaforoGreen")}></div>
			
		       
			</div>
			
			</div>

		
	);
};

export default Home;



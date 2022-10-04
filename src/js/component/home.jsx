import React from "react";

//include images into your bundle

//create your first component
const Home = ( props ) => {
	return (
		<div className="container text-center">
  <div className="row text-white bg-dark">
    <div className="col m-5 pb-5 pt-5 border border rounded-4">
	<h1><i className="far fa-clock"></i></h1>
    </div>
    <div className= "col m-5 pb-5 pt-5 border border rounded-4">
    <h1>{props.hora}</h1>
    </div>
    <div className= "col m-5 pb-5 pt-5 border border rounded-4">
    <h1> {props.minuto2}</h1>
    </div>
    <div className= "col m-5 pb-5 pt-5 border border rounded-4">
    <h1>{props.minuto}</h1>
    </div>
    <div className= "col m-5 pb-5 pt-5 border border rounded-4">
    <h1>{props.segundos2}</h1>
    </div>
    <div className= "col m-5 pb-5 pt-5 border border rounded-4">
    <h1>{props.segundos}</h1>
  </div>
  </div>
  </div>


	);
};

export default Home;

import React from 'react';

const Country = (props) =>{
	const {name,population,region,flag} = props.country;
	const flagStyle={height:'50px'};
	const countryStyle={border:'1px solid red',margin:'10px',padding:'10px'};
	const handleAddCountry = props.handleAddCountry;
	// console.log(props);
	return(
		<div style={countryStyle}>
			<h4>This is a {name}</h4>
			<p>This is a {population}</p>
			<p>This is a {region}</p>
			<img style={flagStyle} src={flag} alt=""/>
			<br/>
			<button onClick={()=>handleAddCountry(props.country)}>Add country</button>
		</div>
		);
};
export default Country;
import { useState } from 'react';
// const backgroundImage =
// 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
const axios = require('axios');
const apiKey = process.env.API_KEY;
const Index = () => {
	const apiKey = process.env.NEXT_PUBLIC_API_KEY;
	const [location, setLocation] = useState('location not set!');
	const [weather, setWeather] = useState();
	const [temp, setTemp] = useState();
	const [feel, setFeel] = useState();
	const [time, setTime] = useState();
	const [icon, setIcon] = useState();

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.get(
				`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
			)
			.then((res) => {
				setWeather(res.data.current.condition.text);
				setTemp(res.data.current.temp_c);
				setFeel(res.data.current.feelslike_c);
				setTime(res.data.location.localtime.split('').slice(11, 16).join(''));
				setIcon(res.data.current.condition.icon);
			})

			.catch((err) => console.log(err));
		e.target.locationName.value = '';
	};

	return (
		<>
			<div className='weather-container'>
				<h1 className='location'>{location}</h1>
				<p className='time'>{time}</p>
				{icon ? <img className='icon' src={icon} alt='weather icon' /> : ''}
				{weather ? <p className='weather'>weather: {weather}</p> : ''}
				{temp ? <p className='temp'>{temp}°C</p> : '0C'}
				{feel ? (
					<p>
						<span className='small-text'>feels like</span> {feel}°C
					</p>
				) : (
					''
				)}
			</div>

			<form onSubmit={(e) => submitHandler(e)}>
				<input
					type='text'
					name='locationName'
					onChange={(e) => setLocation(e.target.value)}
					placeholder='location'
				/>
				<button type='submit'>Get Weather</button>
			</form>
		</>
	);
};

export default Index;

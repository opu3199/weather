const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f67c722346mshf929d73a849138ap18558cjsn8de6d907576e',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5',
 options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
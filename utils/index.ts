
export async function fetchTheCars() {
    const headers = {
        'X-RapidAPI-Key': 'bd34b68693mshaa992ee38e79dcbp1edabajsnd450f6cd07f5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers:headers});
    const result = await response.json();
    return result;
}
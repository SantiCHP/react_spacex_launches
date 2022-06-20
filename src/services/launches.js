const API_URL = 'https://api.spacexdata.com/v3';

export async function getAllLaunches () {
    try {
        const respones = await fetch(`${API_URL}/launches`);
        const data = await respones.json();
        return data;
    } catch (error) {
        console.error(error);
    } 
}

export async function getLaunchByFlightNumber (flightNumber) {
    try {
        const respones = await fetch(`${API_URL}/launches/${flightNumber}`);
        const data = await respones.json();
        return data;
    } catch (error) {
        console.error(error);
    } 
}
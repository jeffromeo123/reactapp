import axios from 'axios';

const API_URL = 'https://api-demo.mlsgrid.com/v2/Property?$filter=OriginatingSystemName%20eq%20%27nwmls%27%20and%20MlgCanView%20eq%20true';
const API_TOKEN = 'Bearer be49e24148aec7a8a0041c077a5668fc441ca2b1';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_URL}/data`, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

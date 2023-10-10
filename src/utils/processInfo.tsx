import axios from 'axios';
import { apiUrl } from '../consts/consts';

export const processInfo = async ( route: string ) => {

    let responseToGive: any;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${apiUrl}${route}?populate=*`,
        headers: {}
    };

    await axios.request(config)
        .then((response) => {
            // console.log(JSON.stringify(response.data));

            responseToGive = response.data;
        })
        .catch((error) => {
            console.log(error);

            responseToGive = error;
        });

    return responseToGive;
}
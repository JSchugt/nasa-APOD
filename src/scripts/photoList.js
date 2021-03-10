import {apodKey} from "./keys/keys.js";
import {astroPic} from "./photo.js";
// URL for APOD Key

const base_url = `https://api.nasa.gov/planetary/apod?api_key=${apodKey}`;
let apodResposne = [];
const mainDOm = document.querySelector(".nasaMain");

export const useApod = () => {
    return apodResposne;
}
export const getAPOD = () => {
    return fetch(base_url, {
        // The API required the use of a GET to gather the info
        method: "GET"
    })
    .then(respone => respone.json())
    .then(parsedResponse => apodResposne = parsedResponse)
}
// Function used to update the DOM with APOD 
export const sendAPODtoHtml = () => {
    getAPOD().then( ()=> {
        let rep = useApod();
        let htmlRep = astroPic(rep);
        mainDOm.innerHTML = htmlRep;
    })
}




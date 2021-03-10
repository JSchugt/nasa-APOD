// URL for APOD Key
import {apodKey} from "./keys/keys.js";
import {astroPic} from "./photo.js"
const base_url = `https://api.nasa.gov/planetary/apod?api_key=${apodKey}`;
let apodResposne = [];
const mainDOm = document.querySelector(".nasaMain");
export const getAPOD = () => {
    return fetch(base_url, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respone => respone.json())
    .then(parsedResponse => apodResposne = parsedResponse)
}








sendAPODtoHtml();
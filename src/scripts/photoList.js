export const sendAPODtoHtml = () => {
    getAPOD().then( ()=> {
        let rep = useApod();
        let htmlRep = astroPic(rep);
        mainDOm.innerHTML = htmlRep;
    })
}

export const useApod = () => {
    return apodResposne;
}
export const astroPic = (picture) => {
    if (picture.media_type === "video") {
        console.log("video")
        return`
        <div>
        <h2>${picture.title}</h2>
        <div>
            <video src="${picture.url}" alt="APOD of the day"></video>
        </div>
        <div>${picture.date}</div>
        <div>${picture.explanation}</div>
        </div>
    `
    } else {
        console.log("image")
        console.log(picture)
        return `
        <div>
        <h2>${picture.title}</h2>
        <div>
        <img src="${picture.url}" alt="APOD of the day"></img>
    </div>
        <div>${picture.date}</div>
        <div>${picture.explanation}</div>
        </div>
    `;
    }
}
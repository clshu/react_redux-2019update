import React from 'react'

function getSeason(latitude, month) {
    // April to September
    if (month > 2 && month < 9) {
        return latitude > 0 ? "summer" : "winter"
    } else {
        return latitude > 0 ? "winter" : "summer"
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(
        props.latitude,
        new Date().getMonth()
        )
        const expression =
         season === "winter" ? "It's chilly" : "It's hot"
    return <div>{expression}</div>
}

export default SeasonDisplay
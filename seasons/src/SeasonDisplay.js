import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it\'s chilly',
        iconName: 'snowflake'
    }
}
function getSeason(latitude, month) {
    if (month > 2 && month < 9) {
        // April to September, Northern atmosphere is summer
        // and Southern atmosphere is winter
        return latitude > 0 ? "summer" : "winter"
    } else {
        // October to March, Northern atmosphere is winter
        // and Southern atmosphere is summer
        return latitude > 0 ? "winter" : "summer"
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(
        props.latitude,
        new Date().getMonth()
        )
    const {text, iconName} = seasonConfig[season]

    return (
    <div className={`season-display ${season}`}>
         <i className={`icon_left massive ${iconName} icon`} />
         <div>{text}</div>
         <i className={`icon_right massive ${iconName} icon`} />
    </div>
    )
}

export default SeasonDisplay
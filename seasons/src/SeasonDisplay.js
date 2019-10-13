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
    const {text, iconName} = seasonConfig[season]

    return (
    <div>
         <i className={`${iconName} icon`} />
         <div>{text}</div>
         <i className={`${iconName} icon`} />
    </div>
    )
}

export default SeasonDisplay
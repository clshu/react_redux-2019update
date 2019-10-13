import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {latitude: 0, longitude: 0}
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords
                this.setState({latitude, longitude})
            },
            err => console.log(err)
        )
    }
    render() {
        return (
            <div>
                <p>Latitude:{this.state.latitude}</p>
                <p>Longitude:{this.state.longitude}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
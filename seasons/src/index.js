import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
    state = {
        latitude: null,
        longitude: null,
        errorMessage: null
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                const {latitude, longitude} = position.coords
                this.setState({latitude, longitude})
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        )
    }
    render() {
        const {latitude, longitude, errorMessage} = this.state
        if (errorMessage && !latitude && !longitude) {
            return <div>Error: {errorMessage}</div>
        }
        if (!errorMessage && latitude && longitude) {
            return (
            <div>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
            </div>
            )
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
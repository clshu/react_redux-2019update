import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

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
    rederContent() {
        const {latitude, longitude, errorMessage} = this.state
        if (errorMessage && !latitude && !longitude) {
            return <div>Error: {errorMessage}</div>
        }
        if (!errorMessage && latitude && longitude) {
            return (
            <SeasonDisplay latitude={this.state.latitude}/>
            )
        }

        return <Spinner message="Please accept the location request"/>
    }
    render() {
        return (
            // A fake class to show a wrapper
        <div className="border red">
            {this.rederContent()}
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
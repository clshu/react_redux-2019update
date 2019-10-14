import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props) {
        super(props)
        this.state = { span: 0 }
        this.imageRef = React.createRef()
    }
    componentDidMount() {
        // current is a DOM element
        // Loading image from url takes time. Add listener to wait until
        // image is loaded then take action
        this.imageRef.current.addEventListener('load', this.setSpan)
    }
    setSpan = () => {
        const gridAutoRow = 10 // match grid-auto-row
        const height = this.imageRef.current.clientHeight
        const span = Math.ceil(height / gridAutoRow)

        this.setState({ span })
    }
    render() {
        const { description, urls } = this.props.image
        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard
import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './components/CommentDetail'

const App = () => {
    return (
    <div className="ui container comments">
        <CommentDetail author="Sam" timeBlog="Today 2:00 pm" text="Hello Word" avatar={faker.image.avatar()}/>
        <CommentDetail author="Alex" timeBlog="Today 4:00 pm" text="Happy Day" avatar={faker.image.avatar()}/>
        <CommentDetail author="Bob" timeBlog="Yesterday 2:00 pm" text="Ok Ok" avatar={faker.image.avatar()}/>
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
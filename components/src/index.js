import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning</h4>
                Are sure you want to do this?
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sam" timeBlog="Today 2:00 pm" text="Hello Word" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Alex" timeBlog="Today 4:00 pm" text="Happy Day" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Bob" timeBlog="Yesterday 2:00 pm" text="Ok Ok" avatar={faker.image.avatar()}/>
        </ApprovalCard>    
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
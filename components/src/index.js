import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>WARNING!</h4>
                You sure about that, Chief?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    timeAgo="Today at 4:20pm" 
                    commentText="I like donuts" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 4:22pm" 
                    commentText="Cool post bro" 
                    avatar={faker.image.image()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 4:20pm" 
                    commentText="FIRST" 
                    avatar={faker.image.image()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
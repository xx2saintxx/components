import React from 'react'
import faker from 'faker';


function getTime() {
    return (new Date()).toLocaleTimeString()
}

const CommentDetail = props => {
    console.log(props)
    return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.image()} />
        </a>
    <div className="content"></div>
    <a href = "/" className="author">
        {faker.name.firstName()}
        {props.nameOf}
    </a>
    <div className="metadata"></div>
    <span className='date'>{getTime()}</span>
    <div className='text'>{faker.lorem.paragraph()}</div>
    </div>
    );
    };

export default CommentDetail;
import React from 'react';

const Message = ({message}) => {
    return (
        <div style={{height:'50px'}} className="ui teal message">
            <p>{message}</p>
        </div>
    );
};

export default Message;

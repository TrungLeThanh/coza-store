import React from 'react';

const Message = ({message, type}) => {
    return (
        <div style={{height:'50px'}} className={`ui ${type ? type : 'teal'} message`}>
            <p>{message}</p>
        </div>
    );
};

export default Message;

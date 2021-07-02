import React from 'react';

const Message = ({message, type}) => {
    return (
        <div style={{height:'50px'}} className={`ui ${type ? type : 'teal'} message`}>
            {message}
        </div>
    );
};

export default Message;

import React from 'react';

import getAvatar from '../../../utils/avatar';

const ChatMessages = props => {
    let email = 'yurand.coloma@tecsup.edu.pe';
    let classMessage = 'd-flex justify-content-end mb-4';
    if (props.self === 1){
        email = 'frezer828@gmail.com';
        classMessage = 'd-flex justify-content-start mb-4';
    }
    return(
        <div className={classMessage}>
            <div className="img_cont_msg">
                <img 
                    src={getAvatar(email)}
                    alt={email}
                    className="rounded-circle user_img_msg"
                />
            </div>
            <div className="msg_container">
                {props.line}
                <span className="msg_time">8:40 AM, Today</span>
            </div>
        </div>
    );
};

export default ChatMessages;
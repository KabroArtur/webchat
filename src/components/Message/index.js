import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./Message.scss";

const Message = ({avatar, user, text, date, isMe}) => (
  <div className={classNames("Message", {"Message--isme" : isMe})}>
    <div className="Message_avatar">
      <img src={avatar}/>
    </div>
    <div className="message__content">
    <div className="message__bubble">
      <p className="message__text">{text}</p>
    </div>
    
  <span className="message__date"><p>{date}</p></span>
    </div>
  </div>
);

Message.defaultProps ={
  user:{}
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,  
  date: PropTypes.string,
  user: PropTypes.string
};

export default Message;
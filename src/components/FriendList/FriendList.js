import React from "react";
import FriendListItem from "./FriendListItem";
import styles from './Friend.module.css';
import PropTypes from "prop-types";

const FriendList = ({friends}) => {
  return (
    <>
      <ul className={styles.friendsList}>
        {friends.map(friend => (
          
          <FriendListItem key={friend.id} {...friend} />
          
        ))
      }
      
        
      </ul>
    </>
  );
};

FriendList.propTypes={
  friends:PropTypes.array}

export default FriendList;

import React from 'react';
import styles from './Friend.module.css';
import PropTypes from "prop-types";
const FriendListItem = ({avatar, name, isOnline}) => (
    <>
<li className={styles.item}>
<span className={isOnline ? styles.isActive : styles.status}></span>
  <img className="avatar" src={avatar} alt="" width="48" />
<p className="name">{name}</p>
</li>
    </>


);



FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}

export default FriendListItem;
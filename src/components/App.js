import React from "react";
import Profile from "./Profile/Profile";
import user from "../user.json";
import Statistics from "./Statistics/Statistics";
import StatData from "../statistical-data.json";
import friends from "../FriendList.json";
import FriendList from "../components/FriendList/FriendList";
import transactions from "../transactions.json";
import TransactionHistory from "../components/Transactions/TransactionHistory";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={StatData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;

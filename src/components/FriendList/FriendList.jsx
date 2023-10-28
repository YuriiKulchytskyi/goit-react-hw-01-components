import { FriendListItem } from '../FriendListItems/FriendListItem';
import {FriendListStyle} from "./FriendList.style"

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListStyle>
  );
};

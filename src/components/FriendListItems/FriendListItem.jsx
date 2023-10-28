import { FriendItem, FriendName, FriendImg, SpanStatus } from "./FriendListItem.style";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <SpanStatus $isOnline={isOnline}></SpanStatus>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};



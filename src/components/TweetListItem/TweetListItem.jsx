import { Info, Avatar, Stats, Counts } from "./TweetListItem.styled";
export const TweetListItem = () => {
  return (
    <Info>
      <img src="src/photo/Frame 17.png" />
      <Avatar />
      <Stats>
        <Counts>12321</Counts>
        <Counts>33333</Counts>
      </Stats>
      <button>Follow</button>
    </Info>
  );
};

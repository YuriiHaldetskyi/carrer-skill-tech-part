import { TweetListItem } from "../TweetListItem/TweetListItem";
import { Cards, ListItem } from "./TweetList.styled";
import { selectVisibleTweets } from "../../redux/selectors";
import { useSelector } from "react-redux";
export const TweetList = () => {
  const tweets = useSelector(selectVisibleTweets);
  return (
    <div>
      <Cards>
        {tweets.map((tweet) => (
          <ListItem id={tweet.id}>
            <TweetListItem item={tweet} />
          </ListItem>
        ))}
      </Cards>
    </div>
  );
};

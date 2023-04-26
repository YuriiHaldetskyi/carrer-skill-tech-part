import { TweetListItem } from "../TweetListItem/TweetListItem";
import { Cards, ListItem } from "./TweetList.styled";
import { selectTweets } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { usePagination } from "../../hooks/pagination";
import { LoadMoreBtn } from "../TweetList/TweetList.styled";
export const TweetList = () => {
  const { page, loadMore } = usePagination(6);
  const tweets = useSelector(selectTweets);
  return (
    <div>
      <Cards>
        {tweets.slice(0, page).map((tweet) => (
          <ListItem key={tweet.id}>
            <TweetListItem item={tweet} />
          </ListItem>
        ))}
        {tweets.length > page && (
          <LoadMoreBtn type="button" onClick={loadMore}>
            Load More
          </LoadMoreBtn>
        )}
      </Cards>
    </div>
  );
};

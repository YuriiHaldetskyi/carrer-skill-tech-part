import { useDispatch } from "react-redux";
import { patchUser } from "../../redux/operations";
import { Wrap, Avatar, Stats, Counts, FollowBtn } from "./TweetListItem.styled";
import { setFollow } from "../../redux/tweetSlice";
export const TweetListItem = ({ item }) => {
  const dispatch = useDispatch();

  const toggleFollow = () => {
    dispatch(patchUser(item));
    dispatch(setFollow(item.id));
  };

  const normNumber = new Intl.NumberFormat("EN").format(item.followers);
  return (
    <Wrap>
      <Avatar src={item.avatar} alt="Avatar" />
      <Stats>
        <Counts>{item.tweets} tweets</Counts>
        <Counts>{normNumber} followers</Counts>
      </Stats>
      {item.isFollowing ? (
        <FollowBtn
          isFollow={item.isFollowing}
          type="button"
          onClick={toggleFollow}
        >
          Following
        </FollowBtn>
      ) : (
        <FollowBtn type="button" onClick={toggleFollow}>
          Follow
        </FollowBtn>
      )}
    </Wrap>
  );
};

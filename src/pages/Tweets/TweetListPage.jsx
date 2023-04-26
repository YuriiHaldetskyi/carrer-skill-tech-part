import { TweetList } from "../../components/TweetList/TweetList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchUsers } from "../../redux/operations";

export const TweetListPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Tweets</h1>
      </div>
      <div>
        <TweetList />
      </div>
    </>
  );
};

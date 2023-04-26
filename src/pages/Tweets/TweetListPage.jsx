import { TweetList } from "../../components/TweetList/TweetList";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchUsers } from "../../redux/operations";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { HiArrowLeft } from "react-icons/hi";
import { GoBackBtn } from "./TweetList.styled";
import Loader from "../../components/Loader/Loader";

export const TweetListPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const goBack = useRef(location.state?.from ?? "/");
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <GoBackBtn to={goBack.current}>
        <HiArrowLeft size="12" />
        Go Back
      </GoBackBtn>
      <div>
        {isLoading ? <Loader /> : error ? <p>{error}</p> : <TweetList />}
      </div>
    </>
  );
};

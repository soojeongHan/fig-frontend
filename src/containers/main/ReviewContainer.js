import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../../features/review";
import Review from "../../components/main/Review/Review";

const ReviewContainer = () => {
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { data } = useSelector((state) => state.review);
  return <Review data={data} />;
};

export default ReviewContainer;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Market from "../../components/main/Market";
import { fetchData } from "../../features/market";

const MarketContainer = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.market);
  const [isError, setIsError] = React.useState(false);
  const onClick = () => {
    dispatch(
      fetchData({
        error: isError, // Error를 발생시키는 변수(테스트)
        time: 3700, // 3700ms
      })
    );
  };

  return (
    <Market
      setIsError={setIsError}
      onClick={onClick}
      loading={loading}
      error={error}
      success={success}
      isError={isError}
    />
  );
};

export default MarketContainer;

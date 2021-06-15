import React from "react";
import Header from "../../components/Header";
import throttle from "../../utils/throttle";

const HeaderContainer = () => {
  const [scrollBarPercent, setScrollBarPercent] = React.useState(100);
  React.useEffect(() => {
    const onChangeScrollBar = throttle(() => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;

      const contentHeight = scrollHeight - clientHeight;
      const percent = (scrollTop / contentHeight) * 100;

      setScrollBarPercent(() => 100 - percent);
    }, 25);
    window.addEventListener("scroll", onChangeScrollBar);
    return () => window.removeEventListener("scroll", onChangeScrollBar);
  }, []);
  return <Header scrollBarPercent={scrollBarPercent} />;
};

export default React.memo(HeaderContainer);

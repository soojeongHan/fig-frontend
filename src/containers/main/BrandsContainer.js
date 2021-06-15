import React from "react";
import Brands from "../../components/main/Brands/Brands";

const BrandsContainer = () => {
  const [visible, setVisible] = React.useState(false);
  const target = React.useRef(null);

  React.useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          setVisible(() => (isIntersecting ? true : false));
        },
        {
          threshold: 0.2,
        }
      );
      observer.observe(target.current); // 비동기적으로 관찰 시작.
    }
    // 컴포넌트가 언마운트될때, 옵저버 객체가 존재하면 관찰 중지.
    return () => observer && observer.disconnect();
  }, []);

  return <Brands target={target} visible={visible} />;
};

export default BrandsContainer;

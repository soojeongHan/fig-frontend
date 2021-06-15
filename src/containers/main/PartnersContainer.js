import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Partners from "../../components/main/Partners";
import { fetchData, fetchDataImage } from "../../features/partners";

const PartnersContainer = () => {
  const dispatch = useDispatch();
  const target = React.useRef(null);
  const { data } = useSelector((state) => state.partners);

  React.useLayoutEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  React.useLayoutEffect(() => {
    if (target.current) {
      const imageArr = Array.from(
        target.current.querySelectorAll("img[data-src]")
      );
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const requestImage = entry.target.dataset.src;
            dispatch(fetchDataImage(requestImage));
            observer.unobserve(entry.target);
          }
        });
      });
      imageArr.forEach((image) => {
        imageObserver.observe(image);
      });
    }
  }, [dispatch, data]);

  return <Partners data={data} target={target} />;
};

export default PartnersContainer;

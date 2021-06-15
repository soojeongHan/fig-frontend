import React from "react";
import Blog from "../../components/main/Blog";

const BlogWrapper = () => {
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
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  return <Blog target={target} visible={visible} />;
};

export default BlogWrapper;

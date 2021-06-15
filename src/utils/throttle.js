const throttle = (callback, delay) => {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        callback.apply(this, arguments);
      }, delay);
    }
  };
};

export default throttle;

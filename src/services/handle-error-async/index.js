const useHandleErrorAsync = () => {
  return (fn) => {
    const newFn = async (...params) => {
      try {
        await fn(...params);
      } catch (error) {
        alert("알 수 없는 에러가 발생했습니다.");
      }
    };
    return newFn;
  };
};
export default useHandleErrorAsync;

export const useGetDatas = (setData) => {
  const API = "https://dummyjson.com/products";

  fetch(API)
    .then((response) => response.json())
    .then((json) => setData(json.products));
};

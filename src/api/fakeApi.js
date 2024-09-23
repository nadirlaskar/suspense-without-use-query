// fakeApi.js
export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "This is some fetched data!" });
    }, 2000); // Simulates a 2-second delay
  });
};

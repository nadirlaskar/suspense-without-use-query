// fakeApi.js
export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const date = new Date();
      resolve({
        data: `on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`,
      });
    }, 2000); // Simulates a 2-second delay
  });
};

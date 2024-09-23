export const RerenderButton = ({ rerender }) => {
  return (
    <button
      style={{
        margin: "16px 0",
      }}
      onClick={() => rerender((pre) => ++pre)}
    >
      Click to rerender!
    </button>
  );
};

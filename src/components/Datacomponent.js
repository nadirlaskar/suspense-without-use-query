// DataComponent.js
import React from "react";
import { useSuspenseData } from "../hooks/useSuspenseData";
import { fetchData } from "../api/fakeApi";

function DataComponent() {
  const data = useSuspenseData({
    queryKey: "data",
    queryFn: () => fetchData(),
  });
  const date = new Date();
  return (
    <>
      <div>
        {`Render Date is ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`}
      </div>
      <div>Fetched Data: {data.data}</div>
    </>
  );
}

export default DataComponent;

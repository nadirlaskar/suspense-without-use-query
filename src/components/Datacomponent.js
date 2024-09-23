// DataComponent.js
import React, { useState } from "react";
import { useSuspenseData } from "../hooks/useSuspenseData";
import { fetchData } from "../api/fakeApi";
import { RerenderButton } from "./RerenderButton";

function DataComponent() {
  const [counter, setCounter] = useState(0);
  const data = useSuspenseData({
    queryKey: "data",
    queryFn: () => fetchData(),
  });
  const date = new Date();
  return (
    <>
      <p>Rerender count: {counter}</p>
      <div>
        {`Render Date is ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`}
      </div>
      <div>Fetched Data: {data.data}</div>
      <RerenderButton rerender={setCounter} />
    </>
  );
}

export default DataComponent;

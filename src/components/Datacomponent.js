// DataComponent.js
import React from "react";
import { useSuspenseData } from "../hooks/useSuspenseData";

function DataComponent() {
  const data = useSuspenseData();

  return <div>Fetched Data: {data.data}</div>;
}

export default DataComponent;

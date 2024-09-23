// App.js
import React, { Suspense } from "react";
import DataComponent from "./components/Datacomponent";

function App() {
  return (
    <div className="App">
      <h1>React Suspense Demo</h1>
      <Suspense fallback={<div>Loading data...</div>}>
        <DataComponent />
      </Suspense>
    </div>
  );
}

export default App;

// App.js
import React, { Suspense } from "react";
import DataComponent from "./components/Datacomponent";
import { QueryClient, SuspenseCacheProvider } from "./utils/createSuspender";

const queryClient = QueryClient();

function App() {
  return (
    <SuspenseCacheProvider value={queryClient}>
      <div className="App">
        <h1>React Suspense Demo</h1>
        <Suspense fallback={<div>Loading data...</div>}>
          <DataComponent />
        </Suspense>
      </div>
    </SuspenseCacheProvider>
  );
}

export default App;

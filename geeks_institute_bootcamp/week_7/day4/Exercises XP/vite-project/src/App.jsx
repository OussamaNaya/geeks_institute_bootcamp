import React from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import LifecycleDemo from "./components/LifecycleDemo"

function App() {
  return (
    <div>
      <h2>Simulation 1</h2>

      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 2</h2>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>


      <h2>Simulation 3</h2>
      <BuggyCounter />

      <h2>Exercise 2: Lifecycle</h2>
      <LifecycleDemo />
    </div>
  );
}

export default App;
// import React, { useState } from "react";
import React from "react";

import "./App.css";
import HealthFormView from "./HealthFormView/HealthFormView";
import DocumentationView from "./DocumentationView/DocumentationView";
import CompletionView from "./CompletionView/CompletionView";

export default function App() {
  return (
    <div className="App">
      {/* NOTE: Comment out DocumentationView before submission  */}
      {/* <DocumentationView /> */}
      <HealthFormView />
      {/* {!formStatus ? <HealthFormView /> : <CompletionView />} */}
      {/* <HealthFormView />
      {<CompletionView />} */}
    </div>
  );
}

import React, { useState } from "react";

import "./App.css";
import HealthFormView from "./HealthFormView/HealthFormView";
import DocumentationView from "./DocumentationView/DocumentationView";
import CompletionView from "./CompletionView/CompletionView";

export default function App() {
  const [formStatus, setFormStatus] = useState(false);
  return (
    <div className="App">
      {!formStatus ? <HealthFormView /> : <CompletionView />}
    </div>
  );
}

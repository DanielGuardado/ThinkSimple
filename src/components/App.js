import React, { useState } from "react";

import "./App.css";
import HealthFormView from "./HealthFormView/HealthFormView";
import CompletionView from "./CompletionView/CompletionView";

export default function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [risk, setRisk] = useState(null);
  return (
    <div className="App">
      {!formStatus ? (
        <HealthFormView setFormStatus={setFormStatus} setRisk={setRisk} />
      ) : (
        <CompletionView risk={risk} setFormStatus={setFormStatus} />
      )}
    </div>
  );
}

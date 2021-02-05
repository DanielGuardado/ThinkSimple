import React, { useState } from "react";

import "./App.css";
import { HealthFormView } from "./HealthFormView/";
import { CompletionView } from "./CompletionView/";

export default function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [risk, setRisk] = useState(null);

  return (
    <div className="App">
      {!formStatus ? (
        <HealthFormView {...{ setFormStatus, setRisk }} />
      ) : (
        <CompletionView {...{ risk, setFormStatus }} />
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Toggle from "../components/shared/Toggle/Toggle";

export default function Home() {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);

  return (
    <main style={{ padding: "40px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Toggle checked={emailEnabled} onChange={setEmailEnabled} label="Email" />

        <Toggle checked={smsEnabled} onChange={setSmsEnabled} label="SMS" />
      </div>
    </main>
  );
}

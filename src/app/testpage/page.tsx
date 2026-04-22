"use client";

import { Button } from "../components/shared/Button/Button";

export default function TestPage() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      
      <h2>Variants</h2>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="neutral">Neutral</Button>

      <h2>Sizes</h2>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>

      <h2>Shapes</h2>
      <Button shape="rounded">Rounded</Button>
      <Button shape="square">■</Button>
      <Button shape="pill">Pill</Button>

      <h2>With Icons</h2>
      <Button icon={<span>🔥</span>} iconPosition="left">
        Left Icon
      </Button>

      <Button icon={<span>👉</span>} iconPosition="right">
        Right Icon
      </Button>

      <h2>Disabled</h2>
      <Button disabled>Disabled</Button>

      <h2>Combinations</h2>
      <Button variant="primary" size="large" shape="pill">
        Continue
      </Button>

      <Button variant="secondary" size="small">
        Cancel
      </Button>

      <Button variant="neutral" size="medium" shape="square">
        ?
      </Button>

    </div>
  );
}
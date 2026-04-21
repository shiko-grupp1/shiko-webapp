import { Button } from "../components/shared/Button/Button";

export default function TestPage() {
    return (
  <div style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
      
      <Button>Default button</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="neutral">Neutral</Button>

      <Button shape="pill">Pill</Button>

      <Button shape="square">
        X
      </Button>

      <Button size="large">Large</Button>
        
      <Button size="small">Small</Button>

    </div>    
    );
}
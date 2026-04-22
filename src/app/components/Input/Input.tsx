type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,holder,
  value,
  onChange,
}: InputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && <label style={{ fontSize: "14px" }}>{label}</label>}

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          outline: "none",
        }}
      />
    </div>
  );
}
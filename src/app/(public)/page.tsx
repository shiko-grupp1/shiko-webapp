"use client";
import React, { useState } from "react";
import FormGroup from "../components/FormGroup/FormGroup";

const ExamplePage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <FormGroup
        label="First name"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="Hasan"
        icon="👤"
      />

      <FormGroup
        label="Last name"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Mahmud"
        icon="👤"
      />

      <FormGroup
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="••••••••"
        icon="🔒"
      />

      <FormGroup
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="••••••••"
        icon="🔒"
      />

      <FormGroup
        label="Email address"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Type your email address"
        icon="📧"
        hint="This is a hint text"
      />


    </div>
  );
};
export default ExamplePage
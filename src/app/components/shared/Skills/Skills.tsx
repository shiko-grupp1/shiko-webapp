"use client";

import { useEffect, useState } from "react";
import styles from "./Skills.module.css";

type Skill = {
  id: string;
  name: string;
};

type Props = {
  userId: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_SKILLS_API_URL;

export default function Skills({ userId }: Props) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/users/${userId}/skills`
        );

        if (!res.ok) {
          setError(`Failed to load skills (${res.status})`);
          return;
        }

        const data = await res.json();

        setSkills(data);
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      }
    };

    fetchSkills();
  }, [userId]);

  const handleAddSkill = async () => {
    if (!newSkill.trim()) return;

    try {
      const res = await fetch(
        `${API_BASE_URL}/users/${userId}/skills`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newSkill,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to create skill");
      }

      const createdSkill = await res.json();

      setSkills((prev) => [...prev, createdSkill]);

      setNewSkill("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveSkill = async (id: string) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/skills/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete skill");
      }

      setSkills((prev) =>
        prev.filter((skill) => skill.id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.skillsContainer}>
      <h3 className="h5">Skills</h3>

      <div className={styles.addSkillContainer}>
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill"
          className={styles.skillInput}
        />

        <button
          onClick={handleAddSkill}
          className={styles.addButton}
        >
          Add
        </button>
      </div>

      {error ? (
        <p>{error}</p>
      ) : skills.length === 0 ? (
        <p>No skills found</p>
      ) : (
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={styles.skillTag}
            >
              <div className={styles.skillContent}>
                <span>{skill.name}</span>

                <button
                  onClick={() =>
                    handleRemoveSkill(skill.id)
                  }
                  className={styles.removeButton}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
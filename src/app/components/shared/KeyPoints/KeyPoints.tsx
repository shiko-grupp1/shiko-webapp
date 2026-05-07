import styles from "./KeyPoints.module.css";

type Props = {
  lessonId: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://keypoints-api-osman-dgdebvh3eubzfqgv.polandcentral-01.azurewebsites.net";

export default async function KeyPoints({ lessonId }: Props) {
  let keyPoints: string[] = [];
  let error: string | null = null;

  try {
    const res = await fetch(`${API_BASE_URL}/lessons/${lessonId}/keypoints`, { cache: "no-store" });

    if (!res.ok) {
      error = `Failed to load key points (${res.status})`;
    } else {
      keyPoints = await res.json();
      console.log("KEYPOINTS:", keyPoints);
    }
  } catch (err) {
    console.error("FETCH ERROR:", err);
    error = "Something went wrong";
  }

  return (
    <div className={styles.keypointsContainer}>
      <h3 className="h5">Key Points</h3>

      {error ? (
        <p className="body-16">{error}</p>
      ) : keyPoints.length === 0 ? (
        <p className="body-16">No key points found</p>
      ) : (
        <ul className={styles.keypointsGrid}>
          {keyPoints.map((kp, i) => (
            <li key={i} className={styles.keypointsItem}>
              <span className={styles.check}>✔</span>
              <span className="body-16">{kp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import styles from "./KeyPoints.module.css";

type Props = {
  lessonId: string;
};

export default async function KeyPoints({ lessonId }: Props) {
  let keyPoints: string[] = [];
  let error: string | null = null;

  try {
    const res = await fetch(
      `http://127.0.0.1:5282/lessons/${lessonId}/keypoints`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      error = "Failed to load key points";
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
        <ul className={styles.keypointsList}>
          {keyPoints.map((kp, i) => (
            <li key={i} className={styles.keypointsItem}>
              <span className={styles.keypointsIcon}>✔</span>
              <span className="body-16">{kp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
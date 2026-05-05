type Props = {
  lessonId: string;
};

export default async function KeyPoints({ lessonId }: Props) {
  const res = await fetch(
    `https://localhost:7289/lessons/${lessonId}/keypoints`,
    { cache: "no-store" }
  );

  if (!res.ok) return <p>No key points</p>;

  const keyPoints: string[] = await res.json();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Key Points</h2>

      <ul className="space-y-2">
        {keyPoints.map((kp, i) => (
          <li
            key={i}
            className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
          >
            <span className="text-green-500">✔</span>
            {kp}
          </li>
        ))}
      </ul>
    </div>
  );
}
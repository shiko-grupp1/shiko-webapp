import KeyPoints from "@/app/components/shared/KeyPoints/KeyPoints";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h2 className="h2">Course Details</h2>
      <KeyPoints lessonId={id} />
    </div>
  );
}
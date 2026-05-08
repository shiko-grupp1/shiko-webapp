import KeyPoints from "@/app/components/shared/KeyPoints/KeyPoints";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <KeyPoints lessonId={id} />
    </div>
  );
}
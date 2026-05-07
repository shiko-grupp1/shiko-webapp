export default async function page({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;

  return <div>{courseId}</div>;
}

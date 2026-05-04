import FaqList from "../../../components/shared/Faq/FaqList";

type PageProps = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { courseId } = await params;

  const response = await fetch(`http://localhost:5282/api/faq/course/${courseId}`, {
    cache: "no-store",
  });

  const faqItems = await response.json();

  return (
    <main>
      <FaqList items={faqItems} />
    </main>
  );
}

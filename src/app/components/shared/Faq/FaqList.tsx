import Faq from "./Faq";

type FaqItem = {
  id: number;
  title: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export default function FaqList({ items }: FaqListProps) {
  return (
    <>
      {items.map((item) => (
        <Faq key={item.id} title={item.title} answer={item.answer} />
      ))}
    </>
  );
}

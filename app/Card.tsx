import { Article } from "./page";

interface Props {
  children: React.ReactNode;
}

export function Card(props: Props) {
  const { children } = props;

  return (
    <article className="max-w-405px shadow-section p-7">{children}</article>
  );
}

export default Card;

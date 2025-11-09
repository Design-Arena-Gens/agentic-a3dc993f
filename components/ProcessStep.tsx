type Props = { step: number; title: string; description: string };

export default function ProcessStep({ step, title, description }: Props) {
  return (
    <article className="step">
      <div className="num">{step}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
}

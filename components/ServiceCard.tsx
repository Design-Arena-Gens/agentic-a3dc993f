type Props = { title: string; description: string; icon: string };

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <article className="card">
      <div className="icon" aria-hidden>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

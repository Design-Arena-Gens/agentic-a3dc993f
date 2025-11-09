import Image from 'next/image';

type Props = { avatar: string; name: string; text: string };

export default function Testimonial({ avatar, name, text }: Props) {
  return (
    <figure className="testimonial">
      <div className="who">
        <Image src={avatar} alt={name} width={28} height={28} style={{ borderRadius: 999 }} />
        <figcaption>{name}</figcaption>
      </div>
      <blockquote>{text}</blockquote>
    </figure>
  );
}

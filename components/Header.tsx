import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site">
      <div className="container bar">
        <Link href="#" className="brand" aria-label="Intelliwave">
          <Image src="/intelliwave-logo.svg" alt="Intelliwave" width={28} height={28} />
          <span>Intelliwave</span>
        </Link>
        <nav aria-label="Navigation principale">
          <Link href="#services">Services</Link>
          <Link href="#process">M?thode</Link>
          <Link href="#work">Cas</Link>
          <Link href="#pricing">Tarifs</Link>
          <Link href="#contact" className="btn ghost" style={{ marginLeft: 24 }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

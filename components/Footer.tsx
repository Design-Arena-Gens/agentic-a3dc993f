export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site">
      <div className="container bottom">
        <div>? {year} Intelliwave. Tous droits r?serv?s.</div>
        <div>
          <a href="#services">Services</a>
          <span style={{ margin: '0 8px', color: '#23324e' }}>|</span>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

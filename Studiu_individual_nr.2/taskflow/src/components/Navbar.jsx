const LINKS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'tasks', label: 'Sarcini' },
  { id: 'about', label: 'Despre' },
];

function Navbar({ page, onNavigate }) {
  return (
    <header className="navbar">
      <span className="brand">TaskFlow</span>
      <nav aria-label="Navigare principală">
        {LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            className={page === link.id ? 'nav-link active' : 'nav-link'}
            aria-current={page === link.id ? 'page' : undefined}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;

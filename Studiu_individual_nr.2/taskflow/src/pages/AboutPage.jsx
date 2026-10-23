function AboutPage() {
  return (
    <section>
      <h1>Despre TaskFlow</h1>
      <div className="panel">
        <p>
          TaskFlow este o aplicație web pentru elevii care lucrează în echipe. Permite organizarea
          sarcinilor, stabilirea termenelor-limită și urmărirea progresului.
        </p>
        <ul>
          <li>creare, editare, ștergere (cu confirmare) și schimbarea statusului;</li>
          <li>căutare, filtrare după status și prioritate, sortare;</li>
          <li>dashboard cu statistici, progres și termene apropiate;</li>
          <li>validarea datelor și mesaje de succes / eroare.</li>
        </ul>
        <p className="muted">Tehnologii: React, Vite, JavaScript (JSX), CSS, localStorage.</p>
      </div>
    </section>
  );
}

export default AboutPage;

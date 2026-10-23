import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import { useTasks } from './hooks/useTasks';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';

function App() {
  const [page, setPage] = useState('dashboard');
  const [toast, setToast] = useState(null);
  const data = useTasks();

  const notify = (type, message) => setToast({ type, message });

  // Mesajul dispare automat după 3 secunde
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  let content;
  if (page === 'tasks') {
    content = <TasksPage data={data} notify={notify} />;
  } else if (page === 'about') {
    content = <AboutPage />;
  } else if (data.loading) {
    content = <p className="state-msg">Se încarcă datele...</p>;
  } else if (data.error) {
    content = (
      <div className="state-msg error" role="alert">
        <p>{data.error} Încearcă din nou.</p>
        <button type="button" className="btn primary" onClick={data.reload}>
          Reîncarcă
        </button>
      </div>
    );
  } else {
    content = <DashboardPage tasks={data.tasks} onNavigate={setPage} />;
  }

  return (
    <>
      <Navbar page={page} onNavigate={setPage} />
      <main className="container">{content}</main>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}

export default App;

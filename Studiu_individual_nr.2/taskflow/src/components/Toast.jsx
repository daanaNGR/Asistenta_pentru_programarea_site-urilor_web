// Mesaj de succes sau eroare, afișat temporar
function Toast({ toast, onClose }) {
  if (!toast) return null;
  return (
    <div className={`toast ${toast.type}`} role={toast.type === 'error' ? 'alert' : 'status'}>
      <span>{toast.message}</span>
      <button type="button" aria-label="Închide mesajul" onClick={onClose}>
        ×
      </button>
    </div>
  );
}

export default Toast;

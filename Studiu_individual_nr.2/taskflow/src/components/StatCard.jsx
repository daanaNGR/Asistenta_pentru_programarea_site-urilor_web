function StatCard({ label, value, tone = 'neutral' }) {
  return (
    <div className={`stat-card ${tone}`}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default StatCard;

import { PRIORITIES, STATUSES } from '../utils/constants';

function TaskFilters({ filters, onChange }) {
  const set = (key) => (event) => onChange({ ...filters, [key]: event.target.value });

  return (
    <div className="filters" role="search" aria-label="Filtrare sarcini">
      <input
        type="search"
        placeholder="Caută după titlu sau descriere"
        aria-label="Căutare"
        value={filters.search}
        onChange={set('search')}
      />
      <select aria-label="Filtru status" value={filters.status} onChange={set('status')}>
        <option value="all">Toate statusurile</option>
        {STATUSES.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>
      <select aria-label="Filtru prioritate" value={filters.priority} onChange={set('priority')}>
        <option value="all">Toate prioritățile</option>
        {PRIORITIES.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>
      <select aria-label="Sortare" value={filters.sort} onChange={set('sort')}>
        <option value="due">Sortare: termen</option>
        <option value="priority">Sortare: prioritate</option>
        <option value="title">Sortare: titlu</option>
      </select>
    </div>
  );
}

export default TaskFilters;

# Git și GitHub — reguli de lucru

## Branch-uri

| Branch | Utilizare |
| --- | --- |
| `main` | cod stabil |
| `feature/...` | funcționalități noi (ex. `feature/TF-12-task-filtering`) |
| `fix/...` | bug-uri (ex. `fix/form-validation`) |
| `docs/...` | documentație (ex. `docs/project-documentation`) |

Nu se lucrează direct în `main`.

## Fluxul pentru fiecare task

```bash
git switch main
git pull origin main
git switch -c feature/TF-12-task-filtering
# ... modificări și testare locală ...
git add .
git commit -m "feat: add task filtering"
git push -u origin feature/TF-12-task-filtering
# se deschide Pull Request pe GitHub, un coleg face Code Review, apoi merge în main
```

## Mesaje de commit

`feat:` funcționalitate nouă · `fix:` bug · `style:` aspect/formatare · `refactor:` structură cod · `test:` teste · `docs:` documentație.

Exemple: `feat: add task creation form`, `fix: validate empty task title`, `docs: add user stories`.

## Checklist de predare

- [x] Problema și scopul aplicației definite
- [x] Cerințe și User Stories documentate
- [x] Prototip UI (wireframe-uri și capturi)
- [x] Task-uri Jira pregătite, estimate și repartizate (de importat în Jira)
- [x] Aplicația React implementată și testată
- [x] README.md complet
- [ ] Board Jira creat și actualizat (se face în contul tău Jira)
- [ ] Branch-uri, commit-uri și Pull Request-uri în repository (se fac pe GitHub)
- [ ] Fiecare membru își poate explica contribuția

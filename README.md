# Micro-frontends Teaching Demo — Corporate Portal

A working example built for teaching micro-frontend architecture with
**Webpack 5 Module Federation**, paired with a **Java Spring Boot BFF
(Backend for Frontend)** per micro-frontend.

## Architecture

```
frontend/
  shared-ui/     design-system package shared by all remotes (compound
                 components, cross-MFE hooks) — consumed via npm workspaces
  host/          shell app (port 3000): nav, auth, lazy-loads the 3 remotes
  mfe-news/      Noticias y Anuncios remote (port 3001)
  mfe-hr/        Recursos Humanos remote (port 3002)
  mfe-reports/   Reportes remote (port 3003)

backend/
  bff-news/      Spring Boot, port 8081 — GET /api/news
  bff-hr/        Spring Boot, port 8082 — GET /api/employees
  bff-reports/   Spring Boot, port 8083 — GET /api/reports
```

Each remote is independently built and deployed (its own webpack config,
its own `package.json`, its own dev server) and talks to its own backend
service, mirroring how autonomous frontend and backend teams would own a
vertical slice end to end.

If a backend service isn't running, its remote falls back to local mock
data and shows a small warning — so the frontend can be demoed standalone.

## React patterns demonstrated

| Pattern | Where |
|---|---|
| Custom hooks (data fetching) | `useFetch` in each remote |
| `useReducer` for related state | `mfe-hr/src/reducer.js` |
| Render props | `mfe-hr/src/components/DataList.jsx` |
| HOC | `shared-ui` `withErrorBoundary` |
| Compound components | `shared-ui` `Card`, `host` `Tabs` |
| Context + custom hook | `host/src/context/AuthContext.jsx` |
| `React.lazy` + `Suspense` | `host/src/components/RemoteSlot.jsx` |
| `useSyncExternalStore` | `shared-ui/src/hooks/useSharedStore.js` |
| `useMemo` / `useCallback` | `mfe-reports` (chart geometry, event handler identity) |
| Cross-MFE event bus | `shared-ui/src/hooks/useEventBus.js` |

The HR and Reports remotes never import one another, yet selecting an
employee in HR updates the chart context in Reports — via a `window`-level
event bus and shared store, not React Context (which does not cross
independently-built bundles on its own).

## Running it

**Backends** (needs a JDK 17+ on PATH; Maven wrapper not included, uses
system `mvn`):

```bash
cd backend/bff-news && mvn spring-boot:run
cd backend/bff-hr && mvn spring-boot:run
cd backend/bff-reports && mvn spring-boot:run
```

**Frontend** (Node 18+):

```bash
cd frontend
npm install
npm run start:all   # runs all 4 dev servers concurrently
```

Then open http://localhost:3000.

Individual remotes can also be run standalone (e.g. `npm run start -w mfe-hr`
then open http://localhost:3002) since each ships its own `bootstrap.js`.

import { useEffect, useRef, useState } from 'react';

// Generic data-fetching hook shared by the pattern (not the module) across
// all three MFEs: each remote defines its own copy, showing that
// micro-frontends duplicate small utilities on purpose to stay
// independently deployable, reserving shared-ui only for things that
// must be a single source of truth (design system, cross-MFE plumbing).
export function useFetch(url) {
  const [state, setState] = useState({ data: null, error: null, loading: true });
  const controllerRef = useRef(null);

  useEffect(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setState({ data: null, error: null, loading: true });

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setState({ data, error: null, loading: false }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setState({ data: null, error, loading: false });
        }
      });

    return () => controller.abort();
  }, [url]);

  return state;
}

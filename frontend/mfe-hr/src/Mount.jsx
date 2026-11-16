import React, { useEffect, useReducer, useMemo } from "react";
import { Card, emitMfeEvent, setSharedState } from "shared-ui";
import { useFetch } from "./hooks/useFetch";
import { directoryReducer, initialState } from "./reducer";
import { DataList } from "./components/DataList";

const HR_API = "http://localhost:8082/api/employees";

const FALLBACK_EMPLOYEES = [
  { id: 1, name: "Ana Torres", department: "Ingeniería" },
  { id: 2, name: "Luis Peña", department: "Marketing" },
  { id: 3, name: "Carla Ruiz", department: "Ingeniería" },
];

export default function Mount() {
  const { data, error, loading } = useFetch(HR_API);
  const [state, dispatch] = useReducer(directoryReducer, initialState);

  useEffect(() => {
    if (data) dispatch({ type: "EMPLOYEES_LOADED", payload: data });
    else if (error)
      dispatch({ type: "EMPLOYEES_LOADED", payload: FALLBACK_EMPLOYEES });
  }, [data, error]);

  const filtered = useMemo(
    () =>
      state.employees.filter((emp) =>
        emp.name.toLowerCase().includes(state.filter.toLowerCase()),
      ),
    [state.employees, state.filter],
  );

  function selectEmployee(emp) {
    dispatch({ type: "SELECT_EMPLOYEE", payload: emp.id });
    setSharedState({ selectedDepartment: emp.department });
    emitMfeEvent("employee-selected", emp);
  }

  if (loading) return <p>Cargando directorio…</p>;

  return (
    <div>
      <h2>Recursos Humanos</h2>
      {error && (
        <p style={{ fontSize: 12, color: "#b3261e" }}>
          bff-hr no disponible en {HR_API} — mostrando datos de ejemplo.
        </p>
      )}
      <input
        placeholder="Filtrar por nombre…"
        value={state.filter}
        onChange={(e) =>
          dispatch({ type: "SET_FILTER", payload: e.target.value })
        }
        style={{
          marginBottom: 12,
          padding: 6,
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      <DataList
        items={filtered}
        empty={<p>Sin resultados.</p>}
        render={(emp) => (
          <Card
            key={emp.id}
            tone={emp.id === state.selectedId ? "selected" : "default"}
          >
            <Card.Body>
              <button
                onClick={() => selectEmployee(emp)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <strong>{emp.name}</strong> — {emp.department}
              </button>
            </Card.Body>
          </Card>
        )}
      />
    </div>
  );
}

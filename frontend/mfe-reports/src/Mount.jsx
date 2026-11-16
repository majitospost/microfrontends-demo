import React, { useCallback, useMemo, useState } from "react";
import { Card, useMfeEvent, useSharedStore } from "shared-ui";
import { useFetch } from "./hooks/useFetch";
import { BarChart } from "./components/BarChart";

const REPORTS_API = "http://localhost:8083/api/reports";

const FALLBACK_REPORTS = [
  { department: "Ingeniería", value: 32 },
  { department: "Marketing", value: 14 },
  { department: "Ventas", value: 21 },
];

export default function Mount() {
  const { data, error, loading } = useFetch(REPORTS_API);
  const reports = data ?? (error ? FALLBACK_REPORTS : []);

  const selectedDepartment = useSharedStore((s) => s.selectedDepartment);

  const [lastSelectedEmployee, setLastSelectedEmployee] = useState(null);
  const onEmployeeSelected = useCallback((employee) => {
    setLastSelectedEmployee(employee);
  }, []);
  useMfeEvent("employee-selected", onEmployeeSelected);

  const chartData = useMemo(
    () => reports.map((r) => ({ label: r.department, value: r.value })),
    [reports],
  );

  const highlighted = useMemo(
    () => reports.find((r) => r.department === selectedDepartment),
    [reports, selectedDepartment],
  );

  if (loading) return <p>Cargando reportes…</p>;

  return (
    <div>
      <h2>Reportes</h2>
      {error && (
        <p style={{ fontSize: 12, color: "#b3261e" }}>
          bff-reports no disponible en {REPORTS_API} — mostrando datos de
          ejemplo.
        </p>
      )}
      <Card>
        <Card.Header>Tickets abiertos por departamento</Card.Header>
        <Card.Body>
          <BarChart data={chartData} highlightLabel={selectedDepartment} />
        </Card.Body>
        {highlighted && (
          <Card.Footer>
            Departamento seleccionado en Recursos Humanos:{" "}
            <strong>{highlighted.department}</strong> ({highlighted.value}{" "}
            tickets)
            {/* lastSelectedEmployee only survives if this component was already
                mounted when the CustomEvent fired — the host unmounts inactive
                tabs, so a one-shot event can be missed. The shared store above
                is read on every mount instead, so it survives navigating away
                and back. This is the trade-off to call out when teaching event
                bus vs. shared store for cross-MFE communication. */}
            {lastSelectedEmployee &&
              `, último seleccionado: ${lastSelectedEmployee.name}`}
          </Card.Footer>
        )}
      </Card>
    </div>
  );
}

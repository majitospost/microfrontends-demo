import React from "react";
import { Card } from "shared-ui";
import { useFetch } from "./hooks/useFetch";

const NEWS_API = "http://localhost:8081/api/news";

const FALLBACK_NEWS = [
  {
    id: 1,
    title: "Nueva política de trabajo remoto",
    body: "Disponible desde el 1 de septiembre.",
    date: "2026-08-18",
  },
  {
    id: 2,
    title: "Mantenimiento de VPN",
    body: "Ventana de mantenimiento el sábado 23:00-01:00.",
    date: "2026-08-19",
  },
];

export default function Mount() {
  const { data, error, loading } = useFetch(NEWS_API);
  const news = data ?? (error ? FALLBACK_NEWS : null);

  if (loading) return <p>Cargando noticias…</p>;

  return (
    <div>
      <h2>Noticias y Anuncios</h2>
      {error && (
        <p style={{ fontSize: 12, color: "#b3261e" }}>
          bff-news no disponible en {NEWS_API} — mostrando datos de ejemplo.
        </p>
      )}
      {news.map((item) => (
        <Card key={item.id} tone="brand">
          <Card.Header>{item.title}</Card.Header>
          <Card.Body>{item.body}</Card.Body>
          <Card.Footer>{item.date}</Card.Footer>
        </Card>
      ))}
    </div>
  );
}

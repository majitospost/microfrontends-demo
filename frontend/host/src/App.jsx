import React, { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Tabs } from "./components/Tabs";
import { createRemoteSlot } from "./components/RemoteSlot";
import "./styles.css";

const NewsMfe = createRemoteSlot(
  () => import("mfeNews/Mount"),
  "Noticias y Anuncios",
);
const HrMfe = createRemoteSlot(() => import("mfeHr/Mount"), "Recursos Humanos");
const ReportsMfe = createRemoteSlot(
  () => import("mfeReports/Mount"),
  "Reportes",
);

function LoginBar() {
  const { user, login, logout } = useAuth();
  const [name, setName] = useState("");

  if (user) {
    return (
      <div className="nh-login-bar">
        <span>
          Conectado como <strong>{user.name}</strong>
        </span>
        <button onClick={logout}>Salir</button>
      </div>
    );
  }

  return (
    <form
      className="nh-login-bar"
      onSubmit={(e) => {
        e.preventDefault();
        if (name.trim()) login(name.trim());
      }}
    >
      <input
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <div className="nh-shell">
        <header className="nh-shell__header">
          <h1>Portal Corporativo</h1>
          <LoginBar />
        </header>

        <main className="nh-shell__main">
          <Tabs defaultId="news">
            <Tabs.Panel id="news" label="Noticias y Anuncios">
              <NewsMfe />
            </Tabs.Panel>
            <Tabs.Panel id="hr" label="Recursos Humanos">
              <HrMfe />
            </Tabs.Panel>
            <Tabs.Panel id="reports" label="Reportes">
              <ReportsMfe />
            </Tabs.Panel>
          </Tabs>
        </main>
      </div>
    </AuthProvider>
  );
}

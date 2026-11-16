import React, { Suspense } from "react";
import { withErrorBoundary } from "shared-ui";

export function createRemoteSlot(loader, label) {
  const LazyRemote = React.lazy(loader);
  const Safe = withErrorBoundary(LazyRemote, label);

  return function RemoteSlot(props) {
    return (
      <Suspense
        fallback={<div className="nh-mfe-loading">Cargando {label}…</div>}
      >
        <Safe {...props} />
      </Suspense>
    );
  };
}

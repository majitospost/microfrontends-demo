import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(
      `[${this.props.label || "micro-frontend"}] failed to render`,
      error,
      info,
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="nh-mfe-error">
            No se pudo cargar "{this.props.label || "este módulo"}".
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export function withErrorBoundary(Component, label) {
  return function Wrapped(props) {
    return (
      <ErrorBoundary label={label}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export default ErrorBoundary;

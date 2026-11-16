import { useEffect, useCallback } from "react";

function getBus() {
  if (!window.__MFE_EVENT_BUS__) {
    window.__MFE_EVENT_BUS__ = new EventTarget();
  }
  return window.__MFE_EVENT_BUS__;
}

export function emitMfeEvent(type, detail) {
  getBus().dispatchEvent(new CustomEvent(type, { detail }));
}

export function useMfeEvent(type, handler) {
  useEffect(() => {
    const bus = getBus();
    const listener = (event) => handler(event.detail);
    bus.addEventListener(type, listener);
    return () => bus.removeEventListener(type, listener);
  }, [type, handler]);
}

export function useEventBus() {
  const emit = useCallback((type, detail) => emitMfeEvent(type, detail), []);
  return { emit, useEvent: useMfeEvent };
}

import { useSyncExternalStore } from "react";

function getStore() {
  if (!window.__MFE_STORE__) {
    let state = { currentUser: null, selectedDepartment: null };
    const listeners = new Set();

    window.__MFE_STORE__ = {
      getState: () => state,
      setState: (partial) => {
        state = { ...state, ...partial };
        listeners.forEach((listener) => listener());
      },
      subscribe: (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
    };
  }
  return window.__MFE_STORE__;
}

export function setSharedState(partial) {
  getStore().setState(partial);
}

export function useSharedStore(selector = (state) => state) {
  const store = getStore();
  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getState()),
  );
}

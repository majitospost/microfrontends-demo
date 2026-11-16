export const initialState = {
  employees: [],
  filter: "",
  selectedId: null,
};

export function directoryReducer(state, action) {
  switch (action.type) {
    case "EMPLOYEES_LOADED":
      return { ...state, employees: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SELECT_EMPLOYEE":
      return { ...state, selectedId: action.payload };
    default:
      return state;
  }
}

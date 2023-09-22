import { createContext, useReducer } from "react";

interface SType {
    role: string;
    status: string;
    isFiltered: boolean;
}
interface FilterContextType {
    state: SType;
    dispatch: (action: any) => any; // Change the return type to any if needed
  }
const initialState: SType = {
  role: "free",
  status: "guest",
  isFiltered: false,
};

const reducer = (state: SType, action: any) => {
  if (action.type === "updateRole") {
    return {
      ...state,
      role: action.payload.value,
    };
  }
  if (action.type === "updateStatus") {
    return {
      ...state,
      status: action.payload.value,
    };
  }
  if (action.type === "applyFilter") {
    return {
      ...state,
      isFiltered: true,
    };
  }

  return initialState;
};

const Filter = ({ children }: { children: any }) => {
  const FilterContext = createContext({
    state: {
      role: "",
      status: "",
      isFiltered: false,
    },
    method: () => {},
  });

//   const [state, dispatch] = useReducer<FilterContextType>(reducer, initialState);

  return (
    null
  );
};

export default Filter;

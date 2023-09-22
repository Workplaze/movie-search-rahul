import React, { createContext, useReducer, Dispatch, ReactNode } from "react";

interface SType {
  role: string;
  status: string;
  isFiltered: boolean;
}

type Action =
  | { type: "updateRole"; payload: { value: string } }
  | { type: "updateStatus"; payload: { value: string } }
  | {type: "clearFilter"}

const initialState: SType = {
  role: "free",
  status: "guest",
  isFiltered: false,
};

const reducer = (state: SType, action: Action): SType => {
  switch (action.type) {
    case "updateRole":
      return {
        ...state,
        isFiltered: true,
        role: action.payload.value,
      };
    case "updateStatus":
      return {
        ...state,
        isFiltered: true,
        status: action.payload.value,
      };
    case "clearFilter":
        return {
            ...state,
            isFiltered: false
        }
  }
};

interface FilterContextType {
  state: SType;
  dispatch: Dispatch<Action>;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

interface FilterProps {
  children: ReactNode;
}

const Filter: React.FC<FilterProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
export default Filter;

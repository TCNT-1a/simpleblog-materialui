import React, { ReactNode } from "react";

// const AppContext = React.createContext({});

// export function useAppContext() {
//   return React.useContext(AppContext);
// }
export const AppWrapper = ({
  categories,
  children,
}: {
  categories: any;
  children: ReactNode;
}) => {
  return (
    <div className="app-wrapper">{children}</div>
    // <AppContext.Provider value={}>

    // </AppContext.Provider>
  );
};

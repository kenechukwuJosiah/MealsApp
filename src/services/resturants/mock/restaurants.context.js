import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, transformResponse } from "./restaurants.service";

export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({ children }) => {
  return (
    <ResturantsContext.Provider value={{ resturants: [1, 2, 3] }}>
      {children}
    </ResturantsContext.Provider>
  );
};

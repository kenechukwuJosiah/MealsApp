import { mocks } from ".";
import camelize from "camelize";

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) reject("Not found");

    resolve(mock);
  });
};

export const transformResponse = ({ results = [] }) => {
  const mappedResults = results.map((resturant) => {
    return {
      ...resturant,
      isClosedTemporarily: resturant.business_status == "CLOSED_TEMPORARILY",
      isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
    };
  });
  return camelize(mappedResults);
};

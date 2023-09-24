import { MovieObject } from "../Common/types";

export const filter = (
  data: MovieObject[],
  searchText: string
): MovieObject[] => {
  const result = data.filter((movie) =>
    movie.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return result;
};

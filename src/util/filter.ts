interface MovieObject {
  id: number;
  name: string;
  image: string;
  rating: string;
  summary: string;
}
export const filter = (
  data: MovieObject[],
  searchText: string
): MovieObject[] => {
  const result = data.filter((movie) =>
    movie.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return result;
};


import { CountryLeague } from "../type";

const usePagination = () => {
  const itemsPerPage = 6;

  const sortBy = (
    objectKey: keyof CountryLeague,
    countriesList: Array<CountryLeague>
  ) => {
    const temp = [...countriesList];
    temp.sort((a, b) => (a[objectKey] < b[objectKey] ? -1 : a > b ? 1 : 0));
    return temp;
  };

  return {
    sortBy,
    itemsPerPage,
  };
};

export default usePagination;

import { useEffect, useState } from "react";
import usePagination from "../../hooks/usePagination";
import { CountryLeague } from "../../type";
import { useSelector } from "react-redux";
import { getCurrentPage } from "../../store/CountriesSlice";
import styles from "./Countries.module.css";

export interface SheetInterface {
  list: Array<CountryLeague>;
}

const Sheet = ({ list }: SheetInterface) => {
  const currentPage = useSelector(getCurrentPage);
  const [pageList, setPageList] = useState<Array<CountryLeague>>([]);
  const { sortBy, itemsPerPage } = usePagination(currentPage);

  const handleSort = (objectkey: keyof CountryLeague) => {
    const sortedList = sortBy(objectkey, pageList);
    setPageList(sortedList);
  };

  useEffect(() => {
    const itemsofPage = list.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );
    setPageList(itemsofPage);
  }, [list, itemsPerPage, currentPage]);


  return (
    <table id={styles.countries}>
      <thead>
        <tr>
          <th onClick={() => handleSort("id")}>ID</th>
          <th onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("code")}>Code</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pageList.map((c, _i) => (
          <tr key={_i}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.code}</td>
            <td>
              <img src={c.flag} alt={c.code} className={styles.countryFlag} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Sheet;

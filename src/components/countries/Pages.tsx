import { useEffect, useState } from "react";
import usePagination from "../../hooks/usePagination";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentPage, setCurrentPage } from "../../store/CountriesSlice";

export interface PagesInterface {
  totalItems: number;
}
const Pages = ({ totalItems }: PagesInterface) => {
  const currentPage = useSelector(getCurrentPage);
  const { itemsPerPage } = usePagination(currentPage);
  const dispatch = useDispatch();

  const [pages, setPages] = useState<Array<number>>([]);

  const handleNewPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const actPages = [];

    for (let i = 0; i < totalPages; i++) {
      actPages.push(i);
    }
    setPages(actPages);
  }, [totalItems, itemsPerPage]);

  return (
    <>
      {pages.map((p) => (
        <div key={p} onClick={() => handleNewPage(p)}>
          {p + 1}
        </div>
      ))}
    </>
  );
};

export default Pages;

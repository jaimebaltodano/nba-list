import { useEffect, useState } from "react";
import usePagination from "../../hooks/usePagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, getCurrentPage } from "../../store/CountriesSlice";
import useButton from "../../hooks/useButton";
import styles from "./Countries.module.css";

export interface PagesInterface {
  totalItems: number;
}
const Pages = ({ totalItems }: PagesInterface) => {
  const { itemsPerPage } = usePagination();
  const dispatch = useDispatch();
  const { renderButton } = useButton();
  const currentPage = useSelector(getCurrentPage);

  const [pages, setPages] = useState<Array<number>>([]);

  const handleNewPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const actPages = Array.from(Array(totalPages).keys());

    setPages(actPages);
  }, [totalItems, itemsPerPage]);

  return (
    <>
      {pages.map((p) =>
        renderButton({
          id: p.toString(),
          handler: () => handleNewPage(p),
          label: p.toString(),
          className: `${styles.button} ${
            p == currentPage ? styles.active : null
          }`,
        })
      )}
    </>
  );
};

export default Pages;

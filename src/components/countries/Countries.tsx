import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllCountries,
  getAllCountriesStatus,
  getCountriesAsync,
  setCurrentPage,
} from "../../store/CountriesSlice";
import { AppDispatch } from "../../store";
import Pages from "./Pages";
import Sheet from "./Sheet";
import Seeker from "../seeker";
import styles from "./Countries.module.css";
import { CountryLeague } from "../../type";

const Countries = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(getAllCountriesStatus);
  const allCountries = useSelector(selectAllCountries);
  const [countriesList, setCountriesList] = useState<Array<CountryLeague>>([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCountriesAsync());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setCountriesList((prev) => [...prev, ...allCountries]);
  }, [allCountries]);

  useEffect(() => {
    dispatch(setCurrentPage(0))
  },[countriesList, dispatch])

  if (status === "succeeded") {
    return (
      <div className={styles["countries-container"]}>
        <div className={styles["countries-item-col"]}>
          <div className={styles["countries-item-row"]}>
            <div
              className={`${styles["countries-item"]} ${styles["countries-title"]}`}
            >
              Countries
            </div>
            <div className={`${styles["countries-item"]}`}>
              <Seeker changeList={setCountriesList} />
            </div>
          </div>
          <div className={styles["countries-item-row"]}>
            <Sheet list={countriesList}/>
          </div>
          <div className={styles["countries-item-row"]}>
            {countriesList.length > 0 ? (
              <Pages totalItems={countriesList.length} />
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{status}</div>;
  }
};

export default Countries;

import useInput from "../../hooks/useInput";
import { useSelector } from "react-redux";
import { selectAllCountries } from "../../store/CountriesSlice";
import { CountryLeague } from "../../type";
import styles from "./Seeker.module.css";

export interface SeekerInterface {
  changeList: React.Dispatch<React.SetStateAction<CountryLeague[]>>
}

const Seeker = ({changeList}: SeekerInterface) => {
  const allCountries = useSelector(selectAllCountries);
  const seekerHandler = (val: string) => {
    const filteredList = allCountries.filter(c => c.name.toLowerCase().includes(val.toLowerCase()));
    changeList(filteredList)
  };
  const {renderInput } = useInput({
    id:'seek-input', 
    label: "Find Country:",
    initValue: "",
    handler: seekerHandler,
  });

  return (
    <div className={styles["seeker-container"]}>
      {renderInput(styles.seekerInput)}
    </div>
  );
};

export default Seeker;

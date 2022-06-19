import Agent from "../api/Agent";
import { CountryLeagueResponse } from "../type";

const useHttp = () => {
  const getCountries = async () => {
    const list:CountryLeagueResponse = await Agent.Countries.list();
    return list.response;
  };

  return {
    getCountries,
  };
};

export default useHttp;

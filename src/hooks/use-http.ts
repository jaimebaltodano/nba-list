import agent from "../api/index";
import { CountryLeagueResponse } from "../type";

const useHttp = () => {
  const getCountries = async () => {
    const list:CountryLeagueResponse = await agent.Countries.list();
    return list.response;
  };

  return {
    getCountries,
  };
};

export default useHttp;

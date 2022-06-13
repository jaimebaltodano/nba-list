export type CountryLeague = {
  id: string;
  name: string;
  code: string;
  flag: string;
}

export type CountryLeagueResponse = {
  get: string,
  parameters:any,
  errors:any,
  results:number,
  response: CountryLeague[]
}
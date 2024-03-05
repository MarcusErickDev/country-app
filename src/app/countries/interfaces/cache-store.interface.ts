import { Country } from "./country";
import { Region } from "./region.type";




export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionConuntries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionConuntries {
  region: Region;
  countries: Country[];
}

export interface Location {
  locationId?: string;
  locationGeolocation?: string | null;
  locationTitle?: string;
  locationStreet: string | null;
  locationSuitedegrees?: string | null;
  locationCity?: string | null;
  locationState?: string | null;
  locationPhone?: string | null;
  locationPostalCode?: string | null;
  locationDistance?: string | null;
  locationUrl?: string | null;
  locationImage?: string | null;
  locationSpecialties?: {
    speciality_id?: string | null;
    location_index_search?: string | null;
    ufis_specialty_id?: string | null;
    name?: string | null;
  }[];
  path: string;
}
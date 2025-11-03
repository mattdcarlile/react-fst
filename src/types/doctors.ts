export interface Doctor {
  preferredFullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  unid?: string | null;
  degrees?: string | null;
  starRatingTotal?: string | null;
  media?: string | null;
  specialties?: {
    name?: string | null;
    specialty_id?: string | null;
  }[];
  locations?: {
    name?: string | null;
    search_building_name?: string | null;
    building_id?: string | null;
    clinic_id?: string | null;
  }[];
  licenses?: {
    description?: string | null;
    status?: string | null;
    state?: string | null;
    certificate_id?: string | null;
    number?: string | null;
    country?: string | null;
    award_date?: string | null;
    expired_date?: string | null;
    expired_year?: string | null;
    field_of_licensure?: string | null;
    issuer?: string | null;
    years?: string | null;
  }[];
  path?: string | null;
}
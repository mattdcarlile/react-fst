import { useQuery } from '@tanstack/react-query';
import locations from '../data/locations.json'
import type { Doctor } from '../types/doctors';


const fetchLocations = async (): Promise<Doctor[]> => {
  return locations
}

export function useDoctors() {
  return useQuery<Doctor[], Error>({
    queryKey: ['locations'],
    queryFn: fetchLocations,
  })
}
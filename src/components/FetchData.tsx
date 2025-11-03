import { useQuery } from '@tanstack/react-query';
import doctors from '../data/doctors.json'
import type { Doctor } from '../types/doctors';


const fetchDoctors = async (): Promise<Doctor[]> => {
  return doctors
}

export function useDoctors() {
  return useQuery<Doctor[], Error>({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
  })
}
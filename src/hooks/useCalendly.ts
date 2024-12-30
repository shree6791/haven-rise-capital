import { useCallback } from 'react';
import { CALENDLY_URL } from '../config/constants';

export const useCalendly = () => {
  const openCalendly = useCallback(() => {
    window.open(CALENDLY_URL, '_blank');
  }, []);

  return { openCalendly };
};
'use client';

import { useCallback } from 'react';
import { CALENDLY_URL } from '@/src/lib/constants';

export const useCalendly = () => {
  const openCalendly = useCallback(() => {
    window.open(CALENDLY_URL, '_blank');
  }, []);

  return { openCalendly };
};
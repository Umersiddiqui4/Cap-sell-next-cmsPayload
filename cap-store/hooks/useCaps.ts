'use client';

import { useEffect, useState } from 'react';

export interface Cap {
  id: string;
  name: string;
  price: number;
  colors: {
    name: string;
    value: string;
  }[];
  material: string;
  images: string[];
  category: string;
  inStock: boolean;
}

export function useCaps() {
  const [caps, setCaps] = useState<Cap[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchCaps = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/caps');  // Adjust the API endpoint for caps
        const data = await res.json();
        setCaps(data.docs || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch caps');
      } finally {
        setLoading(false);
      }
    };

    fetchCaps();
  }, []);

  return { caps, loading, error };
}

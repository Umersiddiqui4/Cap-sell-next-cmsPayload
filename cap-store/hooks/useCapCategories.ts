'use client';

import { useEffect, useState } from 'react';

export interface CapCategory {
  id: string;
  name: string;
  description?: string;
  image?: {
    url: string;
  };
  imageUrl?: string;
}

export function useCapCategories() {
  const [categories, setCategories] = useState<CapCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/cap-category');
        const data = await res.json();
        setCategories(data.docs || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}

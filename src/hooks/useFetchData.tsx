import { FirebaseError } from 'firebase/app';
import { useState, useEffect } from 'react';

type FetchFunction<T> = (
  path: string,
) => Promise<{ loading: boolean; data: T | null; error: FirebaseError | null }>;

function useFetchData<T>(fetchFunction: FetchFunction<T>, path: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<FirebaseError | null>(null);

  const refetch = async () => {
    setLoading(true);

    const result = await fetchFunction(path);
    setLoading(result.loading);
    setData(result.data);
    setError(result.error);
  };

  useEffect(() => {
    refetch();
  }, []);

  return { loading, data, error, refetch };
}

export default useFetchData;

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL || '');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Music Platform</h1>
      <p>{data}</p>
    </div>
  );
}

import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import React, { useEffect } from 'react'

const FetchApi: React.FC = () => {
  const { getToken } = useAuth();
  useEffect(() => {
    const fetchApiFunction = async () => {
      const token = await getToken();
      const response = await axios.get("http://localhost:3000/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const message = response.data.message;
      console.log(message);
    };
    fetchApiFunction();
  }, [getToken]);
  return <div>fetchApi</div>;
};

export default FetchApi
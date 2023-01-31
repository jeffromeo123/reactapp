import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const baseUrl = 'https://api-demo.mlsgrid.com/v2/Property';
      const filter = "$filter=OriginatingSystemName eq 'nwmls' and PropertyType eq 'Residential'";
      const expand = "$expand=Media,Rooms,UnitTypes";
      const apiUrl = `${baseUrl}?${filter}&${expand}`;

      try {
        const response = await axios.get(apiUrl, 
          
          {
          headers: {
            'Authorization': 'Bearer ' + 'be49e24148aec7a8a0041c077a5668fc441ca2b1'
          }
        });
        setProperties(response.data.value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2>Active Properties</h2>
      <textarea value={JSON.stringify(properties, null, 2)} readOnly />
  </div>
);
};

export default App;

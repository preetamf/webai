import React, { useState, useEffect } from 'react';

//custimised function for dynamic date display
function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
  const formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
  return `${formattedDate}, ${formattedTime}`;
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/usage');
      const jsonData = await response.json();
      setData(jsonData.usage);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Data Table</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-3 border">Date Time</th>
              <th className="px-6 py-3 border">Plan</th>
              <th className="px-6 py-3 border">Host</th>
              <th className="px-6 py-3 border">Requests</th>
              <th className="px-6 py-3 border">Traffic</th>
              <th className="px-6 py-3 border">Cost</th>
              <th className="px-6 py-3 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-100 hover:bg-blue-200'}>
                <td className="px-6 py-4 border">{formatDateTime(item.datetime)}</td>
                <td className="px-6 py-4 border">{item.plan}</td>
                <td className="px-6 py-4 border">{item.host || '-'}</td>
                <td className="px-6 py-4 border">{item.requests}</td>
                <td className="px-6 py-4 border">{item.traffic || '-'}</td>
                <td className="px-6 py-4 border">{item.cost}</td>
                <td className="px-6 py-4 border">{item.message || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



export default App;

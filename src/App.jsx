import { useEffect, useState } from 'react';
import './App.css';

import FilterBar from './components/filter/FilterBar';

import FetchAllEmails from './utils/fetchApi';
import AppLayout from './AppLayout';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch("https://flipkart-email-mock.vercel.app/");
      const emails = await res.json();
      setData(emails.list);
    }

    fetchMovie();
  }, []);
    

  return (
    <body>
      <AppLayout data = {data}/>
    </body>
  );
}

export default App;

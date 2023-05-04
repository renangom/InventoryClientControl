import { useEffect, useState } from 'react'
import '../../app.css'
import Table from '../../Components/Table/table';
import axios from 'axios';
import Header from '../../Components/Header';

function Home() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    
    if(query.length === 0 || query.length > 2){
      fetchUsers();
    }
  }, [query, data])
  return (
    <>
      <Header />
      <div className="app">
        <input type="text" placeholder='Search...' className="search" onChange={e => setQuery(e.target.value)} />
        <Table data={data}/>
      </div>
    </>
  )
}

export default Home

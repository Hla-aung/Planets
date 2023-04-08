import {useState, useEffect} from 'react'
import Details, {Planets} from './components/Details';

const App = () => {
  const [data, setData] = useState<Planets[]>([]);
  const fetchData = async () => {
    const response = await fetch('https://planets-fevx.onrender.com')
    .then(res => res.json())
    .catch(err => console.log(err))

    setData(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)
  return (
    <>
      <Details data={data}/>
    </>
  )
}

export default App
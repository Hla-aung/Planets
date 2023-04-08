import {useState, useEffect} from 'react'
import Details, {Planets} from './components/Details';

const App = () => {
  const [data, setData] = useState<Planets[]>([]);
  const fetchData = async () => {
    const response = await fetch('http://localhost:4001')
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
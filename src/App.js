import React from 'react'
import Ads from './Components/Add'
import Navbar from './Components/Navbar'
import Rent from './Components/Navbar/RentDream'
import Search from './Components/SearchBar'

const App = () => {
  const data = [
    {
      id: 1,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 2,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 3,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 4,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 5,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 6,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 7,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 8,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 9,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
    {
      id: 10,
      Adress: '798 Talbaot St. BridgeWater NJ 08807'
    },
  ]
  return (
    <div  >
      <Navbar/>
      <Rent/>
      <Search/>
      <div className='lg:p-20 grid grid-cols-4 gap-10 md:grid-cols-2 ' >
        {
          data.map((props)=>(
            <Ads key={props.id} address={props.Adress} />

          ))
        }
      </div>
    </div>
  )
}

export default App
import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import { DEMO_KEY, SPACE_URL } from "./index";

// function App() {
//   return (
//     <div className="App">
//       <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun <span role="img" aria-label='go!'>🚀</span>!
//       </p>
//     </div>
//   );
// }

export default function App() {
  const [space , setSpace] = useState([])
  const [currentSpaceId, setCurrentSpaceId] = useState(null)

  const openDetails = id =>{
    setCurrentSpaceId(id)
  }

  const closeDetails = () =>{
    setCurrentSpaceId(null)
  }
  

  //Fetch Data
  useEffect(() =>{
    const fetchSpace = () =>{
      axios.get(`${SPACE_URL}apod?api_key=${DEMO_KEY}`)
      .then (res =>{
        setSpace(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        debugger
      })
    }
    fetchSpace()

    return ()=>{
      //Clear
    }

  }, [])


  return (null)
}

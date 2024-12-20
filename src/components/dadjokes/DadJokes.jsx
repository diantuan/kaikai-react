import { useEffect, useState } from "react";

const DadJokes = () => {

  const [dadJoke, setDadJoke] = useState(null);

  useEffect(()=>{

    const getJokes = async()=>{
      try{
        const response = await fetch("https://api.api-ninjas.com/v1/dadjokes", {method:"GET", headers:{"X-Api-Key" : "Y/Y/msoiB794NMea6hVWDg==RvRZd70tPC9HwmaA"}})
        const responseParsed = await response.json()
        setDadJoke(responseParsed.data)
        
      }
      catch(error){
        console.log(error)
      }
  
      
    }
    
    getJokes()

    setInterval(()=>{
      getJokes()
    }, 10000)
   
  }, [])


  return ( <div>
    <h2>cringe</h2>
    {dadJoke && dadJoke.map(dad=>(
      <div key={dad.joke}>{dad.joke}</div>
    ))}

  </div> );
}
 
export default DadJokes;
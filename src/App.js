import './App.css';
import React from 'react'

const DOB = new Date(2004, 1, 18)

function App() {

  const [diffInYears, setDiffInYears] = React.useState(null)

  window.onload = () => {
    let td = new Date()
    let timeDiff = td.getTime() - DOB.getTime()
    let timeDiffInYears = timeDiff / (1000 * 3600 * 24 * 365)
    setDiffInYears(timeDiffInYears)

    setInterval(()=>{
      let td = new Date()
      let timeDiff = td.getTime() - DOB.getTime()
      let timeDiffInYears = timeDiff / (1000 * 3600 * 24 * 365)
      if(diffInYears !== timeDiffInYears) setDiffInYears(timeDiffInYears)
      console.log(timeDiffInYears)
    }, 50)
  }

  return (
    <div className="w-full flex flex-row items-center justify-center font-[MyFont]" style={{height: "calc(100vh)"}}>
      {diffInYears 
      ? 
      <div className="flex flex-row">
        <div className="md:text-9xl text-6xl">
          {diffInYears.toString().substring(0,2)}
        </div>
        <div className="md:mt-16 md:text-4xl text-3xl mt-5">
          {diffInYears.toString().substring(2, diffInYears.toString().length - 1)}
        </div>
      </div> 
      : "Loading..."}
    </div>
  );
}

export default App;

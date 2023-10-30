import './App.css';
import React from 'react'
import Calendar from 'react-calendar';

const DOB = new Date(2004, 1, 18)
let startDate = DOB

function App() {

  const [diffInYears, setDiffInYears] = React.useState(null)

  window.onload = () => {
    let td = new Date()
    let timeDiff = td.getTime() - startDate.getTime()
    let timeDiffInYears = timeDiff / (1000 * 3600 * 24 * 365)
    setDiffInYears(timeDiffInYears)

    setInterval(()=>{
      let td = new Date()
      let timeDiff = td.getTime() - startDate.getTime()
      let timeDiffInYears = timeDiff / (1000 * 3600 * 24 * 365)
      if(diffInYears !== timeDiffInYears) setDiffInYears(timeDiffInYears)
    }, 50)
  }

  const changeDate = (date) =>{
    startDate = date
    console.log(startDate)
  }

  return (
    <div className="w-full flex flex-row items-center justify-center font-[MyFont]" style={{height: "calc(100vh)"}}>
      <div className="absolute top-0 right-[50%] w-48">
        <Calendar value={startDate} onChange={(date) => changeDate(date)}></Calendar>
      </div>
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

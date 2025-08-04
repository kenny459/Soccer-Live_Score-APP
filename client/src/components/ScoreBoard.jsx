import React from 'react'

const ScoreBoard = () => {
  return (
    <>  
    <main className="rounded-xl shadow-lg bg-white p-6"> 
        <div className='scoreBoard_team'>  
            <div className='homeTeam'> 
                <img src="/vite.svg" alt="homeTeam" className='teamLogo'/> 
                <p>HomeTeam</p> 
                <p>0</p>
            </div>

         </div> 
        <div className='scoreBoard_team'> 
             
            <div className='awayTeam'> 
                <img src="/vite.svg" alt="awayTeam" className='teamLogo'/> 
                <p>AwayTeam</p> 
                <p>0</p> 
                </div>
        </div>
    </main>
    </>
  )
}

export default ScoreBoard




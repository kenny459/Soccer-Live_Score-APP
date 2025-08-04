import React, { useEffect, useState } from 'react'  
import {io} from 'socket.io-client';
 import ScoreBoard from './components/ScoreBoard';
   

const App = () => {    
  // make api request to get today LIVE MATCHES from the server
  // and display them in the scoreboard component
  // use socket.io to get real-time updates for the live matches
  // and update the scoreboard component accordingly
  // Assuming you have a backend API endpoint to fetch fixtures
  // and a socket.io server running to provide real-time updates
  // Adjust the URL as needed based on your backend setup
  // Initialize socket.io client
  // Make sure to install socket.io-client package if not already installed
  // npm install socket.io-client
  // Import socket.io-client at the top of your file
  // and use it to connect to your socket.io server
  // For example, if your server is running on localhost:3000, you can connect
  // to it like this:
  // const socket = io('http://localhost:3000'); // Adjust the URL as needed
  // Then you can listen for events from the server and update your state accordingly
  // For example, you can listen for a 'goal' event to update the score
  // socket.on('goal', (data) => {
  //   const { team, score } = data;
  //   if (team === 'home') {
  //     setHomeTeamGoals(score);
  //   } else if (team === 'away') {  
  const socket = io('http://localhost:3000'); // Adjust the URL as needed
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/fixtures'); // Adjust the URL as needed
        const data = await response.json(); 
        setFixtures(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fixtures:', error);
        setLoading(false);
      }
    };
    fetchFixtures();
  }, []); 

  if (loading) {
    return <div>Loading fixtures...</div>;
  } 
  if (fixtures.length === 0) {
    return <div>No fixtures available for today.</div>;
  } 
  console.log(fixtures); // Log the fixtures to see the data structure 
  // Assuming fixtures is an array of objects with homeTeam and awayTeam properties
  const homeTeam = fixtures[0].homeTeam; // Adjust based on your data structure
  const awayTeam = fixtures[0].awayTeam; // Adjust based on your data structure
  // Initialize state for home and away team goals
  // Assuming the fixtures data has goals for each team
  // Adjust the property names based on your actual data structure 
  const [homeTeamName, setHomeTeamName] = useState(homeTeam.name || 'Home Team');
  const [awayTeamName, setAwayTeamName] = useState(awayTeam.name || 'Away Team');
  // Assuming goals are part of the fixture data, adjust as necessary
  // If goals are not part of the fixture data, you might need to fetch them separately
  // For now, initializing them to 0
 
 
  const [homeTeamGoals, setHomeTeamGoals] = useState(0) ;
  const [awayTeamGoals, setAwayTeamGoals] = useState(0);
return( 
  <main> 
    
  </main>
)
  
}

export default App
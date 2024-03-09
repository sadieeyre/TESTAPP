import React, { useEffect, useState } from 'react';
import './App.css';
import yourData from './CollegeBasketballTeams.json';

const teamNames = yourData.teams;

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div>
      <h1>Welcome to March Madness!</h1>
      <p>
        Below are the details of each college basketball team. Feel free to
        study up as March Madness season is upon us!
      </p>
    </div>
  );
}

// Function to represent a team card

class Teams extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h3>{oneTeam.school}</h3>
        <p>Mascot: {oneTeam.name}</p>
        <p>
          Location: {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

// Function to display a list of team cards
function TeamList() {
  return (
    <div className="team-list">
      {teamNames.map((team) => (
        <Teams {...team} />
      ))}
    </div>
  );
}

//Show the welcome and the team list
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

//teamData={teamData}
export default App;

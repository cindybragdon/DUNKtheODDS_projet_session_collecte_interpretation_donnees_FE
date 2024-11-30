import React, { useState } from 'react';
import { Table, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

interface TableRow {
  team: string;
  odds: string;
  points: number;
  spread: number;
}

interface Props {
  data: TableRow[];
}

const nbaTeams = [
  "Lakers", "Warriors", "Bulls", "Celtics", "Nets", "Heat", "Knicks", "76ers",
  "Suns", "Raptors", "Hawks", "Clippers", "Mavericks", "Bucks", "Timberwolves",
  "Pelicans", "Magic", "Hornets", "Spurs", "Kings", "Jazz", "Thunder", "Pistons",
  "Rockets", "Pacers", "Wizards", "Cavaliers", "Grizzlies", "Nuggets",
  "Trail Blazers"
];

const betTypes = [
  "Moneyline", "Spread", "Over/Under", "OT Prolongation", "Prop Bets"
];

const Picks = ({ data }: Props) => {
  const [teamA, setTeamA] = useState<string>('');
  const [teamB, setTeamB] = useState<string>('');
  const [betType, setBetType] = useState<string>('');

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">

      <div className="d-flex flex-column align-items-center gap-4 mt-5">
        <div className="d-flex justify-content-center gap-4">
          <DropdownButton
            as={ButtonGroup}
            variant="secondary"
            title={`Team A: ${teamA || "Select"}`}
            onSelect={(e: string | null) => setTeamA(e || '')}
            className="custom-dropdown"
          >
            {nbaTeams.map((team, index) => (
              <Dropdown.Item key={index} eventKey={team}>
                {team}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            variant="secondary"
            title={`Team B: ${teamB || "Select"}`}
            onSelect={(e: string | null) => setTeamA(e || '')}
            className="custom-dropdown"
          >
            {nbaTeams.map((team, index) => (
              <Dropdown.Item key={index} eventKey={team}>
                {team}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            variant="secondary"
            title={`Bet Type: ${betType || "Select"}`}
            onSelect={(e: string | null) => setTeamA(e || '')}
            className="custom-dropdown"
          >
            {betTypes.map((type, index) => (
              <Dropdown.Item key={index} eventKey={type}>
                {type}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>

        <div
          className="output-box p-3 text-center border rounded"
          style={{
            width: '80%',
            backgroundColor: '#f8f9fa',
            marginTop: '1rem',
            fontSize: '1.2rem'
          }}
        >
          {teamA && teamB && betType ? (
            <>
              <strong>Odds:</strong> {teamA} vs {teamB} - {betType}
            </>
          ) : (
            "Please select both teams and a bet type."
          )}
        </div>
      </div>

      <div className="table-responsive mt-4 mb-4" style={{ width: '80%', margin: '0 auto' }}>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Team</th>
              <th>Odds</th>
              <th>Points</th>
              <th>Spread</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.team}</td>
                <td>{row.odds}</td>
                <td>{row.points}</td>
                <td>{row.spread}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Picks;

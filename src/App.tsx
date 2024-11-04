import React from 'react';
import { DeploymentProvider } from './context/DeploymentContext';
import UnitList from './components/UnitList';
import MissionCompleted from './components/MissionCompleted';
import './App.css';


const App: React.FC = () => {
  return (
    <DeploymentProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>מעקב פריסת יחידות צה"ל</h1>
        <button onClick={() => window.location.reload()}>Reset all units</button>
        <UnitList />
        <MissionCompleted />
      </div>
    </DeploymentProvider>
  );
};
export default App;
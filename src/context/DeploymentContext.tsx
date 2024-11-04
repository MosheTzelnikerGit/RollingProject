import React, { createContext, useState } from 'react';

interface DeploymentProvider {
    children: React.ReactNode
  }

type DeploymentContextType = {
    units: { [key: string]: string };
    setUnitStatus: (unit: string, status: string) => void;
};

const DeploymentContext = createContext<DeploymentContextType |
    undefined>(undefined);
const DeploymentProvider: React.FC<DeploymentProvider> = ({ children }) => {
    
    const [units, setUnits] = useState({
        Golani: 'Idle',
        Paratroopers: 'Idle',
        Givati: 'Idle',
        Artillerymen: 'Idle',
        Armsea: 'Idle'
    });
    
    const setUnitStatus = (unit: string, status: string) => {
        setUnits({ ...units, [unit]: status });
    };
    return (
        <DeploymentContext.Provider value={{ units, setUnitStatus }}>
            {children}
        </DeploymentContext.Provider>
    );
};
export { DeploymentContext, DeploymentProvider };
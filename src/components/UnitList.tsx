import React, { useContext } from 'react';
import { DeploymentContext } from '../context/DeploymentContext';
import ChangeStatus from './ChangeStatus';
import UnitStatus from './UnitStatus';


const UnitList: React.FC = () => {
    const deploymentContext = useContext(DeploymentContext);
    if (!deploymentContext) {
        throw new Error("UnitList must be used within a DeploymentProvider");
    }
    const { units } = deploymentContext;
    return (
        <div>
            <h2>רשימת יחידות</h2>
            {Object.keys(units).map(unitName => (
                <div key={unitName}>
                    <UnitStatus unitName={unitName} />
                    <ChangeStatus unitName={unitName} />
                </div>
            ))}

        </div>
    );
};
export default UnitList;
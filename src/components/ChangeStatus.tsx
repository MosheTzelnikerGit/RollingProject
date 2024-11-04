import React, { useContext, useState } from 'react';
import { DeploymentContext } from '../context/DeploymentContext';

type ChangeStatusProps = {
    unitName: string;
};

const ChangeStatus: React.FC<ChangeStatusProps> = ({ unitName }) => {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("ChangeStatus must be used within a DeploymentProvider");
    }

    const { setUnitStatus } = deploymentContext;
    const statuses = ["Idle", "Waiting", "Action", "Completed"];
    const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

    const changeStatus = () => {
        if (currentStatusIndex < statuses.length - 1) {
            const nextIndex = currentStatusIndex + 1;
            setCurrentStatusIndex(nextIndex);
            setUnitStatus(unitName, statuses[nextIndex]);
        }
    };

    return (
        <button onClick={changeStatus}>
            ChangeStatus
        </button>
    );
};

export default ChangeStatus;

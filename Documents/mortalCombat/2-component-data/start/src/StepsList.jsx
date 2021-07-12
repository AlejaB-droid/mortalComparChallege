import React from 'react';

function StepsList(props) {
    const ListSteps = props.steps.map((step, index) => {
        return (
            <li>
                { step.step }
            </li>
        );
    });
 return (
        <ol>
            { ListSteps }
        </ol>
    );
}

export default StepsList;
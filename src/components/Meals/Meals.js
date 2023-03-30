import React from 'react';

import MeaslSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

function Meals() {
    return(
        <React.Fragment>
            <MeaslSummary />
            <AvailableMeals />
        </React.Fragment>
    )
}

export default Meals;